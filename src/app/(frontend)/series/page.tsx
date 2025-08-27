'use client'

import Link from "next/link";
// import { permanentRedirect } from "next/navigation";
import { useState } from "react";


export default function SeriesPage() {

    const [name,setName]=useState('Fatemeh')

    // permanentRedirect('/articles')

    return (
        <>
            <Link href="/">Back</Link>
            <h1>Series Page:{name}</h1>
            <ul>
                <li>
                    <Link href="/series/reactjs-course">ReactJs Course</Link>
                </li>
                <li>
                    <Link href="/series/laravel-course">Laravel Course</Link>
                </li>
            </ul>

        </>
    )
}