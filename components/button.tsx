import { ReactNode } from "react"

interface ButtonType {
    text: string;
    children: ReactNode;
    disabled?: boolean;
    width?: string;
    height?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    type?: "button" | "submit" | "reset" | undefined;
    bgColor?: string;
    textColor?: string;
    hoverColor?: string;
    extraClass?: string
}

export function Button({ extraClass, height, children, disabled, width, onClick, type = 'button', bgColor, textColor, hoverColor }: ButtonType) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || false}
            className={`
              bg-[#634defa8] hover:bg-[#634DEF] transition
                border rounded-md
              text-white
                text-xl
                font-bold
                tracking-wider
                h-14
                disabled:bg-gray-200
                flex items-center justify-evenly
                ${width ?? 'w-96'}
                ${height ?? ''}
                ${extraClass ?? ''}
            `}
        >
            {children}
        </button>
    )
}