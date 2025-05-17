import Link from 'next/link'

export function CustomCard({ title, description, link, icon }) {
  return (
    <Link href={link} className="block no-underline">
      <div className="card h-full flex flex-col justify-between">
        <div>
          {icon && <div className="text-3xl mb-3">{icon}</div>}
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <div className="mt-4 text-primary-color font-medium">
          了解更多 →
        </div>
      </div>
    </Link>
  )
} 