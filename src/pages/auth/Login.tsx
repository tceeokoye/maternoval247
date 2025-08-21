import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app, this would call an API
    if (formData.email && formData.password) {
      toast({
        title: "Welcome back!",
        description: "Successfully logged in to marternoval.",
      });
      // Route based on user type - in real app, this would be determined by the API response
      if (formData.email.includes("doctor")) {
        navigate("/dashboard/doctor");
      } else if (formData.email.includes("admin")) {
        navigate("/dashboard/admin");
      } else {
        navigate("/dashboard/patient");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-playfair text-primary">marternoval</span>
          </Link>
          <p className="text-muted-foreground mt-2">Welcome back to your journey</p>
        </div>

        {/* Login Form */}
        <Card className="maternal-card p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold font-playfair">Sign In</h1>
            <p className="text-muted-foreground">Access your maternal care dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="transition-smooth"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="pr-10 transition-smooth"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link 
                to="#" 
                className="text-sm text-primary hover:underline"
              >
                Forgot your password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth"
              size="lg"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline font-medium">
                Sign up for free
              </Link>
            </p>
          </div>

          {/* Demo Login Options */}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center mb-4">Demo Logins:</p>
            <div className="grid grid-cols-1 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setFormData({ email: "patient@demo.com", password: "demo123" });
                }}
              >
                Patient Demo
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setFormData({ email: "doctor@demo.com", password: "demo123" });
                }}
              >
                Doctor Demo
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setFormData({ email: "admin@demo.com", password: "demo123" });
                }}
              >
                Admin Demo
              </Button>
            </div>
          </div>
        </Card>

        {/* Emergency Link */}
        <div className="mt-6 text-center">
          <Link to="/emergency">
            <Button variant="destructive" className="emergency-button">
              🚨 Emergency Help
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;