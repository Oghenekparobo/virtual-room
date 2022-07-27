import Head from "next/head";
import { useState } from "react";
import Router, { useRouter } from "next/router";

export default function Home() {
  const[show , setShow] = useState(false)
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Video Conference</title>
        <meta name="description" content="Videoconf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" text-center m-20 space-y-20">
        <h1 className="text-xl">Virtual Hook Up</h1>
        <button className="bg-green-500 px-10 py-6 rounded shadow-2xl transition-all"
         onMouseOver={()=> setShow(true)} 
        onMouseLeave={()=>{setShow(false)}}
        onClick={()=>{
          router.push(`/room/${crypto.randomUUID().split('-')[0]}`)
          return

        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <div className="">
        {show && ( <button className="text-sm bg-red-500 rounded  text-center px-6 py-2">click to Hook Up </button>)}
        </div>
    
      </div>
    </div>
  );
}
