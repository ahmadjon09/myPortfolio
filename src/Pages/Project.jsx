import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export function Project() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return <section data-aos="zoom-in">
        <br />
        <div className="container w-full h-[600px]">
            <p className='textt text-6xl text-white text-center'>Our Project</p>
            <a className='w-auto h-auto' href="https://safiabakery.uz/ru">
                <br /><br />
                <img className='m-auto rounded-lg hover:scale-105 transition-all delay-75' src="../img/safia.jpg" alt="pic" />
            </a>
        </div>
    </section>
}
