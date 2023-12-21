'use client'

import { useState } from "react"
//
import { IsOpen } from '../utils/isOpen'
import { SideBarItem } from './sideBarItem '
//
import { RiComputerLine } from 'react-icons/ri'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdFence } from 'react-icons/md'
import { PiTargetDuotone, PiBugBeetleFill } from 'react-icons/pi'


export function SideBar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <aside className="fixed p-2 top-0 left-0 bottom-2 w-60 h-screen">
                <div className="h-full overflow-y-auto bg-gray-800 rounded-2xl text-white ">
                    <span className="flex items-center justify-center font-bold p-4 bg-slate-900 ">
                        B2K Tech
                    </span>
                    <ul >

                        <SideBarItem
                            title="Dashboard"
                            icon={<RiComputerLine />}
                        />

                        <li className="cursor-pointer p-3 rounded">
                            <button type="button"
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="flex items-center w-full text-base text-white hover:bg-gray-700/50 py-3 rounded">
                                <span className="flex flex-row items-center gap-2 flex-1 text-left text-gray-300 hover:text-white">
                                    <FaMapMarkerAlt />
                                    Marcadores
                                </span>

                                <IsOpen open={isOpen} />

                            </button>

                            {isOpen && (
                                <ul className="ml-3 ">
                                    <li>
                                        <span className="flex items-center cursor-pointer py-3 px-3 text-sm text-gray-300 hover:bg-gray-700/50 rounded gap-2">
                                            <MdFence />
                                            Geocerca
                                        </span>

                                    </li>
                                    <li>
                                        <span className="flex items-center cursor-pointer py-3 px-3 text-sm text-gray-300 hover:bg-gray-700/50 rounded gap-2">
                                            <PiTargetDuotone />
                                            Ponto de Interesse
                                        </span>
                                    </li>
                                </ul>
                            )}

                        </li>

                        <SideBarItem
                            title="Backlog"
                            icon={<PiBugBeetleFill />}
                        />
                    </ul>
                </div>

            </aside>
        </>
    )
}