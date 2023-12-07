interface InputProps {
    title: string;
}
const Input = ({ title }: InputProps) => {
  return (
    <>
<div className="mb-3">
    <label htmlFor="default-input" className="block mb-2 text-base font-semibold text-black dark:text-white">{title}</label>
    <input type="text" id="default-input" className="bg-gray-50 border rounded-full border-gray-300 text-gray-900 text-base focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`${title}...`} />
</div>
    </>
  );
};

export default Input;
