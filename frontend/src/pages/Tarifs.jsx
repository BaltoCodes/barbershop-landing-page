import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Scissors, Clock, Euro, Star } from 'lucide-react'
import axios from 'axios'

const Tarifs = () => {
  const [tarifs, setTarifs] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTarifs = async () => {
      try {
        const response = await axios.get('/api/tarifs')
        setTarifs(response.data)
        setLoading(false)
      } catch (err) {
        setError('Erreur lors du chargement des tarifs')
        setLoading(false)
      }
    }

    fetchTarifs()
  }, [])

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-barber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des tarifs...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-primary"
          >
            Réessayer
          </button>
        </div>
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      <section className="bg-gradient-to-br from-dark-950 to-dark-900 text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <Scissors className="w-16 h-16 text-barber-400" />
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">
              Nos Tarifs
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez nos tarifs transparents pour tous nos services de coiffure et soins
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {/* Coupes */}
            <motion.div variants={itemVariants}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-dark-900 mb-4">
                  Coupes & Coiffures
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Nos coupes traditionnelles et modernes réalisées par des professionnels expérimentés
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tarifs?.coupes?.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ y: -5 }}
                    className="card p-6 border-l-4 border-barber-600"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-dark-900">
                        {service.nom}
                      </h3>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-barber-600">
                          {service.prix}€
                        </p>
                        <p className="text-sm text-gray-500 flex items-center justify-end mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duree}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soins */}
            <motion.div variants={itemVariants}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-dark-900 mb-4">
                  Soins & Entretien
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Prenez soin de votre barbe et de votre peau avec nos soins professionnels
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tarifs?.soins?.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ y: -5 }}
                    className="card p-6 border-l-4 border-barber-600"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-dark-900">
                        {service.nom}
                      </h3>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-barber-600">
                          {service.prix}€
                        </p>
                        <p className="text-sm text-gray-500 flex items-center justify-end mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duree}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Packages */}
            <motion.div variants={itemVariants}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-dark-900 mb-4">
                  Packages & Forfaits
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Profitez de nos formules complètes à prix avantageux
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {tarifs?.packages?.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ y: -5 }}
                    className="card p-8 border-2 border-barber-600 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 bg-barber-600 text-white px-4 py-2 text-sm font-semibold">
                      Économie {service.economie}€
                    </div>
                    
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-semibold text-dark-900">
                        {service.nom}
                      </h3>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-barber-600">
                          {service.prix}€
                        </p>
                        <p className="text-sm text-gray-500 flex items-center justify-end mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duree}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-barber-600">
                      <Star className="w-5 h-5 mr-2" />
                      <span className="text-sm font-semibold">Formule recommandée</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold text-dark-900 mb-6">
              Prêt à Prendre Rendez-vous ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Réservez votre créneau en ligne et bénéficiez de nos tarifs transparents
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
              onClick={() => window.open('https://www.treatwell.fr/salon/ah-dj-coiffeur-barbier/?utm_source=google&utm_medium=rwg&hl=fr-FR&gei=GYWOaNfXIt2jkdUPi8yx2QU', '_blank')}
            >
              Réserver Maintenant
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Tarifs 