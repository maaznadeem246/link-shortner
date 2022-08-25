import {NextFetchEvent, NextRequest, NextResponse} from "next/server"
import {nanoid} from "nanoid"

export async function middleware(req:NextRequest, ev:NextFetchEvent){
    if(req.nextUrl.pathname.startsWith('/api/get-url/')){
        console.log('returning early')
        return;
    }
    const slug = req.nextUrl.pathname.split("/").pop();
    
    if(slug){
       
        console.log("full next url", req.nextUrl)
        try{
        const data = await (await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`)).json();
        console.log("data?", data)
        if(data?.url){
            return NextResponse.redirect(data.url); 
        }
        }catch(er){
            console.log(er)
        }   
       
      
    }

}