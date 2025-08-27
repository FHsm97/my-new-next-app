'use client'

import { useRouter } from "next/navigation";
import { use } from "react";


export default function SingleSeriePage({params}:{params:Promise<{courseSlug:string}>}) {

    const router=useRouter();

    const {courseSlug}=use(params)


    const buyCourseHandler=()=>{
        //validate
        //check with api
        router.push('/')
    }
    return(
        <>
        <h1>Single Course Page</h1>
        <p>{courseSlug}</p>

        <button onClick={buyCourseHandler}>
            Buy the Course
        </button>
        </>
    )
}