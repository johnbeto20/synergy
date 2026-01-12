import { useState } from 'react'
import { Calendar, Clock, Dumbbell, Sparkles, Play } from 'lucide-react'
import { FitnessIllustration } from './Illustrations'

const Exercise = ({ userData }) => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay())
  const [showAdjustment, setShowAdjustment] = useState(false)

  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

  const weeklyRoutine = {
    0: { // Domingo - Descanso
      type: 'rest',
      exercises: [],
    },
    1: { // Lunes - Tren Superior
      type: 'workout',
      duration: 60,
      exercises: [
        { name: 'Press de Banca', sets: 4, reps: '8-10', rest: '90s', video: 'bench-press' },
        { name: 'Remo con Barra', sets: 4, reps: '8-10', rest: '90s', video: 'barbell-row' },
        { name: 'Press Militar', sets: 3, reps: '8-12', rest: '60s', video: 'military-press' },
        { name: 'Curl de Bíceps', sets: 3, reps: '10-12', rest: '45s', video: 'bicep-curl' },
        { name: 'Tríceps en Polea', sets: 3, reps: '12-15', rest: '45s', video: 'tricep-pushdown' },
      ],
    },
    2: { // Martes - Tren Inferior
      type: 'workout',
      duration: 60,
      exercises: [
        { name: 'Sentadillas', sets: 4, reps: '8-10', rest: '120s', video: 'squat' },
        { name: 'Peso Muerto', sets: 4, reps: '6-8', rest: '120s', video: 'deadlift' },
        { name: 'Prensa de Piernas', sets: 3, reps: '10-12', rest: '90s', video: 'leg-press' },
        { name: 'Extensiones de Cuádriceps', sets: 3, reps: '12-15', rest: '60s', video: 'leg-extension' },
        { name: 'Curl de Femoral', sets: 3, reps: '12-15', rest: '60s', video: 'leg-curl' },
      ],
    },
    3: { // Miércoles - Descanso Activo
      type: 'active-rest',
      exercises: [
        { name: 'Caminata Ligera', sets: 1, reps: '30 min', rest: '-', video: 'walking' },
        { name: 'Estiramientos', sets: 1, reps: '15 min', rest: '-', video: 'stretching' },
      ],
    },
    4: { // Jueves - Tren Superior
      type: 'workout',
      duration: 50,
      exercises: [
        { name: 'Dominadas', sets: 4, reps: '6-10', rest: '90s', video: 'pull-ups' },
        { name: 'Press Inclinado con Mancuernas', sets: 4, reps: '8-12', rest: '90s', video: 'incline-dumbbell-press' },
        { name: 'Remo con Mancuernas', sets: 3, reps: '10-12', rest: '60s', video: 'dumbbell-row' },
        { name: 'Elevaciones Laterales', sets: 3, reps: '12-15', rest: '45s', video: 'lateral-raise' },
      ],
    },
    5: { // Viernes - Tren Inferior
      type: 'workout',
      duration: 55,
      exercises: [
        { name: 'Sentadillas Frontales', sets: 4, reps: '8-10', rest: '120s', video: 'front-squat' },
        { name: 'Zancadas', sets: 3, reps: '12 por pierna', rest: '90s', video: 'lunges' },
        { name: 'Elevaciones de Gemelos', sets: 4, reps: '15-20', rest: '45s', video: 'calf-raise' },
        { name: 'Abductores', sets: 3, reps: '15-20', rest: '45s', video: 'hip-abduction' },
      ],
    },
    6: { // Sábado - Cardio
      type: 'cardio',
      duration: 45,
      exercises: [
        { name: 'Correr', sets: 1, reps: '30 min', rest: '-', video: 'running' },
        { name: 'HIIT', sets: 4, reps: '20/40s', rest: '60s', video: 'hiit' },
      ],
    },
  }

  const currentDayRoutine = weeklyRoutine[selectedDay]

  const handleAdjustRoutine = () => {
    setShowAdjustment(true)
    // Aquí se implementaría la lógica de IA para ajustar la rutina
    setTimeout(() => setShowAdjustment(false), 3000)
  }

  return (
    <div className="px-4 pt-4 pb-6 space-y-6 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="mb-4">
          <FitnessIllustration className="w-full h-40" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
          <Dumbbell className="w-8 h-8 text-primary" />
          Rutinas de Ejercicio
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Plan personalizado para alcanzar tu meta
        </p>
      </div>

      {/* Vista Semanal - Scroll Horizontal */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-secondary" />
            Semana Actual
          </h2>
          <button
            onClick={handleAdjustRoutine}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-sm font-semibold transition-all duration-300"
          >
            <Sparkles className="w-4 h-4" />
            Ajustar Rutina
          </button>
        </div>

        {showAdjustment && (
          <div className="mb-4 p-4 bg-secondary/10 border border-secondary/20 rounded-xl animate-fade-in">
            <p className="text-sm text-secondary font-medium">
              ✨ Ajustando tu rutina con IA...
            </p>
          </div>
        )}

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {daysOfWeek.map((day, index) => {
            const routine = weeklyRoutine[index]
            const isSelected = selectedDay === index
            const isToday = new Date().getDay() === index

            return (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`flex flex-col items-center justify-center min-w-[70px] p-3 rounded-xl transition-all duration-300 ${
                  isSelected
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                } ${isToday && !isSelected ? 'ring-2 ring-primary' : ''}`}
              >
                <span className="text-xs font-medium mb-1">{day}</span>
                <span className="text-xs">
                  {routine.type === 'rest' ? 'Descanso' : routine.type === 'cardio' ? 'Cardio' : 'Ejercicio'}
                </span>
                {isToday && (
                  <span className="text-xs mt-1 font-bold">HOY</span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Detalle de la Rutina del Día Seleccionado */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {dayNames[selectedDay]}
            </h2>
            {currentDayRoutine.duration && (
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                <Clock className="w-4 h-4" />
                <span>{currentDayRoutine.duration} minutos</span>
              </div>
            )}
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            currentDayRoutine.type === 'rest'
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              : currentDayRoutine.type === 'cardio'
              ? 'bg-secondary/20 text-secondary'
              : 'bg-primary/20 text-primary'
          }`}>
            {currentDayRoutine.type === 'rest' ? 'Descanso' : currentDayRoutine.type === 'cardio' ? 'Cardio' : 'Entrenamiento'}
          </span>
        </div>

        {currentDayRoutine.type === 'rest' ? (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              🧘 Día de Descanso
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Tu cuerpo necesita recuperarse. Descansa bien para mejores resultados.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {currentDayRoutine.exercises.map((exercise, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {exercise.name}
                    </h3>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Series:</span>
                        <span className="ml-1 font-semibold text-gray-900 dark:text-white">
                          {exercise.sets}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Reps:</span>
                        <span className="ml-1 font-semibold text-gray-900 dark:text-white">
                          {exercise.reps}
                        </span>
                      </div>
                      {exercise.rest !== '-' && (
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Descanso:</span>
                          <span className="ml-1 font-semibold text-gray-900 dark:text-white">
                            {exercise.rest}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button className="ml-4 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300">
                    <Play className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                  <div className="w-full h-32 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      📹 Video demostrativo: {exercise.video}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Exercise
