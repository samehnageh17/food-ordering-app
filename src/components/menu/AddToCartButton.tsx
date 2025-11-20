import React from "react";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// import { Button } from "../ui/button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "@radix-ui/react-checkbox";
import { formatCurrency } from "@/lib/formatters";
import { Product, Size, Adds } from "@/generated/prisma/browser";
import { db } from "@/lib/prisma";
import { it } from "node:test";
import { Item } from "@radix-ui/react-radio-group";
import { ProductWithRelations } from "@/types/product";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AddToCartButton({
  item,
}: {
  item: ProductWithRelations;
}) {
  return (
    <Dialog>
      <form className="overflow-y-auto">
        <DialogTrigger asChild>
          <Button
            type="button"
            size="lg"
            className="mt-4 text-white rounded-full !px-8"
          >
            Add to Cart
          </Button>
        </DialogTrigger>
        <DialogContent className="  overflow-y-auto  sm:max-w-[425px] max-h-[800vh]  ">
          <DialogHeader className="flex items-center">
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="rounded-full"
            />
            <DialogTitle>{item.name}</DialogTitle>
            <DialogDescription className="text-center">
              {item.description}
            </DialogDescription>
          </DialogHeader>
          <div className=" space-y-10">
            <div className="text-center">
              <Label htmlFor="pick-size">Pick Your Size</Label>
            </div>
            <div>
              <PickSize sizes={item.sizes} item={item} />
            </div>
            <div className="text-center">
              <Label htmlFor="any-extra">Any extra</Label>
            </div>
            <div>
              <Extra extra={item.extras} item={item} />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" className="w-full h-10">
                Add To Cart {}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

function PickSize({
  sizes,
  item,
}: {
  sizes: Size[];
  item: ProductWithRelations;
}) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div key={size.id} className="flex items-center gap-3">
          <RadioGroupItem value="default" id={size.id} />
          <Label htmlFor={size.id}>
            {size.name} {formatCurrency(size.price + item.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Extra({ extra, item }: { extra: Adds[]; item: ProductWithRelations }) {
  return (
    <div className="flex flex-col gap-6">
      {extra.map((extraItem: Adds) => (
        <div
          key={extraItem.id}
          className="flex items-center space-x-3 border border-gray-200 rounded-md p-2"
        >
          <Checkbox id={extraItem.id} />
          <Label
            htmlFor={extraItem.id}
            className="text-sm text-accent font-medium leading-none peer-disabled  "
          >
            {extraItem.name} — {formatCurrency(extraItem.price)}
          </Label>
        </div>
      ))}
    </div>
  );
}
