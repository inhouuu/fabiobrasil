import Image from 'next/image'

//TESTE
import face from '@/images/head-torta-gif.gif'

export default function About() {
    return (
        <div className='min-h-screen flex justify-center items-center my-10 md:my-0 overflow-hidden'>
            <div className='flex flex-wrap justify-center items-center'>
                <div className='text-gray-300 font-extralight w-[80%] md:w-[40%] order-2 md:order-1'>
                    <h1 className='mb-5 text-3xl md:text-4xl'>Um pouco sobre mim</h1>
                    <div className='font-serif leading-relaxed'>
                        <p className='mb-5'>
                            Curto criar soluções limpas e reutilizáveis. Nos últimos anos, tenho me concentrado em tecnologias JavaScript, incluindo React, TypeScript, bem como ferramentas como Tailwind CSS e styled-components. Também tenho experiência em Next.js, Angular 2+, Sass e Stylus. Sempre aplico boas práticas de desenvolvimento para garantir a eficácia e a facilidade de manutenção do meu código.
                        </p>

                        {/* <p className='mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sequi ipsum obcaecati beatae velit tenetur dolor saepe, provident laudantium vel nostrum porro aliquam inventore nesciunt eligendi labore officia debitis cum?
                        </p> */}

                        <p>
                            Também tenho uma grande paixão por um bom design em geral (UI, web, tipografia, pixel art, animação, ilustrações isométricas, branding e assim por diante).
                        </p>
                    </div>
                </div>

                <div className='w-[90%] md:w-[30%] order-1 md:order-2 md:ml-10 mb-10 md:mb-0 flex justify-center'>
                    <Image alt='Face' src={face} className='w-[70%] h-auto md:w-[80%]' />
                </div>
            </div>
        </div>
    )
}