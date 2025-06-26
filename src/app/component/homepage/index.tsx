'use client'
import React from 'react'

const Homepage = () => {


    const printConsole = async() => {
        console.log('This is a message from the Homepage component');
        console.log(`The value of NEXT_PUBLIC_DATA is: ${process.env.NEXT_PUBLIC_DATA}`);
        console.log(`The value of NEXT_PUBLIC_DATA is: ${process.env.NEXT_PUBLIC_DATA as string}`);
        console.log(`The value of NEXT_PUBLIC_DATA is: ${process.env.NEXT_PUBLIC_DATA!}`);
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

