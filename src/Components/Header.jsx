import { List, X } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export function Header() {
    const [navv, setNavv] = useState(false);
    return (
        <section>
            <nav className='w-full h-[60px] z-[999] px-[30px] bg-black fixed top-0 left-0'>
                <div className="container w-full h-full flex items-center justify-between">
                    <Link to={"/"}><h1 className='text-2xl headerp link text-white'>AHMADJON</h1></Link>
                    <div id={`${navv ? 'show' : ''}`} className={`flex h-full items-center gap-10 navv`}>
                        <Link onClick={() => setNavv(false)} to={"/"} className='text-white link'>Home</Link>
                        <Link onClick={() => setNavv(false)} to={"about"} className='text-white link'>About</Link>
                        <Link onClick={() => setNavv(false)} to={"skills"} className='text-white link'>Skills</Link>
                        <Link onClick={() => setNavv(false)} to={"project"} className='text-white link'>Projects</Link>
                        <Link onClick={() => setNavv(false)} to={"contact"} className='text-white link'>Contact</Link>
                    </div>
                    {navv ? (
                        <X className='hidden n' onClick={() => setNavv(false)} color='white' size={25} />
                    ) : (
                        <List className='hidden n' onClick={() => setNavv(true)} color='white' size={25} />
                    )}
                </div>
            </nav>
            <br /><br />
        </section>
    );
}
