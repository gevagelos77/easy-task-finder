import { Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  responseTime: string;
  location: string;
  image: string;
  available: boolean;
}

const ServiceCard = ({
  title,
  description,
  price,
  rating,
  responseTime,
  location,
  image,
  available
}: ServiceCardProps) => {
  return (
    <div className="gradient-card rounded-xl border border-border p-6 transition-smooth hover:shadow-lg hover:bg-card-hover group">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-semibold text-lg flex-shrink-0">
          {title.charAt(0)}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-smooth">
              {title}
            </h3>
            <div className="flex items-center gap-1 text-secondary-warm">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-medium text-sm">{rating}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{responseTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-primary">{price}</div>
            <Button 
              variant={available ? "default" : "secondary"} 
              size="sm"
              disabled={!available}
              className="transition-bounce"
            >
              {available ? "Κράτηση" : "Μη Διαθέσιμος"}
            </Button>
          </div>
        </div>
      </div>
      
      {!available && (
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Επόμενη διαθεσιμότητα σε 2 ώρες
        </div>
      )}
    </div>
  );
};

export default ServiceCard;