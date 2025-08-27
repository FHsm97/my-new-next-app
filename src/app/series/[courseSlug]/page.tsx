
import { use } from "react";
import BuyCourseButton from "../components/BuyCourseButton";


export default function SingleSeriePage({params}:{params:Promise<{courseSlug:string}>}) {

    

    const {courseSlug}=use(params)


    
    return(
        <>
        <h1>Single Course Page</h1>
        <p>{courseSlug}</p>

        <BuyCourseButton/>

       
        </>
    )
}