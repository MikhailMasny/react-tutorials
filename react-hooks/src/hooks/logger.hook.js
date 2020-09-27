import { useEffect } from "react";

export function useLogger(value) {
  useEffect(() => {
    console.log("Value changed:", value);
  }, [value]);
}
