
import React from "react";
import Hero from "./Hero";
import Account from "../Account";
import Signup from "./Signup";

export default function SignupCollector(){
    return (
        
        <>
            <Hero />
            <Signup/>
            <Account />
        </>
    )
}