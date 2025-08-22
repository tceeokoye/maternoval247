import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  MessageSquare, 
  ThumbsUp, 
  Send,
  ArrowLeft,
  Home,
  Plus,
  Search,
  Filter,
  Clock,
  TrendingUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CommunityForum = () => {
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const forumPosts = [
    {
      id: 1,
      author: "Chisom O.",
      week: 24,
      title: "How to manage morning sickness in second trimester?",
      content: "I'm still experiencing some morning sickness at 24 weeks. Anyone else dealing with this? What helps you cope?",
      replies: 12,
      likes: 8,
      timeAgo: "2 hours ago",
      category: "health",
      replies_preview: [
        { author: "Amina H.", content: "Ginger tea worked wonders for me! Also small frequent meals.", time: "1 hour ago" },
        { author: "Dr. Kemi", content: "This is normal. Try eating crackers before getting out of bed.", time: "45 min ago" }
      ]
    },
    {
      id: 2,
      author: "Blessing E.",
      week: 18,
      title: "Best foods for second trimester brain development",
      content: "My doctor mentioned focusing on foods that help with brain development. What are your go-to meals and snacks?",
      replies: 6,
      likes: 15,
      timeAgo: "4 hours ago",
      category: "nutrition",
      replies_preview: [
        { author: "Fatima A.", content: "Lots of fish, nuts, and leafy greens! My doctor recommended sardines.", time: "3 hours ago" }
      ]
    },
    {
      id: 3,
      author: "Grace A.",
      week: 32,
      title: "Preparing for labor - what to expect?",
      content: "FTM here and getting anxious about labor. Would love to hear about your experiences and any tips for preparation.",
      replies: 23,
      likes: 19,
      timeAgo: "6 hours ago",
      category: "labor",
      replies_preview: [
        { author: "Sarah M.", content: "Take birthing classes! They really helped me feel more prepared.", time: "5 hours ago" },
        { author: "Ngozi P.", content: "Practice breathing exercises daily. It made a huge difference.", time: "4 hours ago" }
      ]
    }
  ];

  const trendingTopics = [
    { name: "Morning Sickness", posts: 45 },
    { name: "Baby Movement", posts: 38 },
    { name: "Labor Preparation", posts: 29 },
    { name: "Nutrition Tips", posts: 52 },
    { name: "Exercise Safe", posts: 31 }
  ];

  const handleNewPost = () => {
    if (newPost.title && newPost.content) {
      toast({
        title: "Post shared! 💕",
        description: "Your question has been posted to the community.",
      });
      setNewPost({ title: "", content: "" });
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
              <span className="text-xl font-bold font-playfair text-primary">maternova</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-playfair text-primary mb-4">
            Community Forum 👩‍👩‍👧‍👧
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with other mothers, share experiences, and get support from our caring community
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="maternal-card p-4 text-center">
            <Users className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold font-playfair">2,847</p>
            <p className="text-sm text-muted-foreground">Active Members</p>
          </Card>
          <Card className="maternal-card p-4 text-center">
            <MessageSquare className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold font-playfair">156</p>
            <p className="text-sm text-muted-foreground">Posts Today</p>
          </Card>
          <Card className="maternal-card p-4 text-center">
            <ThumbsUp className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold font-playfair">1,234</p>
            <p className="text-sm text-muted-foreground">Helpful Replies</p>
          </Card>
          <Card className="maternal-card p-4 text-center">
            <Heart className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold font-playfair">98%</p>
            <p className="text-sm text-muted-foreground">Satisfaction</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Forum Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="posts" className="w-full">
              <div className="flex items-center justify-between mb-6">
                <TabsList>
                  <TabsTrigger value="posts">Recent Posts</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="myPosts">My Posts</TabsTrigger>
                </TabsList>
                
                <Button className="bg-gradient-primary text-primary-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  New Post
                </Button>
              </div>

              {/* Search Bar */}
              <div className="flex space-x-2 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search posts..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>

              <TabsContent value="posts">
                <div className="space-y-6">
                  {/* New Post Form */}
                  <Card className="maternal-card p-6">
                    <h3 className="font-semibold mb-4">Share with the community</h3>
                    <div className="space-y-4">
                      <Input 
                        placeholder="What would you like to discuss?" 
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      />
                      <Textarea 
                        placeholder="Share your thoughts, questions, or experiences..."
                        rows={3}
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      />
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <Badge variant="outline">Week 24</Badge>
                          <Badge variant="outline">Second Trimester</Badge>
                        </div>
                        <Button onClick={handleNewPost}>
                          <Send className="h-4 w-4 mr-2" />
                          Post
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Forum Posts */}
                  {forumPosts.map((post) => (
                    <Card key={post.id} className="maternal-card p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary-soft text-primary">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium">{post.author}</span>
                            <Badge variant="outline" className="text-xs">
                              Week {post.week}
                            </Badge>
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${
                                post.category === 'health' ? 'bg-success/10 text-success' :
                                post.category === 'nutrition' ? 'bg-warning/10 text-warning' :
                                'bg-primary-soft text-primary'
                              }`}
                            >
                              {post.category}
                            </Badge>
                            <div className="flex items-center text-muted-foreground text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.timeAgo}
                            </div>
                          </div>
                          
                          <h3 className="font-semibold mb-3">{post.title}</h3>
                          <p className="text-muted-foreground mb-4">{post.content}</p>
                          
                          {/* Post Interactions */}
                          <div className="flex items-center space-x-6 mb-4">
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              {post.replies} replies
                            </Button>
                          </div>
                          
                          {/* Recent Replies Preview */}
                          {post.replies_preview && (
                            <div className="space-y-3 pl-4 border-l-2 border-border">
                              {post.replies_preview.map((reply, index) => (
                                <div key={index} className="bg-muted/30 rounded-lg p-3">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-medium">{reply.author}</span>
                                    <span className="text-xs text-muted-foreground">{reply.time}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{reply.content}</p>
                                </div>
                              ))}
                              <Button variant="link" size="sm" className="p-0 h-auto">
                                View all {post.replies} replies →
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="trending">
                <div className="text-center py-8">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Trending Topics</h3>
                  <p className="text-muted-foreground">Coming soon - see what topics are popular in the community</p>
                </div>
              </TabsContent>

              <TabsContent value="myPosts">
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Your Posts</h3>
                  <p className="text-muted-foreground">Your posts and interactions will appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Trending Topics */}
            <Card className="maternal-card p-6">
              <h3 className="font-semibold mb-4">Trending Topics</h3>
              <div className="space-y-2">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-2 hover:bg-muted/30 rounded-lg cursor-pointer">
                    <span className="text-sm font-medium">{topic.name}</span>
                    <Badge variant="secondary" className="text-xs">{topic.posts}</Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Community Guidelines */}
            <Card className="maternal-card p-6">
              <h3 className="font-semibold mb-4">Community Guidelines</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Be respectful and supportive</li>
                <li>• Share experiences, not medical advice</li>
                <li>• Protect personal information</li>
                <li>• Report inappropriate content</li>
                <li>• Seek professional help for emergencies</li>
              </ul>
            </Card>

            {/* Quick Links */}
            <Card className="maternal-card p-6">
              <h3 className="font-semibold mb-4">Quick Access</h3>
              <div className="space-y-2">
                <Link to="/health-guidance">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Health Guidance
                  </Button>
                </Link>
                <Link to="/pregnancy-tracker">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Pregnancy Tracker
                  </Button>
                </Link>
                <Link to="/emergency">
                  <Button variant="destructive" size="sm" className="w-full justify-start">
                    Emergency Help
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
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

export default CommunityForum;