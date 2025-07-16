import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  LogOut, 
  Users, 
  Mail, 
  Calendar, 
  TrendingUp, 
  Eye, 
  Star, 
  DollarSign, 
  Activity, 
  UserCheck, 
  Search, 
  Filter,
  Phone,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  MoreHorizontal,
  Instagram,
  ExternalLink,
  User
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

// Demo credentials
const ADMIN_EMAIL = "hello@fanslink.app";
const ADMIN_PASSWORD = "12345";

type Application = {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  has_only_fans: string;
  only_fans_duration: string;
  has_agency: string;
  monthly_earning: string;
  instagram_handle: string;
  content_type: string[];
  help_needed: string[];
  additional_notes: string | null;
  created_at: string;
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Check if already logged in
  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setApplications(data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
      toast({
        title: "Error",
        description: "Failed to fetch applications. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchApplications();
    }
  }, [isAuthenticated]);

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

  // Filter applications based on search term
  const filteredApplications = applications.filter(app => {
    const matchesSearch = searchTerm === "" || 
      app.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.instagram_handle.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  const getStatusBadge = () => {
    // For now, all applications are pending since we don't have status in database
    return <Badge variant="secondary" className="flex items-center gap-1">
      <Clock className="h-3 w-3" />
      Pending
    </Badge>;
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-black text-foreground mb-4 leading-tight">
            CREATOR
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              DASHBOARD
            </span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Monitor your luxury talent portfolio and track millionaire-making progress
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-luxury bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2">Total Applications</p>
                  <p className="text-3xl font-display font-black text-foreground">{applications.length}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-hero rounded-luxury flex items-center justify-center shadow-glow">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-luxury bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2">Pending Review</p>
                  <p className="text-3xl font-display font-black text-primary">{applications.length}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-hero rounded-luxury flex items-center justify-center shadow-glow">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-luxury bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2">OnlyFans Experience</p>
                  <p className="text-3xl font-display font-black text-foreground">{applications.filter(app => app.has_only_fans === "yes").length}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-hero rounded-luxury flex items-center justify-center shadow-glow">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-luxury bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2">This Month</p>
                  <p className="text-3xl font-display font-black text-primary">{applications.filter(app => {
                    const appDate = new Date(app.created_at);
                    const currentDate = new Date();
                    return appDate.getMonth() === currentDate.getMonth() && 
                           appDate.getFullYear() === currentDate.getFullYear();
                  }).length}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-hero rounded-luxury flex items-center justify-center shadow-glow">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications Table */}
        <Card className="border-0 shadow-luxury bg-white">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-b border-primary/10 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl font-display font-black text-foreground mb-2">
                  CREATOR APPLICATIONS
                </CardTitle>
                <CardDescription className="text-muted-foreground font-body">
                  Manage your luxury talent pipeline with elite precision
                </CardDescription>
              </div>
              
              {/* Search and Refresh */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search creators..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64 h-10 rounded-luxury border-input focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <Button 
                  onClick={fetchApplications}
                  disabled={loading}
                  className="flex items-center gap-2 bg-gradient-hero hover:shadow-glow transition-all duration-300"
                >
                  <Activity className="h-4 w-4" />
                  {loading ? "Loading..." : "Refresh"}
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/20 hover:bg-muted/40 border-b border-border">
                    <TableHead className="font-display font-black text-foreground uppercase tracking-wider p-4">Applicant</TableHead>
                    <TableHead className="font-display font-black text-foreground uppercase tracking-wider p-4">Contact</TableHead>
                    <TableHead className="font-display font-black text-foreground uppercase tracking-wider p-4">OnlyFans Info</TableHead>
                    <TableHead className="font-display font-black text-foreground uppercase tracking-wider p-4">Content Type</TableHead>
                    <TableHead className="font-display font-black text-foreground uppercase tracking-wider p-4">Status</TableHead>
                    <TableHead className="font-display font-black text-foreground uppercase tracking-wider p-4">Applied</TableHead>
                    <TableHead className="font-display font-black text-foreground uppercase tracking-wider p-4">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-12">
                        <div className="flex flex-col items-center space-y-4">
                          <div className="w-16 h-16 bg-muted/20 rounded-luxury flex items-center justify-center">
                            <Activity className="h-8 w-8 text-muted-foreground animate-spin" />
                          </div>
                          <div>
                            <p className="font-display font-bold text-muted-foreground text-lg mb-2">Loading applications...</p>
                            <p className="text-sm text-muted-foreground">Please wait while we fetch the data</p>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : filteredApplications.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-12">
                        <div className="flex flex-col items-center space-y-4">
                          <div className="w-16 h-16 bg-muted/20 rounded-luxury flex items-center justify-center">
                            <Users className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-display font-bold text-muted-foreground text-lg mb-2">No applications found</p>
                            <p className="text-sm text-muted-foreground">Try adjusting your search criteria or check back later</p>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredApplications.map((app) => (
                      <TableRow key={app.id} className="hover:bg-muted/20 transition-all duration-200">
                         <TableCell className="p-4">
                           <div className="space-y-1">
                             <div className="flex items-center gap-2 font-display font-bold text-foreground">
                               <User className="h-4 w-4 text-muted-foreground" />
                               {app.full_name}
                             </div>
                             <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                               <span>@{app.instagram_handle}</span>
                               <a
                                 href={`https://www.instagram.com/${app.instagram_handle}`}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-1 text-pink-500 hover:text-pink-600 transition-colors"
                               >
                                 <Instagram className="h-4 w-4" />
                                 <ExternalLink className="h-3 w-3" />
                               </a>
                             </div>
                           </div>
                         </TableCell>
                        <TableCell className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm font-body">
                              <Mail className="h-3 w-3 text-muted-foreground" />
                              {app.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm font-body">
                              <Phone className="h-3 w-3 text-muted-foreground" />
                              {app.phone_number}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="p-4">
                          <div className="space-y-1">
                            <div className="text-sm font-body">
                              <span className="font-medium">Has OF:</span> {app.has_only_fans}
                            </div>
                            <div className="text-sm font-body">
                              <span className="font-medium">Duration:</span> {app.only_fans_duration}
                            </div>
                            <div className="text-sm font-body">
                              <span className="font-medium">Earnings:</span> {app.monthly_earning}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="p-4">
                          <div className="flex flex-wrap gap-1">
                            {app.content_type.map((type, index) => (
                              <Badge key={index} variant="outline" className="text-xs font-body">
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="p-4">
                          {getStatusBadge()}
                        </TableCell>
                        <TableCell className="p-4">
                          <div className="text-sm font-body text-muted-foreground">
                            {formatDate(app.created_at)}
                          </div>
                        </TableCell>
                        <TableCell className="p-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-muted/40 transition-all duration-200">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                              <DropdownMenuLabel className="font-display font-bold">Actions</DropdownMenuLabel>
                              <DropdownMenuItem className="flex items-center gap-2 font-body">
                                <Eye className="h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="flex items-center gap-2 font-body">
                                <CheckCircle className="h-4 w-4" />
                                Approve
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center gap-2 font-body">
                                <XCircle className="h-4 w-4" />
                                Reject
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
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