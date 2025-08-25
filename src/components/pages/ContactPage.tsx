import React from 'react';
import { PageTemplate } from '../templates/PageTemplate';
import { ContactForm } from '../blocks/ContactForm';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { IconCircle } from '../items/IconCircle';

const ContactPage: React.FC = () => {
  const heroData = {
    title: "Get in Touch\nYour Infrastructure Journey Starts Here",
    subtitle: "Ready to transform your technology infrastructure? Our team of experts is here to help you find the perfect solution for your organization.",
    stats: [
      { number: "24/7", label: "Support Available" },
      { number: "<1hr", label: "Response Time" },
      { number: "100%", label: "Free Consultation" }
    ],
    primaryCTA: { 
      text: "SCHEDULE CONSULTATION", 
      icon: "fas fa-calendar-check",
      href: "#contact-form"
    },
    secondaryCTA: { 
      text: "CALL NOW", 
      icon: "fas fa-phone",
      href: "tel:+18012033141"
    },
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  const handleContactSubmit = (data: any) => {
    console.log('Contact form submitted:', data);
    // Here you would normally send the data to your backend
  };

  return (
    <PageTemplate heroData={heroData}>
      {/* Contact Information Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Form */}
            <div id="contact-form">
              <ContactForm onSubmit={handleContactSubmit} />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <Heading level={2} variant="primary" className="mb-8">
                  Contact Information
                </Heading>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <IconCircle 
                      icon="fas fa-phone" 
                      variant="primary" 
                      className="flex-shrink-0"
                    />
                    <div>
                      <Heading level={5} variant="primary" className="mb-1">
                        Phone
                      </Heading>
                      <Text>(801) 203-3141</Text>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <IconCircle 
                      icon="fas fa-envelope" 
                      variant="primary" 
                      className="flex-shrink-0"
                    />
                    <div>
                      <Heading level={5} variant="primary" className="mb-1">
                        Email
                      </Heading>
                      <Text>info@logicalfront.com</Text>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <IconCircle 
                      icon="fas fa-map-marker-alt" 
                      variant="growth" 
                      className="flex-shrink-0"
                    />
                    <div>
                      <Heading level={5} variant="primary" className="mb-1">
                        Location
                      </Heading>
                      <Text>9690 S 300 W, C15<br />Sandy, UT 84070</Text>
                    </div>
                  </div>
                  
                  {/* Business Hours */}
                  <div className="flex items-center gap-4">
                    <IconCircle 
                      icon="fas fa-clock" 
                      variant="primary" 
                      className="flex-shrink-0"
                    />
                    <div>
                      <Heading level={5} variant="primary" className="mb-1">
                        Business Hours
                      </Heading>
                      <Text className="leading-relaxed">
                        Mon-Fri: 8:00 AM - 6:00 PM CST<br />
                        24/7 Emergency Support Available
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Service Areas */}
              <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
                <Heading level={4} variant="primary" className="mb-6">
                  Primary Service Areas
                </Heading>
                <ul className="space-y-3">
                  {[
                    'Utah & Surrounding States',
                    'Remote Infrastructure Management', 
                    'Cloud & Hybrid Solutions Nationwide',
                    'On-Site Support Available'
                  ].map((area, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Icon name="fas fa-check-circle" color="secondary" />
                      <Text>{area}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default ContactPage;
export { ContactPage };