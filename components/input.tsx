import React, { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    errorMessage?: string,
    Icon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type = 'text', name = '', placeholder = '', errorMessage = '', Icon = '', ...props }, ref) => {

        return (
            <span className="relative block">

                {Icon}

                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    ref={ref}
                    {...props}
                    className={errorMessage ? 'border-solid border-2 border-red-500 w-80 h-14 bg-[#F3F1FF] rounded-xl pl-9 mb-3'
                        : 'w-80 h-14 bg-[#F3F1FF] rounded-xl pl-9 mb-3'} />

                {errorMessage && <p className='text-red-500 text-sm mb-3'>{errorMessage}</p>}

            </span>
        )
    }
)


