import Banner1 from "./component/Banner1";
import BestOffer from "./component/BestOffer";
import EventDetails from "./component/EventDetails";
import Footer from "./component/Footer";
import GridItems from "./component/GridItems";
import Holiday from "./component/Holiday";
import Midnight from "./component/Midnight";
import Saleoff from "./component/Saleoff";
import Subscribe from "./component/Subscribe";

export default function App() {
  return (
    <div>
      <div className="flex flex-col gap-[120px] mt-[50px] mx-auto max-w-screen-xl  ">
      <Banner1 />
      <Saleoff /> 
      <Midnight />
      <EventDetails />
      <BestOffer />
      <Holiday />
      <GridItems />
      <Subscribe />

      </div>
      
     <Footer />
    </div>  
    

  )
}
