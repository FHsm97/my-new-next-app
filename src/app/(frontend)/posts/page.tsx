


import VideoPlayer from "../VideoPlayer";
import PostList from "./postList";





export default async function Page() {


    // console.log(posts)

    return (
        <>
            <VideoPlayer />
            <h1 className="font-vazir font-bold">لیست پست‌ها</h1>
            <PostList />



        </>
    )
}