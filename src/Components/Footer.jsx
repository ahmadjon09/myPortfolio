import { TelegramLogo, InstagramLogo, XLogo, MapPinArea, Phone, Envelope } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
export function Footer() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return <section data-aos="fade-up">
        <br />
        <div className="container w-full h-auto frr  flex items-start justify-between">
            <div className="flex w-[250px] flex-col items-start">
                <p className='text-white font-bold text-xl'>More about me 👇</p>
                <br />
                <div className='flex w-full items-center gap-2'>
                    <a className='w-[50px] h-[50px] flex items-center text-2xl hover:text-white hover:bg-gray-800 hover:scale-95 justify-center rounded-full text-gray-500 bg-gray-900' href="https://t.me/ItsNoWonder"><TelegramLogo /></a>
                    <a className='w-[50px] h-[50px] flex items-center text-2xl hover:text-white hover:bg-gray-800 hover:scale-95 justify-center rounded-full text-gray-500 bg-gray-900' href="https://t.me/ItsNoWonder"><InstagramLogo /></a> <a className='w-[50px] h-[50px] flex items-center text-2xl hover:text-white hover:bg-gray-800 hover:scale-95 justify-center rounded-full text-gray-500 bg-gray-900' href="https://t.me/ItsNoWonder"><XLogo /></a>
                </div>
            </div>
            <div className="flex w-[250px] flex-col items-start">
                <p className='text-white font-bold text-xl'>Links 👇</p>
                <br />
                <div className='flex flex-col gap-1 font-bold'>
                    <Link to={"/"} className='text-gray-500 hover:text-white hover:translate-y-1'>Home</Link>
                    <Link to={"about"} className='text-gray-500 hover:text-white hover:translate-y-1'>About</Link>
                    <Link to={"skills"} className='text-gray-500 hover:text-white hover:translate-y-1'>Skills</Link>
                    <Link to={"project"} className='text-gray-500 hover:text-white hover:translate-y-1'>Projects</Link>
                    <Link to={"contact"} className='text-gray-500 hover:text-white hover:translate-y-1'>Contact</Link>
                </div>

            </div>
            <div className="flex w-[250px] flex-col items-start">
                <p className='text-white font-bold text-xl'>Have a Questions? 🤔</p>
                <br />
                <div className='flex flex-col gap-3'>
                    <a href='https://www.google.com/maps/dir//40.9751879,71.7261363/@40.9751044,71.7260344,72m/data=!3m1!1e3?authuser=0&entry=ttu' className="flex items-center hover:underline gap-3 text-gray-500 font-bold">
                        <MapPinArea size={25} />
                        Uzbekistan, Namangan City
                    </a>
                    <a className="flex items-center hover:underline gap-3 text-gray-500 font-bold" href="tel:+998995186261"><Phone size={25} /> +(998) 99 518 6261</a>
                    <a className="flex items-center hover:underline gap-3 text-gray-500 font-bold" href="/"><Envelope size={25} /> ahmadjon2oo9@gmail.com</a>
                </div>
            </div>
            <div className="flex w-[250px] flex-col items-start">
                <p className='text-white font-bold text-xl flex items-center gap-2'>Adress <MapPinArea /></p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d157.13516637339896!2d71.72607162183004!3d40.975163239165425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1718887231484!5m2!1sru!2s"
                    width="100%"
                    height="auto"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    </section>
}
