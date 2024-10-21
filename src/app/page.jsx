import Card from "./components/Home/Card";
import CarouselHeader from "./components/Home/CarouselHeader";
import Sidebar from "./components/Home/Sidebar";
import BestSellProducts from "./components/Home/BestSellProducts";
import Link from "next/link";
import Image from "next/image";
import adsCover from "./components/Home/images/adsCover.png"


const getProducts = async () => {
  const skipRandom = Math.floor(Math.random() * 194)

  try {
    const req = await fetch(`${process.env.baseUrl}/products?limit=12&skip=${skipRandom}`)
    const res = await req.json()
    return res
  } catch (e) {
    return e
  }
}

export default async function Home() {

  const data = await getProducts()

  return (
    <main className="px-2 md:px-5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 lg:grid-cols-4 md:gap-5 lg:gap-10 ">
          <div className="border-e mt-5 md:mt-0 md:col-span-2 lg:col-span-1  p-2 order-2 md:order-1 border-gray-400 ">
            <Sidebar />
          </div>
          <div className="md:col-span-3  md:order-1">
            <CarouselHeader />
          </div>
        </div>

        <div className="my-5 md:my-20">
          <BestSellProducts baseUrl={process.env.baseUrl} />
        </div>
        <div className="flex justify-center">
          <Link href={"/"}>
            <Image
              sizes="(min-width: 808px) 50vw, 100vw"
              placeholder='blur'
              src={adsCover}
              alt="image cover"
            />
          </Link>
        </div>
        <div className="my-5 md:my-20">
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
