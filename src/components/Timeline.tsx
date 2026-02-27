type ITimeLineProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

const TimeLine = (props: ITimeLineProps) => (
  <div className="flex font-mono">
    {/* Git log style indicator */}
    <div className="education__time flex flex-col items-center">
      <span className="mt-1 block size-4 rounded-full border-2 border-terminal-green bg-base-200"></span>
      <span className="education__line block h-full w-[2px] bg-terminal-gray-700"></span>
    </div>

    {/* Content card */}
    <div className="ml-4 mb-4 flex-1">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="terminal-dot terminal-dot-red"></span>
            <span className="terminal-dot terminal-dot-yellow"></span>
            <span className="terminal-dot terminal-dot-green"></span>
          </div>
          <span className="terminal-title">commit</span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-terminal-green">{props.title}</h3>
          <span className="text-sm text-terminal-emerald">{props.subtitle}</span>
          <div className="mt-2 text-terminal-gray-400 text-justify">
            <span className="text-terminal-gray-600">{'// '}</span>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TimeLine;
