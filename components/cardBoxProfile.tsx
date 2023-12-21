import { PersonName } from './utils/personName'
//
import { CgProfile } from "react-icons/cg";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";



export function CardBoxProfile() {

    const randomNumber = Math.floor(Math.random() * (201) - 100);
    const color = randomNumber > 0 ? 'emerald' : 'red';

    return (
        <div className="flex mb-6 p-6 last:mb-0 justify-center rounded-2xl flex-col dark:bg-slate-900/90">

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center ">
                    <CgProfile
                        color={'white'}
                        size={40}
                    />

                    <div className='ml-6 mb-6 md:mb-0'>
                        <span className='text-white'>
                            <PersonName />
                        </span>

                        <p className='text-gray-500'>
                            Mar 22, 2023 @ricardofuzetti
                        </p>
                    </div>
                </div>

                <div className={`inline-flex items-center justify-center text-sm border rounded-full py-1.5 px-4 bg-${color}-500 border-${color}-500 text-white`}>
                    <span className=' w-4 h-4 mr-2'>
                        {randomNumber > 0 ?
                            <BsGraphUpArrow />
                            : <BsGraphDownArrow />
                        }
                    </span>
                    {randomNumber}
                </div>
            </div>
        </div>
    )
}