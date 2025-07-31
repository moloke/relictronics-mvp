import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Wrench,
  Recycle,
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  Smartphone,
  Laptop,
  Gamepad2,
  Tv,
  Zap,
  Award,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function BrowseHobbyists({ user }) {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const [deviceFilter, setDeviceFilter] = useState("")

  // Sample hobbyist data
  const hobbyists = [
    {
      id: "1",
      name: "Alex Chen",
      handle: "@TechMaster_Pro",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Specialized in iPhone and MacBook repairs with 8+ years of experience. I focus on quality work and quick turnaround times. Water damage recovery is my specialty!",
      rating: 4.9,
      reviewCount: 127,
      completedJobs: 340,
      location: "San Francisco, CA",
      responseTime: "Usually responds in 2 hours",
      specialties: ["iPhone Repair", "MacBook Repair", "Water Damage"],
      isVerified: true,
      isOnline: true,
    },
    {
      id: "2",
      name: "Sarah Rodriguez",
      handle: "@FixItSarah",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Gaming console repair specialist! From PS5 to Nintendo Switch, I've got you covered. Also experienced with laptop motherboard repairs and upgrades.",
      rating: 4.8,
      reviewCount: 89,
      completedJobs: 156,
      location: "Austin, TX",
      responseTime: "Usually responds in 1 hour",
      specialties: ["Gaming Console", "Laptop Repair", "Motherboard"],
      isVerified: true,
      isOnline: false,
    },
    {
      id: "3",
      name: "Mike Thompson",
      handle: "@CircuitWizard",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Electronics repair enthusiast with a passion for bringing devices back to life. Specializing in TV repairs, home appliances, and vintage electronics restoration.",
      rating: 4.7,
      reviewCount: 203,
      completedJobs: 445,
      location: "Denver, CO",
      responseTime: "Usually responds in 4 hours",
      specialties: ["TV Repair", "Appliances", "Vintage Electronics"],
      isVerified: true,
      isOnline: true,
    },
    {
      id: "4",
      name: "Emma Wilson",
      handle: "@MobileDocEmma",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Mobile device specialist focusing on Android and iPhone repairs. Screen replacements, battery swaps, and camera fixes are my bread and butter!",
      rating: 4.6,
      reviewCount: 156,
      completedJobs: 289,
      location: "Seattle, WA",
      responseTime: "Usually responds in 3 hours",
      specialties: ["Android Repair", "iPhone Repair", "Screen Replacement"],
      isVerified: false,
      isOnline: true,
    },
    {
      id: "5",
      name: "David Park",
      handle: "@LaptopGuru_DP",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Laptop repair specialist with expertise in all major brands. From simple upgrades to complex motherboard repairs, I handle it all with precision and care.",
      rating: 4.9,
      reviewCount: 94,
      completedJobs: 178,
      location: "Portland, OR",
      responseTime: "Usually responds in 1 hour",
      specialties: ["Laptop Repair", "Upgrades", "Data Recovery"],
      isVerified: true,
      isOnline: false,
    },
    {
      id: "6",
      name: "Lisa Chang",
      handle: "@SmartFixLisa",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Smart home and appliance repair expert. I help bring your connected devices back online and keep your home running smoothly.",
      rating: 4.5,
      reviewCount: 67,
      completedJobs: 123,
      location: "Phoenix, AZ",
      responseTime: "Usually responds in 6 hours",
      specialties: ["Smart Home", "Appliances", "IoT Devices"],
      isVerified: false,
      isOnline: true,
    },
  ]

  const deviceTypes = [
    { value: "all", label: "All Devices" },
    { value: "phone", label: "Phone", icon: Smartphone },
    { value: "laptop", label: "Laptop", icon: Laptop },
    { value: "console", label: "Gaming Console", icon: Gamepad2 },
    { value: "tv", label: "TV", icon: Tv },
    { value: "appliance", label: "Appliance", icon: Zap },
  ]

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
          />
        ))}
      </div>
    )
  }

  const filteredHobbyists = hobbyists.filter((hobbyist) => {
    const matchesSearch =
      hobbyist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hobbyist.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hobbyist.specialties.some((specialty) => specialty.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesFilter =
      !deviceFilter ||
      deviceFilter === "all" ||
      hobbyist.specialties.some((specialty) => specialty.toLowerCase().includes(deviceFilter.toLowerCase()))

    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-green-50 text-left">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Find a Repair Professional</h1>
              <p className="text-slate-600">Browse skilled hobbyists and technicians in your area</p>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Search by name, specialty, or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 h-12 bg-white"
              />
            </div>
            <div className="sm:w-64">
              <Select value={deviceFilter} onValueChange={setDeviceFilter}>
                <SelectTrigger className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 h-12 bg-white">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-slate-500" />
                    <SelectValue placeholder="Filter by device type" />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {deviceTypes.map((device) => (
                    <SelectItem key={device.value} value={device.value} className="rounded-lg">
                      <div className="flex items-center gap-2">
                        {device.icon ? <device.icon className="h-4 w-4 text-emerald-600" /> : null}
                        {device.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              {filteredHobbyists.length} Professional{filteredHobbyists.length !== 1 ? "s" : ""} Found
            </h2>
            <p className="text-sm text-slate-600">
              {searchQuery && `Results for "${searchQuery}"`}
              {deviceFilter &&
                deviceFilter !== "all" &&
                ` • Filtered by ${deviceTypes.find((d) => d.value === deviceFilter)?.label}`}
            </p>
          </div>
        </div>

        {/* Hobbyist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHobbyists.map((hobbyist) => (
            <Card
              key={hobbyist.id}
              className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-200 group flex flex-col h-full"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={hobbyist.avatar || "/placeholder.svg"} alt={hobbyist.name} />
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 text-lg">
                        {hobbyist.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {hobbyist.isOnline && (
                      <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-lg truncate">{hobbyist.name}</CardTitle>
                      {hobbyist.isVerified && <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />}
                    </div>
                    <p className="text-sm text-slate-600 mb-2 ">{hobbyist.handle}</p>
                    <div className="flex items-center gap-1 mb-2">
                      {renderStars(hobbyist.rating)}
                      <span className="text-sm font-medium text-slate-700">{hobbyist.rating}</span>
                      <span className="text-[0.6rem] text-slate-500">({hobbyist.reviewCount})</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow space-y-4">
                {/* Bio */}
                <CardDescription className="text-sm text-slate-600 line-clamp-3">{hobbyist.bio}</CardDescription>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-slate-600">
                    <Award className="h-4 w-4 text-emerald-600" />
                    <span className="font-medium">{hobbyist.completedJobs}</span> jobs completed
                  </div>
                  <div className="flex items-center gap-1 text-slate-600">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span className="truncate">{hobbyist.location}</span>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <Clock className="h-3 w-3" />
                  {hobbyist.responseTime}
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1">
                  {hobbyist.specialties.slice(0, 3).map((specialty, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-emerald-100 text-emerald-800 text-xs rounded-full px-2 py-1"
                    >
                      {specialty}
                    </Badge>
                  ))}
                  {hobbyist.specialties.length > 3 && (
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-xs rounded-full px-2 py-1">
                      +{hobbyist.specialties.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Spacer to push button to bottom */}
                <div className="flex-grow" />

                {/* Call to Action */}
                <Button
                  onClick={() => navigate(`/hobbyist/${hobbyist.id}`)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-medium rounded-xl transition-all duration-200 group-hover:shadow-lg mt-auto"
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredHobbyists.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="p-4 bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">No professionals found</h3>
              <p className="text-slate-600 mb-4">
                Try adjusting your search terms or filters to find more repair professionals.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setDeviceFilter("")
                }}
                variant="outline"
                className="rounded-xl border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}