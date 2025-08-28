

import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    console.log('test');//به ازای هر فایل یکبار اجرا میشود
    console.log(request.url);
    console.log(request.cookies);//cookies list
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/articles',
    '/series/:course*'//dynamic rout
  ],
}