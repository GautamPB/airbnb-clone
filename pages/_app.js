import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

const progress = new ProgressBar({
    size: 8,
    color: '#fe595e',
    className: 'z-50',
    delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeStart', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp
