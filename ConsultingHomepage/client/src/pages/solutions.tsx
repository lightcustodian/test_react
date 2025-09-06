import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { 
  Cloud, 
  Server, 
  Shield, 
  Bot, 
  Database, 
  Archive, 
  LifeBuoy, 
  Monitor, 
  Camera, 
  Wrench, 
  HardDrive, 
  Laptop, 
  Lock, 
  Network, 
  ShieldCheck, 
  CloudCog, 
  Cpu, 
  Globe, 
  BarChart3, 
  BrainCircuit, 
  TestTube, 
  BookOpen, 
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap
} from 'lucide-react';

export default function Solutions() {
  const solutionsData = {
    "Private Cloud": {
      icon: Cloud,
      color: "blue",
      description: "Enterprise-grade private cloud infrastructure with predictable pricing and zero vendor lock-in",
      features: ["99.9% Uptime SLA", "Predictable Pricing", "Zero Vendor Lock-in", "Enterprise Security"],
      items: [
        { 
          name: "Primary Datacenter Services", 
          icon: Database, 
          description: "High-performance primary datacenter infrastructure with redundant systems",
          benefits: ["High Availability", "Scalable Architecture", "24/7 Monitoring"]
        },
        { 
          name: "Backup as a Service", 
          icon: Archive, 
          description: "Automated backup solutions with multiple retention policies",
          benefits: ["Automated Backups", "Multiple Retention Policies", "Quick Recovery"]
        },
        { 
          name: "Secondary Datacenter Services", 
          icon: Server, 
          description: "Geographically distributed secondary datacenter for disaster recovery",
          benefits: ["Geographic Distribution", "Disaster Recovery", "Business Continuity"]
        },
        { 
          name: "Disaster Recovery as a Service", 
          icon: LifeBuoy, 
          description: "Comprehensive disaster recovery with automated failover",
          benefits: ["Automated Failover", "RTO < 4 hours", "RPO < 1 hour"]
        },
        { 
          name: "Desktop as a Service", 
          icon: Monitor, 
          description: "Virtual desktop infrastructure for remote work and BYOD",
          benefits: ["Remote Access", "BYOD Support", "Centralized Management"]
        },
        { 
          name: "Video Surveillance Storage", 
          icon: Camera, 
          description: "High-capacity storage solutions for video surveillance systems",
          benefits: ["High Capacity", "Fast Retrieval", "Long-term Retention"]
        }
      ]
    },
    "On-Premise Solutions": {
      icon: Server,
      color: "green",
      description: "Modern on-premise infrastructure solutions for organizations requiring local control",
      features: ["Local Control", "Custom Integration", "Hybrid Options", "Performance Optimized"],
      items: [
        { 
          name: "Data Center Modernization", 
          icon: Wrench, 
          description: "Transform legacy infrastructure with modern, efficient solutions",
          benefits: ["Legacy Migration", "Performance Improvement", "Cost Reduction"]
        },
        { 
          name: "Servers and Storage", 
          icon: HardDrive, 
          description: "High-performance server and storage solutions for demanding workloads",
          benefits: ["High Performance", "Scalable Storage", "Efficient Resource Usage"]
        },
        { 
          name: "Virtual Desktops", 
          icon: Laptop, 
          description: "Secure virtual desktop infrastructure for enhanced productivity",
          benefits: ["Enhanced Security", "Centralized Management", "Cost Savings"]
        },
        { 
          name: "Data Protection", 
          icon: Lock, 
          description: "Comprehensive data protection with encryption and access controls",
          benefits: ["Data Encryption", "Access Controls", "Compliance Ready"]
        },
        { 
          name: "Networking", 
          icon: Network, 
          description: "High-speed networking infrastructure for seamless connectivity",
          benefits: ["High Bandwidth", "Low Latency", "Reliable Connectivity"]
        },
        { 
          name: "Security", 
          icon: ShieldCheck, 
          description: "Advanced security solutions for threat protection and compliance",
          benefits: ["Threat Protection", "Compliance Ready", "24/7 Monitoring"]
        }
      ]
    },
    "Microsoft Azure": {
      icon: Shield,
      color: "purple",
      description: "Enterprise Azure cloud solutions with expert management and optimization",
      features: ["Azure Expert", "Cost Optimization", "Security First", "Hybrid Cloud"],
      items: [
        { 
          name: "Azure Cloud Platform", 
          icon: CloudCog, 
          description: "Full Azure platform implementation and management",
          benefits: ["Platform Management", "Best Practices", "Cost Optimization"]
        },
        { 
          name: "Azure Virtual Machines", 
          icon: Cpu, 
          description: "Scalable virtual machine solutions with automated management",
          benefits: ["Auto-scaling", "Load Balancing", "High Availability"]
        },
        { 
          name: "Azure SQL Database", 
          icon: Database, 
          description: "Managed SQL database services with advanced security",
          benefits: ["Managed Service", "Advanced Security", "Automatic Tuning"]
        },
        { 
          name: "Azure Security Center", 
          icon: Shield, 
          description: "Unified security management and threat protection",
          benefits: ["Unified Security", "Threat Protection", "Compliance Monitoring"]
        },
        { 
          name: "Azure Networking", 
          icon: Globe, 
          description: "High-performance networking with global reach",
          benefits: ["Global Network", "High Performance", "Low Latency"]
        },
        { 
          name: "Azure Analytics", 
          icon: BarChart3, 
          description: "Advanced analytics and business intelligence solutions",
          benefits: ["Real-time Analytics", "Business Intelligence", "Machine Learning"]
        }
      ]
    },
    "AI/Automation Platform": {
      icon: Bot,
      color: "orange",
      description: "Next-generation AI and automation solutions for intelligent business operations",
      features: ["AI-Powered", "Automation First", "Scalable AI", "Business Intelligence"],
      items: [
        { 
          name: "AI Infrastructure as a Service", 
          icon: BrainCircuit, 
          description: "Scalable AI infrastructure for machine learning and deep learning",
          benefits: ["Scalable Infrastructure", "GPU Acceleration", "Model Training"]
        },
        { 
          name: "AI Testing Environments", 
          icon: TestTube, 
          description: "Comprehensive testing environments for AI model validation",
          benefits: ["Model Validation", "Testing Automation", "Quality Assurance"]
        },
        { 
          name: "Educational AI Platform", 
          icon: BookOpen, 
          description: "AI-powered educational tools and learning platforms",
          benefits: ["Personalized Learning", "Adaptive Content", "Progress Tracking"]
        },
        { 
          name: "AI Operations Center", 
          icon: Settings, 
          description: "Centralized AI operations management and monitoring",
          benefits: ["Centralized Management", "Real-time Monitoring", "Performance Optimization"]
        }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getCategoryId = (name: string) => {
    const idMap: { [key: string]: string } = {
      "Private Cloud": "private-cloud",
      "On-Premise Solutions": "on-premise-solutions",
      "Microsoft Azure": "microsoft-azure",
      "AI/Automation Platform": "ai-automation-platform"
    };
    return idMap[name] || name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const getSolutionId = (name: string) => {
    const idMap: { [key: string]: string } = {
      "Primary Datacenter Services": "primary-datacenter",
      "Backup as a Service": "backup-service",
      "Secondary Datacenter Services": "secondary-datacenter",
      "Disaster Recovery as a Service": "disaster-recovery",
      "Desktop as a Service": "desktop-service",
      "Video Surveillance Storage": "video-surveillance",
      "Data Center Modernization": "datacenter-modernization",
      "Servers and Storage": "servers-storage",
      "Virtual Desktops": "virtual-desktops",
      "Data Protection": "data-protection",
      "Networking": "networking",
      "Security": "security",
      "Azure Cloud Platform": "azure-cloud-platform",
      "Azure Virtual Machines": "azure-virtual-machines",
      "Azure SQL Database": "azure-sql-database",
      "Azure Security Center": "azure-security-center",
      "Azure Networking": "azure-networking",
      "Azure Analytics": "azure-analytics",
      "AI Infrastructure as a Service": "ai-infrastructure",
      "AI Testing Environments": "ai-testing",
      "Educational AI Platform": "educational-ai",
      "AI Operations Center": "ai-operations"
    };
    return idMap[name] || name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const getGradientClasses = (color: string) => {
    const gradients = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600"
    };
    return gradients[color as keyof typeof gradients] || gradients.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="hero-gradient-blue-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Infrastructure Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transform your business with enterprise-grade infrastructure solutions that deliver 
              predictable performance, cost savings, and zero vendor lock-in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 transition-colors">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">600K+</div>
              <div className="text-gray-600">Users Served</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Solution Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our four main solution categories, each designed to address specific 
              business needs and infrastructure requirements.
            </p>
          </motion.div>

          <div className="space-y-16">
            {Object.entries(solutionsData).map(([category, data], index) => (
              <motion.div
                key={category}
                id={getCategoryId(category)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${getGradientClasses(data.color)} p-8 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 ${getColorClasses(data.color)} rounded-2xl flex items-center justify-center border-2`}>
                      <data.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{category}</h3>
                      <p className="text-blue-100 text-lg">{data.description}</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {data.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-white/20 text-white border-white/30">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Solutions Grid */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.items.map((item, itemIndex) => (
                      <Card key={item.name} id={getSolutionId(item.name)} className="hover:shadow-lg transition-all duration-300 border-0 bg-gray-50">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-10 h-10 ${getColorClasses(data.color)} rounded-lg flex items-center justify-center`}>
                              <item.icon className="h-5 w-5" />
                            </div>
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                          </div>
                          <CardDescription className="text-gray-600">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-2">
                            {item.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-700">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                          <Button 
                            variant="outline" 
                            className="w-full mt-4 border-gray-300 hover:border-primary hover:text-primary"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join hundreds of organizations that have already transformed their infrastructure 
              with our solutions. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Users className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 transition-colors">
                <Zap className="mr-2 h-5 w-5" />
                View ROI Calculator
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
