import Link from "next/link"

export function Navbar() {
  return (
    <div className="h-12 w-full">
      <div className="bg-white  rounded shadow-lg py-5 px-7">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-3 lg:pr-16 pr-6">
            <Link href="/">
              <h2 className="font-normal text-2xl leading-6 text-gray-800 dark:text-white">Sphere Subs 🌐</h2>
            </Link>
          </div>
          <div className="flex space-x-5 justify-center items-center pl-2"></div>
        </nav>
      </div>
    </div>
  )
}
