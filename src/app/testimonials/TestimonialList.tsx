"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TestimonialList({ testimonials }: { testimonials: any[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="mb-20 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-black">Wall of <span className="text-[#FF5722]">Love</span></h1>
        <p className="text-gray-600 text-xl md:text-2xl font-medium leading-relaxed">Hear what our clients have to say about working with us.</p>
      </motion.div>

      {testimonials.length > 0 ? (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {testimonials.map((t) => (
            <motion.div key={t._id} variants={itemVariants} className="h-full">
              <div className="bg-white border border-gray-100 shadow-sm rounded-[40px] p-10 h-full flex flex-col relative group transition-shadow hover:shadow-xl">
                {/* Decorative quote icon */}
                <svg className="absolute top-8 right-8 w-12 h-12 text-gray-100 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                {/* Rating */}
                <div className="flex mb-8 text-[#FF5722]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-6 h-6 ${i < (t.rating || 5) ? 'text-[#FF5722]' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 text-xl font-medium mb-10 flex-1 italic relative z-10 leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>

                <div className="flex items-center gap-5 mt-auto relative z-10 pt-6 border-t border-gray-100">
                  {t.imageUrl ? (
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image src={t.imageUrl} alt={t.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center border-2 border-white shadow-sm text-[#3366FF] font-black text-xl">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-black text-lg">{t.name}</h4>
                    {(t.role || t.company) && (
                      <p className="text-sm font-medium text-gray-500 mt-1">
                        {t.role} {t.role && t.company && 'at '} <span className="text-[#3366FF]">{t.company}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="bg-white border border-gray-200 p-12 inline-block rounded-[40px] shadow-sm">
            <h3 className="text-2xl font-black mb-2 text-black">No testimonials yet</h3>
            <p className="text-gray-500 font-medium">Check back later.</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
