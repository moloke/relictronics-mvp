"use client"

import { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import {
  Wrench,
  Recycle,
  Upload,
  X,
  Plus,
  Camera,
  Star,
  Award,
  User,
  Bell,
  Settings,
  LogOut,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function HobbyistProfileForm({ user, onSignOut }) {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("profile")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [skills, setSkills] = useState([])
  const [skillInput, setSkillInput] = useState("")
  const [workSamples, setWorkSamples] = useState([])
  const [bio, setBio] = useState("")
  const [servicesOffered, setServicesOffered] = useState("")

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab)
    setIsMobileMenuOpen(false)
  }, [])

  // Suggested skills for autocomplete
  const suggestedSkills = [
    "iPhone Screen Repair",
    "Android Screen Repair",
    "Laptop Motherboard Repair",
    "Battery Replacement",
    "Water Damage Repair",
    "MacBook Repair",
    "Gaming Console Repair",
    "Tablet Repair",
    "Headphone Repair",
    "Smartwatch Repair",
    "Camera Repair",
    "Drone Repair",
    "Soldering",
    "Microsoldering",
    "Data Recovery",
    "Software Troubleshooting",
  ]

  const addSkill = (skillName) => {
    if (skillName.trim() && !skills.find((skill) => skill.name.toLowerCase() === skillName.toLowerCase())) {
      const newSkill = {
        id: Date.now().toString(),
        name: skillName.trim(),
      }
      setSkills([...skills, newSkill])
      setSkillInput("")
    }
  }

  const removeSkill = (skillId) => {
    setSkills(skills.filter((skill) => skill.id !== skillId))
  }

  const addWorkSample = () => {
    const newSample = {
      id: Date.now().toString(),
      beforeImage: "",
      afterImage: "",
      description: "",
    }
    setWorkSamples([...workSamples, newSample])
  }

  const removeWorkSample = (sampleId) => {
    setWorkSamples(workSamples.filter((sample) => sample.id !== sampleId))
  }

  const updateWorkSample = (sampleId, field, value) => {
    setWorkSamples(workSamples.map((sample) => (sample.id === sampleId ? { ...sample, [field]: value } : sample)))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-green-50">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate("/dashboard")}>
              <div className="relative">
                <div className="logo-text text-[1.8rem]">R</div>
              </div>
              <span className="text-xl font-bold text-slate-800">elictronics</span>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-slate-100"
              >
                <div className="space-y-1.5">
                  <div className="w-6 h-0.5 bg-slate-600"></div>
                  <div className="w-6 h-0.5 bg-slate-600"></div>
                  <div className="w-6 h-0.5 bg-slate-600"></div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => navigate('/')}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-emerald-600"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate('/requests')}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-emerald-600"
              >
                My Requests
              </button>
              <button
                onClick={() => navigate('/find')}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-emerald-600"
              >
                Find a Hobbyist
              </button>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-slate-600" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-emerald-500 rounded-full"></span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                      <AvatarFallback className="bg-emerald-100 text-emerald-700">{user.email.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.email.split('@')[0]}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden ${
              isMobileMenuOpen ? "block" : "hidden"
            } border-t border-slate-200 py-2`}
          >
            <div className="flex flex-col space-y-2 px-4">
              <button
                onClick={() => navigate('/')}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-emerald-600"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate('/requests')}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-emerald-600"
              >
                My Requests
              </button>
              <button
                onClick={() => navigate('/find')}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-emerald-600"
              >
                Find a Hobbyist
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Title */}
      <div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-slate-800">Create Your Professional Profile</h1>
          <p className="text-slate-600">Showcase your skills and attract customers on Relictronics</p>
        </div>
      </div>

      {/* Main Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form className="space-y-8">
          {/* Profile Header */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-emerald-600" />
                Basic Information
              </CardTitle>
              <CardDescription>Tell customers about yourself and your expertise</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                  <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xl">{user.email.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <Button
                    variant="outline"
                    className="rounded-xl border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-xs text-slate-500 mt-1">Recommended: 400x400px, max 2MB</p>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <Label htmlFor="bio" className="text-slate-700 font-medium">
                  Professional Bio
                </Label>
                <Textarea
                  id="bio"
                  placeholder="Tell customers about your experience, background, and what makes you passionate about repair work..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 min-h-[120px] resize-none"
                />
                <p className="text-xs text-slate-500">{bio.length}/500 characters</p>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-emerald-600" />
                Skills & Expertise
              </CardTitle>
              <CardDescription>Add your specific repair skills to help customers find you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Skill Input */}
              <div className="space-y-2">
                <Label htmlFor="skills" className="text-slate-700 font-medium">
                  Add Skills
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="skills"
                    placeholder="e.g., iPhone Screen Repair"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        addSkill(skillInput)
                      }
                    }}
                    className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                  <Button
                    type="button"
                    onClick={() => addSkill(skillInput)}
                    className="bg-emerald-600 hover:bg-emerald-700 rounded-xl px-6"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Suggested Skills */}
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium text-sm">Suggested Skills</Label>
                <div className="flex flex-wrap gap-2">
                  {suggestedSkills
                    .filter((skill) => !skills.find((s) => s.name.toLowerCase() === skill.toLowerCase()))
                    .slice(0, 8)
                    .map((skill) => (
                      <Button
                        key={skill}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => addSkill(skill)}
                        className="rounded-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 text-xs"
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        {skill}
                      </Button>
                    ))}
                </div>
              </div>

              {/* Selected Skills */}
              {skills.length > 0 && (
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium text-sm">Your Skills</Label>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill.id}
                        variant="secondary"
                        className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 rounded-full px-3 py-1 flex items-center gap-1"
                      >
                        {skill.name}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill.id)}
                          className="ml-1 hover:bg-emerald-300 rounded-full p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Work Samples */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-emerald-600" />
                Before & After Work Samples
              </CardTitle>
              <CardDescription>Showcase your best repair work to build trust with customers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {workSamples.map((sample, index) => (
                <div key={sample.id} className="p-6 bg-slate-50 rounded-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-slate-800">Work Sample {index + 1}</h4>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeWorkSample(sample.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Before Image */}
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium text-sm">Before Photo</Label>
                      <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-emerald-400 transition-colors">
                        <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm text-slate-600">Click to upload before photo</p>
                        <p className="text-xs text-slate-500">PNG, JPG up to 5MB</p>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium text-sm">After Photo</Label>
                      <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-emerald-400 transition-colors">
                        <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm text-slate-600">Click to upload after photo</p>
                        <p className="text-xs text-slate-500">PNG, JPG up to 5MB</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium text-sm">Description</Label>
                    <Textarea
                      placeholder="Describe the repair work, challenges faced, and techniques used..."
                      value={sample.description}
                      onChange={(e) => updateWorkSample(sample.id, "description", e.target.value)}
                      className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                      rows={3}
                    />
                  </div>
                </div>
              ))}

              <Button
                type="button"
                onClick={addWorkSample}
                variant="outline"
                className="w-full border-2 border-dashed border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 rounded-xl py-6 bg-transparent"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Work Sample
              </Button>
            </CardContent>
          </Card>

          {/* Services Offered */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-emerald-600" />
                Services Offered
              </CardTitle>
              <CardDescription>Describe the services you provide and your approach</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="services" className="text-slate-700 font-medium">
                  Detailed Service Description
                </Label>
                <Textarea
                  id="services"
                  placeholder="Describe your services, pricing approach, turnaround times, warranty information, and what makes your service special..."
                  value={servicesOffered}
                  onChange={(e) => setServicesOffered(e.target.value)}
                  className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 min-h-[150px] resize-none"
                />
                <p className="text-xs text-slate-500">{servicesOffered.length}/1000 characters</p>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-xl px-12 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Save Profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}