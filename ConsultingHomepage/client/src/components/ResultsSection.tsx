import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const results = [
  {
    metric: "5,000 Database",
    company: "Global Manufacturing Leader",
    description: "Logical Front consolidated our database infrastructure and reduced operational costs by 40% while improving performance across all regions.",
    highlight: "40% cost reduction"
  },
  {
    metric: "2Bn User QR",
    company: "Fortune 500 Technology",
    description: "The scalable QR infrastructure handled our peak traffic of 2 billion users without any downtime during our global product launch.",
    highlight: "Zero downtime"
  },
  {
    metric: "Regional Hospital",
    company: "Healthcare Network",
    description: "Mission-critical healthcare data is now 99.99% available with enhanced security protocols protecting patient information.",
    highlight: "99.99% availability"
  }
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 results-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4" data-testid="results-title">
            Real Results from Real Customers
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See how enterprise leaders are transforming their infrastructure with measurable outcomes.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border border-white/20 h-full" data-testid={`result-card-${index}`}>
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-300 mb-2" data-testid={`result-metric-${index}`}>
                    {result.metric}
                  </div>
                  <h4 className="text-xl font-semibold mb-4" data-testid={`result-company-${index}`}>
                    {result.company}
                  </h4>
                  <p className="text-blue-100 mb-6">
                    {result.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white bg-transparent hover:bg-white/10"
                    data-testid={`button-case-study-${index}`}
                  >
                    Read Case Study
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
