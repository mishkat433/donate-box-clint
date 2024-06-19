"use client"

import { useRouter } from 'next/navigation';
import Footer from '../../components/Common/Footer/Footer';
import { isLoggedIn } from '../../services/auth.service';
import { useEffect, useState } from 'react';
import DotLoading from '../../components/ReusableComponent/DotLoading';
import Sidebar from './../../components/Dashboard/Sidebar';
import DashboardHeader from '../../components/Dashboard/DashboardHeader/DashboardHeader';


export default function DashboardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const [sideView, setSideView] = useState(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const userLoggedIn = isLoggedIn();
    const router = useRouter();


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
            <div className='flex '>
                <div className={` ${sideView ? "w-1/5" : "w-auto"}`}>
                    <Sidebar sideView={sideView} setSideView={setSideView} />
                </div>
                <div className='p-2 w-full '>
                    <DashboardHeader />
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}
