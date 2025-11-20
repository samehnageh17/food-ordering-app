import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
import { db } from "@/lib/prisma";
import { getBsetSellers } from "@/Server/db/product";
export default async function BestSellers() {
  const bestSellers = await getBsetSellers();
  return (
    <section>
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading subtitle={`checkOut`} title={`Our best Sellers`} />
        </div>
        <Menu items={bestSellers} />
      </div>
    </section>
  );
}
