'use client'

import { useEffect, useState } from 'react'
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Cloudy } from 'lucide-react'

type WeatherData = {
  temp: string
  location: string
  icon: string
}

const WEATHER_ICONS = {
  '01d': Sun,
  '01n': Sun,
  '02d': Cloud,
  '02n': Cloud,
  '03d': Cloudy,
  '03n': Cloudy,
  '04d': Cloudy,
  '04n': Cloudy,
  '09d': CloudRain,
  '09n': CloudRain,
  '10d': CloudRain,
  '10n': CloudRain,
  '11d': CloudLightning,
  '11n': CloudLightning,
  '13d': CloudSnow,
  '13n': CloudSnow,
} as const

// Map WMO weather_code + is_day -> OpenWeather-like icon id
function mapWmoToIcon(wmo: number, isDay: number): keyof typeof WEATHER_ICONS {
  const d = isDay === 1
  if (wmo === 0) return d ? '01d' : '01n'                                // Clear
  if (wmo >= 1 && wmo <= 3) return d ? '02d' : '02n'                     // Mainly/partly cloudy
  if (wmo === 45 || wmo === 48) return d ? '03d' : '03n'                 // Fog
  if ([51,53,55,56,57,61,63,65,66,67,80,81,82].includes(wmo)) return d ? '10d' : '10n' // Drizzle/Rain
  if ([71,73,75,77,85,86].includes(wmo)) return d ? '13d' : '13n'        // Snow
  if ([95,96,99].includes(wmo)) return d ? '11d' : '11n'                 // Thunder
  return d ? '03d' : '03n'                                               // Default: cloudy-ish
}

export function Weather() {
  const [weather, setWeather] = useState<WeatherData>({
    temp: '25°C',
    location: 'Dehradun',
    icon: '01d'
  })
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const fetchWeather = async () => {
      try {
        setIsLoading(true)

        // Dehradun coordinates
        const lat = 30.3165
        const lon = 78.0322

        // Open-Meteo: no API key needed
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,is_day`

        const res = await fetch(url, { cache: 'no-store' })
        if (!res.ok) throw new Error(`Open-Meteo responded with ${res.status}`)
        const data = await res.json()

        const temp = Math.round(data?.current?.temperature_2m ?? 25)
        const wmo = Number(data?.current?.weather_code ?? 0)
        const isDay = Number(data?.current?.is_day ?? 1)

        const icon = mapWmoToIcon(wmo, isDay)

        setWeather({
          temp: `${temp}°C`,
          location: 'Dehradun',
          icon
        })
      } catch (e) {
        console.error('Error fetching weather:', e)
        setWeather({ temp: '25°C', location: 'Dehradun', icon: '01d' })
      } finally {
        setIsLoading(false)
      }
    }

    // Start loading immediately when mounted
    setIsLoading(true)
    fetchWeather()
    const interval = setInterval(fetchWeather, 10 * 60 * 1000) // refresh every 10 min
    return () => clearInterval(interval)
  }, [mounted])

  const WeatherIcon =
    WEATHER_ICONS[weather.icon as keyof typeof WEATHER_ICONS] || Sun

  // Show loading state immediately on client side
  if (!mounted || isLoading) {
    return (
      <div className="flex items-center gap-2 text-gray-400">
        <span>
          Dehradun
          <span className="hidden md:inline">, IN</span>
        </span>
        <Sun className="h-4 w-4" />
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 text-gray-400">
      <span>
        {weather.location}
        <span className="hidden md:inline">, IN</span>
      </span>
      <WeatherIcon className="h-4 w-4" />
      <span>{weather.temp}</span>
    </div>
  )
} 