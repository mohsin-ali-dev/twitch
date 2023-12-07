import { Metadata } from "next";
import { MdVerified } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Live Videos",
  description: "",
};

const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      img:'https://images.unsplash.com/photo-1701223555020-054e2beabbaf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: [{ id: 1,title: 'Search', href: '#' },{ id: 2,title: 'Viral', href: '#' },{ id: 3,title: 'Marketing', href: '#' }],
      author: {
        name: 'Michael Foster',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      duration:'01:28:20'
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
      duration:'28:20'
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
      duration:'11:28:12'
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
      duration:'17:10'
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
      duration:'03:11:02'
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
      duration:'12:20'
    },
    // More posts...
  ]
const live: React.FC = () => {
    const createMarkup = (htmlString: string) => {
        return { __html: htmlString };
      };
  return (
    <>
             <div className="overflow-hidden">
        <div className="flex items-center">
<div><h1 className="text-4xl font-medium text-black dark:text-white">Your Videos</h1></div>
</div>


<div className="text-md font-medium text-center text-gray-500  dark:text-gray-400  mt-5">
    <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
            <a href="" className="inline-block px-4 py-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Live</a>
        </li>
        <li className="me-2">
            <Link href="/your-videos/clips" className={`border-b-2 border-transparent inline-block px-4 py-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 `}>Clips</Link>
        </li>
    </ul>
</div>

<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-5 pt-5 sm:mt-4  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between  shadow-md rounded-lg">
                <div className="flex items-center text-xs absolute ps-4 pt-3">
                <div className="rounded-full bg-black flex justify-between items-center ps-1">
                <span
                  className="relative z-10 rounded-full bg-black px-3 me-1 py-2.5 font-medium text-white flex items-center justify-end"
                > {post.duration}
                </span>
                </div>
              </div>

              <Image width={112} height={112}  src={post.img} alt="" className="rounded-t-lg h-44 w-full object-cover"/>
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

export default live;
