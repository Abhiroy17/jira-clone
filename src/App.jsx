import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
const App = () => {
  return <ThemeProvider theme={theme}>
  <CssBaseline></CssBaseline>
  <div>App</div>
  </ThemeProvider>
};

export default App;
