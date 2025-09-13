import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";




type Props = {
    params: Promise<{ id: number }>
    // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}



export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params;
    const post = await getSinglePost(id)

    return {
        title: post.title,
        description: post.body,
    }
}

async function getSinglePost(id: number) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!res.ok) {
        if (res.status == 404)
            return notFound();

        throw new Error('something went wrong :(')

    }


    return await res.json()

}




export default async function Page({ params }: Props) {
    const { id } = await params;
    // console.log(id);

    const post = await getSinglePost(id)


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