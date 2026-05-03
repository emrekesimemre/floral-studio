export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512" 
      className={`w-full h-full ${className}`}
    >
      <rect width="512" height="512" fill="transparent" />
      <g transform="translate(256, 220)">
        <path d="M -80 -40 A 100 100 0 0 0 80 -40" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <path d="M 0 80 C 0 -20 80 -20 80 -80 C 40 -80 0 -20 0 -20 C 0 -20 -40 -80 -80 -80 C -80 -20 0 -20 0 80 Z" fill="none" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
        <line x1="0" y1="-20" x2="0" y2="80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      </g>
      <text x="256" y="400" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif" fontWeight="200" fontSize="48" letterSpacing="18" fill="currentColor" textAnchor="middle">SAYE</text>
      <text x="256" y="450" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif" fontWeight="300" fontSize="20" letterSpacing="12" fill="currentColor" textAnchor="middle">BLOOM</text>
    </svg>
  );
}