// app/routes/auth/github.tsx
import { redirect } from "@remix-run/node";
import { authenticator } from "../services/auth_.server";

export async function loader() {
  return redirect("/login");
}

export async function action({ request }: any) {
  return authenticator.authenticate("github", request);
};