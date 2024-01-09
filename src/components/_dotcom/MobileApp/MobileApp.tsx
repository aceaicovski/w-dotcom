import React from "react";
import Image from "next/image";
import Link from "next/link";

import cn from "@/utilities/cn";
import { AppsLinks, defaultAppsLinks, mobileImages } from "./_constants";

export type MobileAppProps = React.HTMLAttributes<HTMLDivElement> & {
  layout: "leftTop" | "rightTop";
  title: string;
  subtitle: string;
  appsLinks: AppsLinks[];
};

const MobileApp = React.forwardRef<HTMLDivElement, MobileAppProps>(
  (
    {
      title = "Next Level Sports on the go",
      subtitle = "Download the Next Level Sports app for iPhone on the App Store",
      layout = "rightTop",
      appsLinks = defaultAppsLinks,
      className,
      children,
      ...props
    },
    ref
  ): JSX.Element => {
    const [androidPhone, iPhone] = mobileImages;
    const { src: androidSrc, alt: androidAlt, width: androidWidth, height: androidHeight } = androidPhone;
    const { src: iPhoneSrc, alt: iPhoneAlt, width: iPhoneWidth, height: iPhoneHeight } = iPhone;

    return (
      <div
        role="banner"
        {...props}
        className={cn(
          `flex ${
            layout === "rightTop" ? "flex-row lg:flex-row-reverse" : ""
          } items-end text-white w-full lg:mt-40 md:relative mt-56 bg-[#051227]`,
          className
        )}
        ref={ref}
      >
        <div className={`lg:w-[40%] w-full absolute lg:relative md:z-0`}>
          <div className={`w-full absolute top-0 left-0 z-0`}>
            <Image
              src={androidSrc}
              alt={androidAlt}
              width={androidWidth}
              height={androidHeight}
              className={`absolute bottom-32 left-[70%] md:left-[70%] transform -translate-x-[70%] md:bottom-0 md:z-1 w-52 md:w-64 lg:w-64 rounded-t-3xl ${
                layout === "rightTop"
                  ? "lg:left-52 lg:transform-none lg:translate-x-0"
                  : "lg:right-52 lg:left-auto lg:translate-x-0"
              }`}
            />
            <Image
              src={iPhoneSrc}
              alt={iPhoneAlt}
              width={iPhoneWidth}
              height={iPhoneHeight}
              className={`absolute bottom-32 left-[10%] md:left-[25%] md:bottom-0 md:z-10 transform -translate-x-[10%] w-52 md:w-64 lg:w-64 rounded-t-3xl ${
                layout === "rightTop" ? "lg:left-6 lg:translate-x-0" : "lg:right-6 lg:left-auto lg:translate-x-0"
              }`}
            />
          </div>
        </div>

        <div className="w-full bg-[#051227] lg:w-[60%] flex flex-col py-8 lg:py-12 px-4 md:px-10 lg:px-8 z-50">
          <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase italic font-bold">{title}</h1>
          <div className={`flex flex-col md:flex-row md:justify-between md:gap-x-20 lg:flex-col`}>
            <p className="text-xl lg:text-2xl py-6">{subtitle}</p>
            <div className={`flex gap-x-4 `}>
              {appsLinks?.map(link => {
                return (
                  <button key={link.alt}>
                    <Link href={link.href ?? "#"} target="_blank">
                      <Image src={link.src} alt={link.alt} width={180} height={50} />
                    </Link>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default MobileApp;
