import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Play, TrendingUp } from 'lucide-react';
import { services, caseStudies, reasonsToChooseUs, skills, testimonials } from '../data';

// Helper for animations
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

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Home | Verix Digital Expert - Creative Design & Marketing Agency</title>
        <meta name="description" content="Verix Digital Expert is a premium digital marketing and creative design agency. We help businesses grow with Canva design, SEO, and social media marketing." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 lg:pt-0 overflow-hidden bg-white">
        {/* Decorative elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-royal/10 blur-3xl opacity-60" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal/10 text-royal text-sm font-semibold mb-6 border border-royal/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-royal"></span>
                </span>
                Transforming Ideas into Digital Success
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Grow Your Business with <span className="text-gradient block mt-2">Creative Digital Solutions</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                We are a premium digital marketing and creative design agency dedicated to helping businesses scale, engage audiences, and build lasting brands through innovative digital strategies.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-semibold text-white shadow-lg shadow-navy/20 hover:bg-royal transition-all duration-300 hover:-translate-y-1 group">
                  Get Started
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-navy border-2 border-slate-200 hover:border-navy transition-all duration-300 hover:-translate-y-1">
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden glass-card p-4 aspect-square max-w-lg mx-auto">
                <img 
                  src="https://scontent.flyp20-1.fna.fbcdn.net/v/t39.30808-6/751371923_122114107413361594_4904143319445526060_n.jpg?stp=dst-jpg_tt6&cstp=mx1068x955&ctp=s565x565&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHCneJFR2iZACtIscKaCMnDBVx8n_0szKkFXHyf_SzMqRC4UaSCxHq1Ye0yQVdRZjOCfWtxXN2byxR6WmX8acXF&_nc_ohc=65tWBWyYcwQQ7kNvwEniFsU&_nc_oc=AdrrZkSJ6Sc0qvmRlItAYV8bGVXYosUVy9L5cPqKQD4rFZoNCB8jglMaQR1PBChodY49FsrscwnsbhBLCV_ypW2z&_nc_zt=23&_nc_ht=scontent.flyp20-1.fna&_nc_gid=FxXe_pE0G3lJhqmnEc5Geg&_nc_ss=7b2a8&oh=00_AQDu2BJxBMQbVrk43EaVWZMyIfzUpF7rkKU5ok93XXlOKA&oe=6A67BFCA" 
                  alt="Digital Marketing Team" 
                  className="rounded-2xl w-full h-full object-cover"
                />
                
                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 -left-10 glass p-4 rounded-xl flex items-center gap-4"
                >
                  <div className="bg-green-100 p-3 rounded-lg text-green-600">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Conversion</p>
                    <p className="text-xl font-bold text-navy">+150%</p>
                  </div>
                </motion.div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative rounded-3xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                alt="About Verix" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent flex items-end p-8">
                <div className="glass p-6 rounded-2xl w-full max-w-sm">
                  <h3 className="text-xl font-bold text-navy mb-2">10+ Years</h3>
                  <p className="text-slate-600 text-sm">Combined Experience in Digital Growth</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6 text-navy">
                About <span className="text-gradient">Verix Digital Expert</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-600 text-lg mb-6 leading-relaxed">
                We don't just create campaigns; we build digital ecosystems. With deep expertise in digital marketing and creative services, we transform your vision into measurable success.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-slate-600 text-lg mb-8 leading-relaxed">
                From striking Canva and logo designs to compelling content and data-driven keyword research, our holistic approach ensures your brand stands out in the crowded digital space.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <Link to="/about" className="inline-flex items-center justify-center gap-2 rounded-full bg-royal px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-navy transition-all duration-300 hover:-translate-y-1">
                  Learn More About Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-navy">
              Premium <span className="text-gradient">Services</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Comprehensive digital solutions crafted to elevate your brand identity and accelerate your business growth.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-royal/30 hover:shadow-2xl hover:shadow-royal/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-royal/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-royal mb-6 group-hover:scale-110 group-hover:bg-royal group-hover:text-white transition-all duration-300">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-royal transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Skills */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-royal/20 blur-[120px] opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Why Choose Us */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
                Why Choose <span className="text-accent">Us?</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-400 text-lg mb-12">
                We partner with you to deliver outstanding results through a blend of creativity, technology, and strategic thinking.
              </motion.p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {reasonsToChooseUs.map((reason, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-accent">
                      <reason.icon size={24} />
                    </div>
                    <span className="font-medium">{reason.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* My Skills */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl glass-card backdrop-blur-xl"
            >
              <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-8">Our Core Expertise</motion.h3>
              
              <div className="space-y-6">
                {skills.slice(0, 6).map((skill, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="text-accent font-bold">{skill.percent}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-royal to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-2xl"
            >
              <h2 className="text-4xl font-bold mb-6 text-navy">
                Featured <span className="text-gradient">Case Studies</span>
              </h2>
              <p className="text-slate-600 text-lg">
                Explore how we've helped businesses achieve their digital goals through tailored marketing and design strategies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/case-study" className="inline-flex items-center gap-2 font-semibold text-royal hover:text-navy transition-colors group">
                View All Case Studies
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-navy">
                      {study.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-royal transition-colors">{study.title}</h3>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-slate-600"><strong className="text-slate-800">Challenge:</strong> {study.challenge}</p>
                    <p className="text-sm text-slate-600"><strong className="text-slate-800">Result:</strong> <span className="text-green-600 font-semibold">{study.result}</span></p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-navy">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Don't just take our word for it. Hear what our clients have to say about working with Verix Digital Expert.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 text-royal/10">
                  <svg width="45" height="36" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0C6.04416 0 0 6.04416 0 13.5V36H18V13.5H9C9 11.0147 11.0147 9 13.5 9H18V0H13.5ZM40.5 0C33.0442 0 27 6.04416 27 13.5V36H45V13.5H36C36 11.0147 38.0147 9 40.5 9H45V0H40.5Z" />
                  </svg>
                </div>
                
                <p className="text-slate-600 mb-8 relative z-10 italic leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-100"
                  />
                  <div>
                    <h4 className="font-bold text-navy">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
