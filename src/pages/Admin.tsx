import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LogOut, Users, Mail, Calendar, Globe, TrendingUp, Eye, Star } from "lucide-react";

// Demo credentials
const ADMIN_EMAIL = "hello@fanslink.app";
const ADMIN_PASSWORD = "12345";

// Demo form submissions data
const mockSubmissions = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe", 
    workEmail: "john.doe@company.com",
    country: "us",
    submittedAt: "2024-01-15T10:30:00Z",
    status: "new",
    revenue: "$125,000"
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Johnson",
    workEmail: "sarah.j@startup.io", 
    country: "uk",
    submittedAt: "2024-01-14T15:45:00Z",
    status: "contacted",
    revenue: "$87,500"
  },
  {
    id: 3,
    firstName: "Miguel",
    lastName: "Rodriguez",
    workEmail: "miguel@business.es",
    country: "es", 
    submittedAt: "2024-01-13T09:20:00Z",
    status: "qualified",
    revenue: "$195,000"
  },
  {
    id: 4,
    firstName: "Emma",
    lastName: "Wilson",
    workEmail: "emma.wilson@corp.ca",
    country: "ca",
    submittedAt: "2024-01-12T14:15:00Z", 
    status: "new",
    revenue: "$67,800"
  },
  {
    id: 5,
    firstName: "Alexander",
    lastName: "Schmidt",
    workEmail: "alex@german-co.de",
    country: "de",
    submittedAt: "2024-01-11T11:30:00Z",
    status: "contacted",
    revenue: "$156,200"
  }
];

const countryNames: Record<string, string> = {
  us: "United States",
  uk: "United Kingdom", 
  ca: "Canada",
  au: "Australia",
  de: "Germany",
  fr: "France",
  es: "Spain",
  it: "Italy", 
  nl: "Netherlands",
  se: "Sweden",
  other: "Other"
};

const statusColors: Record<string, string> = {
  new: "bg-primary/10 text-primary border-primary/20",
  contacted: "bg-foreground/10 text-foreground border-foreground/20", 
  qualified: "bg-primary/20 text-primary border-primary/30"
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");

  // Check if already logged in
  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    if (loginData.email === ADMIN_EMAIL && loginData.password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuth", "true");
      setLoginError("");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
    setLoginData({ email: "", password: "" });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short", 
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  // Login Page
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary-glow to-primary flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background decoration matching landing page */}
        <div className="absolute inset-0 bg-gradient-luxury opacity-40"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <Card className="w-full max-w-md relative z-10 border-0 shadow-luxury bg-white backdrop-blur-sm">
          <CardHeader className="space-y-4 text-center pb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-luxury flex items-center justify-center mb-4 shadow-glow">
              <Star className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-display font-black bg-gradient-hero bg-clip-text text-transparent">
              ADMIN ACCESS
            </CardTitle>
            <CardDescription className="text-lg font-body text-muted-foreground">
              Enter your credentials to access the luxury admin panel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground uppercase tracking-wider">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="hello@fanslink.app"
                value={loginData.email}
                onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                className="h-12 border-input bg-background rounded-luxury focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground uppercase tracking-wider">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                className="h-12 border-input bg-background rounded-luxury focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
              />
            </div>
            {loginError && (
              <div className="p-3 bg-primary/10 border border-primary/20 rounded-luxury">
                <p className="text-sm text-primary font-medium">{loginError}</p>
              </div>
            )}
            <Button 
              onClick={handleLogin}
              className="w-full h-12 bg-gradient-hero hover:shadow-glow transition-all duration-300 transform hover:scale-105 font-display font-bold tracking-wide uppercase"
              size="lg"
            >
              ACCESS ADMIN PANEL
            </Button>
            <div className="text-center pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                Demo Credentials
              </p>
              <p className="text-sm text-foreground font-medium">
                hello@fanslink.app / 12345
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-background">
      {/* Header matching landing page style */}
      <header className="relative bg-gradient-hero shadow-luxury">
        <div className="absolute inset-0 bg-gradient-luxury opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-luxury flex items-center justify-center backdrop-blur-sm shadow-glow">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <img 
                  src="/lovable-uploads/f2be9f1e-1cc3-481b-bf8a-9971f10f9b54.png" 
                  alt="FansLink Logo" 
                  className="h-8 w-auto"
                />
                <p className="text-white/80 font-body text-sm uppercase tracking-wider">
                  Luxury Creator Management Dashboard
                </p>
              </div>
            </div>
            <Button 
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-body uppercase tracking-wider"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Message matching landing page */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl sm:text-6xl font-display font-black text-foreground mb-6 leading-tight">
            CREATOR
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              INSIGHTS
            </span>
          </h2>
          <p className="text-muted-foreground font-body text-xl max-w-3xl mx-auto leading-relaxed">
            Monitor your luxury talent portfolio and track millionaire-making progress with elite precision
          </p>
        </div>

        {/* Enhanced Submissions Table - Black, White, Purple only */}
        <Card className="border-0 shadow-luxury bg-white">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-b border-primary/10 p-8">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl font-display font-black text-foreground mb-2">
                  CREATOR APPLICATIONS
                </CardTitle>
                <CardDescription className="text-muted-foreground font-body text-lg">
                  Manage and track your luxury talent pipeline with elite precision
                </CardDescription>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className="bg-gradient-hero text-white px-4 py-2 font-display font-bold tracking-wider">
                  {mockSubmissions.length} TOTAL
                </Badge>
                <Eye className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/20 hover:bg-muted/40 border-b border-border">
                    <TableHead className="font-display font-black text-foreground uppercase tracking-wider p-6">Creator Name</TableHead>
                    <TableHead className="font-display font-black text-foreground uppercase tracking-wider p-6">Contact</TableHead>
                    <TableHead className="font-display font-black text-foreground uppercase tracking-wider p-6">Location</TableHead>
                    <TableHead className="font-display font-black text-foreground uppercase tracking-wider p-6">Revenue Potential</TableHead>
                    <TableHead className="font-display font-black text-foreground uppercase tracking-wider p-6">Status</TableHead>
                    <TableHead className="font-display font-black text-foreground uppercase tracking-wider p-6">Applied</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockSubmissions.map((submission, index) => (
                    <TableRow 
                      key={submission.id} 
                      className="hover:bg-primary/5 transition-colors border-b border-border/30"
                    >
                      <TableCell className="font-medium py-6 px-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-hero rounded-luxury flex items-center justify-center text-white font-display font-bold text-sm shadow-luxury">
                            {submission.firstName[0]}{submission.lastName[0]}
                          </div>
                          <div>
                            <p className="font-display font-bold text-foreground text-lg">
                              {submission.firstName} {submission.lastName}
                            </p>
                            <p className="text-sm text-muted-foreground font-body uppercase tracking-wider">Creator #{submission.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        <p className="font-body text-foreground">{submission.workEmail}</p>
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        <p className="font-body text-foreground">{countryNames[submission.country] || submission.country}</p>
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        <p className="font-display font-black text-xl text-primary">{submission.revenue}</p>
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        <Badge className={`${statusColors[submission.status]} border font-display font-bold uppercase tracking-wider`}>
                          {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground py-6 px-6 font-body">
                        {formatDate(submission.submittedAt)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;