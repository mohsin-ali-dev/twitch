import Link from "next/link";
interface HeadingProps {
    title: string;
    link: string;
}
const Heading = ({ title,link }: HeadingProps) => {
  return (
    <>
<div className="flex justify-between items-center">
<div><h1 className="text-4xl font-medium text-black dark:text-white">{title}</h1></div>
<div><Link href={link}><button type="button" className="py-2 px-4 inline-flex items-center gap-x-2 text-base font-semibold rounded-full text-primary border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:bg-transparent dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
  See All
</button></Link></div>
</div>
    </>
  );
};

export default Heading;
