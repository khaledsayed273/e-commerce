import { Inter } from "next/font/google";
import "./globals.css";
import ProviderContext from "@/store/Context";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Script from "next/script";
import { cookies } from "next/headers";

export const metadata = {
  title: "Dark Store",
  description: "Dark Store e-commerce",
};
const inter = Inter({ subsets: ['latin'] })

const getCategories = async () => {
  try {
    const req = await fetch(`${process.env.baseUrl}/products/category-list`);
    const res = await req.json();
    return res;
  } catch (e) {
    return false;
  }
}

export default async function RootLayout({ children }) {
  const categoriesData = await getCategories();
  const cookieStore = await cookies();
  const initialTheme = cookieStore.get("theme")?.value;
  return (
    <html
      className={`transition-all dark:bg-neutral-950 duration-300 ${initialTheme === "dark" ? "dark" : ""}`}
      style={{
        scrollbarColor: "#A61C1C rgba(216, 215, 215, 0.438)",
        scrollbarWidth: "thin"
      }}
      lang="en">
      <Script
        id="script"
        defer
        src="/script.js"
        data-website-id="114e5419-ed6c-4dfa-a261-508da0110e36">
      </Script>
      <body className={`${inter.className} antialiased`}>
        <ProviderContext initialTheme={initialTheme}>
          <Header />
          {categoriesData !== false && (
            <Nav categoriesData={categoriesData} />
          )}
          <ToastContainer />
          {children}
          <Footer />
        </ProviderContext>
      </body>
    </html>
  );
}
