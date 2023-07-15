import { Newsletter } from '@components/Newsletter';
import { GradientText, Section } from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Subscribe to my <GradientText>Newsletters</GradientText>
        </>
      }
      description="Stay ahead of the curve in web development, technology trends, and industry news. Don't miss the opportunity to expand your knowledge and stay informed. Sign up now and be part of our growing community!"
    />
  </Section>
);

export { CTA };
