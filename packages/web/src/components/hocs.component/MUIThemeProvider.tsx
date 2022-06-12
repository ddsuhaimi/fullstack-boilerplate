import { PaletteMode } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { getStoredTheme, getThemeOptions, setStoredTheme } from "../../utils/theme";

type Props = {
  children: React.ReactNode;
};

export const ColorModeContext = createContext({ toggleColorMode: () => {}, mode: "" });

const MUIThemeProvider = (props: Props) => {
  const [mode, setMode] = useState<PaletteMode>("light"); // default is light mode

  useEffect(() => {
    const storedTheme = getStoredTheme();

    if (storedTheme) {
      setMode(storedTheme);
    }
  }, []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode: PaletteMode = mode === "dark" ? "light" : "dark";
        setMode(newMode);
        setStoredTheme(newMode);
      },
      mode: mode,
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

  // const customTheme = useTheme(); // for use in other components - could potentially use theme
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default MUIThemeProvider;
