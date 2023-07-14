import { AppConfig } from '@utils/AppConfig';
import { FooterCopyright, Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} />
  </Section>
);

export { Footer };
