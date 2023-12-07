import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Metadata } from "next";
import AccountTab from "@/components/User/AccountTab";
import { MdVerified } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Banner from "@/components/User/Banner";
import Heading from "@/components/Heading/Heading";
import { IoEyeOutline } from "react-icons/io5";
export const metadata: Metadata = {
  title: "Account page",
  description: "",
};
const posts = [
    {
      id: 4,
      title: 'Enjoy Natural Places',
      href: '#',
      img:'https://images.unsplash.com/photo-1682687982183-c2937a74257c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: [{ id: 1,title: 'Marketing', href: '#' },{ id: 1,title: 'Marketing', href: '#' },{ id: 1,title: 'Marketing', href: '#' }],
      author: {
        name: 'Michael Foster',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1682687982183-c2937a74257c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    {
      id: 5,
      title: 'Boost your conversion rate',
      href: '#',
      img:'https://images.unsplash.com/photo-1596683858875-63d85de92743?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: [{ id: 1,title: 'Marketing', href: '#' },{ id: 1,title: 'Marketing', href: '#' },{ id: 1,title: 'Marketing', href: '#' }],
      author: {
        name: 'Michael Foster',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 6,
      title: 'Boost your conversion rate',
      href: '#',
      img:'https://images.unsplash.com/photo-1701136941793-cfdc15d7f9de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: [{ id: 1,title: 'Marketing', href: '#' },{ id: 1,title: 'Marketing', href: '#' },{ id: 1,title: 'Marketing', href: '#' }],
      author: {
        name: 'Michael Foster',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
  ]
  const games = [
    {
      id:1,
      title:'Overwatch 2',
      views:'123K',
      img:'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id:2,
      title:'Valorant',
      views:'13K',
      img:'https://images.unsplash.com/photo-1533236897111-3e94666b2edf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'
    },
    {
      id:3,
      title:'Genshidh Impact',
      views:'23K',
      img:'https://images.unsplash.com/photo-1640301133815-4bec64fca33f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8'
    },
    {
      id:4,
      title:'Pubg Game',
      views:'23K',
      img:'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZXN8ZW58MHx8MHx8fDA%3D'
    },
    ]
const AccountPage = () => {
    const createMarkup = (htmlString: string) => {
        return { __html: htmlString };
      };
  return (
    <>
       <div className="w-full overflow-hidden border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
   <Banner />
        <div className="px-4 pb-4 text-center lg:pb-8 flex items-center justify-center flex-wrap md:flex-nowrap md:justify-between">
<div>
<span className="text-lg text-gray-700 dark:text-gray-200 font-semibold">Create amazing gaming experience!</span>
</div>
<div className="flex items-center">
<div className="flex items-center"><FaXTwitter className="text-[#0000ff8e] dark:text-blue-600 text-2xl font-bold pe-1"  /><span className="text-base text-gray-800 dark:text-gray-200 font-semibold">@mytwitterid</span></div>
<div className="ms-2 flex items-center"><FaInstagram  className="text-[#0000ff8e] dark:text-blue-600 text-2xl font-bold pe-1"  /><span className="text-base text-gray-800 dark:text-gray-200 font-semibold">@myinstaid</span></div>
</div>
        </div>
        <hr  className="mb-6 bg-gray-300 dark:bg-gray-800 h-1 mx-4 rounded-full"/>
<div className="mx-4 mb-10">
<AccountTab />
<div className="mt-4 lg:mt-8"></div>
<Heading title='Recently Streamed' link='/' />
<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-5 pt-5 sm:mt-4  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between  shadow-md rounded-lg">
                <div className="flex items-center text-xs absolute ps-4 pt-3">
                <div className="rounded-full bg-black flex justify-between items-center ps-1">
                <span
                  className="relative z-10 rounded-full bg-red-600 px-3  py-1.5 font-medium text-white "
                >
                  Live
                </span>
                <span
                  className="relative z-10 rounded-full bg-black px-3 me-1 py-2.5 font-medium text-white flex items-center justify-end"
                >
                <span><IoEyeOutline className='me-2 text-white text-base' /></span> 89.2K
                </span>
                </div>
              </div>

              <Image width={112} height={112} src={post.img} alt="" className="rounded-t-lg h-44 w-full object-cover"/>
           <div className="border-b border-l border-r border-gray-200 dark:border-gray-700 px-4 pb-3 w-full rounded-b-lg dark:bg-gray-800">
          
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-black  dark:text-white">
                  <a href={post.href} dangerouslySetInnerHTML={createMarkup(post.title)}>
                    {/* <span className="absolute inset-0" /> */}
                  </a>
                </h3>
                <div className="flex items-center text-xs mt-3">
                {post.category.map((item) => (
                <a key={item.id}
                  href={item.href}
                  className="relative z-10 rounded-full bg-gray-200 px-3 my-2 me-2 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-600 dark:text-gray-200 "
                >
                  {item.title} 
                </a>
                ))}
              </div>
              </div>
              <div className="relative flex items-center gap-x-4">
                <Image width={112} height={112} src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="flex items-center mt-3">
                 <div className="flex">
                 <p className="font-semibold text-gray-900 dark:text-gray-200">
                    <a href={post.author.href} className="flex items-center">
                      <span className="absolute inset-0" />
                      {post.author.name} <span className="ms-1"><MdVerified className='text-lg text-blue-700' /></span>
                    </a>
                  </p>
                 </div>
<div>
<button type="button" className="ms-4 flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-3 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 "><span className="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"/>
</svg></span>Music</button>

</div>
                </div>
              </div>
           </div>
            </article>
          ))}
        </div>
        {/* Streamed Catgeories */}
        <div className="flex items-center mt-5 lg:mt-8">
<div><h1 className="text-4xl font-medium text-black dark:text-white">Streamed Categories</h1></div>
</div>
<div className="flex items-center flex-wrap pt-5 sm:mt-4">
{games.map((game) => (
  <div className='me-4' key={game.id}>
    <Image width={112} height={112} src={game.img} className='rounded-lg object-cover h-64 w-44' alt="" />
    <div>
      <h3 className='text-xl font-bold leading-7 text-black dark:text-white'>{game.title}</h3>
      <div className="flex items-center">
<span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-dot text-red-600 font-bold text-lg" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
</svg></span>
<span className='text-base font-semibold text-black dark:text-white'>{game.views}</span>
      </div>
    </div>
  </div>
   ))}
</div>
</div>
      </div>
    </>
  );
};

export default AccountPage;
