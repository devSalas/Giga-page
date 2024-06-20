interface Props {
    price: number
    megasBefore: number
    megasNow: number
}

function Slider({ price, megasBefore, megasNow }: Props) {
    return (
        <div className='w-full h-full border-4 border-secondary rounded-lg flex flex-col justify-center text-center p-4'>
            <p className='text-xl text-center mb-8 text-cfourth line-through'>Antes: {megasBefore} Mbps</p>
            <p className='text-4xl md:text-6xl text-center font-extrabold mb-4 text-cfourth'>{megasNow} Mbps</p>
            <sub className='mb-8'>velocidad simetrica</sub>
            <p className='text-4xl lgtext-6xl font-extrabold mb-4 text-cfourth'>s/{price}.00</p>
            <p className='mb-8'>X MES</p>

            <div className="mb-4">
                <a target="_blank"
                    href="https://api.whatsapp.com/send?phone=51983422178" className='bg-secondary px-4 py-3  rounded-full text-white '>
                    SOLICITAR AHORA
                </a>
            </div>

        </div>
    )
}

export default Slider