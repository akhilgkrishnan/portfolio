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
    <nav className="navbar sticky top-0 z-10 mx-auto flex max-w-screen-lg flex-col gap-y-3 bg-base-200 px-3 py-6 shadow sm:flex-row sm:items-center sm:justify-between">
      <div className="flex">
        <a href="/" className="flex-none">
          <Logo />
        </a>
      </div>
      <ul className="flex items-center gap-x-3 font-medium">
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="/projects/">Projects</NavMenuItem>
        <NavMenuItem href="/cv/">Resume</NavMenuItem>
        <NavMenuItem href="mailto:akhilgkrishnan4us@gmail.com">
          Contact
        </NavMenuItem>
        <li>
          <DarkModeToggleButton />
        </li>
      </ul>
    </nav>
  </NavbarContext.Provider>
);

export { Navbar };
