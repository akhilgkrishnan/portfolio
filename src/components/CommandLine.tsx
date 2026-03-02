type CommandLineProps = {
  command: string;
  output?: React.ReactNode;
  showCursor?: boolean;
};

const CommandLine = (props: CommandLineProps) => (
  <div className="font-mono">
    <div className="flex items-center">
      <span className="text-terminal-green">$</span>
      <span className="ml-2 text-terminal-gray-300">{props.command}</span>
      {props.showCursor && <span className="cursor"></span>}
    </div>
    {props.output && <div className="mt-2 text-terminal-gray-400">{props.output}</div>}
  </div>
);

export { CommandLine };
