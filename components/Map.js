import ReactMapGl from 'react-map-gl'
import { useState } from 'react'

const Map = () => {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11,
    })

    return (
        <ReactMapGl
            mapStyle="mapbox://styles/gautampb/cks4f21e94tq617pdyx1axebl"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        ></ReactMapGl>
    )
}

export default Map
