import { useState } from "react"
import { Map, Marker } from "pigeon-maps"

const Maps = () => {
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
    return (
        <div className="container mx-auto">
            <h2 className="text-5xl text-red-500 font-bold text-center pb-5">My Location</h2>
            <Map className='rounded-3xl' height={400} defaultCenter={[24.45, 90.24]} defaultZoom={11}>
                <Marker
                    width={50}
                    anchor={[ 25.0901617, 90.5234193]}
                    color={color}
                    onClick={() => setHue(hue + 20)}
                />
            </Map>
        </div>
    );
};

export default Maps;