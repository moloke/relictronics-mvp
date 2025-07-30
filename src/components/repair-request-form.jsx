import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Wrench,
  Recycle,
  Upload,
  X,
  Camera,
  Smartphone,
  Laptop,
  Gamepad2,
  Tv,
  Zap,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RepairRequestForm({ user }) {
  const navigate = useNavigate()
  const [deviceType, setDeviceType] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")
  const [issueDescription, setIssueDescription] = useState("")
  const [uploadedPhotos, setUploadedPhotos] = useState([])

  const deviceTypes = [
    { value: "phone", label: "Phone", icon: Smartphone },
    { value: "laptop", label: "Laptop", icon: Laptop },
    { value: "console", label: "Gaming Console", icon: Gamepad2 },
    { value: "tv", label: "TV", icon: Tv },
    { value: "appliance", label: "Appliance", icon: Zap },
  ]

  const getDeviceIcon = (type) => {
    const device = deviceTypes.find((d) => d.value === type)
    return device ? device.icon : Smartphone
  }

  const removePhoto = (photoId) => {
    setUploadedPhotos(uploadedPhotos.filter((photo) => photo.id !== photoId))
  }

  const addPhoto = () => {
    // Simulate file upload - in real implementation, this would handle actual file upload
    const newPhoto = {
      id: Date.now().toString(),
      name: `device-photo-${uploadedPhotos.length + 1}.jpg`,
      url: `/placeholder.svg?height=200&width=200`,
      size: "2.3 MB",
    }
    setUploadedPhotos([...uploadedPhotos, newPhoto])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log({
      deviceType,
      manufacturer,
      model,
      issueDescription,
      photos: uploadedPhotos,
    })
    // Navigate back to dashboard after submission
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-green-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer" onClick={() => navigate("/dashboard")}>
              <div className="relative">
                <div className="logo-text text-[1.8rem]">R</div>
              </div>
              <span className="text-xl font-bold text-slate-800">elictronics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Device Information */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-emerald-600" />
                Device Information
              </CardTitle>
              <CardDescription>Tell us about the device that needs repair</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Device Type */}
              <div className="space-y-2">
                <Label htmlFor="deviceType" className="text-slate-700 font-medium">
                  Device Type *
                </Label>
                <Select value={deviceType} onValueChange={setDeviceType}>
                  <SelectTrigger className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 h-12">
                    <SelectValue placeholder="Select your device type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    {deviceTypes.map((device) => {
                      const IconComponent = device.icon
                      return (
                        <SelectItem key={device.value} value={device.value} className="rounded-lg">
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-4 w-4 text-emerald-600" />
                            {device.label}
                          </div>
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Manufacturer */}
                <div className="space-y-2">
                  <Label htmlFor="manufacturer" className="text-slate-700 font-medium">
                    Manufacturer *
                  </Label>
                  <Input
                    id="manufacturer"
                    type="text"
                    placeholder="e.g., Apple, Samsung, Dell"
                    value={manufacturer}
                    onChange={(e) => setManufacturer(e.target.value)}
                    className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 h-12"
                    required
                  />
                </div>

                {/* Model */}
                <div className="space-y-2">
                  <Label htmlFor="model" className="text-slate-700 font-medium">
                    Model *
                  </Label>
                  <Input
                    id="model"
                    type="text"
                    placeholder="e.g., iPhone 14 Pro, MacBook Air M2"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 h-12"
                    required
                  />
                </div>
              </div>

              {/* Device Preview */}
              {deviceType && (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="flex items-center gap-3">
                    {(() => {
                      const IconComponent = getDeviceIcon(deviceType)
                      return <IconComponent className="h-6 w-6 text-emerald-600" />
                    })()}
                    <div>
                      <p className="font-medium text-emerald-800">
                        {manufacturer && model ? `${manufacturer} ${model}` : "Your Device"}
                      </p>
                      <p className="text-sm text-emerald-600">
                        {deviceTypes.find((d) => d.value === deviceType)?.label}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Issue Description */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-emerald-600" />
                Issue Description
              </CardTitle>
              <CardDescription>Describe the problem with your device in detail</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="issueDescription" className="text-slate-700 font-medium">
                  What's wrong with your device? *
                </Label>
                <Textarea
                  id="issueDescription"
                  placeholder="Please describe the issue in detail. Include:
• What exactly is not working?
• When did the problem start?
• Any error messages you see?
• What were you doing when it happened?
• Have you tried any fixes already?

Example: 'My iPhone 14 screen is cracked after I dropped it yesterday. The touch still works but there are spider web cracks across the top half of the screen. The phone turns on and functions normally otherwise.'"
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 min-h-[200px] resize-none"
                  required
                />
                <p className="text-xs text-slate-500">{issueDescription.length}/1000 characters</p>
              </div>

              {/* Helpful Tips */}
              <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Tips for a better description
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Be as specific as possible about the symptoms</li>
                  <li>• Mention if the device was dropped, got wet, or exposed to heat</li>
                  <li>• Include any error codes or messages you see</li>
                  <li>• Let us know if the problem is intermittent or constant</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Photo Upload */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-emerald-600" />
                Device Photos
              </CardTitle>
              <CardDescription>Upload photos to help professionals understand the issue better</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Upload Area */}
              <div
                onClick={addPhoto}
                className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center hover:border-emerald-400 hover:bg-emerald-50/50 transition-all cursor-pointer group"
              >
                <Upload className="h-12 w-12 text-slate-400 group-hover:text-emerald-500 mx-auto mb-4 transition-colors" />
                <h3 className="text-lg font-medium text-slate-700 mb-2">Upload Device Photos</h3>
                <p className="text-slate-600 mb-4">Click to upload photos of your device and the damage</p>
                <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
                  <span>PNG, JPG up to 10MB each</span>
                  <span>•</span>
                  <span>Up to 5 photos</span>
                </div>
              </div>

              {/* Photo Guidelines */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">📸 Good Photos Include:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Clear, well-lit images</li>
                    <li>• Multiple angles of the damage</li>
                    <li>• Close-up shots of specific issues</li>
                    <li>• Overall view of the device</li>
                  </ul>
                </div>
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <h4 className="font-medium text-amber-800 mb-2">⚠️ Avoid:</h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• Blurry or dark photos</li>
                    <li>• Photos with glare or reflections</li>
                    <li>• Images that are too far away</li>
                    <li>• Sideways or upside-down photos</li>
                  </ul>
                </div>
              </div>

              {/* Uploaded Photos */}
              {uploadedPhotos.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-medium text-slate-700">Uploaded Photos ({uploadedPhotos.length}/5)</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {uploadedPhotos.map((photo) => (
                      <div key={photo.id} className="relative group">
                        <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden">
                          <img
                            src={photo.url || "/placeholder.svg"}
                            alt={photo.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removePhoto(photo.id)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                        <div className="mt-2">
                          <p className="text-xs font-medium text-slate-700 truncate">{photo.name}</p>
                          <p className="text-xs text-slate-500">{photo.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Submit Section */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <h3 className="font-medium text-emerald-800 mb-2">What happens next?</h3>
                  <div className="text-sm text-emerald-700 space-y-1">
                    <p>1. We'll review your request and match you with qualified repair professionals</p>
                    <p>2. You'll receive quotes and can choose the best option for you</p>
                    <p>3. Schedule the repair and get your device back to working condition!</p>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-xl px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Submit Repair Request
                </Button>

                <p className="text-xs text-slate-500">
                  By submitting this request, you agree to our{" "}
                  <a href="/terms" className="text-emerald-600 hover:underline">
                    Terms of Service
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}