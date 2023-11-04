import DarkModeToggleButton from '@components/DarkModeToggleButton';
import Logo from '@components/Logo';
import NavMenuItem from '@components/NavMenuItem';
import { createContext } from 'react';

export const NavbarContext = createContext('/');

type NavbarProps = {
  path: string;
};

const Navbar = (props: NavbarProps) => (
  <NavbarContext.Provider value={props.path}>
    <div className="navbar sticky top-0 z-10 gap-y-3 bg-base-100/90 px-3 py-6 shadow sm:flex-row sm:items-center sm:justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li className="p-1">
              <NavMenuItem href="/blogs/">Blogs</NavMenuItem>
            </li>

            <li className="p-1">
              <NavMenuItem href="/projects/">Projects</NavMenuItem>
            </li>

            <li className="p-1">
              <NavMenuItem href="/cv/">Resume</NavMenuItem>
            </li>

            <li className="p-1">
              <NavMenuItem href="mailto:akhilgkrishnan4us@gmail.com">
                Contact
              </NavMenuItem>
            </li>

            <li className="p-1">
              <DarkModeToggleButton />
            </li>
          </ul>
        </div>
        <div className="flex">
          <a href="/" className="flex-none">
            <Logo />
          </a>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex items-center gap-x-3 font-medium">
          <NavMenuItem href="/blogs/">Blogs</NavMenuItem>
          <NavMenuItem href="/projects/">Projects</NavMenuItem>
          <NavMenuItem href="/cv/">Resume</NavMenuItem>
          <NavMenuItem href="mailto:akhilgkrishnan4us@gmail.com">
            Contact
          </NavMenuItem>
          <li>
            <DarkModeToggleButton />
          </li>
        </ul>
      </div>
    </div>
  </NavbarContext.Provider>
);

export { Navbar };
