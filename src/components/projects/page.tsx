import Link from 'next/link';
import Image from 'next/image';

//GIF
import Octocat from '@/images/oct.gif';

export default function Projects() {
    return (
        <div className='min-h-screen flex justify-center items-center mt-20 md:mt-0'>
            <div className=' flex flex-wrap justify-center xl:items-center md:items-start items-center w-[100%] mb-[50px]'>
                <div className='w-[70%] md:w-[40%] xl:w-[30%] mb-10 md:mb-0 mr-0 md:mr-10 md:mt-10 mt-0'>
                    <Image alt='Octocat' src={Octocat} className='w-[100%]' />
                </div>

                <div className='text-gray-300 font-extralight w-[80%] md:w-[40%]'>
                    <div className='mb-5'>
                        <h1 className='mb-5 text-3xl md:text-4xl'>Projetos</h1>
                        <p>Possuo alguns projetos em meu GitHub. No meu tempo livre costumo elaborar módulos OSS.</p>
                    </div>

                    <div className='flex flex-wrap gap-5 items-center mb-[0]'>
                        <Link href="https://www.applayos.com/" target='_blank'>
                            <div className='cursor-pointer w-full md:max-w-[220px] bg-black/[0.2] border-t-8 mb-3 md:mb-0 border-black/30 rounded-lg p-4 transform transition-all duration-150 hover:-translate-y-2 hover:shadow-lg hover:bg-black/[0.1]'>
                                <h2 className='mb-3 text-lg font-bold'>Website ApplayOs 🌐</h2>
                                <p>Site desenvolvido para a empresa ApplayOs.</p>
                                {/* <p>description...</p> */}
                                {/* <p>description...</p> */}
                            </div>
                        </Link>

                        <div className='cursor-pointer w-full md:max-w-[220px] bg-black/[0.2] border-t-8 mb-3 md:mb-0 border-black/30 rounded-lg p-4 transform transition-all duration-150 hover:-translate-y-2 hover:shadow-lg hover:bg-black/[0.1]'>
                            <h2 className='mb-3 text-lg font-bold'>Telemetria EA F1 🏎️</h2>
                            <p>Módulo capaz de converter os bites recebidos por um servidor UDP e apresentá-los por meio de uma interface. </p>
                            {/* <p>description...</p> */}
                            {/* <p>description...</p> */}
                            {/* <p>description...</p> */}
                            {/* <p>description...</p> */}
                        </div>

                        <div className='cursor-pointer w-full md:max-w-[220px] bg-black/[0.2] border-t-8 mb-3 md:mb-0 border-black/30 rounded-lg p-4 transform transition-all duration-150 hover:-translate-y-2 hover:shadow-lg hover:bg-black/[0.1]'>
                            <h2 className='mb-3 text-lg font-bold'>Planograma ✏️</h2>
                            <p>Projeto com o intuito de facilitar a organização mercadológica, com ele é possível criar estruturadoras customizáveis para a organização de produtos e apresentação ao consumidor final.</p>
                            {/* <p>description...</p> */}
                            {/* <p>description...</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}