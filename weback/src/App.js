import React from 'react';
import MealsList from './components/MealsList';
import Counter from './components/Counter';
import './App.css';
import MealsProvider from './providers/MealsProviders';

function App() {
  return (
    <div>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default App;
