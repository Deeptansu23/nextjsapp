'use client'
import React from 'react'

const Homepage = () => {


    const printConsole = async () => {
        console.log('This is a message from the Homepage component');
        console.log(process.env.NEXT_PUBLIC_DATA);
        console.log("hello")

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
