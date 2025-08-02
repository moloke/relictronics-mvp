"use client"

import { useState, useEffect } from "react"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Wrench,
  Recycle,
  Smartphone,
  Trash2,
  Search,
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Leaf,
  Settings,
  QrCode,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PresentationSlider({ isOpen, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      if (e.key === "ArrowRight") nextSlide()
      if (e.key === "ArrowLeft") prevSlide()
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Slide 1: Title Slide
  const TitleSlide = () => (
    <div className="h-full flex items-center justify-center text-center">
      <div className="max-w-4xl">
        <div className="flex items-center justify-center gap-3">
              <div className="flex items-center">
                <div className="relative">
                  <div className="logo-text text-[7rem] leading-none">R</div>
                </div>
                <span className="text-[7rem] font-bold text-slate-800">elictronics</span>
              </div>
            </div>
        <h1 className="text-6xl font-bold text-slate-800 mb-6">
          Giving Tech a <span className="text-emerald-600">Second Life</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Connecting device owners with skilled repair professionals to reduce electronic waste
        </p>
      </div>
    </div>
  )

  // Slide 2: The Problem
  const ProblemSlide = () => (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-5xl text-center">
        <h1 className="text-5xl font-bold text-slate-800 mb-12">We're Throwing Away Too Much Tech</h1>
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 mb-12">
          <div className="text-6xl font-bold text-red-600 mb-4">50M+</div>
          <p className="text-2xl text-red-700">tons of e-waste generated annually</p>
        </div>
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Smartphone className="h-16 w-16 text-slate-400 mb-4" />
            <p className="text-lg text-slate-600">Broken Devices</p>
          </div>
          <div className="flex flex-col items-center">
            <Trash2 className="h-16 w-16 text-slate-400 mb-4" />
            <p className="text-lg text-slate-600">Overflowing Waste</p>
          </div>
          <div className="flex flex-col items-center">
            <Search className="h-16 w-16 text-slate-400 mb-4" />
            <p className="text-lg text-slate-600">No Repair Options</p>
          </div>
        </div>
        <p className="text-2xl font-semibold text-slate-700">Current platforms aren't built for repair.</p>
      </div>
    </div>
  )

  // Slide 3: Proof This Is a Real Problem
  const ProofSlide = () => (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-6xl">
        <h1 className="text-5xl font-bold text-slate-800 mb-12 text-center">
          People Want Repairs—But Can't Find the Right Help
        </h1>
        <div className="grid grid-cols-2 gap-12">
          <Card className="p-8 bg-slate-50">
            <div className="mb-4">
              <Badge className="bg-orange-500 text-white">r/fixit</Badge>
            </div>
            <h3 className="text-xl font-semibold mb-4">Where can I get this fixed?</h3>
            <p className="text-slate-600 mb-4">
              "My vintage headphones stopped working and I can't find anyone who knows how to repair them. TaskRabbit
              wasn't helpful..."
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <ArrowRight className="h-4 w-4" />
              <span>847 upvotes, 156 comments</span>
            </div>
          </Card>
          <Card className="p-8 bg-slate-50">
            <div className="mb-4">
              <Search className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Search: "repair iPhone near me"</h3>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded border text-sm">
                <span className="text-blue-600">Apple: Lakeside</span> - 2.1 miles
              </div>
              <div className="p-3 bg-white rounded border text-sm">
                <span className="text-blue-600">Dave's Phone Repair Shop</span> - 5.3 miles
              </div>
              <div className="p-3 bg-white rounded border text-sm">
                <span className="text-blue-600">General Electronics</span> - 8.7 miles
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-4">Generic results, no specialization info</p>
          </Card>
        </div>
      </div>
    </div>
  )

  // Slide 4: The Vision
  const VisionSlide = () => (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-5xl text-center">
        <div className="mb-12">
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">📱</span>
              </div>
              <span className="text-lg font-medium">Buy</span>
            </div>
            <ArrowRight className="h-8 w-8 text-slate-400" />
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">💔</span>
              </div>
              <span className="text-lg font-medium">Break</span>
            </div>
            <ArrowRight className="h-8 w-8 text-slate-400" />
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-2 ring-4 ring-emerald-300">
                <span className="text-2xl">🔧</span>
              </div>
              <span className="text-lg font-medium text-emerald-600">Repair</span>
            </div>
            <ArrowRight className="h-8 w-8 text-slate-400" />
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">✨</span>
              </div>
              <span className="text-lg font-medium">Use Longer</span>
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-slate-800 mb-8">
          <span className="text-emerald-600">Relictronics:</span> Giving Tech a Second Life
        </h1>
        <div className="flex justify-center gap-8 text-2xl font-semibold text-emerald-600">
          <span>Reuse.</span>
          <span>Repair.</span>
          <span>Reimagine.</span>
        </div>
      </div>
    </div>
  )

  // Slide 5: The Solution
  const SolutionSlide = () => (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-6xl">
        <h1 className="text-5xl font-bold text-slate-800 mb-12 text-center">The Solution</h1>
        <div className="grid grid-cols-2 gap-16 mb-12">
          <div className="text-center">
            <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-16 w-16 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Users</h3>
            <p className="text-lg text-slate-600">Need something fixed</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="h-16 w-16 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Hobbyists</h3>
            <p className="text-lg text-slate-600">Have the skills</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
              <span className="text-lg">📝</span>
            </div>
            <span className="text-sm font-medium">Request</span>
          </div>
          <ArrowRight className="h-6 w-6 text-slate-400" />
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
              <span className="text-lg">🤝</span>
            </div>
            <span className="text-sm font-medium">Match</span>
          </div>
          <ArrowRight className="h-6 w-6 text-slate-400" />
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
              <span className="text-lg">🔧</span>
            </div>
            <span className="text-sm font-medium">Repair</span>
          </div>
          <ArrowRight className="h-6 w-6 text-slate-400" />
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
              <span className="text-lg">⭐</span>
            </div>
            <span className="text-sm font-medium">Review</span>
          </div>
        </div>
        <p className="text-2xl font-semibold text-center text-slate-700">
          A specialized repair marketplace built on trust and craft
        </p>
      </div>
    </div>
  )

  // Slide 6: The MVP
  const MVPSlide = () => (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-5xl text-center">
        <h1 className="text-5xl font-bold text-slate-800 mb-12">The MVP – What Works Today</h1>
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="aspect-video bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-12 w-12 text-emerald-600" />
              </div>
              <p className="text-lg font-medium text-slate-700">Authentication Screen</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span className="text-lg font-medium">Login / Sign Up (fully functional)</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl">
            <Settings className="h-6 w-6 text-yellow-600" />
            <span className="text-lg font-medium">Pages designed but not connected to backend</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
            <CheckCircle className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-medium">Firebase authentication in place</span>
          </div>
        </div>
      </div>
    </div>
  )

  // Slide 7: Core Feature
  const CoreFeatureSlide = () => (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-6xl">
        <h1 className="text-5xl font-bold text-slate-800 mb-8 text-center">
          MVP Core Feature – Hobbyist Skill Profiles
        </h1>
        <div className="grid grid-cols-2 gap-12">
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👨‍🔧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Alex Chen</h3>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-slate-600 ml-1">4.9 (127 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <Badge className="bg-emerald-100 text-emerald-800">iPhone Repair</Badge>
                  <Badge className="bg-emerald-100 text-emerald-800">Water Damage</Badge>
                  <Badge className="bg-emerald-100 text-emerald-800">MacBook Repair</Badge>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square bg-slate-100 rounded"></div>
                  <div className="aspect-square bg-slate-100 rounded"></div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Before & After Gallery</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Detailed Skill Profiles → Better Matches</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                <span className="text-lg">Search by device + proven repair history</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                <span className="text-lg">Visual before/after portfolios</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                <span className="text-lg">Verified reviews and ratings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Slide 8: Value vs Competitors
  const CompetitorsSlide = () => (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-6xl">
        <h1 className="text-5xl font-bold text-slate-800 mb-12 text-center">Value vs. Competitors</h1>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-6 font-bold text-lg">Platform</th>
                <th className="text-center p-6 font-bold text-lg">Repair Expertise</th>
                <th className="text-center p-6 font-bold text-lg">Community</th>
                <th className="text-center p-6 font-bold text-lg">Logistics</th>
                <th className="text-center p-6 font-bold text-lg">Trust</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-6 font-medium">eBay</td>
                <td className="text-center p-6">❌</td>
                <td className="text-center p-6">❌</td>
                <td className="text-center p-6">❌</td>
                <td className="text-center p-6">🟡</td>
              </tr>
              <tr className="border-t bg-slate-25">
                <td className="p-6 font-medium">TaskRabbit</td>
                <td className="text-center p-6">🟡</td>
                <td className="text-center p-6">❌</td>
                <td className="text-center p-6">❌</td>
                <td className="text-center p-6">🟡</td>
              </tr>
              <tr className="border-t">
                <td className="p-6 font-medium">Local Shops</td>
                <td className="text-center p-6">🟡</td>
                <td className="text-center p-6">❌</td>
                <td className="text-center p-6">🟢</td>
                <td className="text-center p-6">🟢</td>
              </tr>
              <tr className="border-t bg-emerald-50">
                <td className="p-6 font-bold text-emerald-800">Relictronics</td>
                <td className="text-center p-6">✅</td>
                <td className="text-center p-6">✅</td>
                <td className="text-center p-6">🔜</td>
                <td className="text-center p-6">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  // Slide 9: Roadmap
  const RoadmapSlide = () => (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-6xl">
        <h1 className="text-5xl font-bold text-slate-800 mb-12 text-center">Roadmap – What's Next</h1>
        <div className="relative">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Phase 1: MVP</h3>
              <p className="text-slate-600">Working prototype with authentication and core pages</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Phase 2: Infrastructure</h3>
              <p className="text-slate-600">🔜 Secure shipping + Escrow payments</p>
              <div className="mt-2 p-2 bg-yellow-100 rounded text-sm text-yellow-800">Next Priority</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Phase 3: Growth</h3>
              <p className="text-slate-600">Community growth and ecosystem expansion</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-xl text-slate-600">From working prototype → trust infrastructure → community growth</p>
        </div>
      </div>
    </div>
  )

  // Slide 10: Why This Will Work
  const WhyWorkSlide = () => (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-5xl text-center">
        <h1 className="text-5xl font-bold text-slate-800 mb-12">Why This Will Work</h1>
        <div className="grid grid-cols-3 gap-12 mb-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Sustainability 🌱</h3>
            <p className="text-slate-600">People want to do better environmentally</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="h-12 w-12 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Specialization 🛠️</h3>
            <p className="text-slate-600">Built specifically for repair, not everything</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Community 🤝</h3>
            <p className="text-slate-600">Connecting passionate repair enthusiasts</p>
          </div>
        </div>
        <Card className="p-8 bg-emerald-50 border-emerald-200 max-w-3xl mx-auto mb-8">
          <p className="text-xl italic text-emerald-800">
            "Finally—somewhere I can find someone to fix my old camera. Not just buy a new one."
          </p>
          <p className="text-sm text-emerald-600 mt-2">— Beta User Testimonial</p>
        </Card>
        <h2 className="text-3xl font-bold text-emerald-600">Relictronics: Giving Tech a Second Life</h2>
      </div>
    </div>
  )

  // Slide 11: Call to Action
  const CallToActionSlide = () => (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-slate-800 mb-12">Join the Beta</h1>
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6">
              <QrCode className="h-32 w-32 text-slate-400" />
            </div>
            <p className="text-lg text-slate-600">Scan to visit the platform</p>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Get Involved</h3>
              <p className="text-lg text-slate-600 mb-4">
                Whether as a builder, early user, or hobbyist—help shape the future of tech sustainability.
              </p>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-emerald-50 rounded-xl">
                <p className="font-medium text-emerald-800">📧 hello@relictronics.com</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <p className="font-medium text-blue-800">🐙 github.com/relictronics</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl">
                <p className="font-medium text-purple-800">🐦 @relictronics</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-xl px-8 py-4 text-xl">
            Join the Movement
          </Button>
        </div>
      </div>
    </div>
  )

  const slides = [
    { component: TitleSlide, title: "Title Slide" },
    { component: ProblemSlide, title: "The Problem" },
    { component: ProofSlide, title: "Proof of Problem" },
    { component: VisionSlide, title: "The Vision" },
    { component: SolutionSlide, title: "The Solution" },
    { component: MVPSlide, title: "The MVP" },
    { component: CoreFeatureSlide, title: "Core Feature" },
    { component: CompetitorsSlide, title: "vs Competitors" },
    { component: RoadmapSlide, title: "Roadmap" },
    { component: WhyWorkSlide, title: "Why This Works" },
    { component: CallToActionSlide, title: "Call to Action" },
  ]

  if (!isOpen) return null

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-7xl h-full max-h-[90vh] bg-gradient-to-br from-emerald-50 via-slate-50 to-green-50 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-slate-600 hover:text-slate-800"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Slide Content */}
        <div className="h-full p-8">
          <CurrentSlideComponent />
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-600 hover:text-emerald-600"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-emerald-600 w-6" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-600 hover:text-emerald-600"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-slate-600">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Slide Title */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-slate-600">
          {slides[currentSlide].title}
        </div>
      </div>
    </div>
  )
}
