"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Wrench,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  MessageCircle,
  Award,
  Calendar,
  Shield,
  ArrowLeft,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function HobbyistProfile({ user }) {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null)

  // Sample hobbyist data
  const hobbyist = {
    id: "1",
    name: "Alex Chen",
    handle: "@TechMaster_Pro",
    avatar: "/placeholder.svg?height=120&width=120",
    coverImage: "/placeholder.svg?height=300&width=800",
    bio: "I'm a passionate electronics repair specialist with over 8 years of experience bringing devices back to life. My journey started in college when I fixed my first broken iPhone, and I've been hooked ever since. I believe every device deserves a second chance, and I take pride in providing high-quality repairs that extend the life of your electronics.\n\nI specialize in mobile device repairs, particularly iPhones and MacBooks, but I also work on a wide range of consumer electronics. Water damage recovery is one of my specialties - I've successfully restored hundreds of devices that others thought were beyond repair.\n\nWhen I'm not fixing devices, I enjoy teaching others about electronics repair and contributing to the right-to-repair movement. I believe in sustainable technology practices and helping people make informed decisions about their devices.",
    rating: 4.9,
    reviewCount: 127,
    completedJobs: 340,
    location: "San Francisco, CA",
    responseTime: "Usually responds in 2 hours",
    memberSince: "March 2020",
    isVerified: true,
    isOnline: true,
    skills: [
      "iPhone Screen Repair",
      "MacBook Repair",
      "Water Damage Recovery",
      "Battery Replacement",
      "Camera Repair",
      "Charging Port Repair",
      "Microsoldering",
      "Data Recovery",
      "Logic Board Repair",
      "Face ID Repair",
      "Touch ID Repair",
      "Speaker Repair",
    ],
    certifications: ["Apple Certified Technician", "IPC Soldering Certification"],
    languages: ["English", "Mandarin"],
    workingHours: "Mon-Fri: 9AM-6PM PST",
  }

  const workSamples = [
    {
      id: "1",
      title: "iPhone 14 Pro Water Damage Recovery",
      beforeImage: "/placeholder.svg?height=400&width=400",
      afterImage: "/placeholder.svg?height=400&width=400",
      description:
        "Customer dropped their iPhone 14 Pro in a lake. Device was completely unresponsive with severe water damage. Performed complete disassembly, ultrasonic cleaning, and component-level repair. Replaced corroded charging port and cleaned logic board. Device fully restored to working condition.",
      category: "Water Damage",
      completedDate: "2024-01-15",
    },
    {
      id: "2",
      title: "MacBook Air M2 Logic Board Repair",
      beforeImage: "/placeholder.svg?height=400&width=400",
      afterImage: "/placeholder.svg?height=400&width=400",
      description:
        "MacBook Air with liquid spill damage causing no power condition. Identified damaged power management IC through detailed diagnosis. Performed precision microsoldering to replace faulty component. Full functionality restored including all ports and wireless connectivity.",
      category: "Logic Board Repair",
      completedDate: "2024-01-10",
    },
    {
      id: "3",
      title: "iPhone 13 Screen and Face ID Repair",
      beforeImage: "/placeholder.svg?height=400&width=400",
      afterImage: "/placeholder.svg?height=400&width=400",
      description:
        "Severely cracked screen with non-functional Face ID after drop damage. Carefully transferred original Face ID components to new display assembly. Calibrated and tested all functions. Customer's Face ID working perfectly with new screen.",
      category: "Screen Repair",
      completedDate: "2024-01-08",
    },
    {
      id: "4",
      title: "iPad Pro Charging Port Replacement",
      beforeImage: "/placeholder.svg?height=400&width=400",
      afterImage: "/placeholder.svg?height=400&width=400",
      description:
        "iPad Pro with damaged USB-C port from repeated cable insertion. Port was loose and intermittent. Performed precision desoldering and installed new charging port. Tested with multiple cables and charging speeds - all working perfectly.",
      category: "Charging Port",
      completedDate: "2024-01-05",
    },
  ]

  const recentReviews = [
    {
      id: "1",
      customerName: "Sarah M.",
      rating: 5,
      comment:
        "Alex saved my MacBook after I spilled coffee on it! I thought it was completely dead, but he worked his magic and got it running like new. Amazing work and great communication throughout the process.",
      date: "2024-01-20",
      deviceType: "MacBook Pro",
    },
    {
      id: "2",
      customerName: "Mike R.",
      rating: 5,
      comment:
        "Fast, professional, and reasonably priced. My iPhone screen looks perfect and Face ID works flawlessly. Will definitely use Alex again for any future repairs.",
      date: "2024-01-18",
      deviceType: "iPhone 14",
    },
    {
      id: "3",
      customerName: "Jennifer L.",
      rating: 4,
      comment:
        "Great repair work on my water-damaged phone. Took a bit longer than expected but the results were worth it. Phone works perfectly now!",
      date: "2024-01-15",
      deviceType: "iPhone 13 Pro",
    },
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

  const openImageModal = (type, sample) => {
    setSelectedImage({ type, sample })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-green-50 text-left">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            onClick={() => navigate("/dashboard?tab=browse")}
            variant="ghost"
            className="mb-4 text-slate-600 hover:text-emerald-600"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Browse
          </Button>
        </div>
      </div>

      {/* Profile Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-emerald-600 to-green-600 relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-end gap-6">
                <div className="relative">
                  <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                    <AvatarImage src={hobbyist.avatar || "/placeholder.svg"} alt={hobbyist.name} />
                    <AvatarFallback className="bg-emerald-100 text-emerald-700 text-2xl">
                      {hobbyist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {hobbyist.isOnline && (
                    <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 border-3 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 text-white pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold">{hobbyist.name}</h1>
                    {hobbyist.isVerified && <CheckCircle className="h-6 w-6 text-white" />}
                  </div>
                  <p className="text-emerald-100 mb-1">{hobbyist.handle}</p>
                  <div className="flex items-center gap-4 text-sm text-emerald-100">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {hobbyist.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Member since {hobbyist.memberSince}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Stats */}
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {renderStars(hobbyist.rating)}
                  <span className="font-bold text-lg text-slate-800">{hobbyist.rating}</span>
                </div>
                <p className="text-sm text-slate-600">{hobbyist.reviewCount} reviews</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-emerald-600" />
                  <span className="font-bold text-lg text-slate-800">{hobbyist.completedJobs}</span>
                </div>
                <p className="text-sm text-slate-600">Jobs completed</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="font-bold text-lg text-slate-800">2h</span>
                </div>
                <p className="text-sm text-slate-600">Avg response time</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="font-bold text-lg text-slate-800">Verified</span>
                </div>
                <p className="text-sm text-slate-600">Professional status</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-xl px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                <MessageCircle className="h-5 w-5 mr-2" />
                Message Hobbyist
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Section */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-emerald-600" />
                  About Alex
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-slate max-w-none">
                  {hobbyist.bio.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-slate-700 leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Work Samples Gallery */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-emerald-600" />
                  Before & After Gallery
                </CardTitle>
                <CardDescription>See examples of Alex's repair work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {workSamples.map((sample) => (
                  <div key={sample.id} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-800">{sample.title}</h3>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 rounded-full">
                        {sample.category}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-slate-700">Before</h4>
                        <div
                          className="aspect-square bg-slate-100 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openImageModal("before", sample)}
                        >
                          <img
                            src={sample.beforeImage || "/placeholder.svg"}
                            alt={`${sample.title} - Before`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-slate-700">After</h4>
                        <div
                          className="aspect-square bg-slate-100 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openImageModal("after", sample)}
                        >
                          <img
                            src={sample.afterImage || "/placeholder.svg"}
                            alt={`${sample.title} - After`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">{sample.description}</p>
                    <p className="text-xs text-slate-500">
                      Completed on {new Date(sample.completedDate).toLocaleDateString()}
                    </p>

                    {sample.id !== workSamples[workSamples.length - 1].id && <Separator className="mt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-emerald-600" />
                  Recent Reviews
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {recentReviews.map((review) => (
                  <div key={review.id} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-slate-100 text-slate-600">
                            {review.customerName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-slate-800">{review.customerName}</p>
                          <p className="text-xs text-slate-500">
                            {review.deviceType} • {new Date(review.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-slate-700 leading-relaxed">{review.comment}</p>
                    {review.id !== recentReviews[recentReviews.length - 1].id && <Separator className="mt-4" />}
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                >
                  View All Reviews
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl ">
              <CardHeader>
                <CardTitle className="text-lg">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 ">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="font-medium text-slate-800">Response Time</p>
                    <p className="text-sm text-slate-600">{hobbyist.responseTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="font-medium text-slate-800">Working Hours</p>
                    <p className="text-sm text-slate-600">{hobbyist.workingHours}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="font-medium text-slate-800">Location</p>
                    <p className="text-sm text-slate-600">{hobbyist.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hobbyist.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-emerald-100 text-emerald-800 rounded-full px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {hobbyist.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">{cert}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hobbyist.languages.map((language, index) => (
                    <Badge key={index} variant="outline" className="border-slate-200 text-slate-700 rounded-full">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              onClick={closeImageModal}
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{selectedImage.sample.title}</h3>
                <p className="text-sm text-slate-600 mb-4">
                  {selectedImage.type === "before" ? "Before" : "After"} - {selectedImage.sample.category}
                </p>
                <img
                  src={
                    selectedImage.type === "before" ? selectedImage.sample.beforeImage : selectedImage.sample.afterImage
                  }
                  alt={`${selectedImage.sample.title} - ${selectedImage.type}`}
                  className="w-full h-auto rounded-xl"
                />
                <p className="text-sm text-slate-700 mt-4 leading-relaxed">{selectedImage.sample.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
