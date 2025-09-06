
import Link from "next/link";
import postStyles from './postList.module.css'

async function getPosts() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) {
        throw new Error('somthing went wrong!')
    }

    return await res.json();

}


export default async function PostList() {

    const posts = await getPosts();

    return (

        <div>{

            posts?.map((post: any) => (
                <div key={post?.id}>
                    <Link href={`/posts/${post?.id}`}>
                        <h2 className={postStyles.postTitle}>title:{post?.title}</h2>
                    </Link>
                    <br />
                    <hr />
                </div>))
        }</div>

    )
}