import { useState } from "react";
import { Search, Star, Shield, Clock, MapPin, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ServiceCategories from "@/components/ServiceCategories";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-marketplace.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredServices = [
    {
      title: "Γιάννης - Ηλεκτρολόγος",
      description: "Εγκαταστάσεις, επισκευές, και συντήρηση ηλεκτρικών συσκευών. Άμεση εξυπηρέτηση 24/7.",
      price: "€35/ώρα",
      rating: 4.9,
      responseTime: "15 λεπτά",
      location: "Κέντρο Αθήνας",
      image: "",
      available: true
    },
    {
      title: "Μαρία - Ταξί",
      description: "Αξιόπιστες μεταφορές σε όλη την Αττική. Καθαρό αυτοκίνητο και φιλική εξυπηρέτηση.",
      price: "€2.5/χλμ",
      rating: 4.8,
      responseTime: "8 λεπτά",
      location: "Πειραιάς",
      image: "",
      available: true
    },
    {
      title: "Δημήτρης - Υδραυλικός",
      description: "Επίλυση όλων των υδραυλικών προβλημάτων. Γρήγορη απόκριση και εγγύηση εργασίας.",
      price: "€40/ώρα",
      rating: 4.7,
      responseTime: "25 λεπτά",
      location: "Γλυφάδα",
      image: "",
      available: false
    }
  ];

  const stats = [
    { label: "Εγγεγραμμένοι Επαγγελματίες", value: "500+" },
    { label: "Ολοκληρωμένες Κρατήσεις", value: "10,000+" },
    { label: "Μέσος Χρόνος Απόκρισης", value: "12 λεπτά" },
    { label: "Ικανοποίηση Πελατών", value: "96%" }
  ];

  return (
    <div className="min-h-screen bg-enhanced relative overflow-hidden">
      <div className="floating-elements absolute inset-0 pointer-events-none" />
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50 relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl text-foreground">ServiceHub</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">Υπηρεσίες</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-smooth">Πώς Λειτουργεί</a>
              <a href="#providers" className="text-muted-foreground hover:text-primary transition-smooth">Για Επαγγελματίες</a>
            </nav>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">Σύνδεση</Button>
              <Button variant="hero" size="sm">Εγγραφή</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-enhanced">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground greek-text leading-tight">
              Συνδέστε με Επαγγελματίες
              <span className="gradient-hero bg-clip-text text-transparent block mt-2">
                Στην Περιοχή Σας
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Βρείτε αξιόπιστους επαγγελματίες για κάθε ανάγκη - από ταξί και μεταφορές 
              μέχρι ηλεκτρολόγους, υδραυλικούς και πολλά άλλα
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Τι ψάχνετε;"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Button variant="hero" size="xl" className="px-8">
                Αναζήτηση
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <div className="relative z-10">
        <ServiceCategories />
      </div>

      {/* Featured Services */}
      <section className="py-16 relative z-10" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Προτεινόμενοι Επαγγελματίες
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Επιλεγμένοι επαγγελματίες με υψηλές αξιολογήσεις και γρήγορη εξυπηρέτηση
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-enhanced relative z-10" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Πώς Λειτουργεί
            </h2>
            <p className="text-lg text-muted-foreground">
              Απλά βήματα για να βρείτε τον κατάλληλο επαγγελματία
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-foreground">1. Αναζήτηση</h3>
              <p className="text-muted-foreground">
                Επιλέξτε την υπηρεσία που χρειάζεστε και δείτε διαθέσιμους επαγγελματίες
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-secondary-warm-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-foreground">2. Κράτηση</h3>
              <p className="text-muted-foreground">
                Κάντε κράτηση με έναν κλικ και επιβεβαιώστε τα στοιχεία σας
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-foreground">3. Αξιολόγηση</h3>
              <p className="text-muted-foreground">
                Αξιολογήστε την εμπειρία σας για να βοηθήσετε άλλους χρήστες
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action for Providers */}
      <section className="py-16 relative z-10" id="providers">
        <div className="container mx-auto px-4">
          <div className="gradient-card rounded-2xl border border-border p-8 md:p-12 text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-secondary-warm-foreground" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Είστε Επαγγελματίας;
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Εγγραφείτε στην πλατφόρμα μας και συνδεθείτε με χιλιάδες πελάτες. 
              Αυξήστε τα έσοδά σας και διευρύνετε την πελατεία σας.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="warm" size="xl">
                Εγγραφή ως Επαγγελματίας
              </Button>
              <Button variant="outline" size="xl">
                Μάθετε Περισσότερα
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">S</span>
                </div>
                <span className="font-bold text-xl">ServiceHub</span>
              </div>
              <p className="text-background/80">
                Συνδέουμε πελάτες με αξιόπιστους επαγγελματίες σε όλη την Ελλάδα.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Υπηρεσίες</h4>
              <ul className="space-y-2 text-background/80">
                <li>Ταξί & Μεταφορές</li>
                <li>Ηλεκτρολόγοι</li>
                <li>Υδραυλικοί</li>
                <li>Καθαρισμός</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Εταιρεία</h4>
              <ul className="space-y-2 text-background/80">
                <li>Σχετικά με εμάς</li>
                <li>Επικοινωνία</li>
                <li>Καριέρες</li>
                <li>Νέα</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Υποστήριξη</h4>
              <ul className="space-y-2 text-background/80">
                <li>Κέντρο Βοήθειας</li>
                <li>Όροι Χρήσης</li>
                <li>Πολιτική Απορρήτου</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/80">
            <p>&copy; 2024 ServiceHub. Όλα τα δικαιώματα διατηρούνται.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;