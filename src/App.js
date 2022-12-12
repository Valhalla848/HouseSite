import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Box>
        <MainRoutes />
      </Box>
      <Footer />
    </>
  );
}

export default App;
