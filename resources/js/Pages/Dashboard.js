import React from 'react';
import App from '@/Layouts/App';
export default function Dashboard() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4'>
                <div className='w-full grid grid-cols-1 gap-4'>
                    <div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className='rounded-xl bg-blue-300/50'>
                                <div className='flex p-4'>
                                    <span className='px-3 py-2.5 shadow rounded-lg bg-blue-400/50 text-blue-700 font-medium'>Rp</span>
                                    <div className='ml-2 text-blue-700'>
                                        <div className='text-xs'>Pemasukan Harian</div>
                                        <div className='font-medium text-lg'>500.000</div>
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-xl bg-green-100'>
                                <div className='flex p-4'>
                                    <span className='px-2.5 py-2.5 shadow rounded-lg bg-green-400/50 text-white font-medium'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                    <div className='ml-2 text-green-700'>
                                        <div className='text-xs'>Pelanggan</div>
                                        <div className='font-medium text-lg'>107</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-lg overflow-hidden">
                        <div className="py-3 px-5 bg-amber-100 text-amber-700">Total Pendapatan</div>

                        <canvas className="p-10" id="chartLine"></canvas>
                    </div>
                </div>
                <div className='rounded-lg shadow-lg p-4'>
                    <div className="text-center">
                        <p className='text-sm font-light text-gray-800/80'>Total Pemasukan</p>
                        <p className='text-3xl font-extrabold text-gray-600'>Rp. 2.600.700</p>
                        <p className='text-md font-extralight text-gray-300'>20 Jan, 2021 - 31 Feb, 2022</p>
                    </div>
                    <div className='flex items-center justify-center mt-4 mb-4'>
                        <span className='bg-blue-100/50 px-1 py-1 rounded-lg group hover:bg-blue-500 transition duration-200 ease-in-out'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500/70 hover:text-white transition duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                            </svg>
                        </span>
                    </div>
                    <div className='border-t'></div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = page => <App children={page} title="Dashboard" />
