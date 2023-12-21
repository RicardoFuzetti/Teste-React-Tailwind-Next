interface ItensProps {
    title: string;
    icon: JSX.Element;
}

export function SideBarItem({ title, icon }: ItensProps) {
    return (
        <>
            <li className="cursor-pointer p-3 text-gray-300 hover:text-white dark:hover:bg-gray-700/50 rounded">
                <span className="flex flex-row items-center gap-2">
                    {icon}
                    {title}
                </span>
            </li>
        </>
    )
}