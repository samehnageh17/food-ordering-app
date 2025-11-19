import Link from "@/components/link/index";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Routes } from "@/constants/enums";
import { ArrowRightCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="section-gap">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="md:py-12">
          <h1 className="text-4xl font-semibold"> Slice into Happiness</h1>
          <p className="text-accent my-4">
            Craving pizza? We&apos;ve got you covered with fresh ingredients,
            endless flavors, and speedy delivery. Order now and treat yourself
            to a slice of heaven!
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${Routes.MENU}`}
              className={`${buttonVariants({
                size: "lg",
              })} space-x-2 !px-4 !rounded-full uppercase`}
            >
              Order Now
              <ArrowRightCircle className={`!w-5 !h-5`} />
            </Link>
            <Link
              href={`/${Routes.ABOUT}`}
              className="flex gap-2 items-center text-black hover:text-primary duration-100 "
            >
              Learn more
              <ArrowRightCircle className={`!w-5 !h-5`} />
            </Link>
          </div>
        </div>

        <div className="relative hidden md:block h-[300px] w-full">
          <Image
            src="/assets/images/pizza.jpg"
            alt="Pizza Image"
            fill
            loading="eager"
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
