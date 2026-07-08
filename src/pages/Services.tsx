import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data';

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

export default function Services() {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Our Services | Verix Digital Expert - Digital Marketing & Design</title>
        <meta name="description" content="Explore our premium digital marketing services including Canva Design, Logo Design, Video Editing, Social Media Management, and SEO Keyword Research." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-24 bg-navy text-white overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] rounded-full bg-royal/30 blur-[120px] opacity-60" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Our <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-slate-300 leading-relaxed">
              Comprehensive digital solutions crafted to elevate your brand identity, engage your audience, and accelerate your business growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Service Visual */}
              <motion.div 
                variants={fadeInUp}
                className="w-full lg:w-1/2 relative"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-card p-4 bg-white border border-slate-100 shadow-xl flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <service.icon size={120} strokeWidth={1} className="text-navy opacity-10 group-hover:scale-110 transition-transform duration-700 absolute" />
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-navy to-royal text-white flex items-center justify-center shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500">
                    <service.icon size={48} />
                  </div>
                </div>
              </motion.div>

              {/* Service Details */}
              <motion.div variants={staggerContainer} className="w-full lg:w-1/2">
                <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                  {service.title}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </motion.p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <motion.div variants={fadeInUp}>
                    <h4 className="font-bold text-navy mb-4 border-b border-slate-200 pb-2">Key Features</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-slate-600">
                          <CheckCircle2 size={18} className="text-royal shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                     <h4 className="font-bold text-navy mb-4 border-b border-slate-200 pb-2">The Benefits</h4>
                     <p className="text-slate-600 text-sm leading-relaxed bg-royal/5 p-4 rounded-xl border border-royal/10">
                        {service.benefits}
                     </p>
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp}>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3 text-sm font-semibold text-white hover:bg-royal transition-all duration-300 hover:-translate-y-1">
                    Request this Service
                  </Link>
                </motion.div>
              </motion.div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-royal opacity-5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-navy mb-6"
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto"
          >
            Let's collaborate to build something extraordinary. Our team is ready to help you achieve your business goals.
          </motion.p>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
             <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-royal px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-navy transition-all duration-300 hover:-translate-y-1">
                Start a Project
             </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
