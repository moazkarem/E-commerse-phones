import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const FocusContext = createContext();

export default function FocusProvider(Props) {
  const [isFocused, setIsFocused] = useState(null);
  const location = useLocation().pathname;
  
  // Check if current route is an auth route
  const isAuthRoute = location === "/login" || location === "/register";

  useEffect(() => {
    // Only manipulate DOM elements if we're not on an auth route
    if (!isAuthRoute) {
      const body = document.querySelector("body");
      const blocker = document.querySelector(".blocker");
      
      // First check if elements exist before accessing classList
      if (body && blocker) {
        if (isFocused !== null) {
          body.classList.add("is-focused");
          blocker.classList.remove("blocker-hidden");
        } else {
          body.classList.remove("is-focused");
          blocker.classList.add("blocker-hidden");
        }
      }
    }
  }, [isFocused, isAuthRoute]);

  return (
    <FocusContext.Provider value={{ setIsFocused, isFocused }}>
      {Props.children}
    </FocusContext.Provider>
  );
}