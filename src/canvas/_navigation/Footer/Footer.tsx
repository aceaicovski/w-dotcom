import { FC } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import classNames from "classnames";
import { UniformSlot } from "@uniformdev/canvas-react";
import { ScreenContainer } from "../../../components/Container";
import { getMediaUrl } from "../../../utilities";
import { FooterProps } from ".";
import { MaxWidth } from "@/utilities/styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const BuildTimestamp = dynamic(() => import("../../../components/BuildTimestamp"), { ssr: false });

export const Footer: FC<FooterProps> = ({
  logo,
  hideLogo = false,
  displayBuildTimestamp = false,
  copyright,
  styles,
}) => {
  const imageUrl = getMediaUrl(logo);
  return (
    <div className={classNames("bg-primary px-4", styles?.container)}>
      <ScreenContainer maxWidth={MaxWidth.Large}>
        <footer
          className={classNames(
            "footer flex w-full flex-col-reverse justify-between border-info-content py-10 lg:flex-row",
            styles?.footerSection
          )}
        >
          <div className="text-xs text-white lg:hidden" dangerouslySetInnerHTML={{ __html: `© 2023 ${copyright}` }} />
          <div className="flex w-full items-start justify-start lg:w-3/5 xl:justify-between xl:pr-10">
            <UniformSlot name="section" />
          </div>
          <div className="-mb-8 w-full text-white lg:mb-0 lg:w-2/5">
            {!hideLogo && <Image src={imageUrl} width="200" height="50" alt={copyright} />}
            <div className="footer-title text-3xl italic text-white opacity-100 lg:text-4xl xl:text-5xl">
              {copyright}
            </div>
            <div className="flex items-center justify-start">
              <FontAwesomeIcon icon={faLocationDot} className="mr-3" />
              <div className="text-sm lg:text-base">385 1st Avenue, San Mateo, California 94401</div>
            </div>
            <div className="flex items-center justify-start">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
              <div className="text-sm lg:text-base">support@nextlevelsports.com</div>
            </div>
            {displayBuildTimestamp && <BuildTimestamp style={styles?.buildTimestamp} />}
            <div className="my-4 flex lg:my-8">
              <UniformSlot name="iconLinkSocial" />
            </div>
            <div
              className="hidden text-sm text-white lg:block"
              dangerouslySetInnerHTML={{ __html: `© 2024 ${copyright}` }}
            />
          </div>
        </footer>
      </ScreenContainer>
    </div>
  );
};
