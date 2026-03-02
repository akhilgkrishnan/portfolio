/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        terminal: {
          green: '#00ff00',
          emerald: '#10b981',
          'green-dark': '#059669',
          'green-light': '#16a34a',
          'gray-900': '#0d1117',
          'gray-800': '#161b22',
          'gray-700': '#21262d',
          'gray-600': '#30363d',
          'gray-500': '#484f58',
          'gray-400': '#8b949e',
          'gray-300': '#c9d1d9',
          'gray-200': '#e6edf3',
          'gray-100': '#f0f6fc',
          'gray-50': '#f6f8fa',
        },
      },
      boxShadow: {
        terminal: '0 0 10px rgba(0, 255, 0, 0.3)',
        'terminal-emerald': '0 0 10px rgba(16, 185, 129, 0.3)',
        'terminal-glow': '0 0 20px rgba(0, 255, 0, 0.5)',
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        typing: 'typing 3.5s steps(40, end)',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        glow: {
          from: { textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00' },
          to: {
            textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
          },
        },
      },
      typography: {
        terminal: {
          css: {
            '--tw-prose-body': '#c9d1d9',
            '--tw-prose-headings': '#00ff00',
            '--tw-prose-links': '#10b981',
            '--tw-prose-bold': '#e6edf3',
            '--tw-prose-code': '#00ff00',
            '--tw-prose-pre-bg': '#161b22',
            '--tw-prose-pre-code': '#c9d1d9',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        'terminal-dark': {
          primary: '#00ff00',
          'primary-content': '#0d1117',
          secondary: '#10b981',
          'secondary-content': '#0d1117',
          accent: '#00ff00',
          'accent-content': '#0d1117',
          neutral: '#21262d',
          'neutral-content': '#c9d1d9',
          'base-100': '#0d1117',
          'base-200': '#161b22',
          'base-300': '#21262d',
          'base-content': '#c9d1d9',
          info: '#3b82f6',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
      {
        'terminal-light': {
          primary: '#059669',
          'primary-content': '#ffffff',
          secondary: '#16a34a',
          'secondary-content': '#ffffff',
          accent: '#059669',
          'accent-content': '#ffffff',
          neutral: '#d1d5db',
          'neutral-content': '#1f2937',
          'base-100': '#f6f8fa',
          'base-200': '#ffffff',
          'base-300': '#e5e7eb',
          'base-content': '#1f2937',
          info: '#3b82f6',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
    ],
    darkTheme: 'terminal-dark',
    logs: false,
  },
};
