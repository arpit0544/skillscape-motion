
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ["All", "Web", "App", "Marketing", "Branding"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web",
      description: "Modern e-commerce solution with advanced features and seamless user experience.",
      longDescription: "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "App",
      description: "Secure and intuitive mobile banking application with modern UI/UX design.",
      longDescription: "A feature-rich mobile banking app with biometric authentication, real-time notifications, and comprehensive financial management tools. Built using React Native for cross-platform compatibility.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Brand Identity System",
      category: "Branding",
      description: "Complete brand identity design for a tech startup including logo and guidelines.",
      longDescription: "Comprehensive brand identity project including logo design, color palette, typography, and brand guidelines. Created a cohesive visual identity that reflects the company's innovative spirit.",
      image: "/placeholder.svg",
      technologies: ["Adobe Illustrator", "Figma", "Photoshop"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      category: "Web",
      description: "Analytics dashboard with real-time data visualization and reporting features.",
      longDescription: "Advanced SaaS dashboard with real-time analytics, customizable widgets, and comprehensive reporting. Built with modern web technologies for optimal performance and user experience.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "D3.js", "Express", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Digital Marketing Campaign",
      category: "Marketing",
      description: "Multi-channel marketing campaign that increased conversion rates by 150%.",
      longDescription: "Comprehensive digital marketing campaign including social media strategy, content creation, PPC advertising, and email marketing. Resulted in significant increase in brand awareness and conversions.",
      image: "/placeholder.svg",
      technologies: ["Google Ads", "Facebook Ads", "Mailchimp", "Analytics"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Healthcare Portal",
      category: "Web",
      description: "Patient management system with appointment scheduling and medical records.",
      longDescription: "Secure healthcare portal for patient management, appointment scheduling, and medical record access. HIPAA compliant with advanced security features and intuitive user interface.",
      image: "/placeholder.svg",
      technologies: ["Angular", "Python", "Django", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse collection of successful projects across 
              web development, mobile apps, and digital marketing.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24 container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                  layout
                >
                  {/* Project Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex space-x-2">
                        <button className="p-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors">
                          <ExternalLink size={16} />
                        </button>
                        <button className="p-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors">
                          <Github size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative">
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-200" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">
                      {selectedProject.title}
                    </h2>
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button className="btn-hero flex items-center">
                      <ExternalLink size={16} className="mr-2" />
                      View Live Site
                    </button>
                    <button className="btn-ghost flex items-center">
                      <Github size={16} className="mr-2" />
                      View Code
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create something exceptional. Contact us today 
                to discuss your project requirements and get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero">
                  Start Project
                </button>
                <button className="btn-ghost">
                  View More Work
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
