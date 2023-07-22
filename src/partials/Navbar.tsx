import DarkModeToggleButton from '@components/DarkModeToggleButton';
import Logo from '@components/Logo';
import NavMenuItem from '@components/NavMenuItem';
import { Section } from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <div className="navbar flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1">
        <a href="/" className="flex-none">
          <Logo />
        </a>
      </div>
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
    </div>
  </Section>
);

export { Navbar };
