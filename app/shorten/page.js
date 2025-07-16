"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")
                toast("URL generated successfully!", { position: "bottom-center" })
                console.log(result)
            })
            .catch((error) => console.error(error));
    }


    return (
        <div className='mx-auto max-w-lg bg-amber-100 my-10 p-5 rounded-xl flex flex-col gap-3.5'>
            <h1 className='font-bold text-2xl text-center' >Generate your short URLs</h1>
            <div className='flex flex-col gap-3'>
                <input type="text" value={url} placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} className='bg-white focus:outline-green-300 p-2 px-4' />
                <input type="text" value={shorturl} placeholder='Enter your preferred short URL' onChange={e => { setshorturl(e.target.value) }} className='bg-white focus:outline-green-300 p-2 px-4' />
                <button onClick={generate} className='bg-green-400 p-1.5 px-3 rounded-md cursor-pointer font-bold  hover:bg-green-500 transition-all duration-150 my-2'>Generate</button>
            </div>
            {generated && <>
                <span className='font-bold text-lg'>Your Link</span><code><Link target="_blank" href={generated}>{generated}</Link></code>
            </>}
            <ToastContainer position="bottom-center" />
        </div>

    )
}

export default Shorten
