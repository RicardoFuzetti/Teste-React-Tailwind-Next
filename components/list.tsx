'use client'

import axios from 'axios'
import { format } from 'date-fns';
import { useEffect, useState } from 'react'

interface User {
    codigo: number;
    nome: string;
    nascimento: string;
    dinheiro: number;
}


export function List() {

    const [users, setUserList] = useState<any>([])

    useEffect(() => {
        axios.post("https://bemetricsappdev.b2ktech.com.br/api/NextJs/ObterLista", {})
            .then(response => {
                setUserList(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    console.log(users)

    return (
        <>
            <table className='min-w-full leading-normal'>
                <thead>
                    <tr className="bg-red-400 w-full">
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Código</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Nome</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Data de Nascimento</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Dinheiro</th>
                    </tr>
                </thead>

                {users &&
                    users?.map(
                        (info: User) => {

                            const dataNascimentoFormatado = format(new Date(info.nascimento), 'dd/MM/yyyy');

                            return (
                                <tbody key={info.codigo}>
                                    <tr>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{info.codigo}</td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{info.nome}</td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{dataNascimentoFormatado}</td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>R${info.dinheiro}</td>
                                    </tr>
                                </tbody>
                            )
                        }
                    )
                }

            </table>
        </>
    )
}