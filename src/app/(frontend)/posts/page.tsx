'use client'


import { useState } from "react";
// import VideoPlayer from "../VideoPlayer";
import PostList from "./postList";
import dynamic from "next/dynamic";
import VideoPlayer from "../VideoPlayer";





export default function Page() {
    const videoPlayer=dynamic(()=>import('../VideoPlayer'))
    // const postList=dynamic(()=>import('./postList')) it show post list but it has many errors
    const [showPlayer,setShowPlayer]=useState(false);
    // const [showPostList,setShowPostList]=useState(false)


    // console.log(posts)

    return (
        <>
        <button onClick={()=>setShowPlayer(!showPlayer)}>toggle player</button>
            {showPlayer&&<VideoPlayer/>}
            <h1 className="font-vazir font-bold">لیست پست‌ها</h1>
            {/* <PostList /> */}
            



        </>
    )
}