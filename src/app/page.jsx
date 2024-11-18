import Card from "./components/Home/Card";
import CarouselHeader from "./components/Home/CarouselHeader";
import BestSellProducts from "./components/Home/BestSellProducts";
import Link from "next/link";
import Image from "next/image";
import adsCover from "./components/Home/images/phone.png"
import StatsSection from "./components/Home/StatsSection";

const getProducts = async (skip) => {

  try {
    const req = await fetch(`${process.env.baseUrl}/products?limit=16&skip=${skip}`)
    const res = await req.json()
    return res
  } catch (e) {
    return e
  }
}

export default async function Home() {
  const skipRandom = Math.floor(Math.random() * 194)
  const data = await getProducts(skipRandom);
  return (
    <main >
      <CarouselHeader />
      <div className="container mx-auto px-2 md:px-5">
        <div className="my-5 xl:my-10">
          <BestSellProducts baseUrl={process.env.baseUrl} />
        </div>
        <div className="flex justify-center">
          <Link className="w-full md:w-[80%] relative h-[270px] md:h-[350px] lg:h-[450px] inline-block" href={"/"}>
            <Image
              fill
              sizes="(max-width: 768px) 100vw , (max-width: 1200px) 50vw , 33vw"
              placeholder='blur'
              src={adsCover}
              alt="image cover"
            />
          </Link>
        </div>

        <StatsSection />

        <div className="my-5 md:my-10">
          <h2 className='text-lg md:text-2xl font-semibold text-red1 mb-7'>Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {data.products.map((item) => (
              <div key={item.id}>
                <Card item={item} />
              </div>
            ))}
          </div>
          <div className="my-10 flex justify-center">
            <Link className="bg-red1 text-white py-2.5 px-5 rounded-md inline-block hover:opacity-80" href={"/products"}>View All Products</Link>
          </div>
        </div>

      </div>

    </main>
  );
}
