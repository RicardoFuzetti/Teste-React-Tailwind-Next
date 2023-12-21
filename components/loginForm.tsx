'use client'

import { Input } from './input';
//
import { FiUser } from 'react-icons/fi'
import { HiOutlineLockClosed } from 'react-icons/hi2'
//
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useLoginContext } from '@/app/contexts/authContext';
//

const schema = z.object({
    email: z.string()
        .trim()
        .nonempty('Por favor, informe um e-mail')
        .email('Por favor, insira um e-mail válido'),
    password: z.string()
    // .trim()
    // .nonempty('Por favor, informe a senha')
    // .min(6, 'A senha deve conter no mínimo de 6 caracteres')
    // .regex(/[A-Z]/, 'Ao menos um caractere em maiuscúlo')
    // .regex(/[0-9]/, 'Ao menos menos um número')
    // .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, { message: 'A senha deve conter pelo menos um caractere especial' })
})

type DataProps = z.infer<typeof schema>

export function LoginForm() {

    const { validateLogin } = useLoginContext()

    const { register, handleSubmit, formState: { errors } } = useForm<DataProps>({
        mode: 'onBlur',
        resolver: zodResolver(schema)
    })

    // console.log(errors)

    return (
        <>
            < form onSubmit={handleSubmit((data) => validateLogin(data.email, data.password))}
                className='flex flex-col items-center justify-center' >

                <Input
                    {...register('email')}
                    type='text'
                    placeholder='E-mail'
                    errorMessage={errors.email?.message}
                    Icon={<FiUser className="absolute w-6 h-6 top-4 ml-2" />}
                />

                <Input
                    {...register('password')}
                    type='password'
                    placeholder='Password'
                    errorMessage={errors.password?.message}
                    Icon={<HiOutlineLockClosed className="absolute w-6 h-6 top-4 ml-2" />}
                />

                <button
                    type='submit'
                    className='bg-[#634defa8] hover:bg-[#634DEF] text-white border rounded-2xl transition font-bold text-sm w-32 h-14 mb-5'>
                    Login Now
                </button>

            </form>
        </>
    )
}