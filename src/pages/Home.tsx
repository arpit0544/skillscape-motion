
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { 
  Zap, 
  Palette, 
  Search, 
  Headphones, 
  Smartphone, 
  TrendingUp,
  Users,
  Award,
  Calendar,
  Star
} from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import HeroSlider from "@/components/3d/HeroSlider";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Lightning-fast project completion with premium quality results"
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Cutting-edge designs that captivate and convert your audience"
    },
    {
      icon: Search,
      title: "SEO First",
      description: "Built-in optimization to rank higher and drive organic traffic"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock support to keep your business running smoothly"
    }
  ];

  const stats = [
    { number: 150, label: "Happy Clients", icon: Users },
    { number: 300, label: "Projects Completed", icon: Calendar },
    { number: 25, label: "Awards Won", icon: Award },
    { number: 5, label: "Years Experience", icon: Star }
  ];

  const portfolioItems = [
    { title: "E-Commerce Platform", category: "Web Development", image: "/placeholder.svg" },
    { title: "Mobile Banking App", category: "Mobile App", image: "/placeholder.svg" },
    { title: "Brand Identity Design", category: "Branding", image: "/placeholder.svg" },
    { title: "SaaS Dashboard", category: "UI/UX Design", image: "/placeholder.svg" },
    { title: "Marketing Website", category: "Web Development", image: "/placeholder.svg" },
    { title: "Healthcare Portal", category: "Web Development", image: "/placeholder.svg" }
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section with 3D Slider */}
        <section className="relative">
          <HeroSlider />
        </section>

        {/* Ticker Section */}
        <section className="py-8 bg-primary-600 text-white">
          <Marquee speed={50} gradient={false}>
            <div className="flex items-center space-x-16 text-lg font-medium">
              <span className="flex items-center">
                <Star className="mr-2" size={20} />
                100+ Projects Delivered
              </span>
              <span className="flex items-center">
                <Users className="mr-2" size={20} />
                50+ Happy Clients
              </span>
              <span className="flex items-center">
                <Headphones className="mr-2" size={20} />
                24/7 Support
              </span>
              <span className="flex items-center">
                <Award className="mr-2" size={20} />
                5-Star Reviews
              </span>
              <span className="flex items-center">
                <Zap className="mr-2" size={20} />
                Fast Delivery
              </span>
              <span className="flex items-center">
                <TrendingUp className="mr-2" size={20} />
                Growth Focused
              </span>
            </div>
          </Marquee>
        </section>

        {/* Features Section */}
        <section className="py-24 container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Why Choose SkillLogic?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with creative excellence to deliver 
              digital solutions that drive real business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="card-feature group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Track Record
              </h2>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                Numbers that speak for our commitment to excellence and client success.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={32} className="text-white" />
                  </div>
                  <motion.div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}+
                  </motion.div>
                  <p className="text-primary-200 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Strip */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Featured Work
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover some of our most impactful projects that showcase 
                our expertise across different industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3] cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-primary-200">{item.category}</p>
                    <button className="mt-4 px-6 py-2 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                      View Case Study
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero">
                  Start Your Project
                </button>
                <button className="btn-ghost">
                  View Our Work
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
