import { NavbarContext } from '@partials/Navbar';
import { useContext } from 'react';

type INavMenuItemProps = {
  href: string;
  children: string;
};

const NavMenuItem = (props: INavMenuItemProps) => {
  const path = useContext(NavbarContext);
  const active = path === props.href;

  return (
    <a
      href={props.href}
      className={`inline-flex ${
        active ? 'border-indigo-500' : 'border-transparent'
      } items-center border-b-2  px-1 pt-1 font-medium hover:border-gray-500 hover:text-gray-700`}
    >
      {props.children}
    </a>
  );
};

export default NavMenuItem;
