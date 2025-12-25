import React from 'react';
const MealsContext = React.createContext();
const todaysMeals = ["baked salmon", "quinoa salad", "steamed broccoli","fruit bowl"];
const MealsProvider = ({ children }) => {
    const [meals, setMealsList] = React.useState(todaysMeals);
    return (
        <MealsContext.Provider value={{ meals, setMealsList }}>
            {children}
        </MealsContext.Provider>
    );
};
export const useMealsListCotext = () => React.useContext(MealsContext);
export default MealsProvider;