import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Calendar, 
  Activity, 
  Bell,
  Settings,
  LogOut,
  Phone,
  MessageSquare,
  AlertTriangle,
  ChevronRight
} from "lucide-react";

const DoctorDashboard = () => {
  const patients = [
    { id: 1, name: "Chisom Okafor", week: 24, risk: "low", nextAppt: "Aug 25", phone: "+234 801 234 5678" },
    { id: 2, name: "Amina Hassan", week: 32, risk: "medium", nextAppt: "Aug 26", phone: "+234 802 345 6789" },
    { id: 3, name: "Blessing Eze", week: 18, risk: "low", nextAppt: "Aug 27", phone: "+234 803 456 7890" },
    { id: 4, name: "Fatima Ahmed", week: 36, risk: "high", nextAppt: "Aug 25", phone: "+234 804 567 8901" },
  ];

  const emergencies = [
    { id: 1, patient: "Sarah Olabisi", issue: "Severe abdominal pain", time: "2 hours ago", priority: "high" },
    { id: 2, patient: "Grace Adebayo", issue: "Heavy bleeding", time: "45 minutes ago", priority: "critical" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-playfair text-primary">maternova</span>
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
            Welcome, Dr. Adaora! 👩‍⚕️
          </h1>
          <p className="text-muted-foreground">Manage your patients and provide exceptional maternal care</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="maternal-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold font-playfair">42</p>
                <p className="text-sm text-muted-foreground">Active Patients</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </Card>
          
          <Card className="maternal-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold font-playfair">8</p>
                <p className="text-sm text-muted-foreground">Today's Appointments</p>
              </div>
              <Calendar className="h-8 w-8 text-primary" />
            </div>
          </Card>
          
          <Card className="maternal-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold font-playfair">2</p>
                <p className="text-sm text-muted-foreground">Emergency Cases</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </Card>
          
          <Card className="maternal-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold font-playfair">98%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <Activity className="h-8 w-8 text-success" />
            </div>
          </Card>
        </div>

        {/* Emergency Alerts */}
        {emergencies.length > 0 && (
          <Card className="maternal-card p-6 mb-8 border-destructive/50 bg-destructive/5">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-5 w-5 text-destructive mr-2" />
              <h2 className="text-lg font-semibold text-destructive">Emergency Cases</h2>
            </div>
            <div className="space-y-3">
              {emergencies.map((emergency) => (
                <div key={emergency.id} className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <div>
                    <p className="font-medium">{emergency.patient}</p>
                    <p className="text-sm text-muted-foreground">{emergency.issue}</p>
                    <p className="text-xs text-muted-foreground">{emergency.time}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={emergency.priority === 'critical' ? 'destructive' : 'secondary'}>
                      {emergency.priority}
                    </Badge>
                    <Button size="sm" variant="destructive">
                      Respond
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Main Content */}
        <Tabs defaultValue="patients" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="patients">My Patients</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="patients">
            <Card className="maternal-card">
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold font-playfair">Patient Overview</h2>
                  <Button>Add New Patient</Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {patients.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
                          <span className="text-primary font-medium">
                            {patient.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-muted-foreground">Week {patient.week} • Next: {patient.nextAppt}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge 
                              variant={
                                patient.risk === 'high' ? 'destructive' : 
                                patient.risk === 'medium' ? 'secondary' : 'outline'
                              }
                              className="text-xs"
                            >
                              {patient.risk} risk
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                        <Button size="sm">
                          View Details
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="appointments">
            <Card className="maternal-card p-6">
              <h2 className="text-xl font-semibold font-playfair mb-6">Today's Schedule</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium">Chisom Okafor - Antenatal Checkup</p>
                    <p className="text-sm text-muted-foreground">10:00 AM - 10:30 AM</p>
                  </div>
                  <Button size="sm">Start Consultation</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium">Amina Hassan - Follow-up</p>
                    <p className="text-sm text-muted-foreground">11:00 AM - 11:30 AM</p>
                  </div>
                  <Button size="sm" variant="outline">Upcoming</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium">Blessing Eze - Initial Consultation</p>
                    <p className="text-sm text-muted-foreground">2:00 PM - 2:45 PM</p>
                  </div>
                  <Button size="sm" variant="outline">Upcoming</Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="maternal-card p-6">
                <h3 className="text-lg font-semibold mb-4">This Month's Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Patients Seen</span>
                    <span className="font-medium">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate</span>
                    <span className="font-medium text-success">98.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Responses</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Patient Satisfaction</span>
                    <span className="font-medium">4.9/5</span>
                  </div>
                </div>
              </Card>
              
              <Card className="maternal-card p-6">
                <h3 className="text-lg font-semibold mb-4">Risk Distribution</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Low Risk</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-16 h-2 bg-success rounded-full"></div>
                      </div>
                      <span className="text-sm">32</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Medium Risk</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-8 h-2 bg-warning rounded-full"></div>
                      </div>
                      <span className="text-sm">8</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>High Risk</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-2 h-2 bg-destructive rounded-full"></div>
                      </div>
                      <span className="text-sm">2</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DoctorDashboard;