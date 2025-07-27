"use client"

import { useState } from "react"
import {
  Wrench,
  Recycle,
  Search,
  Plus,
  Bell,
  User,
  Settings,
  LogOut,
  Smartphone,
  Laptop,
  Headphones,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Dashboard({ user, onSignOut }) {
  const [activeTab, setActiveTab] = useState("welcome")

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-green-50">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative">
                <div className="logo-text text-[1.8rem]">R</div>
              </div>
              <span className="text-xl font-bold text-slate-800">elictronics</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setActiveTab("welcome")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "welcome" ? "bg-emerald-100 text-emerald-700" : "text-slate-600 hover:text-emerald-600"
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab("requests")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "requests" ? "bg-emerald-100 text-emerald-700" : "text-slate-600 hover:text-emerald-600"
                }`}
              >
                My Requests
              </button>
              <button
                onClick={() => setActiveTab("find")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "find" ? "bg-emerald-100 text-emerald-700" : "text-slate-600 hover:text-emerald-600"
                }`}
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
                  <DropdownMenuItem>
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
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "welcome" && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome back, {user.email.split('@')[0]}! 👋</h1>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Ready to give your tech a second life? Connect with skilled repair professionals or browse available
                services.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-xl">
                      <Plus className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div class="w-4/5">
                      <CardTitle className="text-lg">Request a Repair</CardTitle>
                      <CardDescription>Get your device fixed by skilled professionals</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => setActiveTab("find")}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 rounded-xl"
                  >
                    Start New Request
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <Search className="h-6 w-6 text-blue-600" />
                    </div>
                    <div class="w-4/5">
                      <CardTitle className="text-lg">Browse Hobbyists</CardTitle>
                      <CardDescription>Find the perfect repair professional for your needs</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => setActiveTab("find")}
                    variant="outline"
                    className="w-full border-2 border-blue-200 text-blue-700 hover:bg-blue-50 rounded-xl"
                  >
                    Explore Professionals
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Active Requests</p>
                      <p className="text-2xl font-bold text-slate-800">2</p>
                    </div>
                    <div className="p-2 bg-orange-100 rounded-xl">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Completed Repairs</p>
                      <p className="text-2xl font-bold text-slate-800">7</p>
                    </div>
                    <div className="p-2 bg-green-100 rounded-xl">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Devices Saved</p>
                      <p className="text-2xl font-bold text-slate-800">9</p>
                    </div>
                    <div className="p-2 bg-emerald-100 rounded-xl">
                      <Recycle className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-slate-600" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Smartphone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">iPhone 12 Screen Repair</p>
                    <p className="text-sm text-slate-600">Assigned to TechMaster_Pro • 2 hours ago</p>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    In Progress
                  </Badge>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Laptop className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">MacBook Battery Replacement</p>
                    <p className="text-sm text-slate-600">Completed by RepairGuru • 1 day ago</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Completed
                  </Badge>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Headphones className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">AirPods Pro Repair</p>
                    <p className="text-sm text-slate-600">Quote received from AudioFix • 3 days ago</p>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Quote Ready
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "requests" && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">My Requests</h2>
            <p className="text-slate-600 mb-8">View and manage your repair requests</p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-slate-500">This section will show your repair requests...</p>
            </div>
          </div>
        )}

        {activeTab === "find" && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Find a Hobbyist</h2>
            <p className="text-slate-600 mb-8">Connect with skilled repair professionals</p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-slate-500">This section will show available hobbyists...</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
