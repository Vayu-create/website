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

export function Weather() {
  const [weather, setWeather] = useState<WeatherData>({ 
    temp: '', 
    location: 'Dehradun',
    icon: '01d'
  })

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Dehradun coordinates
        const lat = 30.3165
        const lon = 78.0322
        
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
        
        if (!apiKey) {
          console.warn('OpenWeather API key not found. Using fallback weather data.')
          setWeather({
            temp: '25°C',
            location: 'Dehradun',
            icon: '01d'
          })
          return
        }
        
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        )

        if (!response.ok) {
          throw new Error(`Weather API responded with status: ${response.status}`)
        }

        const data = await response.json()
        
        setWeather({
          temp: `${Math.round(data.main.temp)}°C`,
          location: 'Dehradun',
          icon: data.weather[0].icon
        })
      } catch (error) {
        console.error('Error fetching weather:', error)
        // Fallback to default values on error
        setWeather({
          temp: '25°C',
          location: 'Dehradun',
          icon: '01d'
        })
      }
    }

    // Fetch immediately
    fetchWeather()

    // Then fetch every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  const WeatherIcon = WEATHER_ICONS[weather.icon as keyof typeof WEATHER_ICONS] || Sun

  return (
    <div className="flex items-center gap-2 text-gray-400">
      <span>{weather.location}<span className="hidden md:inline">, IN</span></span>
      <WeatherIcon className="h-4 w-4" />
      <span>{weather.temp}</span>
    </div>
  )
} 