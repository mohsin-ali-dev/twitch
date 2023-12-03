import { Metadata } from "next";
import { MdVerified } from "react-icons/md";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Following",
  description: "",
};
const data =[
    {
        id:1,
        img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        name:'Miracle',
        num:'12.9K',
        bag:1,
    },
    {
        id:2,
        img:'https://images.unsplash.com/photo-1591596342804-0ccac19f5a8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Ayesha',
        num:'12.9K',
        bag:1,
    },
    {
        id:3,
        img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Shround',
        num:'12.9K',
        bag:0,
    },
    {
        id:4,
        img:'https://images.unsplash.com/photo-1549068106-b024baf5062d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Ahmad',
        num:'12.9K',
        bag:1,
    },
    {
        id:5,
        img:'https://images.unsplash.com/photo-1566039263025-caf125cd0994?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Gigi Hadid',
        num:'12.9K',
        bag:1,
    },
    {
        id:6,
        img:'https://images.unsplash.com/photo-1591625394004-97db93720f06?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Keyline',
        num:'12.9K',
        bag:0,
    }
]

const Following = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="flex items-center">
<div><h1 className="text-4xl font-medium text-black dark:text-white">Following</h1></div>
</div>
<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-5 pt-5 sm:mt-4  lg:mx-0 lg:max-w-none sm:grid-cols-2 md:grid-cols-3">
{data.map((data) => (
<div key={data.id} className="mt-5 flex justify-between items-center py-5 rounded-lg shadow-lg bg-gray-100 px-5"  >
    <div className="flex items-center">
    <span>
        <Image 
    className="rounded-full object-center object-cover me-2 h-18 w-18"
    width={112}
    height={112}
    src={data.img}
    alt={data.name}
    style={{'imageRendering':'pixelated'}}
     />
    </span>
        <span>
        {data.bag === 1 ? (
                    <span className="flex items-center">
                      <h4 className="text-lg font-semibold text-black">{data.name}</h4>
                      <MdVerified className="text-lg text-blue-700 ms-1" />
                    </span>
                  ) : (
                    <h4 className="text-lg font-semibold text-black">{data.name}</h4>
                  )}
<p className="text-gray-500">{data.num} followers</p>
        </span>
    </div>
    <div>
    <button type="button" key={data.id} className="me-4 flex items-center text-blue-700 bg-[#1a57db13]  border border-blue-700 focus:outline-none font-semibold rounded-full text-base px-5 py-3 text-center ">Following</button>
    </div>
</div>
))}
</div>
</div>
    </>
  );
};

export default Following;
