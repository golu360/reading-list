import * as React from 'react';
import { Form } from "@remix-run/react";

export default function Login() {
    return (
      <Form action="/auth/github/" method="POST">
        <button>Login with GitHub</button>
      </Form>
    );
  }