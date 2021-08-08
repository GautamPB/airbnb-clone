import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import { GlobeAltIcon } from '@heroicons/react/outline'
import { MenuIcon } from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'
import { UsersIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useRouter } from 'next/dist/client/router'

const Header = ({ placeholder }) => {
    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [guests, setGuests] = useState(1)
    const router = useRouter()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const searchFunction = () => {
        router.push({
            pathname: '/search',
            query: {
                location: search,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests: guests,
            },
        })
        setSearch('')
    }

    return (
        <header className="grid px-2 py-3 md:p-5 bg-white grid-cols-3 items-center shadow-lg z-50 sticky top-0">
            {/* left */}
            <div
                className="flex h-10 cursor-pointer relative mr-auto"
                onClick={() => router.push('/')}
            >
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
            <div className="flex items-center border border-gray-200 rounded-[999px] px-4 py-2 w-full">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={
                        !placeholder ? 'Where are you going?' : placeholder
                    }
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

            {search && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#fd5861']}
                        onChange={handleSelect}
                    />

                    <div className="flex items-center border-b mb-4">
                        <h2 className="font-bold text-2xl flex-grow">
                            Number of Guests
                        </h2>
                        <UsersIcon className="h-5" />
                        <input
                            min={1}
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            type="number"
                            className="w-12 pl-2 outline-none text-lg text-red-400"
                        />
                    </div>
                    <div className="flex">
                        <button
                            className="flex-grow text-gray-500"
                            onClick={() => setSearch('')}
                        >
                            Cancel
                        </button>
                        <button
                            className="flex-grow text-red-400"
                            onClick={searchFunction}
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
