import DarkModeToggleButton from '@components/DarkModeToggleButton';
import Logo from '@components/Logo';
import NavMenuItem from '@components/NavMenuItem';
import { NavbarTwoColumns, Section } from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo />
      </a>

      <ul className="flex items-center gap-x-3 font-medium text-gray-800 dark:text-gray-200">
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="/projects/">Projects</NavMenuItem>
        <NavMenuItem href="https://github.com/akhilgkrishnan">
          GitHub
        </NavMenuItem>
        <NavMenuItem href="/cv/">Resume</NavMenuItem>
        <NavMenuItem href="mailto:akhilgkrishnan4us@gmail.com">
          Contact
        </NavMenuItem>
        <li>
          <DarkModeToggleButton />
        </li>
      </ul>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
