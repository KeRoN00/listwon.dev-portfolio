import {useCallback,useState,useMemo, useEffect} from 'react'
import { createTheme } from "@mui/material/styles";

export const useTheme = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');
    const toggleColorMode = useCallback(() => {
      setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
    }, []);
  
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode]
    );
    useEffect(() => {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(mode);
        console.log(mode);
      }, [mode]);
    return { mode, toggleColorMode, theme };
}
