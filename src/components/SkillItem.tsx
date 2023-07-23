type ISkillItemProps = {
  title: string;
  icon: string;
  children?: React.ReactNode;
};

const SkillItem = (props: ISkillItemProps) => (
  <li>
    <i className={`devicon-${props.icon} colored`}></i>
    <span className="p-2">{props.title}</span>
  </li>
);

export default SkillItem;
