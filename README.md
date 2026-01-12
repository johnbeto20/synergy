# SYNERGY - Aplicación de Fitness y Nutrición

Una aplicación móvil/web moderna y dinámica para generar rutinas de ejercicio y planes de alimentación totalmente personalizados basados en los objetivos de transformación física del usuario.

## 🎯 Características Principales

### Onboarding Personalizado
- **3 pasos interactivos** para recopilar información del usuario:
  - Estado Actual (peso, grasa corporal, nivel de rendimiento)
  - Estado Meta (objetivos medibles y específicos)
  - Restricciones y Preferencias (dieta, días libres, acceso a gimnasio)
- Barra de progreso visual
- Diseño intuitivo y motivacional

### Dashboard Principal
- **Visualización de Progreso**: Gráfico de anillo mostrando el avance hacia la meta principal
- **Calorías Restantes**: Métrica destacada para el seguimiento diario
- **Resumen Diario**: Tarjetas de ejercicios y comidas del día con barras de progreso
- **Gráfico Semanal**: Visualización del progreso de la semana

### Sección de Ejercicio
- **Vista Semanal**: Calendario horizontal con scroll para navegar entre días
- **Rutinas Detalladas**: Cada ejercicio incluye series, repeticiones, descanso y espacio para videos
- **Ajuste Inteligente**: Botón para ajustar la rutina según necesidades (tiempo disponible, lesiones, etc.)
- Diferentes tipos de entrenamiento: Tren Superior, Tren Inferior, Cardio, Descanso

### Sección de Nutrición
- **Desglose de Macronutrientes**: Gráfico de pastel con distribución de Proteínas, Carbohidratos y Grasas
- **Comidas del Día**: Desayuno, Almuerzo, Cena y Snacks con sugerencias de recetas
- **Intercambio de Comidas**: Funcionalidad para obtener alternativas que mantengan el perfil nutricional
- Información calórica y de macronutrientes para cada comida

## 🎨 Diseño

### Paleta de Colores
- **Acento Primario (Progreso/Energía)**: Naranja Vibrante (#FF5733)
- **Acento Secundario (Estabilidad/Salud)**: Azul Eléctrico (#33BFFF)
- **Fondos**: Blanco (Light Mode) / Gris Oscuro (Dark Mode)
- **Neutros**: Blanco, Negro y Gris Claro para textos y elementos de fondo

### Tipografía
- Fuente principal: **Montserrat** (sans-serif atlética y legible)
- Fuente alternativa: **Rubik**

### Características de Diseño
- ✅ Diseño móvil primero (Mobile First)
- ✅ Dark/Light Mode con toggle
- ✅ Animaciones suaves y transiciones fluidas
- ✅ Tarjetas bien definidas con sombras sutiles
- ✅ Botones CTA redondeados con efectos hover
- ✅ Navegación inferior fija para fácil acceso

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **React Router DOM** - Navegación y routing
- **Tailwind CSS** - Framework de estilos utility-first
- **Recharts** - Gráficos y visualizaciones
- **Lucide React** - Iconos modernos

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
synergy-fitness-app/
├── src/
│   ├── components/
│   │   ├── Onboarding.jsx      # Flujo de onboarding
│   │   ├── Dashboard.jsx       # Dashboard principal
│   │   ├── Exercise.jsx        # Sección de ejercicios
│   │   ├── Nutrition.jsx       # Sección de nutrición
│   │   ├── BottomNav.jsx       # Navegación inferior
│   │   └── ThemeToggle.jsx     # Toggle de tema
│   ├── App.jsx                 # Componente principal y routing
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Funcionalidades Futuras

- Integración con IA para generar planes dinámicos
- Base de datos de ejercicios con videos reales
- Sistema de seguimiento de progreso con fotos
- Integración con wearables (Apple Watch, Fitbit)
- Comunidad y compartir logros
- Notificaciones push para recordatorios

## 📱 Responsive Design

La aplicación está optimizada para dispositivos móviles con:
- Diseño touch-friendly
- Navegación por swipe
- Botones y elementos con tamaño adecuado para taps
- Scroll horizontal para calendarios semanales

## 🌙 Dark Mode

El modo oscuro se puede activar mediante el botón de toggle en la esquina superior derecha. La preferencia se guarda en localStorage para persistir entre sesiones.

## 📄 Licencia

Este proyecto es parte del reto de 21 días de IA.

---

**Desarrollado con ❤️ para ayudarte a alcanzar tus objetivos de fitness**
