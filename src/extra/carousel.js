import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./fe_carousel.css"
import Digital from "./digital.png"
import Next from "./next.png"
import ImageWithLoader from "./image_with_loader"
const FeCarousel = ()=>{
    return(
        <Carousel autoPlay infiniteLoop showThumbs={false} dynamicHeight={false}>
            <div className="fe-carousel">
                <ImageWithLoader alternativeText="digital " imageUrl={Digital}/>
                
            </div>
            <div className="fe-carousel">
                <ImageWithLoader alternativeText="next" imageUrl={Next}/>
               
            </div>
        </Carousel>
    )
}
export default FeCarousel