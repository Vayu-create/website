import readingsData from '@/data/readings.json'

export function Readings() {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium uppercase text-gray-400">READINGS</h2>
      
      <div className="space-y-4">
        {readingsData.readings.slice(0, 3).map((reading, index) => (
          <div key={index} className="group">
            <a 
              href={reading.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[80px_1fr] items-baseline"
            >
              <span className="text-sm text-gray-400">{reading.date}</span>
              <div>
                <span className="inline border-b border-gray-200 text-base text-gray-600 group-hover:text-gray-900">
                  {reading.title}
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
