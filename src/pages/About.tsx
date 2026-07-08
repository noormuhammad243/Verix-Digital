import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Flag, Star } from 'lucide-react';
import { skills } from '../data';

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

export default function About() {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>About Us | Verix Digital Expert - Our Story & Vision</title>
        <meta name="description" content="Learn more about Verix Digital Expert. We are a team of passionate digital marketers, designers, and strategists dedicated to transforming your ideas into digital success." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-24 bg-navy text-white overflow-hidden">
        <div className="absolute top-[-50%] left-[-10%] w-[800px] h-[800px] rounded-full bg-royal/30 blur-[120px] opacity-60" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              About <span className="text-accent">Verix</span> Digital Expert
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-slate-300 leading-relaxed">
              We are a team of passionate digital marketers, designers, and strategists dedicated to transforming your ideas into digital success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story & Values */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6 text-navy">
                Our <span className="text-gradient">Story</span>
              </motion.h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <motion.p variants={fadeInUp}>
                  Founded with a vision to empower businesses in the digital age, Verix Digital Expert started as a small creative studio. Today, we've grown into a full-service digital marketing agency.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  We believe that every brand has a unique story, and our mission is to tell that story through compelling designs, strategic content, and data-driven marketing campaigns. We don't just deliver services; we build partnerships.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Our expertise spans across Canva and Logo design, Video Editing, Social Media Management, Content Writing, and rigorous Keyword Research. We stay ahead of the curve to ensure your brand always stands out.
                </motion.p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Mission', icon: Target, desc: 'To provide innovative digital solutions that drive measurable growth.' },
                { title: 'Vision', icon: Eye, desc: 'To be the leading digital agency known for creativity and results.' },
                { title: 'Values', icon: Star, desc: 'Integrity, Innovation, Collaboration, and Client Success.' },
                { title: 'Goal', icon: Flag, desc: 'To elevate every brand we touch to its highest potential.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-royal/10 text-royal flex items-center justify-center mb-4">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Experience Timeline */}
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
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Milestones that define our growth and expertise.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform md:-translate-x-1/2 rounded-full" />

            <div className="space-y-12">
              {[
                { year: '2019', title: 'Agency Founded', desc: 'Started as a boutique design studio focusing on branding.' },
                { year: '2021', title: 'Expanded Services', desc: 'Added full-stack digital marketing and video production.' },
                { year: '2023', title: '100+ Clients', desc: 'Successfully delivered over 100 projects globally.' },
                { year: 'Present', title: 'Industry Leaders', desc: 'Recognized for innovative digital strategies and creative excellence.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-royal rounded-full border-4 border-slate-50 transform md:-translate-x-1/2 translate-y-2 md:translate-y-0" />
                  
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <span className="text-royal font-bold text-sm tracking-wider uppercase mb-1 block">{item.year}</span>
                      <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6 text-navy">
                Our <span className="text-gradient">Expertise</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-600 text-lg mb-8 leading-relaxed">
                We combine creative flair with technical precision to deliver outstanding results across all digital touchpoints.
              </motion.p>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-navy">{skill.name}</span>
                      <span className="text-royal font-bold">{skill.percent}%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-navy to-royal rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
               <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-navy/40 to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
