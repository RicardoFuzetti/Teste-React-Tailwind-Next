'use client'

import React from 'react';
import Image from 'next/image'

type ButtonProps = {
    title: string;
    image: string;
    loginType: number; // 1 - Google / 2 - Facebook 
}


export function Button({
    title,
    image,
    loginType
}: ButtonProps) {

    function handleClick() {
        if (loginType == 1) {
            console.log("login com google")
        }
        else {
            console.log("login com facebook")
        }
    }

    return (
        <>
            <button
                className='w-80 h-14 bg-[#fcfbff] rounded-xl m-2 border border-solid flex flex-row justify-center items-center text-sm hover:bg-[#f1f1f1] transition'
                onClick={handleClick}>
                <Image src={image} alt="google" width={35} height={1} className='mr-1' />
                <span className="mr-1">Login with</span>
                <strong>{title}</strong>
            </button>
        </>

    );
}