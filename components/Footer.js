const Footer = () => {
    return (
        <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p className="cursor-pointer hover:underline">
                    How Airbnb works
                </p>
                <p className="cursor-pointer hover:underline">Newsroom</p>
                <p className="cursor-pointer hover:underline">Investors</p>
                <p className="cursor-pointer hover:underline">Airbnb Plus</p>
                <p className="cursor-pointer hover:underline">Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p className="cursor-pointer hover:underline">Accessibility</p>
                <p className="cursor-pointer hover:underline">
                    This is not a real site
                </p>
                <p className="cursor-pointer hover:underline">
                    Pretty awesome clone
                </p>
                <p className="cursor-pointer hover:underline">
                    Referrals accepted
                </p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p className="cursor-pointer hover:underline">Host your home</p>
                <p className="cursor-pointer hover:underline">
                    Host an online experience
                </p>
                <p className="cursor-pointer hover:underline">
                    Responsible Hosting
                </p>
                <p className="cursor-pointer hover:underline">
                    Community Centre
                </p>
                <p className="cursor-pointer hover:underline">
                    Resource Centre
                </p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p className="cursor-pointer hover:underline">
                    Our Covid-19 Response
                </p>
                <p className="cursor-pointer hover:underline">Help Centre</p>
                <p className="cursor-pointer hover:underline">
                    Cancellation Options
                </p>
                <p className="cursor-pointer hover:underline">
                    Neighbourhood Support
                </p>
                <p className="cursor-pointer hover:underline">
                    Trust and Safety{' '}
                </p>
            </div>
        </div>
    )
}

export default Footer
