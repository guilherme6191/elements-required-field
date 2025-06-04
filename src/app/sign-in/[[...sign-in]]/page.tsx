"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-md w-full space-y-8">
        <SignIn.Root>
          <SignIn.Step name="start">
            <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  Sign in to your account (Clerk Elements)
                </h1>
              </div>

              <Clerk.Field name="identifier" className="space-y-2">
                <Clerk.Label className="block text-sm font-medium text-gray-700">
                  Email
                </Clerk.Label>
                <Clerk.Input className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                <Clerk.FieldState>
                  {(params) => {
                    console.log("FieldState: EMAIL (required)");
                    console.log("params", params);
                    const { state, codes, message } = params;
                    return (
                      state !== "idle" && (
                        <div>
                          <pre>EMAIL.FieldState</pre>
                          <pre>Field state: {state}</pre>
                          <pre>Field msg: {message}</pre>
                          <pre>Codes: {JSON.stringify(codes, null, 2)}</pre>
                        </div>
                      )
                    );
                  }}
                </Clerk.FieldState>

                <Clerk.FieldError className="text-red-600 text-sm">
                  {({ message, code }) => {
                    console.log("FieldError: EMAIL (required)");
                    console.log("message", message);
                    console.log("code", code);
                    return <span>EMAIL.FieldError message: {message}</span>;
                  }}
                </Clerk.FieldError>
              </Clerk.Field>

              <Clerk.Field name="username" className="space-y-2">
                <Clerk.Label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="username"
                >
                  Username (required)
                </Clerk.Label>
                <Clerk.Input
                  name="username"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  required
                />

                <Clerk.FieldState>
                  {(params) => {
                    console.log("FieldState: Username (required)");
                    console.log("params", params);
                    const { state, codes, message } = params;
                    return (
                      state !== "idle" && (
                        <div>
                          <pre>Username.FieldState</pre>
                          <pre>Field state: {state}</pre>
                          <pre>Field msg: {message}</pre>
                          <pre>Codes: {JSON.stringify(codes, null, 2)}</pre>
                        </div>
                      )
                    );
                  }}
                </Clerk.FieldState>

                <Clerk.FieldError className="text-red-600 text-sm">
                  {({ message, code }) => {
                    console.log("FieldError: Username (required)");
                    console.log("message", message);
                    console.log("code", code);
                    return <span>Username.FieldError message: {message}</span>;
                  }}
                </Clerk.FieldError>
              </Clerk.Field>

              <SignIn.Action
                submit
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Continue
              </SignIn.Action>
            </div>
          </SignIn.Step>

          <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Sign in to your account (HTML)
              </h1>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username (required)
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>

              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Continue
              </button>
            </div>
          </form>

          {/* <SignIn.Step name="verifications">
            <SignIn.Strategy name="email_code">
              <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Check your email
                  </h1>
                  <p className="mt-2 text-sm text-gray-600">
                    We sent a code to{" "}
                    <span className="font-medium text-indigo-600">
                      <SignIn.SafeIdentifier />
                    </span>
                    .
                  </p>
                </div>

                <Clerk.Field name="code" className="space-y-2">
                  <Clerk.Label className="block text-sm font-medium text-gray-700">
                    Email code
                  </Clerk.Label>
                  <Clerk.Input className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                  <Clerk.FieldError className="text-red-600 text-sm" />
                </Clerk.Field>

                <SignIn.Action
                  submit
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Continue
                </SignIn.Action>
              </div>
            </SignIn.Strategy>

            <SignIn.Strategy name="password">
              <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Enter your password
                  </h1>
                </div>

                <Clerk.Field name="password" className="space-y-2">
                  <Clerk.Label className="block text-sm font-medium text-gray-700">
                    Password
                  </Clerk.Label>
                  <Clerk.Input
                    type="password"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                  <Clerk.FieldError className="text-red-600 text-sm" />
                </Clerk.Field>

                <div className="space-y-3">
                  <SignIn.Action
                    submit
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    Continue
                  </SignIn.Action>
                  <SignIn.Action
                    navigate="forgot-password"
                    className="w-full text-center text-sm text-indigo-600 hover:text-indigo-500 font-medium"
                  >
                    Forgot password?
                  </SignIn.Action>
                </div>
              </div>
            </SignIn.Strategy>

            <SignIn.Strategy name="reset_password_email_code">
              <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Check your email
                  </h1>
                  <p className="mt-2 text-sm text-gray-600">
                    We sent a code to{" "}
                    <span className="font-medium text-indigo-600">
                      <SignIn.SafeIdentifier />
                    </span>
                    .
                  </p>
                </div>

                <Clerk.Field name="code" className="space-y-2">
                  <Clerk.Label className="block text-sm font-medium text-gray-700">
                    Email code
                  </Clerk.Label>
                  <Clerk.Input className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                  <Clerk.FieldError className="text-red-600 text-sm" />
                </Clerk.Field>

                <SignIn.Action
                  submit
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Continue
                </SignIn.Action>
              </div>
            </SignIn.Strategy>
          </SignIn.Step>

          <SignIn.Step name="forgot-password">
            <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  Forgot your password?
                </h1>
              </div>

              <div className="space-y-3">
                <div className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                  <SignIn.SupportedStrategy name="reset_password_email_code">
                    Reset password
                  </SignIn.SupportedStrategy>
                </div>

                <SignIn.Action
                  navigate="previous"
                  className="w-full text-center text-sm text-gray-600 hover:text-gray-500 font-medium"
                >
                  Go back
                </SignIn.Action>
              </div>
            </div>
          </SignIn.Step>

          <SignIn.Step name="reset-password">
            <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  Reset your password
                </h1>
              </div>

              <div className="space-y-4">
                <Clerk.Field name="password" className="space-y-2">
                  <Clerk.Label className="block text-sm font-medium text-gray-700">
                    New password
                  </Clerk.Label>
                  <Clerk.Input
                    type="password"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                  <Clerk.FieldError className="text-red-600 text-sm" />
                </Clerk.Field>

                <Clerk.Field name="confirmPassword" className="space-y-2">
                  <Clerk.Label className="block text-sm font-medium text-gray-700">
                    Confirm password
                  </Clerk.Label>
                  <Clerk.Input
                    type="password"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                  <Clerk.FieldError className="text-red-600 text-sm" />
                </Clerk.Field>
              </div>

              <SignIn.Action
                submit
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Reset password
              </SignIn.Action>
            </div>
          </SignIn.Step> */}
        </SignIn.Root>
      </div>
    </div>
  );
}
