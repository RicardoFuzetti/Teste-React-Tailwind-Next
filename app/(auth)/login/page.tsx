import Image from 'next/image'
import { cookies } from 'next/headers'
//
import back from '/public/back.png'
import google from '/public/google.svg'
import facebook from '/public/facebook.svg'
//
import { Button } from '../../../components/buttonLoginOther'
import { LoginForm } from '../../../components/loginForm'
import { useLoginContext } from '@/app/contexts/authContext';


export default function Login() {

    return (
        <div className='bg-[#E7E2FF] min-h-screen flex justify-center items-center'>
            <div className='flex flex-row max-w-7xl'>

                <div className='bg-[#fcfbff] flex flex-col justify-center items-center w-full border-none rounded-s-3xl p-5 lg:w-1/2'>

                    <h1 className='font-black text-3xl mb-1'>LOGIN</h1>
                    <p className='text-[#525252] mb-5'>How to i get started lorem ipsum dolor at?</p>

                    <LoginForm />

                    <span className="mb-1 flex gap-2 items-center justify-center after:content-[''] after:h-1 after:w-24 after:border-b before:content-[''] before:h-1 before:w-24 before:border-b w-full">
                        <p>
                            <strong> Login </strong>
                            with Others
                        </p>
                    </span>

                    <Button title='Google' image={google} loginType={1} />
                    <Button title='Facebook' image={facebook} loginType={2} />

                    <span className='text-[#c9c9c9]'>Register now</span>

                </div>

                <div className='border-none w-1/2 lg:block hidden'>
                    <Image src={back} alt="logo" quality={100} width={0} height={0} className='rounded-r-3xl' />
                </div>

            </div>
        </div>
    );
}
