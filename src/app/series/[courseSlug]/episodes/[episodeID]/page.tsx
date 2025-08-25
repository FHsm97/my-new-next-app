import { log } from "console"




export default async function SingleEpisodeOfCoursePage({params}:{params:{courseSlug:string,episodeID:string}}) {

    const {episodeID}=await params
    const {courseSlug}=await params
    

    console.log(params);
    
    return(
        <>
        <h1>Single Episode Of Course Page</h1>
        <p>{courseSlug}</p>
        <p>{episodeID}</p>
        </>
    )
}