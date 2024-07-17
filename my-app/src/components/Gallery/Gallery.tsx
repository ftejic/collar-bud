import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Img1 from "../../../public/images/gallery/1.jpeg";
import Img2 from "../../../public/images/gallery/2.jpeg";
import Img3 from "../../../public/images/gallery/3.jpeg";
import Img4 from "../../../public/images/gallery/4.jpeg";
import Img5 from "../../../public/images/gallery/5.png";
import Img6 from "../../../public/images/gallery/6.png";

function Gallery() {
  return (
    <section id="gallery" className="container py-10 md:py-16">
      <h2 className="font-unbounded text-center font-bold text-2xl mb-5">
        Gallery
      </h2>
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
            <Image
              src={Img1}
              alt="1"
              priority={false}
              placeholder="blur"
              className="w-full h-auto"
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
            <Image
              src={Img2}
              alt="2"
              priority={false}
              className="w-full h-auto"
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
            <Image
              src={Img3}
              alt="3"
              priority={false}
              className="w-full h-auto"
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
            <Image
              src={Img4}
              alt="4"
              priority={false}
              className="w-full h-auto"
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
            <Image
              src={Img5}
              alt="5"
              priority={false}
              className="w-full h-auto"
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
            <Image
              src={Img6}
              alt="6"
              priority={false}
              className="w-full h-auto"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default Gallery;
