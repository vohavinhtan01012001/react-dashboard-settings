/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { BaseFormField } from "@/components/shared/BaseFormField";
import { useAuthStore } from "@/store/useAuthStore";
import { loginSchema, type LoginFormType } from "@/lib/zod/auth";
import { toast } from "sonner";
import { login } from "@/api/auth";

export default function Login() {
  const setToken = useAuthStore((state) => state.setToken);
  const router = useNavigate();

  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: LoginFormType) => {
    try {
      const token = await login(data);
      if (token) {
        setToken(token);
        router("/");
        toast.success("Login successful!");
      }
    } catch (error: any) {
      toast.error(error?.message || "Login failed!");
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className=" max-w-lg shadow-2xl rounded-xl p-8 w-full h-[500px]">
        <h1 className="uppercase tracking-widest text-4xl mb-8 font-bold text-center">
          Login
        </h1>

        <FormProvider {...form}>
          <form
            className="flex flex-col justify-between h-2/3"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-8">
              <BaseFormField name="email" label="Email">
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Enter email"
                    className="h-[45px]"
                  />
                )}
              </BaseFormField>

              <BaseFormField name="password" label="Password">
                {(field) => (
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter password"
                    className="h-[45px]"
                  />
                )}
              </BaseFormField>
            </div>

            <Button
              type="submit"
              className="mt-2 h-[50px]"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
