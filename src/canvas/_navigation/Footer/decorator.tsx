import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ScreenContainer } from '../../../components/Container';
import { MaxWidth } from '@/utilities/styling';

const BuildTimestamp = dynamic(() => import('../../../components/BuildTimestamp'), { ssr: false });

// This placeholder is used as a background on the visual editing workspace of the patterns
// Activate visual editing doc: https://docs.uniform.app/docs/guides/composition/visual-editing/activate-visual-editing
export const FooterPlaceholder = () => (
  <div className="bg-primary px-4">
    <ScreenContainer maxWidth={MaxWidth.Large}>
      <footer className="footer py-10 flex flex-col-reverse md:flex-row justify-between border-info-content w-full">
        <div className="w-full lg:w-2/3 flex items-start justify-start">
          <div className="mr-6">
            <span className="footer-title opacity-100 text-white normal-case">Company</span>
            <ul className="list-none">
              <li>Documentation</li>
              <li>Storybook</li>
              <li>Demo</li>
            </ul>
          </div>
          <div>
            <span className="footer-title opacity-100 text-white normal-case">Help</span>
            <li>Documentation</li>
            <li>Storybook</li>
            <li>Demo</li>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <BuildTimestamp />
          <div
            className="footer-content text-white"
            dangerouslySetInnerHTML={{ __html: `2023 Uniform Systems, Inc. All rights reserved.` }}
          />
          <div className="footer-content text-white">
            <span>
              Built with 💙 by folks at Uniform , standing on the shoulders of these awesome open source projects:
              TailwindCSS , DaisyUI , React , and Next.js . Deployed to Vercel .
            </span>
          </div>
          <div className="flex">
            <Image
              src="https://res.cloudinary.com/uniform-demos/image/upload/v1692277665/csk-icons/storybook_n7x1fd_s5rm32.svg"
              width="24"
              height="24"
              alt="iconLink"
            />
            <Image
              src="https://res.cloudinary.com/uniform-demos/image/upload/v1692277704/csk-icons/github-black_izszuz_voscka.svg"
              width="24"
              height="24"
              alt="iconLink"
            />
          </div>
        </div>
      </footer>
    </ScreenContainer>
  </div>
);
