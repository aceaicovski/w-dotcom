import React from "react";
import cn from "@/utilities/cn";
import Link from "next/link";
import Dropdown from "../DropDown";

type TProgramNavigationLink = {
  href: string;
  name: string;
};

export type ProgramNavigationLinksProps = React.HTMLAttributes<HTMLDivElement> & {
  links: TProgramNavigationLink[];
};

const ProgramNavigationLinks = React.forwardRef<HTMLDivElement, ProgramNavigationLinksProps>(
  ({ className, links, ...props }, ref): JSX.Element => {
    return (
      <div {...props} className={cn("flex items-center justify-start", className)} ref={ref}>
        <ProgramDropdown links={links} />
        {links.map((link, index) => (
          <Link
            key={`${link.href}_${index}`}
            href={link.href}
            className={cn(
              `${
                index === 1
                  ? "bg-primary font-medium text-white opacity-90 hover:opacity-100"
                  : "bg-inherit font-normal text-primary hover:opacity-80"
              }`,
              "mr-1 hidden h-11 items-center justify-center rounded-lg px-4 text-lg md:inline-flex"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    );
  }
);

type ProgramDropdownProps = {
  links: TProgramNavigationLink[];
};

const ProgramDropdown = ({ links }: ProgramDropdownProps) => {
  return (
    <div className="md:hidden">
      <Dropdown>
        <Dropdown.Toggle>Click</Dropdown.Toggle>
        <Dropdown.Menu className="w-52">
          {links.map(link => (
            <Dropdown.Item anchor href={link.href} key={link.href}>
              {link.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ProgramNavigationLinks;
