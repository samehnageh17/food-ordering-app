import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
export default function BestSellers() {
  const bestSellers = [
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a best pizza",
      basePrice: 12,
      image: "/assets/images/pizza.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a best pizza",
      basePrice: 12,
      image: "/assets/images/pizza.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a best pizza",
      basePrice: 12,
      image: "/assets/images/pizza.jpg",
    },
  ];
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
