import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import { GlobeAltIcon } from '@heroicons/react/outline'
import { MenuIcon } from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <header className="flex md:grid px-2 py-3 md:p-5 bg-white md:grid-cols-3 items-center shadow-lg z-50 sticky top-0">
            {/* left */}
            <div className="flex h-10 cursor-pointer relative mr-auto">
                <Image
                    src="https://links.papareact.com/qd3"
                    width={130}
                    height={70}
                    // layout="fill"
                    // objectFit="contain"
                    // objectPosition="left"
                    alt=""
                />
            </div>

            {/* middle */}
            <div className="flex items-center border border-gray-200 rounded-[999px] px-4 py-2">
                <input
                    placeholder="Where are you going?"
                    className="w-full bg-transparent outline-none border-none"
                />
                <SearchIcon className="hidden md:inline-block md:h-10 md:bg-[#FD595E] p-2 md:text-white md:rounded-[999px] cursor-pointer" />
            </div>

            {/* right */}
            <div className="ml-auto flex items-center space-x-4">
                <div className="hidden md:flex md:items-center md:space-x-2">
                    <p className="font-medium cursor-pointer">Become a host</p>
                    <GlobeAltIcon className="h-6 text-black cursor-pointer" />
                </div>

                <div className="flex items-center p-2 border border-gray-200 rounded-[999px] space-x-2">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 text-gray-500 cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default Header
