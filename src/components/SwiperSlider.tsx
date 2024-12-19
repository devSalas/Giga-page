interface Props {
    price: number
    megasBefore: number
    megasNow: number
}

function Slider({ price, megasBefore, megasNow }: Props) {
    return (
        <div className='w-full h-full  bg-gradient-to-b from-secondary from-70%  to-fourth to-90%   rounded-[30px] flex flex-col justify-center text-center p-2  text-white '>
            <div className="mb-4">
                <p className='text-xl text-center   '>Plan <strong>Duo</strong></p>
                <hr className="h-[1px] bg-white" />
            </div>


            <p className='text-xl md:text-4xl text-center font-bold mb-4 '>{megasNow} Mbps</p>
            <p className='mb-4 bg-fourth rounded-full m-auto px-6 py-1 font-bold'>100% FIBRA ÓPTICA</p>

            <div className="flex justify-center items-center gap-4 mb-2">
                <figure>
                    <img src="imgs/plans/tv.png" alt="" className="w-[70px]" />
                    <span className="text-xs font-bold">Más de <br />
                        50 canales</span>
                </figure>
                <img src="imgs/plans/plus.png" alt="" />
                <figure>
                    <img src="imgs/plans/router.png" alt="" className="w-[70px]"/>
                    <span className="text-xs font-bold">Router de <br />
                        doble banda</span>
                </figure>

            </div>

            <p className='text-4xl lgtext-6xl font-extrabold mb24  flex justify-center items-end gap-2 mb-4'> <span className="text-xl font-extrabold">s/</span> {price}<span className="text-base"> al mes.</span></p>
            

            <div className="mb-4 z-10 ">
                <a target="_blank bg-primary"
                    href="https://api.whatsapp.com/send?phone=51983422178" className='inline-block bg-primary px-6 z-20 py-3 transition-all hover:scale-105 duration-100  rounded-full text-csecondary font-bold '>
                    ¡Quiero este plan!
                </a>
            </div>

        </div>
    )
}

export default Slider