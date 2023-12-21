'use client'

import axios from 'axios'
import { format } from 'date-fns';
//
import { useEffect, useState } from "react"
//
import { TrTable } from './trTable'

interface User {
    codigo: number;
    nome: string;
    nascimento: string;
    dinheiro: number;
}

export function TableDashboard() {

    const [users, setUserList] = useState<any>([])

    useEffect(() => {
        axios.post("https://bemetricsappdev.b2ktech.com.br/api/NextJs/ObterLista", {})
            .then(response => {
                setUserList(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='flex flex-col rounded-2xl bg-slate-900/90 max-w-10'>
            <table>
                <thead className='text-white'>
                    <tr>
                        <TrTable title='Código' />
                        <TrTable title='Nome' />
                        <TrTable title='Data de Nascimento' />
                        <TrTable title='Dinheiro' />
                    </tr>
                </thead>

                {users &&
                    users?.map((info: User, index: number) => {

                        const dataNascimentoFormatado = format(new Date(info.nascimento), 'dd/MM/yyyy');
                        const isEvenRow = index % 2 === 0; // Verifica se a linha é par

                        return (
                            <tbody
                                key={info.codigo}
                                className='text-white'>
                                <tr className={isEvenRow ? 'bg-slate-700' : 'bg-slate-900/90'}>
                                    <td className='px-5 py-5 text-sm'>{info.codigo}</td>
                                    <td className='px-5 py-5 text-sm'>{info.nome}</td>
                                    <td className='px-5 py-5 text-sm'>{dataNascimentoFormatado}</td>
                                    <td className='px-5 py-5 text-sm'>R${info.dinheiro}</td>
                                </tr>
                            </tbody>
                        )
                    }
                    )
                }

            </table>


        </div >
    )
}