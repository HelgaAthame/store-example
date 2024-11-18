import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "~/red/queries/baseQueryWithReauth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    // registerUser: builder.mutation<RegisterUserOutput, RegisterUserInput>({
    //   query: (payload) => {
    //     return {
    //       url: "api/auth/register",
    //       method: "POST",
    //       body: payload,
    //     };
    //   },
    // }),
    // resendConfirmation: builder.mutation<
    //   ResendConfirmationOutput,
    //   ResendConfirmationInput
    // >({
    //   query: (payload) => {
    //     return {
    //       url: "api/auth/register/resend",
    //       method: "POST",
    //       body: payload,
    //     };
    //   },
    // }),
    // confirmUserRegistration: builder.mutation<
    //   ConfirmUserRegistrationOutput,
    //   ConfirmUserRegistrationInput
    // >({
    //   query: (payload) => {
    //     return {
    //       url: "api/auth/register/password",
    //       method: "POST",
    //       body: payload,
    //     };
    //   },
    // }),
    // login: builder.mutation<LoginOutput, LoginInput>({
    //   query: (payload) => {
    //     return {
    //       url: "api/auth/login",
    //       method: "POST",
    //       body: payload,
    //     };
    //   },
    // }),
    // refreshToken: builder.mutation<RefreshTokenOutput, RefreshTokenInput>({
    //   query: (payload) => {
    //     return {
    //       url: "api/auth/refresh-token",
    //       method: "POST",
    //       body: payload,
    //     };
    //   },
    // }),
    // forgotPassword: builder.mutation<ForgotPasswordOutput, ForgotPasswordInput>(
    //   {
    //     query: (payload) => {
    //       return {
    //         url: "api/auth/forgot-password",
    //         method: "POST",
    //         body: payload,
    //       };
    //     },
    //   },
    // ),
    // resetPassword: builder.mutation<ResetPasswordOutput, ResetPasswordInput>({
    //   query: (payload) => {
    //     return {
    //       url: "api/auth/reset-password",
    //       method: "POST",
    //       body: payload,
    //     };
    //   },
    // }),
  }),
});

export const {
  //   useRegisterUserMutation,
  //   useResendConfirmationMutation,
  //   useConfirmUserRegistrationMutation,
  //   useLoginMutation,
  //   useRefreshTokenMutation,
  //   useForgotPasswordMutation,
  //   useResetPasswordMutation,
} = authApi;
