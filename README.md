# Heat Exchanger Calculator

A web application for performing detailed **thermal**, **structural**, and **hydromechanical** calculations of a plate heat exchanger.  
Ideal for engineering applications, heat transfer analysis, and educational purposes.

---

## 🧠 Key Features

- 🔥 **Thermal calculations**:  
  Includes temperature differences, Prandtl, Reynolds, Nusselt numbers, heat transfer coefficients, and total heat transfer.

- 🧱 **Structural calculations**:  
  Calculates effective area, flow rates, cross-sectional areas, number of channels, and geometric characteristics of the plate pack.

- 💧 **Hydromechanical calculations** (new):  
  Computes flow velocities and hydraulic resistances based on actual medium properties and geometry.

- 📊 **Clean UI with grouped sections**:  
  Inputs, constants, and result tables are well organized by category.

- 🔁 **Reusability**:  
  Universal formula logic separated from formatting, allowing accurate scientific outputs and unit-safe calculations.

- 🌡️ **Built-in constants**:  
  Includes plate properties, thermal characteristics of water, and preset assumptions.

- ✅ Rounds all final results to 3 significant decimal digits (when necessary).

---

## 🛠 Getting Started

## 📦 1. Install dependencies

```bash
npm install
```

---

## ▶️ 2. Run the app

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.  
The page will reload if you make edits.

---

## 🧪 3. Run tests

```bash
npm test
```

---

## 🏗️ 4. Build for production

```bash
npm run build
```

Creates an optimized production-ready build in the `build` directory.

---

## 🗂 Project Structure (simplified)

```
src/
├── components/              // UI components: InputSection, DisplaySection, CalculationTable
├── constants/               // Built-in values for fluids, plates, assumptions
│   ├── init/                // Initial input and default data
│   └── result/              // Parameter definitions for display
├── hooks/                   // useCombinedCalculations() logic hook
├── types/                   // Type definitions
├── utils/                   // All calculation logic (thermal, structural, hydromechanical)
└── App.tsx / Calculator.tsx
```

---

## 📚 Documentation

- React: [https://reactjs.org/](https://reactjs.org/)  
- Create React App: [https://create-react-app.dev/docs/getting-started/](https://create-react-app.dev/docs/getting-started/)

---

## 📜 License

This project is open for educational, research, and engineering use.  
Feel free to modify or expand the logic and UI as needed.

