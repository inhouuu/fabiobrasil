import Image from 'next/image';
import Link from 'next/link';

//ICONS
import NextIcon from '@/icons/nextjs.png';
import TailwindIcon from '@/icons/tailwind.png';

const Footer = () => {
    return (
        <footer className="w-full h-[30px] md:h-[35px]	bg-black/30 absolute bottom-[0] flex items-center justify-between">
            <span className="text-gray-400 text-[10px] md:text-xs ml-[10%] md:ml-[20%] text-center">Copyright © 2024 Fabio Enrique Brasil</span>
            <div className="flex mr-[10%] md:mr-[20%] gap-5">
                <span className="w-4 md:w-5 opacity-40 hover:opacity-30 transition-all cursor-pointer">
                    <Link href="https://nextjs.org/" target='_blank'><Image src={NextIcon} alt='NextJs' /></Link>
                </span>
                <span className="w-4 md:w-5 opacity-40 hover:opacity-30 transition-all cursor-pointer">
                    <Link href="https://tailwindcss.com/" target='_blank'><Image src={TailwindIcon} alt='Tailwind' /></Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer;