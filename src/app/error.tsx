'use client'

import { log } from "console"
import { useEffect } from "react"

export default function Error({
    error,
    reset,
}:{
    error:Error&{digest?:string}
    reset:()=>void
}) {


    useEffect(()=>{
        console.log(error)
    },[])
    return(
        <div>
            <h2>somthing went wrong!</h2>
            <button onClick={()=>reset()}>Try Again</button>
        </div>
    )
}