import { useState } from 'react'
import { UtensilsCrossed, RefreshCw, Apple, Fish, Circle, Droplet } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { NutritionIllustration } from './Illustrations'

const Nutrition = ({ userData }) => {
  const [selectedMeal, setSelectedMeal] = useState(null)

  // Datos de macronutrientes (ejemplo para ganancia de masa muscular)
  const macroData = [
    { name: 'Proteínas', value: 40, color: '#FF5733', target: 200, consumed: 150 },
    { name: 'Carbohidratos', value: 40, color: '#33BFFF', target: 300, consumed: 220 },
    { name: 'Grasas', value: 20, color: '#FFC300', target: 80, consumed: 60 },
  ]

  const dailyMeals = {
    breakfast: {
      name: 'Desayuno',
      calories: 650,
      macros: { protein: 35, carbs: 80, fats: 20 },
      suggestions: [
        {
          name: 'Avena con Proteína',
          description: 'Avena, proteína en polvo, plátano, mantequilla de maní',
          calories: 650,
        },
        {
          name: 'Huevos Revueltos con Tostadas',
          description: '4 huevos, 2 rebanadas de pan integral, aguacate',
          calories: 620,
        },
      ],
    },
    lunch: {
      name: 'Almuerzo',
      calories: 750,
      macros: { protein: 55, carbs: 90, fats: 25 },
      suggestions: [
        {
          name: 'Pechuga de Pollo con Arroz',
          description: '200g pechuga, 150g arroz integral, vegetales al vapor',
          calories: 750,
        },
        {
          name: 'Salmón con Batata',
          description: '200g salmón, 200g batata, brócoli',
          calories: 720,
        },
      ],
    },
    dinner: {
      name: 'Cena',
      calories: 600,
      macros: { protein: 45, carbs: 60, fats: 20 },
      suggestions: [
        {
          name: 'Pavo con Quinoa',
          description: '150g pavo, 100g quinoa, ensalada verde',
          calories: 600,
        },
        {
          name: 'Atún con Pasta Integral',
          description: '150g atún, 80g pasta integral, tomate cherry',
          calories: 580,
        },
      ],
    },
    snack: {
      name: 'Snack',
      calories: 300,
      macros: { protein: 20, carbs: 30, fats: 10 },
      suggestions: [
        {
          name: 'Batido de Proteína',
          description: 'Proteína en polvo, leche, frutos rojos',
          calories: 300,
        },
        {
          name: 'Yogurt Griego con Frutos Secos',
          description: '200g yogurt, 30g almendras, miel',
          calories: 320,
        },
      ],
    },
  }

  const totalCalories = Object.values(dailyMeals).reduce((sum, meal) => sum + meal.calories, 0)
  const totalMacros = Object.values(dailyMeals).reduce(
    (acc, meal) => ({
      protein: acc.protein + meal.macros.protein,
      carbs: acc.carbs + meal.macros.carbs,
      fats: acc.fats + meal.macros.fats,
    }),
    { protein: 0, carbs: 0, fats: 0 }
  )

  const handleSwapMeal = (mealType) => {
    // Aquí se implementaría la lógica de IA para sugerir alternativas
    alert(`✨ Generando alternativa para ${dailyMeals[mealType].name}...`)
  }

  const COLORS = macroData.map(m => m.color)

  return (
    <div className="px-4 pt-4 pb-6 space-y-6 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="mb-4">
          <NutritionIllustration className="w-full h-40" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
          <UtensilsCrossed className="w-8 h-8 text-primary" />
          Plan de Alimentación
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Nutrición alineada con tu objetivo
        </p>
      </div>

      {/* Desglose de Macronutrientes */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Distribución de Macronutrientes
        </h2>
        <div className="flex items-center justify-center mb-6">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={macroData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {macroData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                verticalAlign="bottom"
                height={36}
                formatter={(value) => <span className="text-gray-700 dark:text-gray-300">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {macroData.map((macro, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                {index === 0 && <Fish className="w-4 h-4" style={{ color: macro.color }} />}
                {index === 1 && <Circle className="w-4 h-4 fill-current" style={{ color: macro.color }} />}
                {index === 2 && <Droplet className="w-4 h-4" style={{ color: macro.color }} />}
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {macro.name}
                </span>
              </div>
              <p className="text-lg font-bold" style={{ color: macro.color }}>
                {macro.value}%
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {macro.consumed}g / {macro.target}g
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Total Calórico:
            </span>
            <span className="text-xl font-bold text-primary">
              {totalCalories} kcal
            </span>
          </div>
        </div>
      </div>

      {/* Comidas del Día */}
      <div className="space-y-4">
        {Object.entries(dailyMeals).map(([key, meal]) => (
          <div key={key} className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Apple className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {meal.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {meal.calories} kcal
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleSwapMeal(key)}
                className="p-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary transition-all duration-300"
                title="Intercambiar comida"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-4">
              <div className="flex gap-4 text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">
                  P: <span className="font-semibold text-gray-900 dark:text-white">{meal.macros.protein}g</span>
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  C: <span className="font-semibold text-gray-900 dark:text-white">{meal.macros.carbs}g</span>
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  G: <span className="font-semibold text-gray-900 dark:text-white">{meal.macros.fats}g</span>
                </span>
              </div>
            </div>

            <div className="space-y-2">
              {meal.suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedMeal(selectedMeal === `${key}-${index}` ? null : `${key}-${index}`)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {suggestion.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {suggestion.description}
                      </p>
                    </div>
                    <span className="ml-3 text-sm font-bold text-primary">
                      {suggestion.calories} kcal
                    </span>
                  </div>
                  {selectedMeal === `${key}-${index}` && (
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        💡 Receta detallada disponible. Toca para ver más opciones.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Resumen Diario */}
      <div className="card bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Resumen del Día
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Proteínas:</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {totalMacros.protein}g
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Carbohidratos:</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {totalMacros.carbs}g
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Grasas:</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {totalMacros.fats}g
            </span>
          </div>
          <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-900 dark:text-white">Total:</span>
              <span className="text-xl font-bold text-secondary">
                {totalCalories} kcal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nutrition
