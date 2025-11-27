import { SignUpForm } from "@/components/signup-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Signup to better auth",
};

export default function Page() {
  return <SignUpForm />;
}
