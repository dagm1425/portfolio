import React from "react";
import Blob from "./Blob";

const Hero = () => {
    return (
        <>
            <Blob />
            <div className="absolute top-32 left-40">
                <h1 className="text-white text-6xl uppercase font-bold">dagmawi</h1>
                <h1 className="text-white text-6xl uppercase font-bold">nebeyu</h1>
            </div>
            <div className="absolute bottom-32 right-40">
                <p className="text-3xl text-white uppercase font-semibold">front-end</p>
                <p className="text-3xl text-white uppercase font-semibold">developer</p>
            </div>
        </>
    )
}

export default Hero;