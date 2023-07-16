import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo icon="" name="< Akhil G Krishnan />" />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="/projects/">Projects</NavMenuItem>
        <NavMenuItem href="https://github.com/akhilgkrishnan">
          GitHub
        </NavMenuItem>
        <NavMenuItem href="https://twitter.com/mrakhilg">Twitter</NavMenuItem>
        <NavMenuItem href="mailto:akhilgkrishnan4us@gmail.com">
          Contact
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
