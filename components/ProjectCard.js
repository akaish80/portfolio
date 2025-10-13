export default function ProjectCard({ title, description, tags = [], link }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 border rounded text-gray-600">{t}</span>
        ))}
      </div>
      {link && (
        <a className="inline-block mt-3 text-sm font-medium text-accent" href={link} target="_blank" rel="noreferrer">View →</a>
      )}
    </div>
  )
}
