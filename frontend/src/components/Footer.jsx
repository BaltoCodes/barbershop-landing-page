import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Scissors } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="w-8 h-8 text-barber-400" />
              <div>
                <h3 className="text-xl font-serif font-bold">AH&DJ Barbershop</h3>
                <p className="text-sm text-gray-400">Salon de coiffure traditionnel</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Découvrez l'art de la coiffure masculine dans un cadre authentique. 
              Notre équipe de professionnels vous accueille pour des coupes modernes 
              et des soins traditionnels.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => window.open('https://www.treatwell.fr/salon/ah-dj-coiffeur-barbier/?utm_source=google&utm_medium=rwg&hl=fr-FR&gei=GYWOaNfXIt2jkdUPi8yx2QU', '_blank')}
            >
              Prendre Rendez-vous
            </motion.button>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-barber-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">
                  121 Rue de Charenton<br />
                  75012 Paris, France
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-barber-400 flex-shrink-0" />
                <a 
                  href="tel:0698352782" 
                  className="text-gray-300 hover:text-barber-400 transition-colors"
                >
                  06 98 35 27 82
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-barber-400 flex-shrink-0" />
                <a 
                  href="mailto:contact@ahdj-barbershop.fr" 
                  className="text-gray-300 hover:text-barber-400 transition-colors"
                >
                  contact@ahdj-barbershop.fr
                </a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horaires</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-barber-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p><span className="font-medium">7j/7:</span> 09:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} AH&DJ Barbershop. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/tarifs" className="text-gray-400 hover:text-barber-400 transition-colors text-sm">
                Tarifs
              </a>
              <a href="/contact" className="text-gray-400 hover:text-barber-400 transition-colors text-sm">
                Contact
              </a>
              <a 
                href="https://www.planity.com/ahdj-barbershop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-barber-400 transition-colors text-sm"
              >
                Réservation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 