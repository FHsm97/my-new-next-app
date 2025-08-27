'use client'


import { useRouter } from "next/navigation";



export default function BuyCourseButton() {
    const router = useRouter();

    const buyCourseHandler = () => {
        //validate
        //check with api
        router.push('/')
    }

    return (
        <>
         <button onClick={buyCourseHandler} >
            Buy the Course
        </button>


        </>
    )
}