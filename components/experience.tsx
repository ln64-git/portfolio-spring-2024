"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface JobProps {
  company: string;
  duration: string;
  image: string;
  role?: string;
  summary?: string;
  bulletArray: string[];
}

export default function Experience(data: JobProps) {
  const durationParts = data.duration.split(" - ");
  const startDate = durationParts[0];
  const endDate = durationParts[1] === "Current" ? "Present" : durationParts[1];

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className="group bg-content1/50 dark:bg-content1/30 backdrop-blur-xl rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 transition-all duration-500 shadow-lg hover:shadow-2xl hover:bg-content1/60 dark:hover:bg-content1/40 border border-content2/10 hover:border-content2/20 relative overflow-hidden max-w-4xl mx-auto"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/3 to-foreground/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-3 sm:mb-6 md:mb-8">
          {/* Company Logo */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          className="flex-shrink-0 w-32 h-20 sm:w-48 sm:h-32 lg:w-56 lg:h-36 mx-auto sm:mx-0"
        >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-content2/10 to-content2/5 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.05, 
                  duration: 0.6, 
                  ease: [0.25, 0.1, 0.25, 1] 
                }}
                viewport={{ once: true }}
                className="w-full h-full"
              >
                <Image
                  width={224}
                  height={144}
                  src={`/${data.image}.png`}
                  alt={data.company}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Company Info */}
          <div className="flex-1 text-center lg:text-left w-full">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2 md:mb-3 tracking-tight"
            >
              {data.role}
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-2 sm:mb-3 md:mb-4 tracking-wide"
            >
              {data.company}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4"
            >
              <span className="text-xs sm:text-sm text-muted-foreground bg-primary/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                {startDate}
              </span>
              <span className="text-muted-foreground">—</span>
              <span className="text-xs sm:text-sm text-muted-foreground bg-primary/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                {endDate}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="mb-3 sm:mb-6 md:mb-8"
        >
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg text-left font-medium">
            {data.summary}
          </p>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <h4 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-4 md:mb-6 text-left tracking-tight">
            Key Achievements
          </h4>
          <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-left">
            {data.bulletArray.map((bullet, index) => (
              <motion.li
                key={`${data.company}-bullet-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6, 
                  ease: [0.25, 0.1, 0.25, 1] 
                }}
                viewport={{ once: true }}
                className="flex items-start gap-2 sm:gap-3 md:gap-4 p-1 sm:p-2 md:p-3 rounded-xl hover:bg-content2/20 dark:hover:bg-content2/10 transition-all duration-200 text-left"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-foreground rounded-full mt-2 sm:mt-2.5 hover:scale-110 transition-transform duration-200"></div>
                <span className="text-xs sm:text-sm md:text-base text-foreground leading-relaxed hover:text-foreground dark:hover:text-foreground/80 transition-colors duration-200 text-left">{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
