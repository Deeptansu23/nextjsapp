'use client'
import React from 'react'

const Homepage = () => {
    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <p>This is the main page of our application.</p>
            <div>
                {process.env.NEXT_PUBLIC_DATA as string}
            </div>
            <div>
                {process.env.NEXT_PUBLIC_DATA!}
            </div>
        </div>
    )
}

export default Homepage
