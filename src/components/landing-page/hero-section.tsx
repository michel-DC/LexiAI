"use client";

import { motion } from "framer-motion";
import { CircleChevronRight, Sparkles, Zap } from "lucide-react";
import SideCursors from "@/components/landing-page/animations/cursor";
import Button from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white-500 mt-4 sm:mt-8 px-2 sm:px-0">
      <SideCursors />

      {/* Section principale responsive */}
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 mt-6 sm:mt-10 lg:mt-16 pt-6 sm:pt-10 lg:pt-16 pb-6 sm:pb-10 text-center">
        {/* Floating Badge - IA Avancée */}
        <motion.div
          className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 bg-gradient-to-r from-[#3337af] to-[#333fea] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg hidden sm:flex items-center space-x-1 sm:space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>IA Avancée</span>
        </motion.div>

        {/* Floating Badge - Rapide */}
        <motion.div
          className="absolute top-16 right-4 sm:top-20 sm:right-6 lg:top-32 lg:right-8 bg-gradient-to-r from-[#333fea] to-[#3337af] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg hidden sm:flex items-center space-x-1 sm:space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Ultra Rapide</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 relative px-2 sm:px-0 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#1a1a2e] via-[#3337af] to-[#333fea] bg-clip-text text-transparent relative">
            Écrivez, créez
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 bg-clip-text text-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                delay: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            />
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#3337af] to-[#333fea] bg-clip-text text-transparent relative">
            Avec l'IA
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 bg-clip-text text-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                delay: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            />
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#333fea] to-[#1a1a2e] bg-clip-text text-transparent relative">
            Brillamment.
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 bg-clip-text text-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                delay: 2.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          LexiAI révolutionne votre façon d'écrire. Générez du contenu de
          qualité professionnelle, optimisé et adapté à votre ton en quelques
          secondes grâce à notre IA de pointe.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button href="/">
            <span>Commencer Gratuitement</span>
            <CircleChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </motion.div>

        {/* Indicateurs de confiance */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-500 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="flex space-x-0">
              <img
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tbWV8ZW58MHx8MHx8fDA%3D"
                alt="Homme Unsplash"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=64&h=64&facepad=2"
                alt="Utilisateur 2"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tbWV8ZW58MHx8MHx8fDA%3D"
                alt="Utilisateur 3"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=64&h=64&facepad=2"
                alt="Utilisateur 4"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=64&h=64&facepad=2"
                alt="Utilisateur 2"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tbWV8ZW58MHx8MHx8fDA%3D"
                alt="Utilisateur 3"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=64&h=64&facepad=2"
                alt="Utilisateur 4"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-center sm:text-left">
              Rejoint par plus de <b>50&nbsp;000</b> créateurs de contenu
            </span>
          </div>
        </motion.div>
      </div>

      {/* Aperçu interface produit */}
      <motion.div
        className="relative max-w-8xl mx-auto px-2 sm:px-8 md:px-16 lg:px-24 mt-10 sm:mt-16 lg:mt-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-violet-100 to-transparent rounded-t-2xl"></div>
          <div className="bg-white rounded-t-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-200">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 sm:p-6 min-h-[420px] sm:min-h-[520px] lg:min-h-[650px] flex items-center justify-center">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#3337af] to-[#333fea] rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                  Interface LexiAI
                </h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-md mx-auto">
                  Une interface intuitive et moderne pour créer du contenu
                  exceptionnel avec l'aide de l'intelligence artificielle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
