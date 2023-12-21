import React, { InputHTMLAttributes, ReactNode } from 'react';
//
import { PersonName } from './utils/personName'


type CardTransactionProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode
    color: string
    transactionType: string
}

export function CardBoxTransactions({ icon, color, transactionType }: CardTransactionProps) {



    const moneyRandomNumber = Math.floor(Math.random() * 100) + 1;
    const dayRandomNumber = Math.floor(Math.random() * 31) + 1;

    return (
        <div className="flex mb-6 p-6 last:mb-0 justify-center rounded-2xl flex-col dark:bg-slate-900/90">

            <div className="flex flex-row items-center justify-between">

                <div className="flex flex-row items-center justify-start">
                    <span className={`inline-flex justify-center items-center w-12 h-12 rounded-full text-${color}-500 bg-slate-800 mr-6`}>
                        {icon}
                    </span>

                    <div className='text-center space-y-1 md:text-left md:mr-6'>
                        <h4 className='text-xl text-white'>
                            ${moneyRandomNumber}
                        </h4>

                        <div className='flex flex-row gap-1'>
                            <p className='text-slate-400 font-semibold'>
                                {dayRandomNumber} dias atrás
                            </p>

                            <p className='flex flex-row gap-1 text-gray-500'>
                                via <PersonName />
                            </p>
                        </div>

                    </div>
                </div>

                <div className='text-center md:text-right space-y-2'>
                    <p className='text-sm text-gray-500'>
                        Home Loan Account
                    </p>

                    <span className={`inline-flex items-center leading-none text-xs border rounded-full py-1 px-3 bg-${color}-500 border-${color}-500 text-white`}>
                        {transactionType}
                    </span>
                </div>

            </div>
        </div>
    )
}