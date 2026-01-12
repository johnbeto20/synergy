import { useState, useEffect } from 'react'
import { CheckCircle2, Circle, Flame, Target, TrendingUp } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
import { ProgressIllustration } from './Illustrations'

const Dashboard = ({ userData }) => {
  const [dailyProgress, setDailyProgress] = useState({
    caloriesConsumed: 1200,
    caloriesTarget: 2500,
    exercisesCompleted: 2,
    exercisesTotal: 4,
    mealsCompleted: 2,
    mealsTotal: 4,
  })

  // Calcular progreso hacia la meta
  const calculateGoalProgress = () => {
    // Simulación: 30% de progreso hacia la meta
    return 30
  }

  const goalProgress = calculateGoalProgress()
  const caloriesRemaining = dailyProgress.caloriesTarget - dailyProgress.caloriesConsumed

  // Datos para el gráfico de anillo
  const progressData = [
    { name: 'Completado', value: goalProgress },
    { name: 'Restante', value: 100 - goalProgress },
  ]

  const COLORS = ['#FF5733', '#E5E7EB']

  // Datos para el gráfico de barras semanal
  const weeklyData = [
    { day: 'Lun', calories: 2400, exercises: 4 },
    { day: 'Mar', calories: 2600, exercises: 5 },
    { day: 'Mié', calories: 2300, exercises: 3 },
    { day: 'Jue', calories: 2500, exercises: 4 },
    { day: 'Vie', calories: 2200, exercises: 3 },
    { day: 'Sáb', calories: 2400, exercises: 4 },
    { day: 'Dom', calories: dailyProgress.caloriesConsumed, exercises: dailyProgress.exercisesCompleted },
  ]

  const todayExercises = [
    { name: 'Press de Banca', completed: true },
    { name: 'Sentadillas', completed: true },
    { name: 'Remo con Barra', completed: false },
    { name: 'Press Militar', completed: false },
  ]

  const todayMeals = [
    { name: 'Desayuno', completed: true },
    { name: 'Almuerzo', completed: true },
    { name: 'Cena', completed: false },
    { name: 'Snack', completed: false },
  ]

  return (
    <div className="px-4 pt-4 pb-6 space-y-6 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="mb-4">
          <ProgressIllustration className="w-full h-40" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Mi Progreso
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {userData?.goalType || 'Objetivo Personalizado'}
        </p>
      </div>

      {/* Visualización de Meta Principal */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Progreso del Objetivo
          </h2>
          <span className="text-2xl font-bold text-primary">{goalProgress}%</span>
        </div>
        <div className="flex items-center justify-center mb-4">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={progressData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
              >
                {progressData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {userData?.goalValue || 'Meta personalizada'} - {goalProgress}% completado
          </p>
        </div>
      </div>

      {/* Calorías Restantes - Destacado */}
      <div className="card bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Calorías Restantes
              </h3>
            </div>
            <p className="text-4xl font-bold text-primary mb-1">
              {caloriesRemaining}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              de {dailyProgress.caloriesTarget} kcal objetivo
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400">Consumidas</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {dailyProgress.caloriesConsumed}
            </p>
          </div>
        </div>
      </div>

      {/* Resumen Diario */}
      <div className="grid grid-cols-2 gap-4">
        {/* Ejercicio de Hoy */}
        <div className="card">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-secondary" />
            Ejercicio
          </h3>
          <div className="space-y-2 mb-3">
            {todayExercises.map((exercise, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                {exercise.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : (
                  <Circle className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                )}
                <span className={exercise.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}>
                  {exercise.name}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-secondary to-secondary-dark transition-all duration-500"
              style={{ width: `${(dailyProgress.exercisesCompleted / dailyProgress.exercisesTotal) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">
            {dailyProgress.exercisesCompleted}/{dailyProgress.exercisesTotal} completados
          </p>
        </div>

        {/* Comidas de Hoy */}
        <div className="card">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Comidas
          </h3>
          <div className="space-y-2 mb-3">
            {todayMeals.map((meal, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                {meal.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : (
                  <Circle className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                )}
                <span className={meal.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}>
                  {meal.name}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary-dark transition-all duration-500"
              style={{ width: `${(dailyProgress.mealsCompleted / dailyProgress.mealsTotal) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">
            {dailyProgress.mealsCompleted}/{dailyProgress.mealsTotal} completadas
          </p>
        </div>
      </div>

      {/* Gráfico Semanal */}
      <div className="card">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Progreso Semanal
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={weeklyData}>
            <XAxis dataKey="day" tick={{ fill: '#6B7280' }} />
            <YAxis tick={{ fill: '#6B7280' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="calories" fill="#FF5733" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard
