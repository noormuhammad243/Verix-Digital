import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, HelpCircle } from 'lucide-react';
import { contactInfo } from '../data';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Contact() {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Contact Us | Verix Digital Expert - Let's Talk Business</title>
        <meta name="description" content="Get in touch with Verix Digital Expert. Reach out via WhatsApp or email to discuss how we can help you achieve digital success." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-24 bg-navy text-white overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] rounded-full bg-royal/30 blur-[120px] opacity-60" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Let's Talk <span className="text-accent">Business</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-slate-300 leading-relaxed">
              Ready to grow your brand? Reach out to us today and let's discuss how we can help you achieve digital success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-slate-50 relative -mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info Cards */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-1 space-y-6"
            >
              {[
                { 
                  icon: Phone, 
                  title: 'WhatsApp / Call', 
                  content: contactInfo.whatsapp, 
                  link: `https://wa.me/${contactInfo.whatsapp}` 
                },
                { 
                  icon: Mail, 
                  title: 'Email Us', 
                  content: contactInfo.email, 
                  link: `mailto:${contactInfo.email}` 
                },
                { 
                  icon: MapPin, 
                  title: 'Visit Us', 
                  content: contactInfo.address, 
                  link: '#' 
                }
              ].map((item, index) => (
                <motion.a 
                  href={item.link}
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-royal/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 text-royal flex items-center justify-center shrink-0 group-hover:bg-royal group-hover:text-white transition-colors">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-slate-600 font-medium">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <h2 className="text-3xl font-bold text-navy mb-8">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition-all"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-slate-700">Service Required</label>
                    <select 
                      id="service"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition-all appearance-none text-slate-600"
                    >
                      <option value="">Select a service</option>
                      <option value="canva">Canva Design</option>
                      <option value="logo">Logo Design</option>
                      <option value="video">Video Editing</option>
                      <option value="social">Social Media Design</option>
                      <option value="content">Content Writing</option>
                      <option value="seo">Keyword Research</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Your Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-8 py-4 text-base font-semibold text-white hover:bg-royal transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map / Image Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative">
         <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            alt="Office Location Map" 
            className="w-full h-full object-cover grayscale opacity-50"
         />
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-navy text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md bg-opacity-90">
               <MapPin className="text-accent" />
               <span className="font-semibold text-lg">Verix Digital Expert HQ</span>
            </div>
         </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <HelpCircle size={48} className="mx-auto text-royal/20 mb-6" />
          <h2 className="text-3xl font-bold text-navy mb-8">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 mb-8">
            Got questions? We've got answers. If you don't see what you're looking for, feel free to reach out via WhatsApp or Email.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-navy mb-2">How fast do you deliver?</h4>
                <p className="text-sm text-slate-600">Depending on the project scope, standard designs take 1-3 days, while larger projects are scheduled accordingly.</p>
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-navy mb-2">Do you offer custom packages?</h4>
                <p className="text-sm text-slate-600">Yes! We tailor our services to meet your specific business needs and budget requirements.</p>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
