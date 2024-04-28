import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (data) => ({
        url: `/send-email`,
        method: "POST",
        body: data,
      }),
    }),

    getFruits: builder.query({
      query: () => "fruits",
    }),
    getFruit: builder.query({
      query: (id) => `fruits/${id}`,
    }),
    deleteFruits: builder.mutation({
      query: (id) => ({
        url: `fruits/${id}`,
        method: "DELETE",
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "users/login",
        method: "POST",
        body: data,
      }),
    }),
    postUser: builder.mutation({
      query: (data) => ({
        url: "users/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const {
  useGetFruitsQuery,
  useDeleteFruitsMutation,
  useLoginMutation,
  usePostUserMutation,
  useSendEmailMutation,
  useGetFruitQuery,
} = apiSlice;
