import { CardBox } from '../../../components/cardBox/index'
import { CardBoxTransactions } from '../../../components/cardBoxTransactions'
import { CardBoxProfile } from '../../../components/cardBoxProfile'
import { TableDashboard } from '../../../components/tableDashboard/index'
//
import { TiChartLine } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { FaRegMoneyBillAlt, FaCreditCard, FaFileInvoiceDollar } from "react-icons/fa";
import { RiLayout3Fill } from "react-icons/ri";
import { MdPeopleAlt } from 'react-icons/md';
import { FaGear } from 'react-icons/fa6';




export default function Dashboard() {

    return (
        <main className="bg-slate-700">

            <section className="p-2 xl:max-w-7xl xl:mx-auto">

                <div className='mb-6 flex items-center justify-between text-white '>

                    <div className='flex items-center justify-start'>
                        <span className='inline-flex justify-center items-center w-12 h-12 rounded-full bg-slate-900/70 mr-3'>
                            <TiChartLine size={30} />
                        </span>

                        <h1 className='leading-tight text-3xl'>
                            Visão Geral
                        </h1>
                    </div>

                    <a
                        href="https://github.com/RicardoFuzetti"
                        className='inline-flex justify-center items-center transition-colorsduration-150 border rounded-full bg-white text-black hover:bg-slate-100 text-sm px-3 py-1'>
                        <span className='flex justify-center items-center w-6 h-6 '>
                            <FaGithub />
                        </span>

                        <span className='px-1'>
                            Me siga no GitHub
                        </span>
                    </a>
                </div>

                <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6'>
                    <CardBox cardType={0} />
                    <CardBox cardType={1} />
                    <CardBox cardType={2} />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>

                    <div className='flex flex-col justify-between'>
                        <CardBoxTransactions
                            icon={<FaRegMoneyBillAlt />}
                            color='emerald'
                            transactionType='Depósito'
                        />

                        <CardBoxTransactions
                            icon={<FaCreditCard />}
                            color='blue'
                            transactionType='Pagamento'
                        />

                        <CardBoxTransactions
                            icon={<FaFileInvoiceDollar />}
                            color='yellow'
                            transactionType='Fatura'
                        />

                        <CardBoxTransactions
                            icon={<FaRegMoneyBillAlt />}
                            color='red'
                            transactionType='Retirada'
                        />
                    </div>

                    <div className='flex flex-col justify-between'>
                        <CardBoxProfile />
                        <CardBoxProfile />
                        <CardBoxProfile />
                        <CardBoxProfile />
                    </div>

                </div>

                <div className='my-6 bg-gradient-to-tr from-pink-400 via-red-500 to-yellow-500 rounded-2xl py-12 px-6 lg:px-12 text-center'>
                    <h1 className='text-3xl text-white mb-6'>
                        Gostou do Projeto? Este foi o
                        <strong> layout usado: </strong>
                    </h1>

                    <a
                        href="https://tailwind-react.justboil.me/dashboard"
                        className='inline-flex justify-center items-center transition-colors duration-150 border cursor-pointer gap-2 rounded-full border-whit  bg-white text-black hover:bg-gray-100  py-2 px-6'>
                        <RiLayout3Fill />
                        Layout
                    </a>
                </div>

                <div className='pt-6 mb-6 flex items-center justify-between text-white'>
                    <div className='flex items-center justify-start gap-2  text-2xl'>
                        <MdPeopleAlt />
                        <span> Clientes </span>
                    </div>

                    <button className='inline-flex justify-center items-center transition-colorsduration-150 border cursor-pointer rounded border-slate-900 dark:bg-slate-900 hover:bg-slate-800 p-1 text-sm'>
                        <FaGear />
                    </button>
                </div>

                <TableDashboard />

            </section>

        </main>
    )
}
