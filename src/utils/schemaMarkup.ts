import { AppConfig } from './AppConfig';

export const personSchemaMarkup = {
  '@context': 'https://schema.org/',
  '@type': 'Person',
  name: AppConfig.site_name,
  alternateName: 'Akhil Krishnan',
  url: AppConfig.site_url,
  image: `${AppConfig.site_url}/profile-pic.png`,
  sameAs: [
    'https://facebook.com/akhilgkrishnan9800',
    'https://twitter.com/mrakhilg',
    'https://instagram.com/akhilgkrishnan',
    'https://github.com/akhilgkrishnan',
    'https://stackoverflow.com/users/10321356/akhil-g-krishnan',
    'https://linkedin.com/in/akhilgkrishnan',
    'https://akhilgkrishnan.github.io',
    'https://scholar.google.com/citations?user=RHT03hwAAAAJ&hl=en',
    'https://in.pinterest.com/akhilgkrishnan/',
    'https://www.threads.net/@akhilgkrishnan',
  ],
  jobTitle: 'Senior Software Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Saeloun Technologies Pvt. Ltd.',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Providence College of Engineering',
  },
};

export const websiteSchemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  description:
    'Software professional with over 4 years of experience in the IT industry.',
  headline: 'Akhil G Krishnan',
  image: `${AppConfig.site_url}/profile-pic.png`,
  name: 'Akhil G Krishnan',
  sameAs: [
    'https://facebook.com/akhilgkrishnan9800',
    'https://twitter.com/mrakhilg',
    'https://instagram.com/akhilgkrishnan',
    'https://github.com/akhilgkrishnan',
    'https://stackoverflow.com/users/10321356/akhil-g-krishnan',
    'https://linkedin.com/in/akhilgkrishnan',
    'https://akhilgkrishnan.github.io',
    'https://scholar.google.com/citations?user=RHT03hwAAAAJ&hl=en',
    'https://in.pinterest.com/akhilgkrishnan/',
    'https://www.threads.net/@akhilgkrishnan',
  ],
  url: 'https://akhilgkrishnan.me/',
};
