interface CardInfosProps {
    title?: string; // Título do cartão (opcional)
    value?: string; // Valor do cartão (opcional)
    icon?: JSX.Element; // Ícone do cartão (opcional)
    color?: string; // Cor do cartão (opcional)
}

export function CardInfos({ title, value, icon, color }: CardInfosProps): JSX.Element {
    return (
        <div className='w-full flex flex-row justify-between items-center' >
            <div>
                <h3 className="text-lg text-slate-400">{title}</h3>
                <h1 className={`text-3xl font-semibold text-white`}>{value}</h1>
            </div>

            <span className={`inline-flex justify-center items-center h-16 ${color}`}>
                {icon}
            </span>
        </div>
    )
}