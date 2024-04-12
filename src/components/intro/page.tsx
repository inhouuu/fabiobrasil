import Image from 'next/image'

//ICONS
import GitHub from '@/icons/dark/github-icon-dark-mode.svg'
import Linkedin from '@/icons/dark/linkedin-icon-dark-mode.svg'
import Codepen from '@/icons/dark/codepen-icon-dark-mode.svg'
import Waving_Hand from '@/icons/waving-hand.png'

//TESTE
import IntroGif from '@/images/gigpcdia.gif'

export default function Intro() {
    return (
        <div className='min-h-screen flex justify-center items-center overflow-hidden px-0 md:px-20'>
            <div className='text-gray-500 flex md:flex-nowrap flex-wrap md:justify-between justify-center md:w-auto w-[90%] '>
                <div className='order-2 md:order-1 md:text-left text-center mt-10 md:mt-0'>
                    <h1 className='font-extralight whitespace-nowrap md:text-4xl xl:text-7xl text-2xl mb-5'>
                        Olá, sou <strong className='text-gray-300 font-semibold'>Fabio Brasil
                            <Image alt='Waving Hand' src={Waving_Hand} className='inline w-[1.5ch] h-[1.5ch] ml-[0.5ch] align-top' />
                        </strong>
                    </h1>
                    <h3 className='text-base md:text-xs xl:text-lg mb-5'>Sou desenvolvedor front-end e back-end javaScript de São Paulo/Brasil.</h3>
                    <div className='flex md:justify-start justify-center'>
                        <Image alt='GitHub' src={GitHub} className='md:w-9 xl:w-10 mr-6 w-8 hover:opacity-70 transition-all cursor-pointer' />
                        <Image alt='Linkedin' src={Linkedin} className='md:w-7 xl:w-8 mr-6 w-6 hover:opacity-70 transition-all cursor-pointer' />
                        <Image alt='Codepen' src={Codepen} className='md:w-9 xl:w-10 mr-6 w-8 hover:opacity-70 transition-all cursor-pointer' />
                    </div>
                </div>
                <div className='md:w-[35%] xl:w-[40%] w-[90%] order-1 md:order-2'>
                    <Image alt='teste' src={IntroGif} className='max-w-[100%] h-auto' />
                </div>
            </div>
        </div>
    )
}