
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "About", path: "/about" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Website Development", path: "/services" },
        { name: "UI/UX Design", path: "/services" },
        { name: "SEO Optimization", path: "/services" },
        { name: "Mobile Apps", path: "/services" },
        { name: "Digital Marketing", path: "/services" },
        { name: "Maintenance", path: "/services" },
      ],
    },
    {
      title: "Contact Info",
      links: [
        { name: "contact@skilllogic.tech", path: "mailto:contact@skilllogic.tech", icon: Mail },
        { name: "+1 (555) 123-4567", path: "tel:+15551234567", icon: Phone },
        { name: "New York, USA", path: "#", icon: MapPin },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">SkillLogic</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming ideas into digital reality. We build modern, fast, and 
              beautiful web solutions that drive business growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-primary-600 transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} className="group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300 group"
                    >
                      {link.icon && (
                        <link.icon size={16} className="mr-2 group-hover:text-primary-400" />
                      )}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 SkillLogic Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link 
              to="#" 
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="#" 
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              to="#" 
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
