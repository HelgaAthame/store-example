import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  responseHandler: "json",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  prepareHeaders: (headers, { getState, endpoint }) => {
    headers.set("accept", "application/json");
    const tokenFromLS = localStorage.getItem("hrmcaireer_access_token");
    if (tokenFromLS && tokenFromLS !== undefined) {
    //   if (noTokenRoutes.includes(endpoint)) {
    //     document.location.href = "/dashboard";
    //   }
        headers.set("Authorization", `Bearer ${tokenFromLS}`);
      
    } else {
    //   if (
    //     !noTokenRoutes.includes(endpoint) &&
    //     endpoint !== "login" &&
    //     endpoint !== "getProfile" &&
    //     !document.location.href.includes("questionnaire")
    //   ) {
        document.location.href = "/";
    //   }
    }
    return headers;
  },
  jsonContentType: "application/json",
});
