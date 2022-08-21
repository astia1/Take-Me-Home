import { createContext } from "react";

//mimicing a useState hook
const ThemeContext = createContext(["#0b8bb4", () => {}]);

export default ThemeContext;
