
interface TrTableProps {
    title: string;
}

export function TrTable({ title }: TrTableProps) {
    return (
        <>
            <th className='px-5 py-3 border-b-2 text-left text-xs font-semibold uppercase border-none'>{title}</th>
        </>
    )
}