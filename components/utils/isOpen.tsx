import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'


interface IsOpenProps {
    open: boolean;
}

export function IsOpen({ open }: IsOpenProps) {
    return (
        <>
            {!open ? (
                <AiOutlineCaretDown />
            ) :
                <AiOutlineCaretUp />
            }
        </>
    )
}