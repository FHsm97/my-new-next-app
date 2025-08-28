import Link from "next/link";
import { notFound } from "next/navigation";



async function getSinglePost(id: number) {

    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!res.ok) {
        if (res.status == 404)
            return notFound();

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
            <Link href='/posts'>
                back to post list
            </Link>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </>
    )
}