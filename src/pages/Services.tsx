
import { motion } from "framer-motion";
import { 
  Code, 
  Palette, 
  Search, 
  Wrench, 
  Smartphone, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "CMS Integration"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage users and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your online visibility and drive organic traffic with our proven SEO strategies.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and performing at its best with our maintenance services.",
      features: ["Security Updates", "Performance Monitoring", "Content Updates", "Backup Management"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that provide exceptional user experiences.",
      features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"],
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence and reach.",
      features: ["Social Media Marketing", "PPC Advertising", "Content Marketing", "Email Marketing"],
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into understanding your business goals and requirements."
    },
    {
      step: "02", 
      title: "Planning",
      description: "Strategic planning and roadmap creation for your project success."
    },
    {
      step: "03",
      title: "Design",
      description: "Beautiful, user-centered designs that align with your brand vision."
    },
    {
      step: "04",
      title: "Development",
      description: "Clean, efficient code built with the latest technologies and best practices."
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous testing to ensure quality, performance, and reliability."
    },
    {
      step: "06",
      title: "Launch",
      description: "Smooth deployment and ongoing support to ensure your success."
    }
  ];

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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to transform your business 
              and accelerate your growth in the digital landscape.
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-16 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="card-feature group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery 
                and exceeds client expectations every time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="text-6xl font-bold text-primary-100 mb-4 group-hover:text-primary-200 transition-colors">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200" />
                  )}
                </motion.div>
              ))}
            </div>
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
                Let's Build Something Amazing
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Ready to take your business to the next level? Contact us today 
                for a free consultation and project estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero bg-white text-primary-600 hover:bg-gray-100">
                  Get Free Quote
                </button>
                <button className="btn-ghost border-white/30 text-white hover:bg-white/10">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;
