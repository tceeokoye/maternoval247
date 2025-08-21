import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Phone, 
  MapPin, 
  Clock, 
  AlertTriangle,
  Zap,
  Users,
  Home,
  Ambulance,
  Shield
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmergencyHelp = () => {
  const [emergencyType, setEmergencyType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const { toast } = useToast();

  const handleEmergencyCall = (type: string) => {
    setIsEmergencyActive(true);
    toast({
      title: "Emergency Alert Sent! 🚨",
      description: `Connecting you to ${type} services. Help is on the way.`,
    });
    
    // Simulate emergency response
    setTimeout(() => {
      setIsEmergencyActive(false);
      toast({
        title: "Emergency services notified",
        description: "Expected arrival time: 8-12 minutes. Stay calm and follow instructions.",
      });
    }, 3000);
  };

  const emergencyNumbers = [
    { name: "Ambulance", number: "+234-199", icon: Ambulance, color: "destructive" },
    { name: "marternoval Hotline", number: "+234-800-MATER", icon: Heart, color: "primary" },
    { name: "Police", number: "+234-199", icon: Shield, color: "destructive" },
    { name: "Hospital Direct", number: "+234-1-4407979", icon: Phone, color: "primary" },
  ];

  const quickActions = [
    { 
      title: "Severe Pain", 
      description: "Abdominal or severe pregnancy pain",
      action: () => handleEmergencyCall("medical emergency"),
      icon: AlertTriangle,
      urgent: true 
    },
    { 
      title: "Heavy Bleeding", 
      description: "Excessive or unusual bleeding",
      action: () => handleEmergencyCall("medical emergency"),
      icon: Zap,
      urgent: true 
    },
    { 
      title: "Water Broke", 
      description: "Labor has started",
      action: () => handleEmergencyCall("ambulance"),
      icon: Clock,
      urgent: false 
    },
    { 
      title: "Can't Feel Baby", 
      description: "Reduced fetal movement",
      action: () => handleEmergencyCall("medical consultation"),
      icon: Heart,
      urgent: true 
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-destructive text-destructive-foreground py-4 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6" />
            <span className="text-xl font-bold font-playfair">marternoval Emergency</span>
          </Link>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-medium">24/7 Support Active</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Emergency Status */}
        {isEmergencyActive && (
          <Card className="maternal-card p-6 mb-8 border-destructive bg-destructive/5 animate-pulse">
            <div className="text-center">
              <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-destructive mb-2">Emergency Alert Active</h2>
              <p className="text-destructive/80 mb-4">Your emergency request has been sent. Help is on the way.</p>
              <div className="flex items-center justify-center space-x-4 text-sm text-destructive/70">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Response time: 8-12 min</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Location shared</span>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Quick Emergency Actions */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-playfair text-center text-destructive mb-2">
            Emergency Help 🚨
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Get immediate assistance for maternal emergencies. Help is just one tap away.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Card 
                key={index} 
                className={`maternal-card p-6 cursor-pointer transition-smooth hover:scale-105 ${
                  action.urgent ? 'border-destructive/50 bg-destructive/5' : ''
                }`}
                onClick={action.action}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    action.urgent ? 'bg-destructive/10' : 'bg-primary-soft'
                  }`}>
                    <action.icon className={`h-8 w-8 ${
                      action.urgent ? 'text-destructive' : 'text-primary'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold font-playfair">{action.title}</h3>
                    <p className="text-muted-foreground text-sm">{action.description}</p>
                    {action.urgent && (
                      <span className="inline-block mt-2 text-xs bg-destructive/10 text-destructive px-2 py-1 rounded-full">
                        URGENT
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Numbers */}
        <Card className="maternal-card p-6 mb-8">
          <h2 className="text-2xl font-semibold font-playfair mb-6 text-center">Emergency Contacts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {emergencyNumbers.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <contact.icon className={`h-6 w-6 ${
                    contact.color === 'destructive' ? 'text-destructive' : 'text-primary'
                  }`} />
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.number}</p>
                  </div>
                </div>
                <Button 
                  variant={contact.color === 'destructive' ? 'destructive' : 'default'}
                  size="sm"
                  onClick={() => window.open(`tel:${contact.number}`)}
                >
                  <Phone className="h-4 w-4 mr-1" />
                  Call Now
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Emergency Report Form */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="maternal-card p-6">
            <h2 className="text-xl font-semibold font-playfair mb-4">Report Emergency</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="emergencyType">Type of Emergency</Label>
                <Input
                  id="emergencyType"
                  placeholder="e.g., Severe abdominal pain, Heavy bleeding"
                  value={emergencyType}
                  onChange={(e) => setEmergencyType(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your emergency in detail..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                />
              </div>
              
              <div>
                <Label htmlFor="location">Current Location</Label>
                <Input
                  id="location"
                  placeholder="Address or landmark"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <Button 
                className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                onClick={() => handleEmergencyCall("custom emergency")}
              >
                <AlertTriangle className="h-4 w-4 mr-2" />
                Send Emergency Alert
              </Button>
            </div>
          </Card>

          {/* Safety Tips */}
          <Card className="maternal-card p-6">
            <h2 className="text-xl font-semibold font-playfair mb-4">Emergency Safety Tips</h2>
            <div className="space-y-4">
              <div className="p-3 bg-muted/30 rounded-lg">
                <h4 className="font-medium mb-2">🩸 Heavy Bleeding</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lie down with feet elevated</li>
                  <li>• Apply gentle pressure if external</li>
                  <li>• Call emergency services immediately</li>
                </ul>
              </div>
              
              <div className="p-3 bg-muted/30 rounded-lg">
                <h4 className="font-medium mb-2">💊 Severe Pain</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Try to stay calm and breathe deeply</li>
                  <li>• Note pain location and intensity</li>
                  <li>• Don't take medications without advice</li>
                </ul>
              </div>
              
              <div className="p-3 bg-muted/30 rounded-lg">
                <h4 className="font-medium mb-2">👶 Labor Signs</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Time contractions carefully</li>
                  <li>• Prepare hospital bag if ready</li>
                  <li>• Contact your doctor or midwife</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation Back */}
        <div className="text-center mt-8">
          <Link to="/dashboard/patient">
            <Button variant="outline" size="lg">
              <Home className="h-4 w-4 mr-2" />
              Return to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmergencyHelp;