import ProductCard from "@/components/Product/ProductCard";
import { ProductType } from "@/lib/prisma";

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/products/?cat=cat", {
      cache: "no-store",
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function ForCats() {
  const { data }: { data: ProductType[] } = await getData();

  return (
    <section className="container mx-auto mt-[68px] md:mt-[124px] lg:mt-[152px] py-10 md:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 lg:gap-10">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            category={product.category}
            name={product.name}
            price={product.price}
            sizes={product.sizes}
            images={product.images}
          />
        ))}
      </div>
    </section>
  );
}

export default ForCats;
