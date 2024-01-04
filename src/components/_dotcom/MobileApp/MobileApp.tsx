import React from "react";
import Image from "next/image";
import Link from "next/link";

import cn from "@/utilities/cn";
import { appsLinks } from "./_constants";

export type MobileAppProps = React.HTMLAttributes<HTMLDivElement> & {
  layout: "leftTop" | "rightTop";
  contained: boolean;
  title: string;
  subtitle: string;
};

const MobileApp = React.forwardRef<HTMLDivElement, MobileAppProps>(
  ({ title, subtitle, layout = "rightTop", contained = false, className, children, ...props }, ref): JSX.Element => {
    return (
      <div
        role="banner"
        {...props}
        className={cn(
          `flex ${layout === "rightTop" && "flex-row-reverse"} items-end text-white w-full lg:mt-40 ${
            contained ? "" : "md:relative mt-56 "
          } bg-[#051227]`,
          className
        )}
        ref={ref}
      >
        <div className={`lg:w-[40%] w-full ${contained ? "relative" : "absolute"} lg:relative md:z-0`}>
          <div className={`${contained ? "" : "w-full absolute top-0 left-0 z-0"}`}>
            <Image
              src="./phone-mockups.jpg"
              alt={""}
              width={255}
              height={552}
              className={`absolute ${
                contained ? "bottom-0 z-10 left-[40%]" : "bottom-20 left-[75%] md:left-[70%] transform -translate-x-3/4"
              } md:bottom-0 md:z-1 w-52 ${contained ? "w-44 lg:w-64" : "md:w-64"} ${
                layout === "rightTop"
                  ? "lg:left-52 lg:transform-none lg:translate-x-0"
                  : "lg:right-52 lg:left-auto lg:translate-x-0"
              }`}
            />
            <Image
              src="./iPhone-14-pro-mockup.jpg"
              alt={""}
              width={255}
              height={527}
              className={`absolute  ${
                contained ? "bottom-0 z-1 left-0" : "bottom-20 left-[7%] md:left-[25%]"
              } md:bottom-0 md:z-10 transform -translate-x-1/5 w-52 ${contained ? "w-44 lg:w-64" : "md:w-64"} ${
                layout === "rightTop" ? "lg:left-6 lg:translate-x-0" : "lg:right-6 lg:left-auto lg:translate-x-0"
              }`}
            />
          </div>
        </div>

        <div className="w-full bg-[#051227] lg:w-[60%] flex flex-col py-8 lg:py-12 px-4 md:px-10 lg:px-8 z-50">
          <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase italic font-bold">{title}</h1>
          <div className={`flex flex-col ${contained ? "" : "md:flex-row md:justify-between md:gap-x-20"} lg:flex-col`}>
            <p className="text-xl lg:text-2xl py-6">{subtitle}</p>
            <div className={`flex gap-x-4 ${contained ? "flex-col gap-y-2 md:flex-row" : ""}`}>
              {appsLinks.map(link => (
                <button key={link.alt}>
                  <Link href={link.href} target="_blank">
                    <Image src={link.src} alt={link.alt} width={link.width} height={link.height} />
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default MobileApp;
