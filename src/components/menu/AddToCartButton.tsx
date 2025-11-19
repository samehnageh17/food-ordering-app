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

const sizes = [
  { id: crypto.randomUUID(), label: "Small", price: 0 },
  { id: crypto.randomUUID(), label: "Medium", price: 4 },
  { id: crypto.randomUUID(), label: "Large", price: 8 },
];
const extras = [
  { id: crypto.randomUUID(), label: "TOMATO", price: 2 },
  { id: crypto.randomUUID(), label: "CHEESE", price: 1.5 },
  { id: crypto.randomUUID(), label: "ONION", price: 1.5 },
];
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AddToCartButton({ item }: { item?: any }) {
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
              <PickSize sizes={sizes} item={item} />
            </div>
            <div className="text-center">
              <Label htmlFor="any-extra">Any extra</Label>
            </div>
            <div>
              <Extra extra={extras} item={item} />
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PickSize({ sizes, item }: { sizes: any; item: any }) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div key={size.id} className="flex items-center gap-3">
          <RadioGroupItem value="default" id={size.id} />
          <Label htmlFor={size.id}>
            {size.label} {formatCurrency(size.price + item.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Extra({ extra, item }: { extra: any; item: any }) {
  return (
    <div className="flex flex-col gap-6">
      {extra.map((extraItem) => (
        <div
          key={extraItem.id}
          className="flex items-center space-x-3 border border-gray-200 rounded-md p-2"
        >
          <Checkbox id={extraItem.id} />
          <Label
            htmlFor={extraItem.id}
            className="text-sm text-accent font-medium leading-none peer-disabled  "
          >
            {extraItem.label} — {formatCurrency(extraItem.price)}
          </Label>
        </div>
      ))}
    </div>
  );
}
