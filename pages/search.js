import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'

const Search = ({ searchResults }) => {
    const router = useRouter()

    const { location, startDate, endDate, noOfGuests } = router.query

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yyyy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yyyy')

    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div>
            <Head>
                <title>Airbnb - Search {location}</title>
            </Head>

            <Header
                placeholder={`${location} | ${range} | ${noOfGuests} guests`}
            />

            <main className="flex-grow pt-14 px-6">
                <section className="flex flex-col">
                    <p className="text-xs">
                        300+ stays {range} - for {noOfGuests} guest(s)
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in {location}
                    </h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <button className="button">
                            Cancellation Flexibility
                        </button>

                        <button className="button">Type of Place</button>

                        <button className="button">Price</button>

                        <button className="button">Rooms and Beds</button>

                        <button className="button">More Filters</button>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map((item) => (
                            <InfoCard
                                key={item.img}
                                title={item.title}
                                image={item.img}
                                location={item.location}
                                description={item.description}
                                star={item.star}
                                price={item.price}
                                total={item.total}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(
        (res) => res.json()
    )

    return {
        props: {
            searchResults,
        },
    }
}
