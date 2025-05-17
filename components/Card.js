import Link from 'next/link';

export function Card({ title, description, href }) {
  return (
    <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
      <div className="card">
        <div>
          <div className="text-xl font-bold mb-2">{title} →</div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  );
} 