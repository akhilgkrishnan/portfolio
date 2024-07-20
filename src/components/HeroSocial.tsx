type HeroSocialProps = {
  src: string;
  alt: string;
  loading?: 'eager' | 'lazy';
};

const HeroSocial = (props: HeroSocialProps) => (
  <img
    className="size-12 hover:translate-y-1"
    src={props.src}
    alt={props.alt}
    loading={props.loading || 'eager'}
  />
);

export default HeroSocial;
