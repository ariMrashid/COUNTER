"use client";

import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  if (count < 0) {
    setCount(0);
  }
  const Add = () => setCount(count + 1);
  const Sub = () => setCount(count - 1);
  const clear = () => setCount(0);
  const handleInputChange = (e) => setInputValue(e.target.value);
  const setInputAsCount = () => {
    const value = parseInt(inputValue, 10);
    if (!isNaN(value)) setCount(value);
  };

  return (
    <div className="text-[60px] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <input
        className="text-[30px] text-black"
        type="number"
        id="numberInput"
        placeholder="Enter a number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={setInputAsCount}>Set Count</button>
      <button onClick={Add}>+</button>
      <p>{count}</p>
      <button onClick={Sub}>-</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}
