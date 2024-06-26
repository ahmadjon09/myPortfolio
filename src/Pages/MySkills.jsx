import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export function MySkills() {
    const [index, setIndex] = useState(false)
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        setIndex(true)
    }, []);
    return <section data-aos="fade-up">
        <br />
        <div className="container">
            <br /><br />
            <h1 className='text-6xl text-white font-bold text-center textt'>My Skills</h1>
            <div className="flex fji justify-between items-center w-full h-[400px] pxx px-[100px]">
                <div className="flex flex-col items-start gap-10">
                    <div className="flex flex-col gap-2 w-[300px] h-auto">
                        <div className='flex w-full justify-between text-xl text-white'>
                            <p>Photoshop</p>
                            <p>45%</p>
                        </div>
                        <div className='w-[300px] bg-[#1a1a1a] h-[15px] rounded-md flex items-center justify-start'>
                            <div className={`${index ? "myskillP1" : ""} h-full`}></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-[300px] h-auto">
                        <div className='flex w-full justify-between text-xl text-white'>
                            <p>HTML</p>
                            <p>95%</p>
                        </div>
                        <div className='w-[300px] bg-[#1a1a1a] h-[15px] rounded-md flex items-center justify-start'>
                            <div className={`${index ? "myskillP2" : ""} h-full`}></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-[300px] h-auto">
                        <div className='flex w-full justify-between text-xl text-white'>
                            <p>CSS</p>
                            <p>68%</p>
                        </div>
                        <div className='w-[300px] bg-[#1a1a1a] h-[15px] rounded-md flex items-center justify-start'>
                            <div className={`${index ? "myskillP3" : ""} h-full`}></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-10">
                    <div className="flex flex-col gap-2 w-[300px] h-auto">
                        <div className='flex w-full justify-between text-xl text-white'>
                            <p>JavaScript</p>
                            <p>71%</p>
                        </div>
                        <div className='w-[300px] bg-[#1a1a1a] h-[15px] rounded-md flex items-center justify-start'>
                            <div className={`${index ? "myskillP4" : ""} h-full`}></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-[300px] h-auto">
                        <div className='flex w-full justify-between text-xl text-white'>
                            <p>React</p>
                            <p>69%</p>
                        </div>
                        <div className='w-[300px] bg-[#1a1a1a] h-[15px] rounded-md flex items-center justify-start'>
                            <div className={`${index ? "myskillP5" : ""} h-full`}></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-[300px] h-auto">
                        <div className='flex w-full justify-between text-xl text-white'>
                            <p>SASS</p>
                            <p>60%</p>
                        </div>
                        <div className='w-[300px] bg-[#1a1a1a] h-[15px] rounded-md flex items-center justify-start'>
                            <div className={`${index ? "myskillP6" : ""} h-full`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
