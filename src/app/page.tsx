import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import BestSellers from "./_components/BestSellers";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
    </main>
  );
}
