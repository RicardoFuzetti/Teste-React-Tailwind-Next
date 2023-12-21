'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

import axios from 'axios'

type AuthContextType = {
    isAuthenticated: boolean
    user: any
    validateLogin: (email: string, password: string) => any
}

export const LoginContext = createContext({} as AuthContextType)

export function LoginProvider({ children }: { children: ReactNode }) {

    const router = useRouter()
    const [user, setUser] = useState<any>(null)
    const isAuthenticated = !!user

    function validateLogin(email: string, password: string) {
        axios.post("https://bemetricsappdev.b2ktech.com.br/api/NextJs/ValidarPaswsord", {
            email: email,
            password: password
        })
            .then(response => {
                setUser(response.data)
                if (response.data.next_Erro == 0) {
                    router.push('/dashboard')
                }
                else {
                    console.log('erro no login')
                }

            })
            .catch(error => console.log(error))
    }

    return (
        <LoginContext.Provider value={{ validateLogin, user, isAuthenticated }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => useContext(LoginContext)











