
import { Metadata } from "next";
import PostList from "./postList";


export const metadata: Metadata = {
  title: 'post list as best of best',
  description: 'description of post',
}


export default function Page() {



    // console.log(posts)

    return (
        <>
            <h1 className="font-vazir font-bold">لیست پست‌ها</h1>
            <PostList />
        </>
    )
}