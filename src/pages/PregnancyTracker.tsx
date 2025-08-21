import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Baby, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  Activity,
  Ruler,
  Weight,
  Home,
  ArrowLeft
} from "lucide-react";
import pregnancyTrackerImage from "@/assets/pregnancy-tracker.jpg";

const PregnancyTracker = () => {
  const [currentWeek, setCurrentWeek] = useState(24);
  
  const weeklyData = {
    24: {
      size: "Corn 🌽",
      length: "30 cm",
      weight: "600g",
      developments: [
        "Baby can hear your voice and other sounds",
        "Lungs are developing rapidly and producing surfactant",
        "Baby's taste buds are fully developed",
        "Reflexes are becoming more coordinated",
        "Brain tissue and neurons are growing rapidly"
      ],
      motherTips: [
        "Continue taking prenatal vitamins",
        "Practice pelvic floor exercises",
        "Monitor fetal movements daily",
        "Stay hydrated and eat iron-rich foods",
        "Prepare for glucose screening test"
      ]
    }
  };

  const currentData = weeklyData[24]; // In real app, this would be dynamic
  const progressPercentage = (currentWeek / 40) * 100;

  const navigateWeek = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentWeek > 1) {
      setCurrentWeek(currentWeek - 1);
    } else if (direction === 'next' && currentWeek < 40) {
      setCurrentWeek(currentWeek + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard/patient">
              <ArrowLeft className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-playfair text-primary">marternoval</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-playfair text-primary mb-4">
            Pregnancy Tracker
          </h1>
          <p className="text-xl text-muted-foreground">
            Follow your baby's amazing development journey
          </p>
        </div>

        {/* Week Navigation */}
        <Card className="maternal-card p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="outline" 
              onClick={() => navigateWeek('prev')}
              disabled={currentWeek <= 1}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous Week
            </Button>
            
            <div className="text-center">
              <Badge className="bg-primary-soft text-primary-glow text-lg px-4 py-2 mb-2">
                Week {currentWeek}
              </Badge>
              <p className="text-sm text-muted-foreground">
                {40 - currentWeek} weeks remaining
              </p>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => navigateWeek('next')}
              disabled={currentWeek >= 40}
            >
              Next Week
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Pregnancy Progress</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <p className="text-sm text-muted-foreground text-center">
              Due date: December 15, 2024
            </p>
          </div>
        </Card>

        {/* Baby Development */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="maternal-card p-8">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-soft rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Baby className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold font-playfair text-primary mb-2">
                Your Baby This Week
              </h2>
              <p className="text-lg text-muted-foreground">
                Size of a {currentData.size}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Ruler className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold font-playfair">{currentData.length}</p>
                <p className="text-sm text-muted-foreground">Length</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Weight className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold font-playfair">{currentData.weight}</p>
                <p className="text-sm text-muted-foreground">Weight</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Development Milestones</h3>
              <ul className="space-y-2">
                {currentData.developments.map((development, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span>{development}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <div className="space-y-6">
            {/* Visual */}
            <Card className="maternal-card p-6">
              <img 
                src={pregnancyTrackerImage} 
                alt="Pregnancy development illustration"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold mb-2">Week {currentWeek} Development</h3>
                <p className="text-sm text-muted-foreground">
                  Your baby is rapidly developing and getting stronger each day!
                </p>
              </div>
            </Card>

            {/* Mother's Health Tips */}
            <Card className="maternal-card p-6">
              <div className="flex items-center mb-4">
                <Activity className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold font-playfair">Tips for You</h3>
              </div>
              <ul className="space-y-2">
                {currentData.motherTips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm">
                    <span className="text-primary mt-1">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Trimester Overview */}
        <Card className="maternal-card p-6 mb-8">
          <h2 className="text-xl font-semibold font-playfair mb-4 text-center">
            Second Trimester Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">1st</span>
              </div>
              <h4 className="font-medium mb-2">Weeks 1-12</h4>
              <p className="text-sm text-muted-foreground">
                Foundation development, organ formation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-foreground font-bold">2nd</span>
              </div>
              <h4 className="font-medium mb-2">Weeks 13-26</h4>
              <p className="text-sm text-muted-foreground">
                Growth acceleration, movement begins
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-muted-foreground font-bold">3rd</span>
              </div>
              <h4 className="font-medium mb-2">Weeks 27-40</h4>
              <p className="text-sm text-muted-foreground">
                Final development, preparation for birth
              </p>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/health-guidance">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground">
              Get Health Guidance
            </Button>
          </Link>
          <Link to="/dashboard/patient">
            <Button size="lg" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Appointment
            </Button>
          </Link>
          <Link to="/community">
            <Button size="lg" variant="outline">
              Join Community Discussion
            </Button>
          </Link>
        </div>

        {/* Navigation Back */}
        <div className="text-center mt-8">
          <Link to="/dashboard/patient">
            <Button variant="ghost">
              <Home className="h-4 w-4 mr-2" />
              Return to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PregnancyTracker;