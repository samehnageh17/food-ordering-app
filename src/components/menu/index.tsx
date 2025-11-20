import { Product } from "@/generated/prisma/browser";
import MenuItem from "./MenuItem";
import { ProductWithRelations } from "@/types/product";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Menu({ items }: { items: ProductWithRelations[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {items.map((item: ProductWithRelations) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
