import React from 'react';
//
import { CardInfos } from './cardInfos'
import { ArrowDirection } from './arrowDirection'
//
import { MdPeopleAlt } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaGear } from 'react-icons/fa6';
import { TiChartLine } from "react-icons/ti";

interface CardBoxProps {
    cardType?: number; // Tipo de cartão (opcional)
}

export function CardBox({ cardType }: CardBoxProps) {

    const randomNumber = Math.floor(Math.random() * (201) - 100);

    return (
        <div className="flex-1 p-6 bg-slate-900/90 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
                <ArrowDirection randomNumber={randomNumber} />
                <button className="flex justify-center items-center border cursor-pointer rounded h-8 w-8 border-slate-800 bg-slate-700 text-white hover:bg-slate-600 transition p-1">
                    <span>
                        <FaGear size={12} />
                    </span>
                </button>
            </div>

            <div className="flex items-center justify-between">
                {cardType === 0 && (
                    <CardInfos
                        title="Clientes"
                        value="512"
                        icon={<MdPeopleAlt size={40} />}
                        color="text-emerald-500"
                    />
                )}
                {cardType === 1 && (
                    <CardInfos
                        title="Vendas"
                        value="$7.700"
                        icon={<AiOutlineShoppingCart size={40} />}
                        color="text-blue-500"
                    />
                )}
                {cardType === 2 && (
                    <CardInfos
                        title="Perfomance"
                        value="256%"
                        icon={<TiChartLine size={40} />}
                        color="text-red-500"
                    />
                )}
            </div>
        </div>
    );
}
