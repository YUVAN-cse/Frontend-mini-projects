import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Trust from "./Trust";
import Account from "../Account";

export default function HomeCollector(){
    return(
        <>
          
            <Hero />
            <Trust />
            <Pricing />
            <Education />
            <Account />
           
        </>
    )
}