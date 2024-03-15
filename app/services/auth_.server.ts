// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import { GitHubStrategy } from "remix-auth-github";

import { sessionStorage } from "./session_.server";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<any>(sessionStorage);

let gitHubStrategy = new GitHubStrategy(
    {
      clientID: process.env.GH_CLIENTID ?? "",
      clientSecret: process.env.GH_SECRET ?? "",
      callbackURL: process.env.GH_CALLBACK ?? "",
    },
    async ({ accessToken, extraParams, profile }) => {
      // Get the user data from your DB or API using the tokens and profile
      return profile;
    }
  );
authenticator.use(gitHubStrategy);  