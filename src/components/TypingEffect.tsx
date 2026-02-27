type TypingEffectProps = {
  text: string;
  className?: string;
};

const TypingEffect = (props: TypingEffectProps) => (
  <span className={`inline-block overflow-hidden whitespace-nowrap animate-typing ${props.className || ''}`}>
    {props.text}
    <span className="cursor"></span>
  </span>
);

export { TypingEffect };
