import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Baby, 
  Calendar, 
  Bell, 
  MapPin, 
  Phone,
  BookOpen,
  Users,
  Activity,
  Settings,
  LogOut
} from "lucide-react";

const PatientDashboard = () => {
  const [currentWeek] = useState(24);
  const [dueDate] = useState("December 15, 2024");
  const [progressPercentage] = useState(60);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-playfair text-primary">marternoval</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <Settings className="h-5 w-5 text-muted-foreground" />
            <Link to="/login">
              <LogOut className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-playfair text-primary mb-2">
            Hello, Chisom! 👋
          </h1>
          <p className="text-muted-foreground">Welcome back to your motherhood journey</p>
        </div>

        {/* Pregnancy Progress */}
        <Card className="maternal-card p-6 mb-8 bg-gradient-soft">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold font-playfair">Pregnancy Progress</h2>
            <Badge className="bg-primary-soft text-primary-glow">
              Week {currentWeek}
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-4">
                <Baby className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="font-medium">Your baby is the size of a corn 🌽</p>
                  <p className="text-sm text-muted-foreground">About 30cm long, weighing ~600g</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{progressPercentage}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-sm text-muted-foreground">Due date: {dueDate}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-background/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">This Week's Development</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Baby can hear your voice clearly</li>
                  <li>• Lungs are developing rapidly</li>
                  <li>• Taste buds are fully formed</li>
                </ul>
              </div>
              
              <Link to="/pregnancy-tracker">
                <Button className="w-full bg-gradient-primary text-primary-foreground">
                  View Full Tracker
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Emergency Help */}
          <Card className="maternal-card p-6 text-center">
            <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="font-semibold mb-2">Emergency Help</h3>
            <p className="text-sm text-muted-foreground mb-4">24/7 support available</p>
            <Link to="/emergency">
              <Button variant="destructive" size="sm" className="w-full">
                Get Help
              </Button>
            </Link>
          </Card>

          {/* Appointments */}
          <Card className="maternal-card p-6 text-center">
            <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Next Appointment</h3>
            <p className="text-sm text-muted-foreground mb-4">Aug 25, 2:00 PM</p>
            <Button variant="outline" size="sm" className="w-full">
              View Calendar
            </Button>
          </Card>

          {/* Health Tips */}
          <Card className="maternal-card p-6 text-center">
            <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Health Guidance</h3>
            <p className="text-sm text-muted-foreground mb-4">Nutrition & wellness</p>
            <Link to="/health-guidance">
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </Link>
          </Card>

          {/* Community */}
          <Card className="maternal-card p-6 text-center">
            <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Community</h3>
            <p className="text-sm text-muted-foreground mb-4">Connect with mothers</p>
            <Link to="/community">
              <Button variant="outline" size="sm" className="w-full">
                Join Discussion
              </Button>
            </Link>
          </Card>
        </div>

        {/* Recent Activity & Upcoming */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Upcoming Appointments */}
          <Card className="maternal-card p-6">
            <h2 className="text-xl font-semibold font-playfair mb-4">Upcoming Appointments</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Antenatal Checkup</p>
                    <p className="text-sm text-muted-foreground">Dr. Adaora Okafor</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Aug 25</p>
                  <p className="text-sm text-muted-foreground">2:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center">
                  <Activity className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Ultrasound Scan</p>
                    <p className="text-sm text-muted-foreground">HealthyMum Clinic</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Sep 10</p>
                  <p className="text-sm text-muted-foreground">10:00 AM</p>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              View All Appointments
            </Button>
          </Card>

          {/* Nearby Healthcare */}
          <Card className="maternal-card p-6">
            <h2 className="text-xl font-semibold font-playfair mb-4">Healthcare Nearby</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">HealthyMum Clinic</p>
                    <p className="text-sm text-muted-foreground">2.1 km away • ⭐ 4.8</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">Call</Button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">SafeBirth Hospital</p>
                    <p className="text-sm text-muted-foreground">4.3 km away • ⭐ 4.6</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">Call</Button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Midwife Ngozi</p>
                    <p className="text-sm text-muted-foreground">3.2 km away • ⭐ 4.9</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">Call</Button>
              </div>
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              View on Map
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;