"use client";
import { Inter } from "@next/font/google";
import "./globals.css";
import { Box } from "@mui/system";


import Navbar from "./components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
    </>
  );
}
