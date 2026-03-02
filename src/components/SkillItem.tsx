type ISkillItemProps = {
  title: string;
  icon: string;
  children?: React.ReactNode;
};

const SkillItem = (props: ISkillItemProps) => (
  <li className="flex items-center gap-2 font-mono text-terminal-gray-300">
    <span className="text-terminal-gray-600">+--</span>
    <i className={`devicon-${props.icon} colored text-lg`}></i>
    <span className="text-terminal-emerald">{props.title}</span>
  </li>
);

export default SkillItem;
