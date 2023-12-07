import Link from "next/link";
const AccountTab = () => {
  return (
    <>
<div className="text-md font-medium text-center text-gray-500  dark:text-gray-400  mt-5">
    <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
            <a href="" className="inline-block px-4 py-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Broadcast</a>
        </li>
        <li className="me-2">
            <Link href="/your-videos/clips" className={`border-b-2 border-transparent inline-block px-4 py-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 `}>Clips</Link>
        </li>
        <li className="me-2">
            <Link href="/your-videos/clips" className={`border-b-2 border-transparent inline-block px-4 py-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 `}>Videos</Link>
        </li>
        <li className="me-2">
            <Link href="/your-videos/clips" className={`border-b-2 border-transparent inline-block px-4 py-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 `}>About</Link>
        </li>
    </ul>
</div>
    </>
  );
};

export default AccountTab;
