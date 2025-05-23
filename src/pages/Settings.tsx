import { profileSchema, type ProfileFormType } from "@/lib/zod/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BaseFormField } from "@/components/shared/BaseFormField";
import { toast } from "sonner";
import { useAuthStore } from "@/store/useAuthStore";
import { getUserProfile } from "@/api/user";
import { useEffect } from "react";
import { ModeToggle } from "@/components/shared/ModeToggle";

export const Settings = () => {
  const token = useAuthStore((state) => state.accessToken);
  const form = useForm<ProfileFormType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const fetchProfile = async (token: string) => {
      try {
        const user = await getUserProfile(token);
        form.reset({
          name: user.name,
          email: user.email,
          password: user.password,
        });
      } catch (err) {
        toast.error("Failed to load profile");
        console.error(err);
      }
    };

    if (token) {
      fetchProfile(token);
    }
  }, [token, form]);

  const onSubmit = (data: ProfileFormType) => {
    console.log("Form submitted:", data);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Update Profile</h1>
        <ModeToggle />
      </div>
      <FormProvider {...form}>
        <form
          className="flex flex-col justify-between gap-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <BaseFormField name="name" label="Name">
            {(field) => (
              <Input
                {...field}
                placeholder="Enter your name"
                className="h-[45px]"
              />
            )}
          </BaseFormField>

          <BaseFormField name="email" label="Email">
            {(field) => (
              <Input
                {...field}
                placeholder="Enter your email"
                className="h-[45px]"
              />
            )}
          </BaseFormField>

          <BaseFormField name="password" label="Password">
            {(field) => (
              <Input
                {...field}
                type="password"
                placeholder="Enter your password"
                className="h-[45px]"
              />
            )}
          </BaseFormField>

          <Button
            type="submit"
            className="mt-2 h-[50px]"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
