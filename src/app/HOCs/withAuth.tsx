import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

function withAuth(wrappedComponent: any) {
    const Hoc = (props: any) => {
        const router = useRouter();
        const token = localStorage.getItem("token");

        useEffect(() => {
            if (!token) {
                router.replace("/login");
            }
        }, [token]);

        return wrappedComponent(props);
    }

    return Hoc;
}

export default withAuth;
