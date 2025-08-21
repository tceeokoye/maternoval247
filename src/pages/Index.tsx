import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Baby, 
  Calendar, 
  BookOpen, 
  Users, 
  Phone, 
  Shield,
  Activity,
  MapPin,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-maternal-care.jpg";
import motherBabyImage from "@/assets/mother-baby-care.jpg";
import pregnancyTrackerImage from "@/assets/pregnancy-tracker.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold font-playfair text-primary">marternoval</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-sm sm:text-base">Log In</Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 text-sm sm:text-base">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-in text-center md:text-left">
              <Badge className="mb-4 sm:mb-6 bg-primary-soft text-primary-glow px-3 sm:px-4 py-1.5 sm:py-2 text-sm">
                🌟 Supporting Nigerian Mothers
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-primary mb-4 sm:mb-6 leading-tight">
                Nurturing Every Step of Your 
                <span className="block">Motherhood Journey</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                From pregnancy tracking to emergency support, we're here to ensure 
                every mother and baby receives the care they deserve. Join thousands 
                of mothers already using marternoval.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Link to="/register" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-gradient-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/emergency" className="w-full sm:w-auto">
                  <Button size="lg" variant="destructive" className="emergency-button w-full sm:w-auto">
                    🚨 Emergency Help
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                  <span className="text-xs sm:text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="text-xs sm:text-sm font-medium">10,000+ Mothers</span>
                </div>
              </div>
            </div>
            <div className="scale-in mt-8 md:mt-0">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Happy pregnant woman" 
                  className="rounded-2xl sm:rounded-3xl shadow-card w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-2xl sm:rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-primary mb-3 sm:mb-4">
              Comprehensive Maternal Care
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a healthy pregnancy and safe delivery, 
              all in one beautiful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Pregnancy Tracker */}
            <Card className="maternal-card p-6 sm:p-8 text-center fade-in">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-soft rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Baby className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold font-playfair mb-3 sm:mb-4">Pregnancy Tracker</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Track your baby's development week by week with personalized insights and milestones.
              </p>
              <Link to="/pregnancy-tracker">
                <Button variant="outline" className="w-full">Explore Tracker</Button>
              </Link>
            </Card>

            {/* Appointment Reminders */}
            <Card className="maternal-card p-6 sm:p-8 text-center fade-in">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-soft rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold font-playfair mb-3 sm:mb-4">Smart Reminders</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Never miss a prenatal appointment with intelligent scheduling and SMS notifications.
              </p>
              <Link to="/dashboard/patient">
                <Button variant="outline" className="w-full">View Calendar</Button>
              </Link>
            </Card>

            {/* Health Guidance */}
            <Card className="maternal-card p-6 sm:p-8 text-center fade-in">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-soft rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold font-playfair mb-3 sm:mb-4">Expert Guidance</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Access nutrition advice, exercise tips, and wellness guidance tailored to your stage.
              </p>
              <Link to="/health-guidance">
                <Button variant="outline" className="w-full">Get Guidance</Button>
              </Link>
            </Card>

            {/* Community Forum */}
            <Card className="maternal-card p-6 sm:p-8 text-center fade-in">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-soft rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold font-playfair mb-3 sm:mb-4">Mother Community</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Connect with other mothers, share experiences, and get support from our community.
              </p>
              <Link to="/community">
                <Button variant="outline" className="w-full">Join Community</Button>
              </Link>
            </Card>

            {/* Emergency Support */}
            <Card className="maternal-card p-6 sm:p-8 text-center fade-in">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-soft rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-destructive" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold font-playfair mb-3 sm:mb-4">Emergency Support</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                24/7 emergency helpline connecting you to medical professionals and ambulance services.
              </p>
              <Link to="/emergency">
                <Button variant="destructive" className="w-full">Emergency Help</Button>
              </Link>
            </Card>

            {/* Nearby Clinics */}
            <Card className="maternal-card p-6 sm:p-8 text-center fade-in">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-soft rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold font-playfair mb-3 sm:mb-4">Find Care Nearby</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Locate verified clinics, hospitals, and midwives in your area with ratings and reviews.
              </p>
              <Link to="/dashboard/patient">
                <Button variant="outline" className="w-full">Find Clinics</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center text-white">
            <div className="fade-in">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-1 sm:mb-2">10,000+</div>
              <div className="text-sm sm:text-base md:text-lg text-white/90">Happy Mothers</div>
            </div>
            <div className="fade-in">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-1 sm:mb-2">5,000+</div>
              <div className="text-sm sm:text-base md:text-lg text-white/90">Healthy Babies</div>
            </div>
            <div className="fade-in">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-1 sm:mb-2">98%</div>
              <div className="text-sm sm:text-base md:text-lg text-white/90">Satisfaction Rate</div>
            </div>
            <div className="fade-in">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-1 sm:mb-2">24/7</div>
              <div className="text-sm sm:text-base md:text-lg text-white/90">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-soft rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-primary mb-4 sm:mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of mothers who trust marternoval for their pregnancy journey. 
              Get started today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/register" className="w-full sm:w-auto">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/dashboard/doctor" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Join as Healthcare Provider
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-lg sm:text-xl font-bold font-playfair">marternoval</span>
              </div>
              <p className="text-sm sm:text-base text-primary-foreground/80">
                Supporting every mother and baby with compassionate, 
                comprehensive healthcare solutions.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">For Patients</h4>
              <ul className="space-y-1 sm:space-y-2 text-primary-foreground/80 text-sm sm:text-base">
                <li><Link to="/pregnancy-tracker" className="hover:text-primary-foreground">Pregnancy Tracker</Link></li>
                <li><Link to="/health-guidance" className="hover:text-primary-foreground">Health Guidance</Link></li>
                <li><Link to="/community" className="hover:text-primary-foreground">Community</Link></li>
                <li><Link to="/emergency" className="hover:text-primary-foreground">Emergency Help</Link></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">For Professionals</h4>
              <ul className="space-y-1 sm:space-y-2 text-primary-foreground/80 text-sm sm:text-base">
                <li><Link to="/dashboard/doctor" className="hover:text-primary-foreground">Doctor Portal</Link></li>
                <li><Link to="/dashboard/admin" className="hover:text-primary-foreground">Admin Dashboard</Link></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
              <ul className="space-y-1 sm:space-y-2 text-primary-foreground/80 text-sm sm:text-base">
                <li><a href="tel:+234-800-MATER" className="hover:text-primary-foreground">Emergency: +234-800-MATER</a></li>
                <li><a href="mailto:support@marternoval.ng" className="hover:text-primary-foreground">support@marternoval.ng</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-primary-foreground/60">
            <p className="text-xs sm:text-sm">&copy; 2024 marternoval. Made with ❤️ for Nigerian families.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;