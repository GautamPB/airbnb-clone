import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import { GlobeAltIcon } from '@heroicons/react/outline'
import { MenuIcon } from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <header className="grid p-5 bg-white grid-cols-3 items-center shadow-lg">
            {/* left */}
            <div className="flex h-10 cursor-pointer relative">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    alt=""
                />
            </div>

            {/* middle */}
            <div className="flex items-center border border-gray-200 rounded-[999px] px-4 py-2">
                <input
                    placeholder="Where are you going?"
                    className="w-full bg-transparent outline-none border-none"
                />
                <SearchIcon className="h-10 bg-[#FD595E] p-2 text-white rounded-[999px] cursor-pointer" />
            </div>

            {/* right */}
            <div className="ml-auto flex items-center space-x-4">
                <div className="flex items-center space-x-2">
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
