import { AppConfig } from './AppConfig';

// Generate BreadcrumbList schema for navigation
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate Article schema for blog posts
export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: AppConfig.author,
      url: AppConfig.site_url,
    },
    publisher: {
      '@type': 'Person',
      name: AppConfig.author,
      url: AppConfig.site_url,
      logo: {
        '@type': 'ImageObject',
        url: `${AppConfig.site_url}/profile-pic.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

export const personSchemaMarkup = {
  '@context': 'https://schema.org/',
  '@type': 'Person',
  name: AppConfig.site_name,
  alternateName: ['Akhil Krishnan', 'Akhil G K', 'MrAkhilG'],
  description: 'Ruby on Rails contributor from India and Rails Issues Triage Team member. Senior Full Stack Developer specializing in Rails and React. Active open source contributor to Ruby on Rails core.',
  url: AppConfig.site_url,
  image: `${AppConfig.site_url}/profile-pic.png`,
  sameAs: [
    'https://github.com/akhilgkrishnan',
    'https://contributors.rubyonrails.org/contributors/akhil-g-krishnan/commits',
    'https://linkedin.com/in/akhilgkrishnan',
    'https://twitter.com/mrakhilg',
    'https://stackoverflow.com/users/10321356/akhil-g-krishnan',
    'https://facebook.com/akhilgkrishnan9800',
    'https://instagram.com/akhilgkrishnan',
    'https://akhilgkrishnan.github.io',
    'https://scholar.google.com/citations?user=RHT03hwAAAAJ&hl=en',
    'https://in.pinterest.com/akhilgkrishnan/',
    'https://www.threads.net/@akhilgkrishnan',
  ],
  jobTitle: 'Senior Software Developer & Rails Issues Triage Team Member',
  worksFor: {
    '@type': 'Organization',
    name: 'Saeloun Technologies Pvt. Ltd.',
    url: 'https://www.saeloun.com',
    description: 'Ruby on Rails consulting company in India',
  },
  memberOf: {
    '@type': 'Organization',
    name: 'Rails Issues Triage Team',
    url: 'https://rubyonrails.org',
    description: 'Official Ruby on Rails framework issues triage team',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Providence College of Engineering',
  },
  knowsAbout: [
    'Ruby on Rails',
    'Ruby on Rails Core Contributions',
    'Rails Issues Triage',
    'Open Source Development',
    'React.js',
    'JavaScript',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'AWS',
    'Git',
    'Full Stack Development',
    'Web Development',
    'Software Engineering',
  ],
  nationality: 'Indian',
  gender: 'Male',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'India',
  },
};

export const websiteSchemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Akhil G Krishnan - Ruby on Rails Contributor from India | Rails Issues Triage Team',
  description: AppConfig.description,
  headline: 'Ruby on Rails Contributor from India | Rails Issues Triage Team Member',
  image: `${AppConfig.site_url}/profile-pic.png`,
  url: AppConfig.site_url,
  inLanguage: 'en',
  author: {
    '@type': 'Person',
    name: 'Akhil G Krishnan',
    description: 'Ruby on Rails contributor from India and Rails Issues Triage Team member',
  },
  publisher: {
    '@type': 'Person',
    name: 'Akhil G Krishnan',
  },
  keywords: 'Ruby on Rails contributor, Rails contributor India, Rails Issues Triage Team, Indian Rails developer, open source contributor',
  sameAs: [
    'https://github.com/akhilgkrishnan',
    'https://contributors.rubyonrails.org/contributors/akhil-g-krishnan/commits',
    'https://linkedin.com/in/akhilgkrishnan',
    'https://twitter.com/mrakhilg',
    'https://stackoverflow.com/users/10321356/akhil-g-krishnan',
    'https://facebook.com/akhilgkrishnan9800',
    'https://instagram.com/akhilgkrishnan',
    'https://akhilgkrishnan.github.io',
    'https://scholar.google.com/citations?user=RHT03hwAAAAJ&hl=en',
    'https://in.pinterest.com/akhilgkrishnan/',
    'https://www.threads.net/@akhilgkrishnan',
  ],
};
