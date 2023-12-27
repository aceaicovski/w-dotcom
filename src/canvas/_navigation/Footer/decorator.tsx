import { ScreenContainer } from '../../../components/Container';
import { MaxWidth } from '@/utilities/styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// This placeholder is used as a background on the visual editing workspace of the patterns
// Activate visual editing doc: https://docs.uniform.app/docs/guides/composition/visual-editing/activate-visual-editing
export const FooterPlaceholder = () => (
  <div className="bg-primary px-4">
    <ScreenContainer maxWidth={MaxWidth.Large}>
      <footer className="footer py-10 flex flex-col-reverse lg:flex-row justify-between border-info-content w-full">
        <div
          className="text-white text-xs lg:hidden"
          dangerouslySetInnerHTML={{ __html: `© 2023 Next Level Sports` }}
        />
        <div className="w-full lg:w-3/5 flex items-start justify-start xl:justify-between xl:pr-10">
          <div className="mr-6 xl:mx-12">
            <span className="footer-title opacity-100 text-white normal-case text-lg lg:text-xl xl:text-2xl">
              Company
            </span>
            <ul className="list-none mt-4 space-y-4">
              <li>Documentation</li>
              <li>Storybook</li>
              <li>Demo</li>
            </ul>
          </div>
          <div className="w-full flex flex-col md:flex-row items-start justify-start">
            <div className="md:mr-6 xl:mr-12">
              <span className="footer-title opacity-100 text-white normal-case text-lg lg:text-xl xl:text-2xl">
                Help
              </span>
              <ul className="list-none mt-4 space-y-4">
                <li>FAQ</li>
                <li>General Flag Football Operations</li>
                <li>General Basketball Operations</li>
                <li>General Volleyball Operations</li>
                <li>General Camps Operations</li>
              </ul>
            </div>
            <div>
              <span className="hidden footer-title text-primary text-lg md:block lg:text-xl xl:text-2xl">La</span>
              <ul className="list-none mt-4 space-y-4">
                <li>Rostering Policy</li>
                <li>Refund Policy</li>
                <li>Privacy Policy</li>
                <li>Children’s Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 text-white -mb-8 lg:mb-0">
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
          <div className="my-4 lg:my-8 flex">
            <div className="flex items-center justify-center w-8 h-8 border border-solid border-white rounded-full mr-4 hover:opacity-60">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.25 12C20.25 15.875 17.4062 19.0938 13.6875 19.6562V14.25H15.5L15.8438 12H13.6875V10.5625C13.6875 9.9375 14 9.34375 14.9688 9.34375H15.9375V7.4375C15.9375 7.4375 15.0625 7.28125 14.1875 7.28125C12.4375 7.28125 11.2812 8.375 11.2812 10.3125V12H9.3125V14.25H11.2812V19.6562C7.5625 19.0938 4.75 15.875 4.75 12C4.75 7.71875 8.21875 4.25 12.5 4.25C16.7812 4.25 20.25 7.71875 20.25 12Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center w-8 h-8 border border-solid border-white rounded-full mr-4 hover:opacity-60">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 3.40625C9.46875 3.40625 11.0938 5.03125 11.0938 7C11.0938 9 9.46875 10.5938 7.5 10.5938C5.5 10.5938 3.90625 9 3.90625 7C3.90625 5.03125 5.5 3.40625 7.5 3.40625ZM7.5 9.34375C8.78125 9.34375 9.8125 8.3125 9.8125 7C9.8125 5.71875 8.78125 4.6875 7.5 4.6875C6.1875 4.6875 5.15625 5.71875 5.15625 7C5.15625 8.3125 6.21875 9.34375 7.5 9.34375ZM12.0625 3.28125C12.0625 2.8125 11.6875 2.4375 11.2188 2.4375C10.75 2.4375 10.375 2.8125 10.375 3.28125C10.375 3.75 10.75 4.125 11.2188 4.125C11.6875 4.125 12.0625 3.75 12.0625 3.28125ZM14.4375 4.125C14.5 5.28125 14.5 8.75 14.4375 9.90625C14.375 11.0312 14.125 12 13.3125 12.8438C12.5 13.6562 11.5 13.9062 10.375 13.9688C9.21875 14.0312 5.75 14.0312 4.59375 13.9688C3.46875 13.9062 2.5 13.6562 1.65625 12.8438C0.84375 12 0.59375 11.0312 0.53125 9.90625C0.46875 8.75 0.46875 5.28125 0.53125 4.125C0.59375 3 0.84375 2 1.65625 1.1875C2.5 0.375 3.46875 0.125 4.59375 0.0625C5.75 0 9.21875 0 10.375 0.0625C11.5 0.125 12.5 0.375 13.3125 1.1875C14.125 2 14.375 3 14.4375 4.125ZM12.9375 11.125C13.3125 10.2188 13.2188 8.03125 13.2188 7C13.2188 6 13.3125 3.8125 12.9375 2.875C12.6875 2.28125 12.2188 1.78125 11.625 1.5625C10.6875 1.1875 8.5 1.28125 7.5 1.28125C6.46875 1.28125 4.28125 1.1875 3.375 1.5625C2.75 1.8125 2.28125 2.28125 2.03125 2.875C1.65625 3.8125 1.75 6 1.75 7C1.75 8.03125 1.65625 10.2188 2.03125 11.125C2.28125 11.75 2.75 12.2188 3.375 12.4688C4.28125 12.8438 6.46875 12.75 7.5 12.75C8.5 12.75 10.6875 12.8438 11.625 12.4688C12.2188 12.2188 12.7188 11.75 12.9375 11.125Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center w-8 h-8 border border-solid border-white rounded-full mr-4 hover:opacity-60">
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.4688 3.8125C14.4062 5.1875 13.4688 7.03125 11.625 9.40625C9.71875 11.875 8.125 13.125 6.78125 13.125C5.96875 13.125 5.28125 12.375 4.71875 10.875C3.625 6.8125 3.15625 4.46875 2.25 4.46875C2.125 4.46875 1.78125 4.6875 1.15625 5.125L0.5 4.28125C2.09375 2.84375 3.625 1.28125 4.59375 1.1875C5.6875 1.09375 6.375 1.84375 6.625 3.4375C7.5 9.09375 7.90625 9.96875 9.53125 7.375C10.125 6.46875 10.4375 5.75 10.5 5.28125C10.625 3.84375 9.375 3.9375 8.5 4.3125C9.1875 2.0625 10.5 0.96875 12.4375 1.03125C13.875 1.0625 14.5625 2 14.4688 3.8125Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center w-8 h-8 border border-solid border-white rounded-full mr-4 hover:opacity-60">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.625 18H5.71875V8.65625H8.625V18ZM7.15625 7.40625C6.25 7.40625 5.5 6.625 5.5 5.6875C5.5 4.40625 6.875 3.59375 8 4.25C8.53125 4.53125 8.84375 5.09375 8.84375 5.6875C8.84375 6.625 8.09375 7.40625 7.15625 7.40625ZM19.4688 18H16.5938V13.4688C16.5938 12.375 16.5625 11 15.0625 11C13.5625 11 13.3438 12.1562 13.3438 13.375V18H10.4375V8.65625H13.2188V9.9375H13.25C13.6562 9.21875 14.5938 8.4375 16 8.4375C18.9375 8.4375 19.5 10.375 19.5 12.875V18H19.4688Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div
            className="hidden lg:block text-white text-sm"
            dangerouslySetInnerHTML={{ __html: `© 2023 Next Level Sports` }}
          />
        </div>
      </footer>
    </ScreenContainer>
  </div>
);
