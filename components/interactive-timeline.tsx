"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const timelineData = [
  {
    id: 1,
    year: "2026",
    title: "Data Engineer",
    company: "Laboratoires MédiS",
    location: "Nabeul, Tunisia",
    description:
      "Automated maintenance data collection from the GMAO/CMMS system, replacing manual Excel exports. Designed dbt transformations and Power BI dashboards surfacing equipment KPIs (MTTR, MTBF) to the operations team.",
    technologies: ["Python", "dbt", "Power BI", "PostgreSQL", "DAX"],
    achievements: ["Automated GMAO data ingestion", "Built reliability KPI warehouse", "Power BI dashboard for ops team"],
  },
  {
    id: 2,
    year: "2025",
    title: "AI Engineer – End-of-Studies Internship",
    company: "Sofrecom Tunisia",
    location: "Tunis, Tunisia",
    description:
      "Designed an ETL pipeline and fine-tuned StarCoder2 7B for automatic Gherkin code generation from user stories. Deployed on AWS SageMaker with API Gateway and integrated into a full-stack microservices app.",
    technologies: ["PyTorch", "PEFT (LoRA)", "AWS SageMaker", "Mistral", "GitLab CI", "Docker"],
    achievements: ["ROUGE-1: 0.80 / ROUGE-2: 0.73", "1,719 labeled examples for SFT", "Deployed model via API Gateway"],
  },
  {
    id: 3,
    year: "2024",
    title: "BI Engineer – Internship",
    company: "Aziza",
    location: "Ben Arous, Tunisia",
    description:
      "Performed EDA across 30+ Excel files, then designed and implemented a Data Warehouse using SSIS with SCD management. Developed 4 QlikView dashboards tracking 10+ KPIs.",
    technologies: ["SSIS", "QlikView", "Python", "SQL"],
    achievements: ["Data Warehouse with SCD management", "4 QlikView dashboards", "10+ KPIs tracked"],
  },
  {
    id: 4,
    year: "2022–2025",
    title: "Engineering Degree – Business Intelligence",
    company: "ESPRIT",
    location: "Ariana, Tunisia",
    description: "Computer Science Engineering with specialization in Business Intelligence.",
    technologies: ["Python", "Java", "SQL", "ML", "BI"],
    achievements: ["BI specialization", "End-to-studies project: LLM fine-tuning at Sofrecom"],
  },
]

export default function InteractiveTimeline() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" />

      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            {/* Content Card */}
            <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                className="cursor-pointer"
              >
                <Card className="glass-morphism border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      <span className="text-cyan-400 font-semibold">{item.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>

                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="h-4 w-4 text-purple-400" />
                      <span className="text-white/80">{item.company}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-4 w-4 text-green-400" />
                      <span className="text-white/60">{item.location}</span>
                    </div>

                    <p className="text-white/70 mb-4">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/10 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Timeline Node */}
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-black shadow-lg"
              />
            </div>

            {/* Spacer */}
            <div className="w-5/12" />
          </motion.div>
        ))}
      </div>

      {/* Expanded Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-morphism rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              {(() => {
                const item = timelineData.find((i) => i.id === selectedItem)
                if (!item) return null

                return (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/80 mb-6">{item.description}</p>

                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2 mb-6">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-white/70 flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/10 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
