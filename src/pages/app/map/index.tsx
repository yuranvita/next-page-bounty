import dynamic from "next/dynamic"

const MapWithNoSSR = dynamic(() => import('./map'), { ssr: false })

export default function MapView() {
    return (
        <div>
            <MapWithNoSSR />
        </div>
    )
}