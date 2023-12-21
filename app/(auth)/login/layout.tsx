import { ReactNode } from "react";
import { useLoginContext } from "@/app/contexts/authContext";


interface AuthLayoutProps {
    children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {

    return (
        <div>
            {children}
        </div>
    )
}