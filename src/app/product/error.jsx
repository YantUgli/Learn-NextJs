'use client'

import { useEffect } from "react"

export default function Error({
    error, reset
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>
                something went wrong
            </h2>
            <button onClick={() => reset()}>
                try again
            </button>
        </div>
    )
}