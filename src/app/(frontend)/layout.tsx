'use client';

import { ReactNode } from "react";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function Layout({ children }: { children: ReactNode }) {

    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#fffd00"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    )

}