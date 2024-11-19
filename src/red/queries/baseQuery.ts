import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  responseHandler: "json",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  prepareHeaders: (headers, { getState, endpoint }) => {
    headers.set("accept", "application/json");    
  },
  jsonContentType: "application/json",
});
