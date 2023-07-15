import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Akhil G Krishnan</GradientText>{' '}
          <span className="wave">👋</span>
        </>
      }
      description={
        <>
          I'm a 25-year old technical enthusiast who does full-stack web
          development in Ruby on Rails, NodeJS and ReactJS. Passionate to
          contribute open-source projects and make cool products. Currently
          working as a Senior Software Developer in Saeloun Technologies.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/mrakhilg">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://facebook.com/akhilmnr">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://linkedin.com/in/akhilgkrishnan">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
