import React from "react";

export type ProfileImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const ProfileImage = React.forwardRef<HTMLElement, ProfileImageProps>(({ ...props }, ref) => {
  return (
    <div className="flex shrink-0 w-full h-auto rounded-lg md:row-span-2 lg:row-span-3">
      <figure ref={ref} className="block w-full rounded-lg">
        <img {...props} className="w-full h-full md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] rounded-lg" />
      </figure>
    </div>
  );
});
