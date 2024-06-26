import React, { useEffect } from 'react'
import { About } from './About'
import AOS from "aos";
import "aos/dist/aos.css";
import { MySkills } from './MySkills';
import { Link } from 'react-router-dom';
import { Project } from './Project';
import { Contact } from './Contact';
import { MapPin } from '@phosphor-icons/react';
export function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return <section className='container'>
        <br />
        <div data-aos="zoom-in" className="flex w-full h-[550px] items-center justify-between ij">
            <div className="flex texx w-1/2 items-start flex-col gap-3">
                <p className='text-[#ffbd39] font-bold'>H E L L O !</p>
                <p className='text-6xl pp font-[999] text-white'>I'M <span className='text-[#ffbd39]'>Ahmadjon <br /> Mahmudov</span></p>
                <p className='text-2xl  text-white'>I'm Web Developer</p>
                <Link to={"project"} className='px-5 py-3 bg-[#ffbd39] text-xlffbd39 border-2 hover:scale-95 border-[#ffbd39] hover:bg-black hover:text-white transition-all delay-150  rounded-2xl hover:border-white hover:border-2'>My Projects</Link>
            </div>
            <img className='w-1/2 h-[700px] me' src="../img/me.png" alt="me" />
        </div>
        <br /><br />
        <About />
        <MySkills />
        <Project />
        <Contact />
    </section >
}
