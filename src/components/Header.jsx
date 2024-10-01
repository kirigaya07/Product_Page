export default function Header() {
  return (
    <header className="flex shadow-sm bg-white font-[sans-serif] min-h-[70px]">
      <div className="flex flex-wrap items-center justify-between sm:px-10 px-6 py-3 relative lg:gap-y-4 gap-y-6 gap-x-4 w-full">
        <div className="flex">
          <a href="/" className="ml-8">
            <img src="/cover.png" alt="logo" className="w-36 h-full" />
          </a>
        </div>

        <div className="flex items-center space-x-8 max-md:ml-auto"></div>
      </div>
    </header>
  );
}
