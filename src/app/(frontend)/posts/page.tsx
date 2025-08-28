



async function getPosts() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) {
        throw new Error('somthing went wrong!')
    }

    return await res.json();

}

export default async function Page() {

    const posts = await getPosts();
    // console.log(posts)

    return (
        <>

            <h1>Post Lists</h1>
            <div>{

                posts?.map((post: any) => (
                    <div key={post?.id}>
                        <h2>title:{post?.title}</h2>
                        <br />
                        <hr />
                    </div>))
            }</div>


        </>
    )
}