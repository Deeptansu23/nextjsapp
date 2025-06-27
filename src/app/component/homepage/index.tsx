'use client'
import { redirect } from 'next/navigation';
import React from 'react'

const Homepage = () => {
    const printConsole = async() => {
        const data = process.env.NEXT_PUBLIC_DATA as string;
        console.log('This is a message from the Homepage component');
        console.log(`The value of NEXT_PUBLIC_DATA is: ${data}`);
        redirect(data);
    }
    return (
        <div>
            <button onClick={printConsole}>
                print to console
            </button>
        </div>
    )
}

export default Homepage
