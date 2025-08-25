import Link from "next/link";


export default function SeriesPage() {

    return (
        <>
            <Link href="/">Back</Link>
            <h1>Series Page</h1>
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