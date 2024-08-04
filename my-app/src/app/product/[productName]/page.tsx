import PetNameForm from "@/components/Product/PetNameForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Product as ProductType } from "@/lib/prisma";
import formatPrice from "@/lib/formatPrice";

async function getData(productName: string) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/products/?name=${productName}`,
      { cache: "no-store" }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function ProductPage({ params }: { params: { productName: string } }) {
  const productName = decodeURI(params.productName);

  const { data }: {data: ProductType[]} = await getData(productName);
  const product = data[0];

  return (
    <section className="container mx-auto mt-[68px] md:mt-[124px] lg:mt-[152px] py-10 md:py-16 flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-10">
      <div className="sm:w-1/2">
        <Carousel className="w-full">
          <CarouselContent>
            {product.images.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  src={image}
                  alt=""
                  width={600}
                  height={600}
                  className="rounded-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="sm:w-1/2 space-y-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xs" href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xs" href="/create-collar">
                Create Collar
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-xs"
                href={`/create-collar/for-${product.category}s`}
              >
                For {product.category.charAt(0).toUpperCase() + product.category.slice(1)}s
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xs">{product.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 className="font-unbounded font-bold text-2xl pt-5">
          {product.name}
        </h2>
        <h2 className="font-unbounded font-bold text-2xl">{formatPrice(product.price)}&#8364;</h2>
        <PetNameForm />
      </div>
    </section>
  );
}

export default ProductPage;
