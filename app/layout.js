// import { Inter }  from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

// const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: "TodoList App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={inter.className}
      >
        <Navbar />
        {children}
        <p className="text-center text-1xl text-gray-500 mt-20 mb-10">Developer By Madaale-Designer-Developer using Next Js</p>
      </body>
    </html>
  );
}
