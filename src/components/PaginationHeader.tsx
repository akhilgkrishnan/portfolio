type IPaginationHeaderProps = {
  title: string;
  description: string;
};

const PaginationHeader = (props: IPaginationHeaderProps) => (
  <div className="terminal-window mx-auto max-w-2xl">
    <div className="terminal-header">
      <div className="terminal-dots">
        <span className="terminal-dot terminal-dot-red"></span>
        <span className="terminal-dot terminal-dot-yellow"></span>
        <span className="terminal-dot terminal-dot-green"></span>
      </div>
      <span className="terminal-title">readme.md</span>
    </div>
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold font-mono">
        <span className="text-terminal-gray-500"># </span>
        <span className="text-terminal-green">{props.title}</span>
      </h1>

      <div className="mt-3 text-terminal-gray-400">
        <span className="text-terminal-gray-600">{'// '}</span>
        {props.description}
      </div>
    </div>
  </div>
);

export { PaginationHeader };
