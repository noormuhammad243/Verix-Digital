import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data';

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

export default function CaseStudy() {
  const [filter, setFilter] = useState('All');
  
  // Extract unique tech tags for filters
  const allTags = Array.from(new Set(caseStudies.flatMap(study => study.tech)));
  const filters = ['All', ...allTags];

  const filteredStudies = filter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.tech.includes(filter));

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Case Studies | Verix Digital Expert - Our Success Stories</title>
        <meta name="description" content="View our portfolio and case studies. See how Verix Digital Expert has helped businesses transform their online presence and achieve digital success." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-24 bg-navy text-white overflow-hidden">
        <div className="absolute top-[-50%] left-[-10%] w-[800px] h-[800px] rounded-full bg-accent/20 blur-[120px] opacity-60" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Our <span className="text-accent">Success Stories</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-slate-300 leading-relaxed">
              Explore how our strategic digital marketing and creative designs have transformed businesses across various industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-16 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === f 
                    ? 'bg-navy text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-royal hover:text-royal'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-navy/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-navy shadow-sm">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-royal transition-colors">{study.title}</h3>
                    
                    <div className="space-y-4 mb-8 flex-grow">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 block">Challenge</span>
                        <p className="text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 block">Solution</span>
                        <p className="text-sm text-slate-600 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 mb-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">The Result</span>
                        <p className="text-lg font-bold text-green-600">{study.result}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {study.tech.map((t, i) => (
                        <span key={i} className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No case studies found for this category.</p>
              <button 
                onClick={() => setFilter('All')}
                className="mt-4 text-royal font-medium hover:underline"
              >
                View all projects
              </button>
            </div>
          )}

        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-navy text-white text-center px-6">
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Want Results Like These?
          </motion.h2>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
          >
             <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-royal px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-white hover:text-navy transition-all duration-300 hover:-translate-y-1">
                Discuss Your Project
             </Link>
          </motion.div>
      </section>

    </div>
  );
}
