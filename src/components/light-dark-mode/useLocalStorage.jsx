import { useEffect } from "react";
import { useState } from "react";

export default function useLocalStorage(key, defaultvalue) {
  const [value, setValue] = useState(localStorage.getItem(key) || String(defaultvalue));

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}
