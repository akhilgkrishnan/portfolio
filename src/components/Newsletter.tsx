const Newsletter = () => (
  <div className="terminal-window">
    <div className="terminal-header">
      <div className="terminal-dots">
        <span className="terminal-dot terminal-dot-red"></span>
        <span className="terminal-dot terminal-dot-yellow"></span>
        <span className="terminal-dot terminal-dot-green"></span>
      </div>
      <span className="terminal-title">subscribe.sh</span>
    </div>
    <div className="p-6">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="sm:w-7/12">
          <div className="text-2xl font-bold font-mono">
            <span className="text-terminal-gray-500">## </span>
            <span className="text-terminal-green">Subscribe</span>
            <span className="text-terminal-gray-300"> to Newsletters</span>
          </div>

          <p className="mt-3 text-terminal-gray-400">
            <span className="text-terminal-gray-600">{'// '}</span>
            Stay ahead of the curve in web development, technology trends, and
            industry news. Sign up now and be part of my growing community!
          </p>
        </div>

        <div className="w-full sm:w-5/12">
          <form
            name="subscribe"
            method="POST"
            className="flex items-center rounded border border-terminal-gray-700 bg-base-300 px-3 py-2 ring-terminal-green focus-within:ring-1 hover:border-terminal-green transition-colors"
            data-netlify="true"
          >
            <span className="text-terminal-green font-mono">$</span>
            <input
              type="email"
              name="email"
              placeholder="enter@email.com"
              className="ml-2 w-full appearance-none bg-transparent font-mono text-terminal-gray-300 placeholder-terminal-gray-600 focus:outline-none"
            />

            <button
              className="terminal-btn ml-2 shrink-0 whitespace-nowrap"
              type="submit"
            >
              ./submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export { Newsletter };
