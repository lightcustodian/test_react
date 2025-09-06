import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechFlow Solutions",
      content: "The consulting team transformed our entire operation. We saw a 40% increase in efficiency within the first quarter.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Operations Director",
      company: "Global Manufacturing Co.",
      content: "Their strategic insights helped us reduce costs by $2M annually while improving quality standards.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "VP of Strategy",
      company: "HealthTech Innovations",
      content: "The digital transformation roadmap they provided was exactly what we needed to stay competitive.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business leaders have to say about our consulting services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors font-medium">
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
}
