import { Car, Zap, Wrench, Paintbrush, Shield, Home, Scissors, Camera } from "lucide-react";

const categories = [
  {
    icon: Car,
    title: "Ταξί & Μεταφορές",
    description: "Άμεση μεταφορά στον προορισμό σας",
    color: "text-primary",
    count: "150+ οδηγοί"
  },
  {
    icon: Zap,
    title: "Ηλεκτρολόγοι",
    description: "Επαγγελματίες ηλεκτρολόγοι 24/7",
    color: "text-secondary-warm",
    count: "85+ τεχνικοί"
  },
  {
    icon: Wrench,
    title: "Υδραυλικοί",
    description: "Λύσεις για όλα τα υδραυλικά προβλήματα",
    color: "text-primary-light",
    count: "92+ υδραυλικοί"
  },
  {
    icon: Paintbrush,
    title: "Βαφείς",
    description: "Επαγγελματικό βάψιμο χώρων",
    color: "text-secondary-warm",
    count: "67+ βαφείς"
  },
  {
    icon: Shield,
    title: "Φύλαξη",
    description: "Υπηρεσίες ασφάλειας και φύλαξης",
    color: "text-primary-dark",
    count: "45+ φρουροί"
  },
  {
    icon: Home,
    title: "Καθαρισμός",
    description: "Καθαρισμός σπιτιού και γραφείου",
    color: "text-primary",
    count: "78+ καθαριστές"
  },
  {
    icon: Scissors,
    title: "Κομμωτήριο",
    description: "Υπηρεσίες περιποίησης στο σπίτι",
    color: "text-secondary-warm",
    count: "34+ κομμωτές"
  },
  {
    icon: Camera,
    title: "Φωτογράφοι",
    description: "Επαγγελματική φωτογράφιση",
    color: "text-primary-light",
    count: "29+ φωτογράφοι"
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Βρείτε τον Κατάλληλο Επαγγελματία
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Συνδεθείτε με εξειδικευμένους επαγγελματίες στην περιοχή σας για κάθε ανάγκη
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className="gradient-card rounded-xl border border-border p-6 text-center transition-smooth hover:shadow-lg hover:bg-card-hover cursor-pointer group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-smooth">
                  {category.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full inline-block">
                  {category.count}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;