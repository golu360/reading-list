// app/routes/auth/github/callback.tsx
import { authenticator } from "../services/auth_.server";

export async function loader({ request }: any) {
  return authenticator.authenticate("github", request, {
    successRedirect: "/",
    failureRedirect: "/failure",
  });
};