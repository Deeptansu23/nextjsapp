'use client'
import React from 'react'

const Homepage = () => {


    const printConsole = async() => {

        const data = process.env.NEXT_PUBLIC_DATA;

        console.log('This is a message from the Homepage component');
        console.log(`The value of NEXT_PUBLIC_DATA is: ${data}`);
        
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
