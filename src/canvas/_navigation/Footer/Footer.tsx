import { FC } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import classNames from 'classnames';
import { UniformSlot } from '@uniformdev/canvas-react';
import { ScreenContainer } from '../../../components/Container';
import { getMediaUrl } from '../../../utilities';
import { FooterProps } from '.';
import { MaxWidth } from '@/utilities/styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const BuildTimestamp = dynamic(() => import('../../../components/BuildTimestamp'), { ssr: false });

export const Footer: FC<FooterProps> = ({ logo, displayBuildTimestamp = false, copyright, styles }) => {
  const imageUrl = getMediaUrl(logo);
  return (
    <div className={classNames('bg-primary px-4', styles?.container)}>
      <ScreenContainer maxWidth={MaxWidth.Large}>
        <footer
          className={classNames(
            'footer py-10 flex flex-col-reverse lg:flex-row justify-between border-info-content w-full',
            styles?.footerSection
          )}
        >
          <div className="text-white text-xs lg:hidden" dangerouslySetInnerHTML={{ __html: `© 2023 ${copyright}` }} />
          <div className="w-full lg:w-3/5 flex items-start justify-start xl:justify-between xl:pr-10">
            <UniformSlot name="section" />
            <div className="w-full flex flex-col md:flex-row items-start justify-start">
              <UniformSlot name="section" />
              <UniformSlot name="section" />
            </div>
          </div>
          <div className="w-full lg:w-2/5 text-white -mb-8 lg:mb-0">
            <Image src={imageUrl} width="200" height="50" alt="Next Level Sports" />
            <div className="footer-title opacity-100 text-white italic text-3xl lg:text-4xl xl:text-5xl">
              Next Level Sports
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
            <div className="my-4 lg:my-8 flex">
              <UniformSlot name="iconLinks" />
            </div>
            <div
              className="hidden lg:block text-white text-sm"
              dangerouslySetInnerHTML={{ __html: `© 2023 ${copyright}` }}
            />
          </div>
        </footer>
      </ScreenContainer>
    </div>
  );
};
