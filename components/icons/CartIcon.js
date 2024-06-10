export default function CartIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19 4h-1V2a1 1 0 10-2 0v2H8V2a1 1 0 10-2 0v2H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 15a1 1 0 01-1 1H5a1 1 0 01-1-1V9h16v10zm0-12H4V7a1 1 0 011-1h1v1a1 1 0 002 0V6h8v1a1 1 0 102 0V6h1a1 1 0 011 1v2z"/>
    </svg>
  );
}
