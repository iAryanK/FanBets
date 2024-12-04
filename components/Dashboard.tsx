"use client";

import { useEffect, useState } from "react";
import useModalStore from "@/hooks/useModalStore";
import Image from "next/image";
import { Button } from "./ui/button";
import { fetchAllProducts } from "@/lib/actions";

const Dashboard = () => {
  const { setShowModal } = useModalStore();
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await fetchAllProducts();
    setProducts(res);
    console.log(res);
  };

  useEffect(() => {
    getAllProducts();

    setTimeout(() => {
      const team = localStorage.getItem("team");
      if (!team) setShowModal(true);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-md:m-5">
      {products.length > 0 &&
        products.map(
          ({ name, description, markedPrice, price, imageurl }, index) => (
            <div
              key={index}
              className="relative drop-shadow-xl w-full h-72 overflow-hidden rounded-xl dark:bg-[#3d3c3d] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="absolute text-white z-[1] opacity-90 rounded-xl inset-0.5  bg-zinc-200  dark:bg-[#323132] p-1 space-y-2">
                <div className="bg-white rounded-xl">
                  <Image
                    src={imageurl}
                    alt={name}
                    width={500}
                    height={500}
                    className="w-full h-48 object-contain"
                  />
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 px-1">
                  {description}
                </p>

                <div className="flex justify-between items-center px-1">
                  <p
                    className="text-sm text-black dark:text-white
                  "
                  >
                    <del> ₹{markedPrice}</del>
                    {"  "}
                    <span> ₹{price}</span>
                  </p>
                  <Button size={"sm"} className="">
                    Buy Now
                  </Button>
                </div>
              </div>
              <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            </div>
          )
        )}
    </div>
  );
};

export default Dashboard;
