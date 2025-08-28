import React from "react";


export default function Layout({ children }: { children: React.ReactNode }) {


    return (
        <>

            <h2>Admin Panel</h2>
            <div>{children}</div>

        </>
    )



}