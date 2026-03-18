import React from "react";  
import Addon from "./Addon";
import People from "./People";
import Hero from "./Hero";
import Team from "./Team";

export default function AboutCollector(){
    return (
        <>
            <Hero />
            <Addon />
            <People />
            <Team />
        </>
    )
}