
import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import PageTransition from "@/components/ui/PageTransition";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content: "SkillLogic transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations. The new website increased our conversions by 300% within the first month.",
      rating: 5,
      image: "/placeholder.svg",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Michael Chen", 
      role: "Marketing Director, GrowthCo",
      company: "GrowthCo",
      content: "Working with SkillLogic was a game-changer for our business. Their team delivered a beautiful, functional website that perfectly captures our brand identity. The results speak for themselves - 250% increase in leads!",
      rating: 5,
      image: "/placeholder.svg",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, InnovateLab",
      company: "InnovateLab", 
      content: "The mobile app SkillLogic developed for us is simply outstanding. User engagement increased by 400% and app store ratings consistently stay above 4.8 stars. Their expertise in UX design is unmatched.",
      rating: 5,
      image: "/placeholder.svg",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      name: "David Kim",
      role: "CTO, DataFlow Systems",
      company: "DataFlow Systems",
      content: "SkillLogic's technical expertise and project management skills are exceptional. They delivered our complex web platform on time and under budget, with features that exceeded our initial requirements.",
      rating: 5,
      image: "/placeholder.svg",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "VP Marketing, RetailPro",
      company: "RetailPro",
      content: "The digital marketing strategy SkillLogic created for us was phenomenal. Our online sales increased by 180% in just 6 months. Their data-driven approach and creative campaigns delivered incredible ROI.",
      rating: 5,
      image: "/placeholder.svg", 
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Owner, Local Bistro",
      company: "Local Bistro",
      content: "As a small business owner, I was impressed by how SkillLogic understood our needs and budget. The website they created is beautiful, fast, and has helped us reach new customers. Highly recommended!",
      rating: 5,
      image: "/placeholder.svg",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentTestimonial + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve 
              remarkable growth and success through our digital solutions.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { number: "150+", label: "Happy Clients" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "300%", label: "Avg. Growth Increase" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Featured Testimonials Carousel */}
        <section className="py-16 container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-primary-100 hover:bg-primary-200 rounded-full transition-colors"
              >
                <ArrowLeft size={20} className="text-primary-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-primary-100 hover:bg-primary-200 rounded-full transition-colors"
              >
                <ArrowRight size={20} className="text-primary-600" />
              </button>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`card-glass p-8 h-full group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                    {/* Animated Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Quote Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Quote size={24} className="text-white" />
                      </div>

                      {/* Rating */}
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} className="text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-gray-700 mb-8 leading-relaxed italic text-lg">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center">
                        <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {testimonial.role}
                          </div>
                          <div className="text-primary-600 text-sm font-medium">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? "bg-primary-600 scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're proud to partner with innovative companies across various industries.
              </p>
            </motion.div>

            {/* Logo Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {testimonials.map((client, index) => (
                <motion.div
                  key={client.id}
                  className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${client.gradient} rounded-xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform`}>
                    {client.company.split(' ').map(word => word[0]).join('')}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Contact us today and become 
                our next success story with measurable results and exceptional growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero bg-white text-primary-600 hover:bg-gray-100">
                  Start Your Success Story
                </button>
                <button className="btn-ghost border-white/30 text-white hover:bg-white/10">
                  View Our Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Testimonials;
