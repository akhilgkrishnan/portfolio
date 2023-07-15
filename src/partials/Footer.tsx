import { AppConfig } from '@utils/AppConfig';
import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <div className="border-t border-gray-600 pt-5">
      <div className="text-sm text-gray-200">
        © Copyright {new Date().getFullYear()} by {AppConfig.site_name}.
      </div>
    </div>
  </Section>
);

export { Footer };
