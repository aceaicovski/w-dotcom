import Image from 'next/image';
import Link from 'next/link';
import { ScreenContainer } from '../../../components/Container';
import { MaxWidth } from '@/utilities/styling';
import { Button } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

// This placeholder is used as a background on the visual editing workspace of the patterns
// Activate visual editing doc: https://docs.uniform.app/docs/guides/composition/visual-editing/activate-visual-editing
export const HeaderPlaceholder = () => (
  <div className="text-primary border border-solid border-white px-8">
    <ScreenContainer maxWidth={MaxWidth.Large}>
      <div className="navbar px-0">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost hover:bg-transparent px-0 lg:hidden">
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
              className="menu menu-compact dropdown-content p-6 shadow w-52 bg-primary text-white space-y-4"
            >
              <li>Flag Football</li>
              <li>Basketball</li>
              <li>Volleyball</li>
              <li>Summer Camps</li>
              <li>Resources</li>
              <li>About Us</li>
              <li>Team Store</li>
            </ul>
          </div>
          <Link className="ml-8 lg:ml-0" href="/">
            <Image src="/logo.png" width="64" height="64" alt="Next Level Sports" />
          </Link>
          <div className="hidden lg:flex justify-center w-full">
            <ul className="menu menu-horizontal px-1 shrink-0 gap-8">
              <li>Flag Football</li>
              <li>Basketball</li>
              <li>Volleyball</li>
              <li>Summer Camps</li>
              <li>Resources</li>
              <li>About Us</li>
              <li>Team Store</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center justify-center p-1 hover:cursor-pointer">
            <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path
                d="M13.1673 6.85352L8.50065 11.5202L3.83398 6.85352"
                stroke="#818389"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <Button style="ghost" copy="Register" rounded className="border border-solid border-primary" />
          <Button style="secondary" copy="Log in" rounded />
        </div>
      </div>
    </ScreenContainer>
  </div>
);
