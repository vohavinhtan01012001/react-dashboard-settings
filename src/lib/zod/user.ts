import { z as zod } from "zod";

export const profileSchema = zod.object({
  name: zod
    .string({
      required_error: "Please enter your name!",
      invalid_type_error: "Invalid name!",
    })
    .min(2, "Name must be at least 2 characters!"),

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

export type ProfileFormType = zod.infer<typeof profileSchema>;