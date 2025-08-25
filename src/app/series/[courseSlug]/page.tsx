

export default async function SingleSeriePage({params}:{params:{courseSlug:string}}) {

    const {courseSlug}=await params;
    return(
        <>
        <h1>Single Course Page</h1>
        <p>{courseSlug}</p>
        </>
    )
}