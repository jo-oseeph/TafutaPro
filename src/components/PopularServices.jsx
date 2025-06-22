import { Link } from "react-router-dom";
import {
  Wrench,
  Hammer,
  Zap,
  Truck,
  BookOpen,
  Paintbrush,
} from "lucide-react";

const services = [
  { name: "Plumbers", icon: Wrench, slug: "plumber" },
  { name: "Capenters", icon: Hammer, slug: "cleaner" },
  { name: "Electricians", icon: Zap, slug: "electrician" },
  { name: "Moving", icon: Truck, slug: "moving" },
  { name: "Tutors", icon: BookOpen, slug: "tutor" },
  { name: "Painters", icon: Paintbrush, slug: "painter" },
];

const PopularServices = () => {
  return (
      <section className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-heading mb-8">
          Popular Services
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                to={`/services/${service.slug}`}
                key={service.slug}
                className="flex flex-col items-center p-4 bg-white shadow hover:shadow-md rounded-lg transition hover:scale-105"
              >
                <Icon className="w-8 h-8 text-brand mb-2" />
                <span className="text-sm font-medium text-heading">
                  {service.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
    
  )
}

export default PopularServices