import { GradientText } from 'astro-boilerplate-components';

const Newsletter = () => (
  <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
    <div className="sm:w-7/12">
      <div className="text-3xl font-bold">
        Subscribe to my <GradientText>Newsletters</GradientText>
      </div>

      <p className="mt-3">
        Stay ahead of the curve in web development, technology trends, and
        industry news. Don't miss the opportunity to expand your knowledge and
        stay informed. Sign up now and be part of my growing community!
      </p>
    </div>

    <div className="w-full sm:w-5/12">
      <form
        name="subscribe"
        method="POST"
        className="flex rounded-full bg-base-300 px-4 py-2 ring-cyan-600 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2"
        data-netlify="true"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full appearance-none bg-base-300 focus:outline-none"
        />

        <button
          className="ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
);

export { Newsletter };
