import React from "react";
import Hero from "./Hero";
import Images from "./Images";
import Universe from "./Universe";
import RightImage from "./RightImage";
import LeftImage from "./LeftImage";


export default function ProductCollector(){
    return (
        <>
            <Hero />
            <LeftImage imageURL={"media\\images\\products-kite.png"} title={"Kite"} description={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} demo={"Try demo"} learnMore={"Learn more"} googlePlay={"Google Play"} appStore={"App Store"} />
            <RightImage imageURL={"media\\images\\landing.svg"} title={"Console"} description={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." } demo={"Learn more "}/>
            <LeftImage imageURL={"media\\images\\products-coin.png"} title={"Coin"} description={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} demo={"Coin"} googlePlay={"Google Play"} appStore={"App Store"} />
            <RightImage imageURL={"media\\images\\landing.svg"} title={"Zerodha"} description={"The Zerodha app for Android and iOS. Download the app to trade with ease on your phone or tablet."} demo={"Learn more"}/>
            <LeftImage imageURL={"media\\images\\varsity-products.png"} title={"Varsity mobile"} description={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."} googlePlay={"Google Play"} appStore={"App Store"} />
            <Universe />
            <Images />
        </>
    )
}