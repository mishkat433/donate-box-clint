"use client"

import { useEffect, useState } from "react";
import Footer from "../../components/Common/Footer/Footer";
import { isLoggedIn } from "../../services/auth.service";
import { useRouter } from "next/navigation";
import DotLoading from "../../components/ReusableComponent/DotLoading";


export default function DashboardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const userLoggedIn = isLoggedIn();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!userLoggedIn) {
            router.push("/login");
        }
        setIsLoading(true);
    }, [router, isLoading, userLoggedIn]);

    if (!isLoading) {
        return <DotLoading size="lg" text="text-primary-red" />
    }

    return (
        <div>
            {children}
            <Footer />
        </div>
    )
}
