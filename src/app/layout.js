import { Inter } from "next/font/google";
import "./globals.css";
import ProviderContext from "@/store/Context";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Script from "next/script";

export const metadata = {
  title: "Dark Store",
  description: "Dark Store e-commerce",
};
const inter = Inter({ subsets: ['latin'] })
const getCategories = async () => {
  try {
    const req = await fetch(`${process.env.baseUrl}/products/category-list`)
    const res = await req.json()
    return res
  } catch (e) {
    return e
  }
}

export default async function RootLayout({ children }) {
  const categoriesData = await getCategories()


  
  return (
    <html style={{ scrollbarColor: "#A61C1C rgba(216, 215, 215, 0.438)", scrollbarWidth: "thin" }} lang="en">

      <Script defer src="https://cloud.umami.is/script.js" data-website-id="0945ca12-dd11-44a9-9292-9a2c9ed505a5"></Script>
      <body className={`${inter.className} antialiased`}>
        <ProviderContext>
          <Header />
          <Nav categoriesData={categoriesData} />
          <ToastContainer />
          {children}
          <Footer />
        </ProviderContext>
      </body>
    </html>
  );
}
