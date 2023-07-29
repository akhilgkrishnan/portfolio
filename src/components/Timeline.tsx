type ITimeLineProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

const TimeLine = (props: ITimeLineProps) => (
  <div className="flex">
    <div className="education__time">
      <span className="mt-1 block h-4 w-4 rounded-full bg-primary"></span>
      <span className="education__line block h-full w-[2px] translate-x-[7px] bg-primary"></span>
    </div>
    <div className="experience__data bd-grid px-5 pb-5">
      <h3 className="mb-1 font-semibold">{props.title}</h3>
      <span className="text-sm font-light">{props.subtitle}</span>
      <p className="my-2 text-justify">{props.children}</p>
    </div>
  </div>
);

export default TimeLine;
