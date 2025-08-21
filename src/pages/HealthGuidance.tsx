import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Apple, 
  Dumbbell, 
  Pill, 
  Brain,
  ArrowLeft,
  Home,
  BookOpen,
  Activity,
  Utensils,
  Zap,
  Shield
} from "lucide-react";

const HealthGuidance = () => {
  const nutritionTips = [
    {
      title: "Folic Acid Rich Foods",
      description: "Essential for baby's neural development",
      foods: ["Leafy greens", "Beans", "Fortified cereals", "Citrus fruits"],
      icon: Apple
    },
    {
      title: "Iron Sources",
      description: "Prevents anemia and supports blood health",
      foods: ["Lean meat", "Fish", "Lentils", "Spinach", "Pumpkin seeds"],
      icon: Zap
    },
    {
      title: "Calcium for Bones",
      description: "Builds strong bones for mother and baby",
      foods: ["Milk", "Yogurt", "Cheese", "Sardines", "Almonds"],
      icon: Shield
    }
  ];

  const exerciseRoutines = [
    {
      title: "Prenatal Yoga",
      duration: "20-30 minutes",
      difficulty: "Beginner",
      benefits: ["Reduces back pain", "Improves flexibility", "Stress relief"],
      description: "Gentle stretches and breathing exercises perfect for pregnancy"
    },
    {
      title: "Walking",
      duration: "30 minutes",
      difficulty: "Easy",
      benefits: ["Cardiovascular health", "Energy boost", "Easy on joints"],
      description: "Low-impact exercise suitable for all pregnancy stages"
    },
    {
      title: "Swimming",
      duration: "25-30 minutes",
      difficulty: "Moderate",
      benefits: ["Full body workout", "Reduces swelling", "Joint relief"],
      description: "Excellent low-impact exercise that supports your growing belly"
    }
  ];

  const weeklyGuidance = {
    24: {
      nutrition: "Focus on protein for rapid brain development",
      exercise: "Continue moderate exercise, avoid lying flat",
      wellness: "Practice relaxation techniques for better sleep",
      checkups: "Glucose screening test around week 24-28"
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
            Health Guidance
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert advice on nutrition, exercise, and wellness throughout your pregnancy journey
          </p>
        </div>

        {/* Current Week Guidance */}
        <Card className="maternal-card p-6 mb-8 bg-gradient-soft">
          <div className="text-center mb-6">
            <Badge className="bg-primary-soft text-primary-glow px-4 py-2 mb-4">
              Week 24 Guidance
            </Badge>
            <h2 className="text-2xl font-semibold font-playfair">Your Personalized Recommendations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <Utensils className="h-6 w-6 text-primary mx-auto mb-2" />
              <h4 className="font-medium mb-2">Nutrition Focus</h4>
              <p className="text-sm text-muted-foreground">{weeklyGuidance[24].nutrition}</p>
            </div>
            
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <Dumbbell className="h-6 w-6 text-primary mx-auto mb-2" />
              <h4 className="font-medium mb-2">Exercise Tip</h4>
              <p className="text-sm text-muted-foreground">{weeklyGuidance[24].exercise}</p>
            </div>
            
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <Brain className="h-6 w-6 text-primary mx-auto mb-2" />
              <h4 className="font-medium mb-2">Wellness</h4>
              <p className="text-sm text-muted-foreground">{weeklyGuidance[24].wellness}</p>
            </div>
            
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <Activity className="h-6 w-6 text-primary mx-auto mb-2" />
              <h4 className="font-medium mb-2">Checkups</h4>
              <p className="text-sm text-muted-foreground">{weeklyGuidance[24].checkups}</p>
            </div>
          </div>
        </Card>

        {/* Detailed Guidance Tabs */}
        <Tabs defaultValue="nutrition" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="exercise">Exercise</TabsTrigger>
            <TabsTrigger value="wellness">Wellness</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
          </TabsList>

          <TabsContent value="nutrition">
            <div className="space-y-6">
              <Card className="maternal-card p-6">
                <h2 className="text-2xl font-semibold font-playfair mb-6">Essential Nutrition Guide</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {nutritionTips.map((tip, index) => (
                    <Card key={index} className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <tip.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{tip.description}</p>
                      <div className="space-y-1">
                        {tip.foods.map((food, foodIndex) => (
                          <Badge key={foodIndex} variant="outline" className="text-xs mr-1">
                            {food}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Daily Meal Planning Tips</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">✅ Include Daily:</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• 3 servings of protein</li>
                        <li>• 4-5 servings of fruits & vegetables</li>
                        <li>• 6-8 glasses of water</li>
                        <li>• 3 servings of dairy or calcium-rich foods</li>
                        <li>• Prenatal vitamin supplement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">❌ Avoid:</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Raw or undercooked meat/eggs</li>
                        <li>• High mercury fish</li>
                        <li>• Excessive caffeine (&gt;200mg/day)</li>
                        <li>• Alcohol</li>
                        <li>• Unpasteurized dairy products</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="exercise">
            <div className="space-y-6">
              <Card className="maternal-card p-6">
                <h2 className="text-2xl font-semibold font-playfair mb-6">Safe Exercise During Pregnancy</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {exerciseRoutines.map((routine, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">{routine.title}</h3>
                        <Badge variant="outline">{routine.difficulty}</Badge>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-2">Duration: {routine.duration}</p>
                        <p className="text-sm">{routine.description}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-sm mb-2">Benefits:</h4>
                        <ul className="text-xs space-y-1">
                          {routine.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center">
                              <span className="text-primary mr-1">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full" size="sm">Start Routine</Button>
                    </Card>
                  ))}
                </div>

                <div className="bg-warning/10 border border-warning/20 rounded-lg p-6">
                  <h3 className="font-semibold mb-4 flex items-center text-warning">
                    <Shield className="h-5 w-5 mr-2" />
                    Exercise Safety Guidelines
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Always Remember:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Stay hydrated throughout</li>
                        <li>• Listen to your body</li>
                        <li>• Avoid overheating</li>
                        <li>• Stop if you feel dizzy or short of breath</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Avoid These Activities:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Contact sports</li>
                        <li>• Activities with fall risk</li>
                        <li>• Lying flat on back after 20 weeks</li>
                        <li>• High-intensity interval training</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="wellness">
            <div className="space-y-6">
              <Card className="maternal-card p-6">
                <h2 className="text-2xl font-semibold font-playfair mb-6">Mental & Emotional Wellness</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Stress Management</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-medium mb-2">Deep Breathing Exercise</h4>
                        <p className="text-sm text-muted-foreground">
                          Inhale for 4 counts, hold for 4, exhale for 6. Repeat 5-10 times daily.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-medium mb-2">Progressive Muscle Relaxation</h4>
                        <p className="text-sm text-muted-foreground">
                          Tense and release muscle groups starting from your toes to your head.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-medium mb-2">Mindful Meditation</h4>
                        <p className="text-sm text-muted-foreground">
                          5-10 minutes daily focusing on baby connection and gratitude.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Sleep Optimization</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-primary-soft/30 rounded-lg">
                        <h4 className="font-medium mb-2">Sleep Position</h4>
                        <p className="text-sm text-muted-foreground">
                          Sleep on your left side with a pillow between your knees for optimal blood flow.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-primary-soft/30 rounded-lg">
                        <h4 className="font-medium mb-2">Bedtime Routine</h4>
                        <p className="text-sm text-muted-foreground">
                          Establish consistent sleep/wake times and avoid screens 1 hour before bed.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-primary-soft/30 rounded-lg">
                        <h4 className="font-medium mb-2">Sleep Environment</h4>
                        <p className="text-sm text-muted-foreground">
                          Keep bedroom cool, dark, and quiet. Consider a pregnancy pillow for support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="safety">
            <div className="space-y-6">
              <Card className="maternal-card p-6">
                <h2 className="text-2xl font-semibold font-playfair mb-6">Safety Guidelines</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4 text-warning">Warning Signs - Seek Immediate Help</h3>
                    <div className="space-y-3">
                      {[
                        "Severe abdominal pain",
                        "Heavy bleeding or bright red bleeding",
                        "Severe headaches with vision changes",
                        "Persistent vomiting",
                        "Decreased fetal movement",
                        "Signs of preterm labor",
                        "Sudden swelling of face/hands"
                      ].map((warning, index) => (
                        <div key={index} className="flex items-center p-3 bg-warning/10 border border-warning/20 rounded-lg">
                          <Shield className="h-4 w-4 text-warning mr-2 flex-shrink-0" />
                          <span className="text-sm">{warning}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to="/emergency">
                      <Button variant="destructive" className="w-full mt-4">
                        Emergency Help
                      </Button>
                    </Link>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4 text-success">Daily Safety Tips</h3>
                    <div className="space-y-3">
                      {[
                        "Take prenatal vitamins daily",
                        "Stay hydrated - 8-10 glasses of water",
                        "Avoid cleaning cat litter boxes",
                        "Wear seatbelt properly (under the belly)",
                        "Use handrails on stairs",
                        "Avoid hot tubs and saunas",
                        "Wash hands frequently"
                      ].map((tip, index) => (
                        <div key={index} className="flex items-center p-3 bg-success/10 border border-success/20 rounded-lg">
                          <BookOpen className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

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

export default HealthGuidance;