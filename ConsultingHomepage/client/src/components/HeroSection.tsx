import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-gradient text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern technology background with circuit patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Tailored Infrastructure Solutions That Put You{" "}
            <span className="text-blue-200">in Control</span>
          </h1>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            Get enterprise-grade professional at 70% less than data-heavy, cloud-web predictable pricing and zero vendor lock-in.
          </p>
          
          {/* Statistics in translucent cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-green-300 mb-2" data-testid="stat-cost-reduction">30%</div>
              <div className="text-blue-200 text-sm">Cost Reduction</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-green-300 mb-2" data-testid="stat-users-served">600K+</div>
              <div className="text-blue-200 text-sm">Users Served</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-green-300 mb-2" data-testid="stat-uptime">99.9%</div>
              <div className="text-blue-200 text-sm">Uptime SLA</div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg shadow-lg"
              data-testid="button-schedule-demo"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Your Free Demo
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white px-8 py-4 text-lg bg-transparent hover:bg-white hover:text-gray-900 transition-colors"
              onClick={scrollToServices}
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-white/70" />
      </motion.div>
    </section>
  );
}
