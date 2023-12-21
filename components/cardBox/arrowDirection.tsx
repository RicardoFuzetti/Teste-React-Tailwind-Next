import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

interface ArrrowDirectionProps {
    randomNumber: number
}

export function ArrowDirection({ randomNumber }: ArrrowDirectionProps) {

    const isPositive = randomNumber > 0;

    // Estilo condicional baseado no número aleatório
    const arrowStyles = `inline-flex items-center text-xs border rounded-full py-1 px-3 gap-1 bg-${isPositive ? 'emerald' : 'red'}-500 border-${isPositive ? 'emerald' : 'red'}-500 text-white`;

    return (
        <span className={arrowStyles}>
            {isPositive ? <IoIosArrowUp /> : <IoIosArrowDown />}
            {randomNumber} %
        </span>
    );
}