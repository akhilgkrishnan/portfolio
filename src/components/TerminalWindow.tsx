type TerminalWindowProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const TerminalWindow = (props: TerminalWindowProps) => (
  <div className={`terminal-window ${props.className || ''}`}>
    <div className="terminal-header">
      <div className="terminal-dots">
        <span className="terminal-dot terminal-dot-red"></span>
        <span className="terminal-dot terminal-dot-yellow"></span>
        <span className="terminal-dot terminal-dot-green"></span>
      </div>
      {props.title && <span className="terminal-title">{props.title}</span>}
    </div>
    <div className="terminal-body">{props.children}</div>
  </div>
);

export { TerminalWindow };
