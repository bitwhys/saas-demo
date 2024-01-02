export const SiteHeader = () => {
  return (
    <header className="">
      <nav className="mx-auto flex max-w-6xl items-center justify-between py-4" aria-label="Global">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Entry Jobs</span>
          <svg className="h-8" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M227.982 63.7039L479.649 314.352V448.911H362.204V362.724L179.415 180.673H141.445V448.911H24V63.7039H227.982ZM362.204 197.383V63.7039H479.649V197.383H362.204Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <div className="flex flex-1 justify-end">
          <a href="#" className="text-sm font-medium leading-6 text-gray-900">
            Skip
          </a>
        </div>
      </nav>
    </header>
  )
}
