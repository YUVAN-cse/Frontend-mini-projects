import React from "react";
import Charges from "./Charges ";
import Commodity from "./Commodity";
import Hero from "./Hero";
import Currency from "./Currency";
import Equity from "./Equity";
import Explained from "./Explained";
import Rupees from "./Rupees";
import { Outlet } from "react-router-dom"
import PricingNav from "./PricingNav";
export default function PriceCollector() {
    return (
        <>
            <Hero />
            <Rupees />
            <PricingNav />
            <Outlet />
            
            <Charges />
            <Explained />
        </>
    )
}