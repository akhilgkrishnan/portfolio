type INavMenuItemProps = {
  href: string;
  children: string;
};

const NavMenuItem = (props: INavMenuItemProps) => (
  <li className="hover:text-gray-500 dark:hover:text-white">
    <a href={props.href}>{props.children}</a>
  </li>
);

export default NavMenuItem;
