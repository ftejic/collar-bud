import { RulerIcon, ScissorsLineDashedIcon, TruckIcon } from "lucide-react";
import React from "react";

function Desc() {
  return (
    <section className="py-10 bg-gradient-to-r from-gradient-start to-gradient-end">
      <div className="container mx-auto">
        <ul className="text-center lg:flex justify-around space-y-10 lg:space-y-0">
          <li className="flex flex-col items-center font-bold">
            <ScissorsLineDashedIcon className="w-8 h-8 lg:mb-2" />
            <p>
              Crafted with care, using high-quality{" "}
              <span className="inline min-[375px]:block">materials.</span>
            </p>
          </li>
          <li className="flex flex-col items-center font-bold">
            <RulerIcon className="w-8 h-8 mb-2" />
            <p>
              Available in various sizes to fit all{" "}
              <span className="min-[375px]:block">breeds.</span>
            </p>
          </li>
          <li className="flex flex-col items-center font-bold">
            <TruckIcon className="w-8 h-8 mb-2" />
            <p>
              Fast and reliable shipping to your{" "}
              <span className="min-[375px]:block">doorstep.</span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Desc;
