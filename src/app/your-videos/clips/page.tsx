import React from "react";
import { Metadata } from "next";
import { MdVerified } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Clips',
    description: 'Here is the description',
  }

const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      img:'https://images.unsplash.com/photo-1701223555020-054e2beabbaf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: {
        name: 'Michael Foster',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      duration:'01:28:20',
      views:'12.2K',
      time:'2 Days ago'

    },
    {
      id: 2,
      title: 'Laravel to React Nextjs',
      href: '#',
      img:'https://images.unsplash.com/photo-1682686581663-179efad3cd2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: {
        name: 'Michael Foster',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1682686581663-179efad3cd2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      duration:'28:20',
      views:'23',
      time:'1 minute ago'
    },
    {
      id: 3,
      title: 'One of my Favirite Game ',
      href: '#',
      img:'https://images.unsplash.com/photo-1682685797208-c741d58c2eff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: {
        name: 'Michael Foster',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1682685797208-c741d58c2eff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      duration:'11:28:12',
      views:'1.2K',
      time:'1 Day ago'
    },
    {
      id: 4,
      title: 'Enjoy Natural Places',
      href: '#',
      img:'https://images.unsplash.com/photo-1682687982183-c2937a74257c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: {
        name: 'Michael Foster',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1682687982183-c2937a74257c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      duration:'17:10',
      views:'19',
      time:'5 Days ago'
    },
    {
      id: 5,
      title: 'Boost your conversion rate',
      href: '#',
      img:'https://images.unsplash.com/photo-1596683858875-63d85de92743?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: {
        name: 'Michael Foster',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      duration:'03:11:02',
      views:'1.9M',
      time:'2 Years ago'
    },
    {
      id: 6,
      title: 'Boost your conversion rate',
      href: '#',
      img:'https://images.unsplash.com/photo-1701136941793-cfdc15d7f9de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: {
        name: 'Michael Foster',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      duration:'12:20',
      views:'1.2K',
      time:'2 Days ago'
    },
    // More posts...
  ]
const clips : React.FC = () => {
    const createMarkup = (htmlString: string) => {
        return { __html: htmlString };
      };
  return (
    <>
             <div className="overflow-hidden">
        <div className="flex items-center">
<div><h1 className="text-4xl font-medium text-black dark:text-white">Your Videos Clips</h1></div>
</div>


<div className="text-md font-medium text-center text-gray-500  dark:text-gray-400  mt-5">
    <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
            <Link href="/your-videos/live" className={`border-b-2 border-transparent inline-block px-4 py-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`} >Live</Link>
        </li>
        <li className="me-2">
            <Link href="" className="inline-block px-4 py-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Clips</Link>
        </li>
    </ul>
</div>

<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-5 pt-5 sm:mt-4  lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl  items-start justify-between  shadow-md rounded-lg">
                <div className="flex items-center text-xs absolute ps-4 pt-3">
                <div className="rounded-full bg-black flex justify-between items-center ps-1">
                <span
                  className="relative z-10 rounded-full bg-black px-3 me-1 py-2.5 font-medium text-white flex items-center justify-end"
                > {post.duration}
                </span>
                </div>
              </div>

              <Image src={post.img} alt="" className="rounded-l-lg h-44 w-full object-cover"/>
           <div className="border-b border-t  border-r border-gray-200 px-4 pb-3 h-full w-full rounded-r-lg flex flex-col justify-center">
          
              <div className="group relative flex justify-between flex-col">
               <div>
               <h3 className="text-lg font-semibold leading-6 text-black group-hover:text-gray-900">
                  <a href={post.href} dangerouslySetInnerHTML={createMarkup(post.title)}>
                    {/* <span className="absolute inset-0" /> */}
                  </a>
                </h3>
               </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="relative z-10 rounded-full bg-gray-200 px-3 my-2 me-2 py-1.5 font-medium text-gray-600 hover:bg-gray-100 ">
                    {post.views} Views
                  </span>
                  <span className="relative z-10  pe-0 ps-1 my-2 py-1.5 font-medium text-gray-600 ">
                    .
                  </span>
                <span
                  className="relative z-10  px-3 my-2 py-1.5 font-medium text-gray-600"
                >
                  {post.time}
                </span>
              </div>
              </div>
              <div className="mt-4  flex items-center gap-x-4 pb-0 mb-0 ">
                <Image src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="flex items-center mt-3">
                 <div className="flex">
                 <p className="font-semibold text-gray-900">
                    <a href={post.author.href} className="flex items-center">
                      {post.author.name} <span className="ms-1"><MdVerified className='text-lg text-blue-700' /></span>
                    </a>
                  </p>
                 </div>
                </div>
              </div>
           </div>
            </article>
          ))}
        </div>


    </div>
    </>
  );
};

export default clips;
