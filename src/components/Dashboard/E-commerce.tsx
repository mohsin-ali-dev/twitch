"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Heading from '@/components/Heading/Heading';

// import required modules
import { Pagination } from 'swiper/modules';
import { IoEyeOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "YouTube | Home",
  description: "This is Signin page for TailAdmin Next.js",
};
// import Map from "../Maps/TestMap";

// without this the component renders on server and throws an error
const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    img:'https://images.unsplash.com/photo-1701223555020-054e2beabbaf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: [{ id:1,title: 'Search', href: '#' },{ id:2,title: 'Viral', href: '#' },{ id:3,title: 'Marketing', href: '#' }],
    author: {
      name: 'Michael Foster',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Laravel to React Nextjs',
    href: '#',
    img:'https://images.unsplash.com/photo-1682686581663-179efad3cd2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: [{ id: 1,title: 'YIU', href: '#' },{ id: 1,title: 'Tech', href: '#' },{ id: 1,title: 'AI', href: '#' }],
    author: {
      name: 'Michael Foster',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1682686581663-179efad3cd2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
  {
    id: 3,
    title: 'One of my Favirite Game ',
    href: '#',
    img:'https://images.unsplash.com/photo-1682685797208-c741d58c2eff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: [{ id: 1,title: 'Marketing', href: '#' },{ id: 1,title: 'Marketing', href: '#' },{ id: 1,title: 'Marketing', href: '#' }],
    author: {
      name: 'Michael Foster',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1682685797208-c741d58c2eff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
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
{
  id:5,
  title:'Dota 2',
  views:'3.4K',
  img:'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D'
},
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
const maybe = [
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
const cate =[
  {
    id:1,
    text:'Gaming',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16"><path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1"/><path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/></svg>'
  },
  {
    id:2,
    text:'Music',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-music-note-beamed" viewBox="0 0 16 16"><path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"/><path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z"/><path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"/></svg>'
  },
  {
    id:3,
    text:'Esport',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg>'
  },
  {
    id:4,
    text:'Podcast',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16"><path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/><path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/></svg>'
  },
  {
    id:5,
    text:'Chating Room',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat-right-dots" viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/><path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>'
  },
]

const ECommerce: React.FC = () => {
  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };
  return (
    <>

<div className="overflow-hidden">
<Heading title='Today Top Streaming' link='/' />
<div className="flex items-center pt-5 sm:mt-4">
<button type="button" className="me-4 flex items-center text-blue-700 bg-[#1a57db13]  border border-blue-700 focus:outline-none font-semibold rounded-full text-base px-5 py-3 text-center "><span className="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/>
</svg></span>All Categories</button>
{cate.map((post) => (
<button key={post.id} type="button" className="me-4 flex items-center text-gray-600  border border-gray-300 focus:outline-none font-semibold rounded-full text-base px-5 py-3 text-center dark:text-gray-300"><span className="me-2" dangerouslySetInnerHTML={createMarkup(post.icon)}></span>{post.text}</button>
))}
</div>
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
        <div className="mt-4">
</div>
<Heading title='Popular Streamer' link='/' />
<div className="flex items-center pt-5 sm:mt-4">
<Swiper
        slidesPerView={7}
        spaceBetween={30}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
<div className="me-3 flex items-center border border-gray-200 rounded-full px-3 py-1.5 bg-white dark:bg-gray-800 dark:border-gray-500">
    <Image width={112} height={112} className="w-13 h-13 rounded-full object-cover" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
    <div className="text-black dark:text-white text-lg font-semibold ms-3 pe-3">
       Chappy
    </div>
</div></SwiperSlide>
<SwiperSlide>
<div className="me-3 flex items-center border border-gray-200 rounded-full px-3 py-1.5 bg-white dark:bg-gray-800 dark:border-gray-500">
    <Image width={112} height={112} className="w-13 h-13 rounded-full object-cover" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
    <div className="text-black dark:text-white text-lg font-semibold ms-3 pe-3">
       Bangpen
    </div>
</div></SwiperSlide>
<SwiperSlide>
<div className="me-3 relative flex items-center border border-gray-200 rounded-full px-3 py-1.5 bg-white dark:bg-gray-800 dark:border-gray-500">
    <Image width={112} height={112} className="w-13 h-13 rounded-full border-4 border-red-600 object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <span className="top-0 left-10 absolute  w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    <div className="text-black dark:text-white text-lg font-semibold ms-3 pe-3">
       Shroud
    </div>
</div></SwiperSlide>
<SwiperSlide>
<div className="me-3 flex items-center border border-gray-200 rounded-full px-3 py-1.5 bg-white dark:bg-gray-800 dark:border-gray-500">
    <Image width={112} height={112} className="w-13 h-13 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div className="text-black dark:text-white text-lg font-semibold ms-3 pe-3">
       Ninjs
    </div>
</div></SwiperSlide><SwiperSlide>
<div className="me-3 flex items-center border border-gray-200 rounded-full px-3 py-1.5 bg-white dark:bg-gray-800 dark:border-gray-500">
    <Image width={112} height={112} className="w-13 h-13 rounded-full object-cover" src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div className="text-black dark:text-white text-lg font-semibold ms-3 pe-3">
       ForSaken
    </div>
</div></SwiperSlide><SwiperSlide>
<div className="me-3 flex items-center border border-gray-200 rounded-full px-3 py-1.5 bg-white dark:bg-gray-800 dark:border-gray-500">
    <Image width={112} height={112} className="w-13 h-13 rounded-full object-cover" src="https://images.unsplash.com/photo-1507874609475-6407fb6170f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div className="text-black dark:text-white text-lg font-semibold ms-3 pe-3">
       Ahmeyd
    </div>
</div></SwiperSlide><SwiperSlide>
<div className="me-3 flex items-center border border-gray-200 rounded-full px-3 py-1.5 bg-white dark:bg-gray-800 dark:border-gray-500">
    <Image width={112} height={112} className="w-13 h-13 rounded-full object-cover" src="https://images.unsplash.com/photo-1465405319612-e87fd78c23f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div className="text-black dark:text-white text-lg font-semibold ms-3 pe-3">
       Kaelasv
    </div>
</div></SwiperSlide>
<SwiperSlide>
<div className="me-3 flex items-center border border-gray-200 rounded-full px-3 py-1.5 bg-white dark:bg-gray-800 dark:border-gray-500">
    <Image width={112} height={112} className="w-13 h-13 rounded-full object-cover" src="https://images.unsplash.com/photo-1465405319612-e87fd78c23f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div className="text-black dark:text-white text-lg font-semibold ms-3 pe-3">
       Kaelasv
    </div>
</div></SwiperSlide>
</Swiper>
</div>
{/* Most Played Games */}
<div className="mt-4"></div>
<Heading title='Most Played Games' link='/' />
{/* Most played games cards */}
<div className="flex items-center pt-5 sm:mt-4">
<Swiper
        slidesPerView={7}
        spaceBetween={30}
        grabCursor={true}
        modules={[Pagination]}
        className="gamesSwiper"
      >
{games.map((game) => (
  <SwiperSlide key={game.id}>
  <div className='me-4'>
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
  </SwiperSlide>
   ))}
   </Swiper>
</div>
{/* maybe You like */}
<div className="mt-4"></div>
<Heading title='Maybe You Like' link='/' />

<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-5 pt-5 sm:mt-4  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {maybe.map((post) => (
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
</div>

    </>
  );
};

export default ECommerce;
