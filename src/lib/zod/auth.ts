import { z as zod } from "zod";

export const loginSchema = zod.object({
  email: zod
    .string({
      required_error: "Please enter your email!",
      invalid_type_error: "Invalid email!",
    })
    .email("Email format is incorrect!"),
  password: zod
    .string({
      required_error: "Please enter your password!",
      invalid_type_error: "Invalid password!",
    })
    .min(6, "Password must be at least 6 characters!"),
});

export type LoginFormType = zod.infer<typeof loginSchema>;
