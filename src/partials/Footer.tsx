import { AppConfig } from '@utils/AppConfig';
import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <div className="border-t border-gray-600 pt-5">
      <div className="text-sm">
        © Copyright {new Date().getFullYear()} by {AppConfig.site_name}. Built
        with 🧡,{' '}
        <a href="https://astro.build" className="text-blue-400" target="_blank">
          AstroJS 🚀
        </a>
        and hosted on{' '}
        <a href="https://netlify.com" className="text-blue-400" target="_blank">
          Netlify 🌐
        </a>
        .
      </div>
    </div>
  </Section>
);

export { Footer };
