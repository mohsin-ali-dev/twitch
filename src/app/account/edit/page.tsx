import { Metadata } from "next";
import Link from "next/link";
import { MdVerified } from "react-icons/md";
import Image from "next/image";
import Input from "@/components/User/Input";
export const metadata: Metadata = {
    title: "Account Edit",
};

const AccEditPage = () => {
    return (
        <>
            <div className="w-full overflow-hidden border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="relative z-20 h-35 md:h-65">
                    <Image
                        src={"/images/cover/cover-01.png"}
                        alt="profile cover"
                        className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
                        width={970}
                        height={260}
                    />
                    <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
                        <label
                            htmlFor="cover"
                            className="flex cursor-pointer items-center justify-center gap-2 bg-black/50 py-2 px-3 text-base font-medium text-white hover:bg-opacity-80 xsm:px-4 rounded-full"
                        >
                            <input type="file" name="cover" id="cover" className="sr-only" />
                            <span>
                                <svg
                                    className="fill-current"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                                        fill="white"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.99992 5.83329C6.03342 5.83329 5.24992 6.61679 5.24992 7.58329C5.24992 8.54979 6.03342 9.33329 6.99992 9.33329C7.96642 9.33329 8.74992 8.54979 8.74992 7.58329C8.74992 6.61679 7.96642 5.83329 6.99992 5.83329ZM4.08325 7.58329C4.08325 5.97246 5.38909 4.66663 6.99992 4.66663C8.61075 4.66663 9.91659 5.97246 9.91659 7.58329C9.91659 9.19412 8.61075 10.5 6.99992 10.5C5.38909 10.5 4.08325 9.19412 4.08325 7.58329Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                            <span>Change Profile Banner</span>
                        </label>
                    </div>
                </div>
                <div className="px-4 pb-4 text-center flex items-center flex-wrap md:flex-nowrap md:justify-between">
                    <div className="flex sm:max-w-70">
                        <div className="relative z-30 -mt-10 h-30 w-full max-w-30 rounded-full bg-white dark:bg-black p-1 backdrop-blur sm:h-40 sm:max-w-40 sm:p-2">
                            <div className="relative drop-shadow-2">
                                <Image
                                    src={"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                    width={160}
                                    height={160}
                                    className="rounded-full h-30 w-30 sm:h-36 sm:w-36 object-cover"
                                    alt="profile"
                                />
                                <label
                                    htmlFor="profile"
                                    className="absolute flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-black/65 text-white hover:bg-opacity-90 bottom-[50%] right-[50%] top-[40%] left-[38%]"
                                >
                                    <svg
                                        className="fill-current"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                                            fill=""
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                                            fill=""
                                        />
                                    </svg>
                                    <input
                                        type="file"
                                        name="profile"
                                        id="profile"
                                        className="sr-only"
                                    />
                                </label>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="px-4 lg:px-10">
                    <form >
                        <div>
                            <div className="mb-4">
                                <h2 className="text-xl text-gray-700 dark:text-gray-200">Display Information</h2>
                            </div>
                            <Input title="Nickname" />
                            <Input title="Username" />
                            <Input title="Blurb" />
                            <div className="mb-3">
                                <label htmlFor="default-input" className="block mb-2 text-base font-semibold text-black dark:text-white">Bio</label>
                                <textarea id="message" rows={4} className="block py-3 px-5 w-full text-base text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your bio here..."></textarea>

                            </div>
                            <div className="mt-4">
                                <div className="mb-4">
                                    <h2 className="text-xl text-gray-700 dark:text-gray-200">Personal Information</h2>
                                </div>
                                <Input title="Mobile Number" />
                                <div className="mb-3">
                                    <label htmlFor="default-input" className="block mb-2 text-base font-semibold text-black dark:text-white">Gender</label>
                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose Gender</option>
  <option value="US">Male</option>
  <option value="CA">Female</option>
</select>
                                </div>
                                <div className="mb-3">
    <label htmlFor="default-input" className="block mb-2 text-base font-semibold text-black dark:text-white">Date of Birth</label>
    <input type="date" id="default-input" className="bg-gray-50 border rounded-full border-gray-300 text-gray-900 text-base focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date of Birth..." />
</div>
<div className="mb-5 mt-6">
<div className="flex items-center justify-end">
<button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-7 py-3 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Discard</button>
<button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-3 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Changes</button>
</div>
</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default AccEditPage;
