export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: '#0a1020', panel: '#111a2e', accent: '#2dd4bf', paper: '#f4f6fa' },
    fontFamily: { display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'], sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'] },
    keyframes: { fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } }, rise: { from: { transform: 'scaleY(.2)' }, to: { transform: 'scaleY(1)' } }, drift: { '0%,100%': { transform: 'translate(0,0)' }, '50%': { transform: 'translate(30px,-20px)' } } },
    animation: { fadeIn: 'fadeIn .4s ease both', rise: 'rise .9s ease-out both', drift: 'drift 14s ease-in-out infinite' } } },
}
