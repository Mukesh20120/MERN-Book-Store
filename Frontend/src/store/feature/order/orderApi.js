import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/getBaseUrl";

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/v1/orders`,
    credentials: "include",
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem("token");
        if (token) {
            Headers.set("Authorization", `Bearer ${token}`);
        }
        return Headers;
    }
});

const orderApi = createApi({
   baseQuery,
   reducerPath: "orderApi",
    tagTypes: ["Orders"],
    endpoints: (builder)=>({
        createOrder: builder.mutation({
            query: (order) =>({
                url: "/",
                method: "POST",
                body: order,
                headers: {
                    "Content-Type": "application/json",
                },
            })
        }),
        getOrders: builder.query({
            query: (email) =>({
                url: `/${email}`,
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
        })
    })
});

export default orderApi;
export const { useCreateOrderMutation, useGetOrdersQuery} = orderApi;