import { FC } from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { UniformSlot } from "@uniformdev/canvas-react";
import { ScreenContainer } from "../../../components/Container";
import { getMediaUrl } from "../../../utilities";
import { getHeaderColor, getLinksAlignment } from "./helpers";
import { HeaderProps } from ".";
import { MaxWidth } from "@/utilities/styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Button, Logo } from "@/components";

export const Header: FC<HeaderProps> = ({ logo, component, linksAlignment }) => (
  <div className={classNames("px-8 text-primary", getHeaderColor(component.variant))}>
    <ScreenContainer maxWidth={MaxWidth.Large}>
      <div className="navbar px-0">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost px-0 hover:bg-transparent lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-compact w-52 space-y-4 bg-primary p-1 text-white shadow"
            >
              <Logo className="ml-2" color="light" />
              <UniformSlot name="links" />
            </ul>
          </div>
          <Link className="ml-8 lg:ml-0" href="/" title="Next Level Sports">
            <Image src={getMediaUrl(logo)} width="64" height="64" alt="Next Level Sports" className="hidden" />
            <Logo color="dark" />
          </Link>
          <div className={classNames("hidden w-full lg:flex", getLinksAlignment(linksAlignment))}>
            <ul className="menu menu-horizontal shrink-0 px-1">
              <UniformSlot name="links" />
            </ul>
          </div>
        </div>
        <div className="hidden gap-4 sm:flex">
          <div className="dropdown">
            <label tabIndex={1} className="flex items-center justify-center p-1 hover:cursor-pointer">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" size="2x" />
              <FontAwesomeIcon icon={faChevronDown} />
            </label>
            <div className="dropdown-content right-0 top-20 w-max origin-top-right rounded-xl bg-white p-4 shadow">
              <ul tabIndex={1} className="grid grid-cols-2">
                <UniformSlot name="locations" />
              </ul>
            </div>
          </div>
          <Button style="ghost" copy="Register" rounded className="border border-solid border-primary" />
          <Button style="secondary" copy="Log in" rounded />
        </div>
      </div>
    </ScreenContainer>
  </div>
);
