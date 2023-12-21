
'use client'

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
//
import { useLoginContext } from '../contexts/authContext';
import { Header } from '../../components/header';
import { SideBar } from '../../components/sideBar/index';

interface ContentLayoutProps {
    children: ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutProps) {

    const { isAuthenticated } = useLoginContext();
    const router = useRouter();

    // Se não estiver autenticado, redireciona para a página de login
    if (!isAuthenticated) {
        router.push('/login');
        return null;
    }

    // Se estiver autenticado, renderiza o layout
    return (
        <html suppressHydrationWarning lang="en">
            <body>
                <div>
                    <Header />
                    <div className="flex flex-col">
                        <div>
                            <SideBar />
                        </div>
                        <div>{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}

// export default function ContentLayout({ children }: ContentLayoutProps) {

//     const { isAuthenticated, validateLogin } = useLoginContext();

//     return (
//         <html suppressHydrationWarning lang="en">
//             <body>
//                 {isAuthenticated ? (
//                     <div>
//                         <Header />
//                         <div className='flex flex-col'>
//                             <div>
//                                 <SideBar />
//                             </div>
//                             <div>
//                                 {children}
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="bg-red-300 min-h-screen flex justify-center flex-col items-center">
//                         <strong>Usuário não autenticado</strong>
//                         <Link
//                             className="bg-green-400 w-20 flex justify-center itens-center rounded"
//                             href="/login">
//                             Login
//                         </Link>
//                     </div>

//                 )}
//             </body>
//         </html>
//     );
// }