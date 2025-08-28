
import { use } from "react";
import BuyCourseButton from "../components/BuyCourseButton";
import { redirect } from "next/navigation";
import NotFound from "@/app/not-found";


export default function SingleSeriePage({params}:{params:Promise<{courseSlug:string}>}) {

    const {courseSlug}=use(params);

    if (courseSlug.length<=1) {
        redirect('/')
        
    }
    if (!['laravel-course','reactjs-course'].includes(courseSlug)) {

        return NotFound();
        
    }

    // throw new Error('error')




    
    return(
        <>
        <h1>Single Course Page</h1>
        <p>{courseSlug}</p>

        <BuyCourseButton/>

       
        </>
    )
}