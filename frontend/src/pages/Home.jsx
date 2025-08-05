import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Scissors, Clock, Star, ArrowRight, MapPin, Phone } from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Coupes Modernes",
      description: "Coupes tendance et classiques réalisées par nos experts",
      price: "À partir de 15€"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Soins de la Barbe",
      description: "Entretien et soins professionnels de votre barbe",
      price: "À partir de 15€"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Rasage Traditionnel",
      description: "Rasage au coupe-chou avec serviette chaude",
      price: "À partir de 20€"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        
        <div className="container-custom relative z-10 text-center text-white flex items-center justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto flex flex-col items-center justify-center"
          >
            {/* <div className="flex justify-center mb-6">
              <div className="relative">
                <Scissors className="w-16 h-16 text-barber-400" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-barber-500 rounded-full"></div>
              </div>
            </div>*/}
            <img src='/logo-barber-removebg-preview.png' className='w-[300px] items-center' ></img>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              AH&DJ
              <span className="block text-3xl md:text-4xl text-barber-400 mt-2">
                Barbershop
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              L'art de la coiffure masculine dans un cadre authentique. 
              Découvrez l'excellence du savoir-faire français.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.open('https://www.treatwell.fr/salon/ah-dj-coiffeur-barbier/?utm_source=google&utm_medium=rwg&hl=fr-FR&gei=GYWOaNfXIt2jkdUPi8yx2QU', '_blank')}
              >
                Prendre Rendez-vous
              </motion.button>
              
              <Link to="/tarifs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-dark-950"
                >
                  Voir nos Tarifs
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-serif font-bold text-dark-900 mb-4">
              Nos Services
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme de services professionnels pour prendre soin de votre style
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8 text-center group"
              >
                <div className="w-16 h-16 bg-barber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-barber-200 transition-colors">
                  <div className="text-barber-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <p className="text-barber-600 font-semibold">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-bold text-dark-900 mb-6">
                L'Excellence du Savoir-Faire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Chez AH&DJ Barbershop, nous perpétuons la tradition de la coiffure masculine 
                française avec un savoir-faire transmis de génération en génération. 
                Notre équipe de professionnels passionnés vous accueille dans un cadre 
                authentique et chaleureux.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-barber-600" />
                  <span className="text-gray-700">Coupes personnalisées selon votre style</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-barber-600" />
                  <span className="text-gray-700">Produits de qualité professionnelle</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-barber-600" />
                  <span className="text-gray-700">Ambiance authentique et conviviale</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-barber-600 h-80 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-barber-600 to-barber-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Scissors className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <p className="text-xl font-serif">AH&DJ Barbershop</p>
                    <p className="text-sm opacity-80">Salon de coiffure traditionnel</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-950 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">
              Prêt pour une Nouvelle Coupe ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Réservez votre créneau en quelques clics et laissez-nous prendre soin de votre style
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.open('https://www.treatwell.fr/salon/ah-dj-coiffeur-barbier/?utm_source=google&utm_medium=rwg&hl=fr-FR&gei=GYWOaNfXIt2jkdUPi8yx2QU', '_blank')}
              >
                Prendre Rendez-vous
              </motion.button>
              
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>06 98 35 27 82</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Paris 12</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 