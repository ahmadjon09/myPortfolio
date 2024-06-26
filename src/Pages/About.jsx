import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return <section className='container'>
        <br /><br />
        <div data-aos="fade-up" className="w-full ij  h-[600px] flex justify-between items-center">
            <img className='w-1/2 h-[700px] me' src="../img/me.png" alt="me" />
            <div className='w-1/2 h-full'>
                <h1 className='text-6xl text-white font-bold textt'>About Me</h1>
                <br /><br />
                <div className='w-full flex items-center'>
                    <div className="w-1/2 flex flex-col items-start text-white font-bold gap-3">
                        <p>Name:</p>
                        <p>Date of birth:</p>
                        <p>Address:</p>
                        <p>Zip code:</p>
                        <p>Email:</p>
                        <p>Phone:</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-start text-gray-500 gap-3">
                        <p>Ahmadjon Mahmudov</p>
                        <p>29.06.2009</p>
                        <p>Uzbekistan,Namangan City</p>
                        <p>10 +</p>
                        <p>ahmadjon2oo9@gmail.com</p>
                        <p>+(998) 99 518 6261</p>
                    </div>
                </div>
                <br /><br />
                <p className='text-xl font-bold text-white'><span className='text-[#ffbd39]'>1</span> Project complete</p>
            </div>
        </div>
    </section>
}
