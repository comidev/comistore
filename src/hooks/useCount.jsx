import { useState } from "react";

export default function useAmount(initAmount = 0) {
    const [amount, setAmount] = useState(initAmount);
    const increment = () => setAmount((prev) => prev + 1);
    const decrement = () => amount > 0 && setAmount((prev) => prev - 1);
    const reset = (newAmount = 0) => setAmount(newAmount);
    return { amount, increment, decrement, reset };
}
