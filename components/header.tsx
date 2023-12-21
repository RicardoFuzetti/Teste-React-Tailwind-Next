'use client'

import { useState } from "react";
//
import { IsOpen } from './utils/isOpen'
//
import { MdDarkMode, MdLightMode, MdExitToApp } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";


export function Header() {

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isOpenProfile, setIsOpenProfile] = useState(false)

    return (
        <header>
            <nav className="w-auto items-center bg-slate-700 h-14 p-1">

                <div className="flex max-w-7xl mx-auto">

                    <div className="flex flex-1 items-stretch h-14" >
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-3 py-2 w-7/12 border-gray-700 rounded placeholder-gray-400 text-white focus:ring 
                     focus:ring-blue-600 focus:border-blue-600 focus:outline-none h-12 border-0 bg-transparent"/>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-6 text-white">
                        <button
                            onClick={() => setIsOpenMenu((prev) => !prev)}
                            className="flex flex-row justify-center items-center gap-2">
                            <RxHamburgerMenu />

                            <span>
                                Sample menu
                            </span>

                            <IsOpen open={isOpenMenu} />

                        </button>

                        <button
                            onClick={() => setIsOpenProfile((prev) => !prev)}
                            className="flex flex-row items-center justify-center gap-2">
                            <CgProfile size={22} />

                            <span>
                                Ricardo Fuzetti
                            </span>

                            <IsOpen open={isOpenProfile} />

                        </button>

                        <button>
                            <MdDarkMode />
                        </button>

                        <button>
                            <FaQuestionCircle />
                        </button>

                        <button>
                            <MdExitToApp />
                        </button>

                    </div>

                </div >
            </nav >
        </header>

    );
}