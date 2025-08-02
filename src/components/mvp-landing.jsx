"use client"

import { useState } from "react"
import { Wrench, Recycle, Smartphone, Laptop, Gamepad2, Tv, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import MvpPresentation from "./mvp-presentation"

export default function MVPTitleSlideWithPresentation() {
  const [isPresentationOpen, setIsPresentationOpen] = useState(false)

  const colorPalette = [
    {
      name: "Primary Emerald",
      hex: "#059669",
      className: "bg-emerald-600",
      usage: "Primary buttons, icons, accents",
    },
    {
      name: "Secondary Green",
      hex: "#16a34a",
      className: "bg-green-600",
      usage: "Gradients, secondary actions",
    },
    {
      name: "Light Emerald",
      hex: "#10b981",
      className: "bg-emerald-500",
      usage: "Hover states, highlights",
    },
    {
      name: "Emerald Background",
      hex: "#ecfdf5",
      className: "bg-emerald-50",
      usage: "Page backgrounds, cards",
    },
    {
      name: "Emerald Light",
      hex: "#d1fae5",
      className: "bg-emerald-100",
      usage: "Badges, skill tags",
    },
    {
      name: "Slate Dark",
      hex: "#1e293b",
      className: "bg-slate-800",
      usage: "Primary text, headings",
    },
    {
      name: "Slate Medium",
      hex: "#475569",
      className: "bg-slate-600",
      usage: "Secondary text, descriptions",
    },
    {
      name: "Slate Light",
      hex: "#94a3b8",
      className: "bg-slate-400",
      usage: "Placeholder text, icons",
    },
    {
      name: "Slate Background",
      hex: "#f8fafc",
      className: "bg-slate-50",
      usage: "Card backgrounds, sections",
    },
    {
      name: "Pure White",
      hex: "#ffffff",
      className: "bg-white",
      usage: "Main backgrounds, cards",
    },
    {
      name: "Yellow Accent",
      hex: "#fbbf24",
      className: "bg-yellow-400",
      usage: "Star ratings, warnings",
    },
    {
      name: "Blue Accent",
      hex: "#3b82f6",
      className: "bg-blue-500",
      usage: "Information, links",
    },
  ]

  const deviceIcons = [
    { icon: Smartphone, label: "Mobile" },
    { icon: Laptop, label: "Laptop" },
    { icon: Gamepad2, label: "Gaming" },
    { icon: Tv, label: "TV" },
    { icon: Zap, label: "Appliance" },
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-green-50 flex items-center justify-center p-8">
        <div className="max-w-6xl w-full">
          {/* Main Title Section */}
          <div className="text-center mb-16">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex items-center">
                <div className="relative">
                  <div className="logo-text text-[3rem] leading-none">R</div>
                </div>
                <span className="text-4xl font-bold text-slate-800">elictronics</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
              Giving Tech a <span className="text-emerald-600">Second Life</span>
            </h1>

            {/* Subtitle with Presentation Button */}
            <div className="flex flex-col items-center gap-4">
              <Button
                onClick={() => setIsPresentationOpen(true)}
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-3 rounded-2xl text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                MVP Presentation
              </Button>
            </div>

            {/* Tagline */}
            <p className="text-xl text-slate-600 mt-8 max-w-3xl mx-auto leading-relaxed">
              Connecting device owners with skilled repair professionals to reduce electronic waste and extend the life
              of our technology
            </p>
          </div>

          {/* Device Icons */}
          <div className="flex justify-center items-center gap-8 mb-16">
            {deviceIcons.map((device, index) => {
              const IconComponent = device.icon
              return (
                <div key={index} className="flex flex-col items-center gap-2 opacity-60">
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <IconComponent className="h-8 w-8 text-emerald-600" />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">{device.label}</span>
                </div>
              )
            })}
          </div>

          {/* Color Palette Section */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Brand Color Palette</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {colorPalette.map((color, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`${color.className} w-full h-20 rounded-xl shadow-lg mb-3 border border-slate-200`}
                    ></div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-1">{color.name}</h3>
                    <p className="text-xs font-mono text-slate-600 bg-slate-100 px-2 py-1 rounded mb-2">{color.hex}</p>
                    <p className="text-xs text-slate-500 leading-tight">{color.usage}</p>
                  </div>
                ))}
              </div>

              {/* Gradient Examples */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center">Signature Gradients</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl shadow-lg mb-2"></div>
                    <p className="text-sm font-medium text-slate-700">Primary Gradient</p>
                    <p className="text-xs text-slate-500">emerald-600 → green-600</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 bg-gradient-to-br from-emerald-50 via-slate-50 to-green-50 rounded-xl shadow-lg mb-2 border border-slate-200"></div>
                    <p className="text-sm font-medium text-slate-700">Background Gradient</p>
                    <p className="text-xs text-slate-500">emerald-50 → slate-50 → green-50</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 bg-gradient-to-r from-emerald-700 to-green-700 rounded-xl shadow-lg mb-2"></div>
                    <p className="text-sm font-medium text-slate-700">Hover Gradient</p>
                    <p className="text-xs text-slate-500">emerald-700 → green-700</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-slate-500 text-sm">Sustainable • Professional • Community-Driven</p>
          </div>
        </div>

        <style jsx>{`
          .logo-text {
            font-family: 'BEAMS', sans-serif;
            @apply text-emerald-600;
          }
        `}</style>
      </div>

      {/* Presentation Slider Modal */}
      <MvpPresentation isOpen={isPresentationOpen} onClose={() => setIsPresentationOpen(false)} />
    </>
  )
}
