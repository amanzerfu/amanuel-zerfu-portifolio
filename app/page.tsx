"use client";

import { Mail, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/80 to-background">
      <main className="container max-w-6xl mx-auto px-6 py-20">

        {/* =========================== */}
        {/* HERO SECTION */}
        {/* =========================== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-32"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-center">
            
            {/* Profile Image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={profileImage}
              alt="Amanuel Zerfu"
              className="
                w-40 h-40 md:w-52 md:h-52 rounded-full 
                shadow-2xl border border-white/20
                object-cover bg-white/10 backdrop-blur-md
              "
            />

            {/* Right side text */}
            <div className="flex-1 text-center md:text-left max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Amanuel Zerfu
              </h1>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                <Badge className="bg-primary/15 text-primary">Senior Android Developer</Badge>
                <Badge className="bg-primary/15 text-primary">Backend Engineer</Badge>
                <Badge className="bg-primary/15 text-primary">Super App Specialist</Badge>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Senior Android & Backend Engineer with 6+ years of experience  
                building <span className="font-semibold text-foreground">high-scale mobile ecosystems</span>,  
                including the **Safaricom Ethiopia Super App**, serving millions of users.  
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button size="lg" className="gap-2 px-6 py-5 text-lg">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 px-6 py-5 text-lg backdrop-blur-md border-white/20 bg-white/5 hover:bg-white/10"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Projects
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* =========================== */}
        {/* EXPERIENCE SECTION */}
        {/* =========================== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="w-2 h-10 bg-primary rounded-full" />
            Professional Experience
          </h2>

          <div className="space-y-10">
            
            {/* Safaricom Card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">Super App Developer</h3>
                  <p className="text-primary">Safaricom Ethiopia</p>
                </div>
                <Badge variant="secondary">Current</Badge>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Kotlin</Badge>
                <Badge>Jetpack Compose</Badge>
                <Badge>Microservices</Badge>
                <Badge>Flow</Badge>
                <Badge>MVVM</Badge>
              </div>

              <ul className="space-y-3 text-muted-foreground text-lg">
                <li>▸ Architected modules for a multi-service Super App serving millions</li>
                <li>▸ Built high-performance Android features with Compose & MVVM</li>
                <li>▸ Integrated secure backend microservices</li>
                <li>▸ Improved app stability & crash-free rate</li>
              </ul>
            </motion.div>

            {/* Unicash Card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">Backend Developer</h3>
                  <p className="text-primary">Unicash Enterprise</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Spring Boot</Badge>
                <Badge>RabbitMQ</Badge>
                <Badge>MySQL</Badge>
                <Badge>REST APIs</Badge>
              </div>

              <ul className="space-y-3 text-muted-foreground text-lg">
                <li>▸ Designed enterprise-grade payment APIs</li>
                <li>▸ Integrated Unicash gateway & optimized DB queries</li>
                <li>▸ Built scalable notification microservice</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* =========================== */}
        {/* SKILLS SECTION */}
        {/* =========================== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="w-2 h-10 bg-primary rounded-full" />
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Android Development",
                color: "primary",
                skills: [
                  "Kotlin",
                  "Jetpack Compose",
                  "Coroutines",
                  "Flow",
                  "MVVM",
                  "Hilt",
                  "Retrofit",
                  "Room",
                ],
              },
              {
                title: "Backend & APIs",
                color: "accent",
                skills: [
                  "Spring Boot",
                  "Java EE",
                  "REST APIs",
                  "Microservices",
                  "OAuth/JWT",
                  "RabbitMQ",
                ],
              },
              {
                title: "Databases",
                color: "primary",
                skills: [
                  "PostgreSQL",
                  "SQL",
                  "SQlite",
                  "Room",
                  "MongoDB",
                  "MySQL",
                  "Oracle",
                  "Redis",
                ],
              },
              {
                title: "DevOps & Tools",
                color: "accent",
                skills: [
                  "Docker",
                  "Kubernetes",
                  "Jenkins",
                  "CI/CD",
                  "Git",
                  "Gradle",
                ],
              },
            ].map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-6">{cat.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((s) => (
                    <Badge key={s} variant="secondary" className="px-3 py-1">
                      {s}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* =========================== */}
        {/* CONTACT SECTION */}
        {/* =========================== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 bg-gradient-to-br from-primary/20 to-primary/30 backdrop-blur-xl border-white/10 rounded-3xl text-primary-foreground shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl mb-8 opacity-90">
              Available for freelance projects and senior-level opportunities.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                <a href="mailto:acceptedamanuel@gmail.com" className="text-lg underline">
                  acceptedamanuel@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                <span className="text-lg">Addis Ababa, Ethiopia</span>
              </div>
            </div>

            <Button
              size="lg"
              className="text-lg px-8 py-6 backdrop-blur-md bg-white/20 hover:bg-white/30"
            >
              Send Email
            </Button>
          </Card>
        </motion.section>

      </main>
    </div>
  );
}
