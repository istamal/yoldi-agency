"use client";

import useSWR from "swr";
import Service from "../Service/Service";
import { useRouter } from "next/navigation";

const fetcher = (key: string, data: any) => Service.post(key, data);

const useAuth = (email?: string | null , password?: string | null) => {
    const router = useRouter();
    const { data, error, mutate, isLoading, isValidating } = useSWR([email && password ? "auth/login" : null, { email, password }], fetcher);
           
    return {
        data,
        error,
        isLoading: isLoading,
        authenticate: async (email: string | null, password: string | null) => {
            await mutate(() => fetcher("auth/login", {email, password}), true);
            if (data) {
                localStorage.setItem("token", data?.data.value);
                const prevPage = localStorage.getItem("prevPage");
                if (prevPage && prevPage !== "/login") {
                    router.replace(prevPage);
                } else {
                    router.replace("/");
                }
            }
        }
    }
}

export default useAuth;