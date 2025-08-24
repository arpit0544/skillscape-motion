
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "contact@skilllogic.tech",
      link: "mailto:contact@skilllogic.tech"
    },
    {
      icon: Phone,
      title: "Call Us", 
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Tech Street, New York, NY 10001",
      link: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM EST",
      link: "#"
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your digital presence? Let's discuss your project 
              and explore how we can help you achieve your business goals.
            </p>
          </motion.div>
        </section>

        <div className="container mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-glass p-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:border-primary-500 focus:bg-white transition-all duration-300 outline-none peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:text-primary-500 peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                      Full Name
                    </label>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:border-primary-500 focus:bg-white transition-all duration-300 outline-none peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:text-primary-500 peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                      Email Address
                    </label>
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:border-primary-500 focus:bg-white transition-all duration-300 outline-none peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:text-primary-500 peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                      Phone Number (Optional)
                    </label>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:border-primary-500 focus:bg-white transition-all duration-300 outline-none peer resize-none"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:text-primary-500 peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                      Tell us about your project
                    </label>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full btn-hero flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <div className="loading-spinner mr-2" />
                          Sending...
                        </>
                      ) : formStatus === 'success' ? (
                        <>
                          <CheckCircle size={20} className="mr-2" />
                          Message Sent!
                        </>
                      ) : formStatus === 'error' ? (
                        <>
                          <AlertCircle size={20} className="mr-2" />
                          Try Again
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>

                {/* Success Message */}
                {formStatus === 'success' && (
                  <motion.div
                    className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center text-green-800"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={20} className="mr-2 text-green-600" />
                    Thank you! We'll get back to you within 24 hours.
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Contact Information
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We're here to help! Reach out to us through any of these channels, 
                  and our team will respond promptly to discuss your project needs.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-600">
                        {info.content}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map Embed */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl shadow-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-primary-600">
                    <div className="text-center">
                      <MapPin size={48} className="mx-auto mb-4" />
                      <p className="text-lg font-medium">Interactive Map</p>
                      <p className="text-sm">123 Tech Street, New York, NY</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
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
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions about our services and process.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on complexity, but most websites take 4-8 weeks from start to finish."
                },
                {
                  question: "Do you provide ongoing support?", 
                  answer: "Yes! We offer comprehensive maintenance packages and 24/7 support for all our clients."
                },
                {
                  question: "What's included in your pricing?",
                  answer: "Our pricing includes design, development, testing, deployment, and initial training. No hidden fees."
                },
                {
                  question: "Can you help with SEO and marketing?",
                  answer: "Absolutely! We offer complete digital marketing services including SEO, PPC, and social media."
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
