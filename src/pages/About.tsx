
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  Calendar,
  Users,
  Award,
  Linkedin,
  Twitter,
  Github
} from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences, and create lasting value in the digital landscape.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To be the leading digital transformation partner, recognized for innovation, excellence, and our commitment to client success across all industries.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Heart,
      title: "Values",
      description: "Innovation, integrity, collaboration, and excellence guide every decision we make. We believe in building long-term partnerships based on trust and results.",
      gradient: "from-pink-500 to-red-600"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "SkillLogic Technologies was established with a vision to revolutionize digital experiences.",
      icon: Calendar
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew our expert team and expanded service offerings to include mobile app development and digital marketing.",
      icon: Users
    },
    {
      year: "2023", 
      title: "50+ Clients Milestone",
      description: "Reached a major milestone of serving over 50 clients across various industries with successful project deliveries.",
      icon: Award
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Received multiple awards for innovation and excellence in web development and digital solutions.",
      icon: Award
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Visionary leader with 10+ years of experience in digital transformation and business strategy.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "Lead Designer", 
      bio: "Creative director passionate about crafting beautiful, user-centered digital experiences.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Technical Director",
      bio: "Full-stack engineer specializing in scalable web applications and modern development practices.",
      image: "/placeholder.svg", 
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Emily Davis",
      role: "Marketing Strategist",
      bio: "Digital marketing expert focused on driving growth through data-driven strategies and campaigns.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#", 
        twitter: "#",
        github: "#"
      }
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
              About SkillLogic
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a passionate team of digital innovators, designers, and developers 
              committed to transforming ideas into exceptional digital experiences that 
              drive business growth and user engagement.
            </p>
          </motion.div>

          {/* Intro Text */}
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Founded in 2019, SkillLogic Technologies has been at the forefront of digital 
              innovation, helping businesses of all sizes navigate the ever-evolving digital 
              landscape. Our expertise spans web development, mobile applications, UI/UX design, 
              and digital marketing strategies.
            </p>
          </motion.div>
        </section>

        {/* Mission, Vision, Values */}
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
                Our Foundation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The core principles that drive everything we do and guide our commitment 
                to delivering exceptional results for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="card-glass p-8 h-full group-hover:shadow-2xl transition-all duration-500">
                    {/* Animated Blob Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon size={32} className="text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">
                        {value.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative flex items-center mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-px hidden md:block" />
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center mb-4 md:justify-end">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <item.icon size={20} className="text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary-600">
                        {item.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 top-6 w-4 h-4 bg-primary-600 rounded-full -translate-x-2 hidden md:block border-4 border-white shadow-lg" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
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
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The talented individuals behind our success, each bringing unique 
                expertise and passion to every project we undertake.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Avatar */}
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                      {member.name}
                    </h3>
                    
                    <div className="text-primary-600 font-medium mb-4 text-center">
                      {member.role}
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      {Object.entries(member.social).map(([platform, url]) => {
                        const Icon = platform === 'linkedin' ? Linkedin : platform === 'twitter' ? Twitter : Github;
                        return (
                          <motion.a
                            key={platform}
                            href={url}
                            className="p-2 bg-gray-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-all magnetic"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Icon size={16} />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
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
                Let's Work Together
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Ready to transform your digital presence? Our team is excited to 
                discuss your project and explore how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero bg-white text-primary-600 hover:bg-gray-100">
                  Start a Project
                </button>
                <button className="btn-ghost border-white/30 text-white hover:bg-white/10">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
