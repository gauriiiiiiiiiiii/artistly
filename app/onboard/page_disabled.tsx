'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  ArrowLeft,
  ArrowRight,
  Upload,
  CheckCircle,
  Star,
} from 'lucide-react';

import {
  categories,
  priceRanges,
  languages,
  locations,
} from '@/lib/mockData';
import { useApp } from '@/context/AppContext';
import { toast } from 'sonner';

const artistSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  bio: z.string().min(50, 'Bio must be at least 50 characters'),
  category: z.array(z.string()).min(1, 'Select at least one category'),
  languages: z.array(z.string()).min(1, 'Select at least one language'),
  priceRange: z.string().min(1, 'Select a price range'),
  location: z.string().min(1, 'Location is required'),
  image: z.string().optional(),
});

type ArtistForm = z.infer<typeof artistSchema>;

export default function OnboardPage() {
  const router = useRouter();
  const { addArtist } = useApp();

  const [currentStep, setCurrentStep] = useState(1);
  const [imagePreview, setImagePreview] = useState<string>('');

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm<ArtistForm>({
    resolver: zodResolver(artistSchema),
    defaultValues: { category: [], languages: [] },
  });

  const watchedCategories = watch('category') ?? [];
  const watchedLanguages = watch('languages') ?? [];
  const totalSteps = 4;
  const progressValue = (currentStep / totalSteps) * 100;

  const nextStep = async () => {
    let fieldsToValidate: (keyof ArtistForm)[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = ['name', 'bio'];
        break;
      case 2:
        fieldsToValidate = ['category'];
        break;
      case 3:
        fieldsToValidate = ['languages', 'priceRange', 'location'];
        break;
      default:
        break;
    }

    if (await trigger(fieldsToValidate)) {
      setCurrentStep((s) => Math.min(s + 1, totalSteps));
    }
  };

  const prevStep = () => setCurrentStep((s) => Math.max(1, s - 1));

  const onSubmit = (data: ArtistForm) => {
    const artistData = {
      ...data,
      image:
        imagePreview ||
        'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5.0,
      reviewCount: 0,
      verified: false,
      availability: 'Available',
    };

    addArtist(artistData);
    toast.success('Your artist profile has been created successfully!');
    setCurrentStep(totalSteps + 1);
  };

  const toggleArrayValue = <T,>(
    fieldName: keyof ArtistForm,
    current: T[],
    value: T,
  ) => {
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setValue(fieldName, updated as any, { shouldValidate: true });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error('Image must be under 2 MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
      setValue('image', reader.result as string, { shouldValidate: true });
    };
    reader.readAsDataURL(file);
  };

  if (currentStep > totalSteps) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardContent className="pb-8 pt-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="mb-4 text-3xl font-bold text-gray-900">
                Welcome to Artistly!
              </h1>
              <p className="mb-8 text-gray-600">
                Your profile is submitted. Our team usually approves profiles
                within 24 hours.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600"
                  onClick={() => router.push('/dashboard')}
                >
                  Go to Dashboard
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => router.push('/profile/me')}
                >
                  View My Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <header className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
            <Star className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Join Artistly as a Performer
          </h1>
          <p className="text-gray-600">
            Step {currentStep} / {totalSteps} – Create your artist profile
          </p>
        </header>

        <Progress value={progressValue} className="mb-8 h-2" />

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* your step forms here (unchanged) */}

          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Profile Image</CardTitle>
                <CardDescription>
                  Upload a professional photo of yourself.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex flex-col items-center">
                  {imagePreview ? (
                    <div className="relative">
                      {/* Inside your JSX */}
                      <Image
                        src={imagePreview || '/default-image.jpg'}
                        alt="Profile preview"
                        width={128}
                        height={128}
                        className="rounded-full border-4 border-purple-500 object-cover"
                        style={{ height: '128px', width: '128px' }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview('');
                          setValue('image', undefined, { shouldValidate: true });
                        }}
                        className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-sm text-white hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-gray-300">
                      <Upload className="h-8 w-8 text-gray-400" />
                    </div>
                  )}

                  <div className="mt-4">
                    <Label htmlFor="image" className="cursor-pointer">
                      <div className="rounded-md border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50">
                        Choose Image
                      </div>
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </Label>
                  </div>
                  <p className="mt-2 text-center text-sm text-gray-500">
                    Please upload a square image (at least 300 by 300 pixels).
                    <br />
                    If you skip this step, a default image will be used.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button type="button" onClick={nextStep}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-600"
              >
                Create Profile
                <CheckCircle className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
