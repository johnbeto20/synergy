import { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import Logo from './Logo'
import { FitnessIllustration } from './Illustrations'

const Onboarding = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    currentWeight: '',
    bodyFat: '',
    fitnessLevel: '',
    goalType: '',
    goalValue: '',
    goalDescription: '',
    dietRestrictions: [],
    freeDays: '',
    gymAccess: '',
  })

  const steps = [
    {
      title: 'Estado Actual',
      subtitle: 'Cuéntanos sobre tu situación actual',
      fields: [
        {
          name: 'currentWeight',
          label: 'Peso Actual (kg)',
          type: 'number',
          placeholder: 'Ej: 75',
        },
        {
          name: 'bodyFat',
          label: '% Grasa Corporal (opcional)',
          type: 'number',
          placeholder: 'Ej: 20',
        },
        {
          name: 'fitnessLevel',
          label: 'Nivel de Rendimiento',
          type: 'select',
          options: ['Principiante', 'Intermedio', 'Avanzado'],
        },
      ],
    },
    {
      title: 'Estado Meta',
      subtitle: '¿Cuál es tu objetivo principal?',
      fields: [
        {
          name: 'goalType',
          label: 'Tipo de Objetivo',
          type: 'select',
          options: ['Ganar Masa Muscular', 'Perder Peso', 'Mejorar Rendimiento', 'Correr Maratón', 'Otro'],
        },
        {
          name: 'goalValue',
          label: 'Valor Objetivo',
          type: 'text',
          placeholder: 'Ej: 5kg de músculo, 10kg de peso, etc.',
        },
        {
          name: 'goalDescription',
          label: 'Descripción del Objetivo',
          type: 'textarea',
          placeholder: 'Describe tu objetivo con más detalle...',
        },
      ],
    },
    {
      title: 'Restricciones y Preferencias',
      subtitle: 'Personaliza tu plan según tus necesidades',
      fields: [
        {
          name: 'dietRestrictions',
          label: 'Restricciones Dietéticas',
          type: 'multiselect',
          options: ['Vegano', 'Vegetariano', 'Sin Gluten', 'Sin Lactosa', 'Keto', 'Ninguna'],
        },
        {
          name: 'freeDays',
          label: 'Días Libres por Semana',
          type: 'select',
          options: ['1 día', '2 días', '3 días', '4 días', '5+ días'],
        },
        {
          name: 'gymAccess',
          label: 'Acceso a Gimnasio',
          type: 'select',
          options: ['Gimnasio Completo', 'Solo Pesas en Casa', 'Solo Calistenia', 'Equipamiento Limitado'],
        },
      ],
    },
  ]

  const handleInputChange = (name, value) => {
    if (name === 'dietRestrictions') {
      const current = formData.dietRestrictions || []
      if (current.includes(value)) {
        setFormData({ ...formData, [name]: current.filter(item => item !== value) })
      } else {
        setFormData({ ...formData, [name]: [...current, value] })
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete(formData)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    const currentFields = steps[currentStep].fields
    return currentFields.every(field => {
      if (field.type === 'multiselect') {
        return formData[field.name]?.length > 0
      }
      return formData[field.name] !== ''
    })
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md">
        {/* Logo y Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo size="large" showText={true} />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tu transformación física personalizada
          </p>
        </div>

        {/* Ilustración */}
        {currentStep === 0 && (
          <div className="mb-6 animate-fade-in">
            <FitnessIllustration className="w-full h-48" />
          </div>
        )}

        {/* Barra de Progreso */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              Paso {currentStep + 1} de {steps.length}
            </h2>
            <span className="text-sm font-semibold text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Contenido del Paso */}
        <div className="card mb-6 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            {steps[currentStep].title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {steps[currentStep].subtitle}
          </p>

          <div className="space-y-4">
            {steps[currentStep].fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <select
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className="input-field"
                  >
                    <option value="">Selecciona una opción</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'multiselect' ? (
                  <div className="flex flex-wrap gap-2">
                    {field.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleInputChange(field.name, option)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          formData[field.name]?.includes(option)
                            ? 'bg-primary text-white shadow-lg scale-105'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : field.type === 'textarea' ? (
                  <textarea
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    rows={4}
                    className="input-field"
                  />
                ) : (
                  <input
                    type={field.type}
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    className="input-field"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Botones de Navegación */}
        <div className="flex gap-4">
          {currentStep > 0 && (
            <button
              onClick={handlePrevious}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
              canProceed()
                ? 'btn-primary'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentStep === steps.length - 1 ? 'Generar Mi Plan SYNERGY' : 'Siguiente'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
