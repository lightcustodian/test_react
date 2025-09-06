import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { 
  GraduationCap, 
  Factory, 
  School, 
  Building2, 
  Heart, 
  Users, 
  Shield, 
  Database, 
  Cloud, 
  Server, 
  Laptop, 
  Network, 
  Lock, 
  BarChart3, 
  Globe, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  TrendingUp,
  Award,
  Target,
  Lightbulb
} from 'lucide-react';

export default function Industries() {
  const industriesData = [
    {
      name: "Higher Education",
      icon: GraduationCap,
      color: "blue",
      description: "Empowering universities and colleges with scalable, secure infrastructure solutions",
      challenges: ["Budget Constraints", "Legacy Systems", "Security Compliance", "Scalability Needs"],
      solutions: [
        {
          name: "Cloud Infrastructure",
          description: "Scalable cloud solutions for research and academic computing",
          benefits: ["Cost Optimization", "Research Acceleration", "Student Access"]
        },
        {
          name: "Data Security",
          description: "FIPS 140-2 compliant security for sensitive research data",
          benefits: ["Compliance Ready", "Data Protection", "Audit Trails"]
        },
        {
          name: "Virtual Learning",
          description: "Virtual desktop infrastructure for remote and hybrid learning",
          benefits: ["Remote Access", "Device Flexibility", "Centralized Management"]
        }
      ],
      stats: {
        students: "50K+",
        research: "100+",
        uptime: "99.99%"
      }
    },
    {
      name: "Manufacturing",
      icon: Factory,
      color: "green",
      description: "Modernizing manufacturing operations with intelligent infrastructure and automation",
      challenges: ["Legacy Equipment", "Supply Chain Complexity", "Quality Control", "Operational Efficiency"],
      solutions: [
        {
          name: "IoT Infrastructure",
          description: "Connected manufacturing systems for real-time monitoring",
          benefits: ["Real-time Data", "Predictive Maintenance", "Quality Assurance"]
        },
        {
          name: "Edge Computing",
          description: "Local processing for critical manufacturing operations",
          benefits: ["Low Latency", "Offline Operation", "Data Sovereignty"]
        },
        {
          name: "AI Analytics",
          description: "Machine learning for process optimization and quality control",
          benefits: ["Process Optimization", "Quality Improvement", "Cost Reduction"]
        }
      ],
      stats: {
        efficiency: "35%",
        downtime: "60%",
        quality: "99.5%"
      }
    },
    {
      name: "K-12 School Districts",
      icon: School,
      color: "purple",
      description: "Supporting K-12 education with secure, scalable technology infrastructure",
      challenges: ["Limited IT Resources", "Budget Constraints", "Security Requirements", "Device Management"],
      solutions: [
        {
          name: "Managed IT Services",
          description: "Complete IT infrastructure management and support",
          benefits: ["24/7 Support", "Cost Predictability", "Expert Management"]
        },
        {
          name: "Student Device Management",
          description: "Centralized management of student and staff devices",
          benefits: ["Centralized Control", "Security Management", "Cost Optimization"]
        },
        {
          name: "Digital Learning Platform",
          description: "Secure platform for online and hybrid learning",
          benefits: ["Learning Continuity", "Student Engagement", "Parent Access"]
        }
      ],
      stats: {
        schools: "200+",
        students: "100K+",
        devices: "50K+"
      }
    },
    {
      name: "Business Services",
      icon: Building2,
      color: "orange",
      description: "Enabling business services companies to scale efficiently and securely",
      challenges: ["Client Data Security", "Scalability", "Compliance", "Cost Management"],
      solutions: [
        {
          name: "Multi-tenant Infrastructure",
          description: "Secure, isolated environments for multiple clients",
          benefits: ["Client Isolation", "Scalable Architecture", "Cost Efficiency"]
        },
        {
          name: "Compliance Framework",
          description: "Built-in compliance for various industry standards",
          benefits: ["Audit Ready", "Risk Mitigation", "Client Trust"]
        },
        {
          name: "API Management",
          description: "Robust API infrastructure for service delivery",
          benefits: ["Integration Ready", "Developer Experience", "Scalable APIs"]
        }
      ],
      stats: {
        clients: "500+",
        uptime: "99.95%",
        compliance: "100%"
      }
    },
    {
      name: "Healthcare",
      icon: Heart,
      color: "red",
      description: "Supporting healthcare organizations with HIPAA-compliant, secure infrastructure",
      challenges: ["HIPAA Compliance", "Data Security", "24/7 Availability", "Integration Complexity"],
      solutions: [
        {
          name: "HIPAA-Compliant Cloud",
          description: "Secure cloud infrastructure meeting healthcare compliance requirements",
          benefits: ["HIPAA Ready", "Data Encryption", "Audit Compliance"]
        },
        {
          name: "Disaster Recovery",
          description: "Comprehensive disaster recovery for critical healthcare systems",
          benefits: ["Business Continuity", "Data Protection", "Regulatory Compliance"]
        },
        {
          name: "Telehealth Platform",
          description: "Secure platform for remote patient care and consultations",
          benefits: ["Patient Access", "Provider Efficiency", "Care Continuity"]
        }
      ],
      stats: {
        patients: "1M+",
        facilities: "50+",
        compliance: "100%"
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      red: "bg-red-100 text-red-600 border-red-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getGradientClasses = (color: string) => {
    const gradients = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
      red: "from-red-500 to-red-600"
    };
    return gradients[color as keyof typeof gradients] || gradients.blue;
  };

  const getIndustryId = (name: string) => {
    const idMap: { [key: string]: string } = {
      "Higher Education": "higher-education",
      "Manufacturing": "manufacturing",
      "K-12 School Districts": "k12-schools",
      "Business Services": "business-services",
      "Regional Healthcare": "healthcare"
    };
    return idMap[name] || name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
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
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Tailored infrastructure solutions designed specifically for your industry's unique challenges, 
              compliance requirements, and growth objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Industry Consultation
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
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-gray-600">Industries Served</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">Organizations</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Industry Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each industry faces unique challenges. Our solutions are tailored to address 
              specific requirements, compliance needs, and operational goals.
            </p>
          </motion.div>

          <div className="space-y-16">
            {industriesData.map((industry, index) => (
              <motion.div
                key={industry.name}
                id={getIndustryId(industry.name)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Industry Header */}
                <div className={`bg-gradient-to-r ${getGradientClasses(industry.color)} p-8 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 ${getColorClasses(industry.color)} rounded-2xl flex items-center justify-center border-2`}>
                      <industry.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{industry.name}</h3>
                      <p className="text-blue-100 text-lg">{industry.description}</p>
                    </div>
                  </div>
                  
                  {/* Industry Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-6">
                    {Object.entries(industry.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold">{value}</div>
                        <div className="text-blue-100 text-sm capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges and Solutions */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Challenges */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-red-500" />
                        Key Challenges
                      </h4>
                      <div className="space-y-3">
                        {industry.challenges.map((challenge, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-green-500" />
                        Our Solutions
                      </h4>
                      <div className="space-y-4">
                        {industry.solutions.map((solution, idx) => (
                          <Card key={idx} className="border-0 bg-green-50 hover:shadow-md transition-shadow">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg text-gray-900">{solution.name}</CardTitle>
                              <CardDescription className="text-gray-600">
                                {solution.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <div className="space-y-2">
                                {solution.benefits.map((benefit, benefitIdx) => (
                                  <div key={benefitIdx} className="flex items-center gap-2 text-sm text-gray-700">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    {benefit}
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Industry CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Ready to transform your {industry.name.toLowerCase()} operations?</h4>
                        <p className="text-gray-600">Get a customized solution designed for your specific needs.</p>
                      </div>
                      <Button className={`bg-gradient-to-r ${getGradientClasses(industry.color)} hover:opacity-90`}>
                        Get Industry Solution
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Industry-Specific Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generic solutions don't address industry-specific challenges. Our tailored approach 
              ensures your infrastructure aligns with your business requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Expertise</h3>
              <p className="text-gray-600">Deep understanding of your industry's challenges, compliance requirements, and best practices.</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful implementations across your industry with measurable outcomes.</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Implementation</h3>
              <p className="text-gray-600">Industry-specific templates and best practices accelerate your deployment timeline.</p>
            </motion.div>
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
              Ready to Get Industry-Specific Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let us understand your industry challenges and design a solution that's 
              built specifically for your business needs and growth objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Users className="mr-2 h-5 w-5" />
                Schedule Industry Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 transition-colors">
                <Zap className="mr-2 h-5 w-5" />
                Download Industry Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
