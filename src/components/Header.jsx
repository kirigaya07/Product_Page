export default function Header() {
  return (
    <header className="flex shadow-sm bg-white font-[sans-serif] min-h-[70px]">
      <div className="flex flex-wrap items-center justify-between sm:px-10 px-6 py-3 relative lg:gap-y-4 gap-y-6 gap-x-4 w-full">
        <div className="flex">
          <a href="/" className="ml-8">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-36"
            />
          </a>
        </div>

        <div className="bg-gray-100 flex border-2 rounded max-md:order-1 border-transparent focus-within:border-blue-500 focus-within:bg-transparent px-4 h-11 lg:w-2/4 max-md:w-full">
          <input
            type="email"
            placeholder="Search..."
            className="w-full outline-none bg-transparent text-[#333] text-sm"
          />
        </div>

        <div className="flex items-center space-x-8 max-md:ml-auto"></div>
      </div>
    </header>
  );
}
