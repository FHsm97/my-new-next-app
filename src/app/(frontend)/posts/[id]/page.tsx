

async function getSinglePost(id: number) {

    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!res.ok) {

        throw new Error('something went wrong :(')

    }


    return await res.json()

}




export default async function Page({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    // console.log(id);

    let post = await getSinglePost(id)


    return (
        <>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </>
    )
}