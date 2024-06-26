import { GlobeHemisphereWest, MapPin, Phone, TelegramLogo } from '@phosphor-icons/react'
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Contact() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');

    const sendMessage = async () => {
        const message = `Name:  ${input1}\nEmail:  ${input2}\nSubject :   ${input3}\nMessage: ${input4}`;
        const token = '6934632850:AAG4kX6hLHXY9lh6ruVwnxAlb6VLnHYLlx8';
        const chatId = '6352403183';
        try {
            await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                chat_id: chatId,
                text: message,
            });
            alert('Message sent!');
            setInput1('');
            setInput2('');
            setInput3('');
            setInput4('');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message');
        }
    };

    return (
        <section>
            <br />
            <div className="container">
                <p className='textt text-white text-6xl text-center'>Contact Me</p>
                <br /><br /><br /><br />
                <div className="flex w-full h-[300px] justify-between flex-wrap gppp">
                    <div className='flex flex-col items-center gap-3 '>
                        <div className="w-[70px] h-[70px] flex items-center justify-center bg-[#1a1a1a] text-[#ffbd39] rounded-full text-4xl">
                            <MapPin />
                        </div>
                        <p className='text-white text-2xl'>Adress</p>
                        <a href='https://www.google.com/maps/dir//40.9751879,71.7261363/@40.9751044,71.7260344,72m/data=!3m1!1e3?authuser=0&entry=ttu' className='text-xl text-gray-700 hover:underline text-center'>Uzbekistan,<br /> Namangan City</a>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <div className="w-[70px] h-[70px] flex items-center justify-center bg-[#1a1a1a] text-[#ffbd39] rounded-full text-4xl">
                            <Phone />
                        </div>
                        <p className='text-white text-2xl'>Phone Number</p>
                        <a href='tel:995186261' className='text-xl text-gray-700 hover:underline text-center'>+(998) 99 518 6261</a>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <div className="w-[70px] h-[70px] flex items-center justify-center bg-[#1a1a1a] text-[#ffbd39] rounded-full text-4xl">
                            <TelegramLogo />
                        </div>
                        <p className='text-white text-2xl'>Telegram</p>
                        <a href='https://t.me/ItsNoWonder' className='text-xl hover:underline text-gray-700 text-center'>@ItsNoWonder</a>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <div className="w-[70px] h-[70px] flex items-center justify-center bg-[#1a1a1a] text-[#ffbd39] rounded-full text-4xl">
                            <GlobeHemisphereWest />
                        </div>
                        <p className='text-white text-2xl'>WEBSITE</p>
                        <Link to={"/"} className='hover:underline text-xl text-gray-700 text-center'>WEBSITE</Link>
                    </div>
                </div>
                <div className='w-full ij flex items-center justify-between h-[600px] rounded-lg'>
                    <img src="../img/me.png" alt="me" className='w-1/2 h-full me' />
                    <br />
                    <div className="w-1/2 h-full bg-white rounded-lg flex items-start flex-col justify-center gap-10 p-10">
                        <input value={input1} onChange={(e) => setInput1(e.target.value)} className='w-full' type="text" placeholder='Your Name' />
                        <input value={input2} onChange={(e) => setInput2(e.target.value)} className='w-full' type="email" placeholder='Your Email' />
                        <input value={input3} onChange={(e) => setInput3(e.target.value)} className='w-full' type="text" placeholder='Subject' />
                        <textarea value={input4} onChange={(e) => setInput4(e.target.value)} className='w-full h-[250px]' type="text" placeholder='Message' />
                        <button onClick={sendMessage} className='px-10 hover:scale-95 py-5 rounded-xl bg-[#ffbd39] font-bold'>SEND MESSAGE</button>
                    </div>
                </div>
                <br />
            </div>
        </section>
    );
}
