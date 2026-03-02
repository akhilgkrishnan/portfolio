type HeroSocialProps = {
  src: string;
  alt: string;
  name?: string;
  loading?: 'eager' | 'lazy';
};

const HeroSocial = (props: HeroSocialProps) => (
  <div className="flex items-center gap-2 rounded border border-terminal-gray-700 bg-base-300 px-2 py-1 transition-all hover:border-terminal-green hover:shadow-terminal">
    <img
      className="size-5"
      src={props.src}
      alt={props.alt}
      loading={props.loading || 'eager'}
    />
    {props.name && (
      <span className="text-xs text-terminal-gray-400">{props.name}</span>
    )}
  </div>
);

export default HeroSocial;
