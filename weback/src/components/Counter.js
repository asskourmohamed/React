import { useMealsListCotext } from "../providers/MealsProviders";
const Counter = () => {
    const { meals } = useMealsListCotext();
    return (
        <div>
            <h3>Meals Count: {meals.length}</h3>
        </div>
    );
};
export default Counter;
