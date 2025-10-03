import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Activity, 
  TrendingUp,
  Bell,
  Settings,
  LogOut,
  Shield,
  Database,
  BarChart3,
  UserCheck,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const AdminDashboard = () => {
  const systemStats = {
    totalUsers: 10247,
    activeDoctors: 156,
    emergencyCalls: 23,
    systemUptime: "99.9%"
  };

  const recentActivities = [
    { id: 1, action: "New doctor registered", user: "Dr. Kemi Adebayo", time: "2 hours ago", type: "success" },
    { id: 2, action: "Emergency alert resolved", user: "System", time: "3 hours ago", type: "warning" },
    { id: 3, action: "System backup completed", user: "System", time: "6 hours ago", type: "info" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-playfair text-primary">maternova Admin</span>
          </Link>
           <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/dashboard/patient">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm sm:text-base"
              >
               Patient
              </Button>
            </Link>
            <Link to="/dashboard/doctor">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm sm:text-base"
              >
                Doctor
              </Button>
            </Link>
           
        
          </div>
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
            System Administration 🛠️
          </h1>
          <p className="text-muted-foreground">Monitor and manage the maternova platform</p>
        </div>

        {/* System Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="maternal-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold font-playfair">{systemStats.totalUsers.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Users</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="mt-2">
              <Badge className="bg-success/10 text-success">+12% this month</Badge>
            </div>
          </Card>
          
          <Card className="maternal-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold font-playfair">{systemStats.activeDoctors}</p>
                <p className="text-sm text-muted-foreground">Active Doctors</p>
              </div>
              <UserCheck className="h-8 w-8 text-primary" />
            </div>
            <div className="mt-2">
              <Badge className="bg-success/10 text-success">+5 new this week</Badge>
            </div>
          </Card>
          
          <Card className="maternal-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold font-playfair">{systemStats.emergencyCalls}</p>
                <p className="text-sm text-muted-foreground">Emergency Calls (24h)</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-warning" />
            </div>
            <div className="mt-2">
              <Badge className="bg-warning/10 text-warning">All resolved</Badge>
            </div>
          </Card>
          
          <Card className="maternal-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold font-playfair">{systemStats.systemUptime}</p>
                <p className="text-sm text-muted-foreground">System Uptime</p>
              </div>
              <Activity className="h-8 w-8 text-success" />
            </div>
            <div className="mt-2">
              <Badge className="bg-success/10 text-success">Excellent</Badge>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="system">System Health</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Recent Activities */}
              <Card className="maternal-card p-6">
                <h2 className="text-xl font-semibold font-playfair mb-4">Recent Activities</h2>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'success' ? 'bg-success' :
                        activity.type === 'warning' ? 'bg-warning' : 'bg-primary'
                      }`} />
                      <div className="flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.user} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Activities
                </Button>
              </Card>

              {/* Quick Actions */}
              <Card className="maternal-card p-6">
                <h2 className="text-xl font-semibold font-playfair mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-16 flex-col bg-gradient-primary text-primary-foreground">
                    <Shield className="h-5 w-5 mb-1" />
                    <span className="text-sm">Security Scan</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex-col">
                    <Database className="h-5 w-5 mb-1" />
                    <span className="text-sm">Backup Data</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex-col">
                    <BarChart3 className="h-5 w-5 mb-1" />
                    <span className="text-sm">Generate Report</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex-col">
                    <TrendingUp className="h-5 w-5 mb-1" />
                    <span className="text-sm">View Analytics</span>
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users">
            <Card className="maternal-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold font-playfair">User Management</h2>
                <Button>Add New User</Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="p-4 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">8,431</p>
                  <p className="text-sm text-muted-foreground">Patients</p>
                </Card>
                <Card className="p-4 text-center">
                  <UserCheck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-sm text-muted-foreground">Healthcare Providers</p>
                </Card>
                <Card className="p-4 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Administrators</p>
                </Card>
              </div>

              {/* User List Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium">Dr. Adaora Okafor</p>
                    <p className="text-sm text-muted-foreground">Healthcare Provider • Last active: 2 hours ago</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-success/10 text-success">Active</Badge>
                    <Button size="sm" variant="outline">Manage</Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium">Chisom Okafor</p>
                    <p className="text-sm text-muted-foreground">Patient • Last active: 1 hour ago</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-success/10 text-success">Active</Badge>
                    <Button size="sm" variant="outline">View Profile</Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="maternal-card p-6">
                <h3 className="text-lg font-semibold mb-4">Platform Usage</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Daily Active Users</span>
                    <span className="font-medium">2,847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Emergency Calls (30d)</span>
                    <span className="font-medium">234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Successful Deliveries</span>
                    <span className="font-medium text-success">1,456</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>App Rating</span>
                    <span className="font-medium">4.9/5</span>
                  </div>
                </div>
              </Card>
              
              <Card className="maternal-card p-6">
                <h3 className="text-lg font-semibold mb-4">Geographic Distribution</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Lagos State</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-16 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm">3,245</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Abuja</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-12 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm">1,892</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Kano State</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-8 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm">1,234</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="system">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="maternal-card p-6">
                <h3 className="text-lg font-semibold mb-4">System Health</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>API Response Time</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-success">145ms</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Database Status</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-success">Healthy</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Server Load</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-success">23%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Error Rate (24h)</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-success">0.01%</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="maternal-card p-6">
                <h3 className="text-lg font-semibold mb-4">Security Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Last Security Scan</span>
                    <span className="text-sm text-muted-foreground">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Threats Detected</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-success">None</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Data Backup</span>
                    <span className="text-sm text-muted-foreground">6 hours ago</span>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-primary text-primary-foreground">
                    Run Security Scan
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;