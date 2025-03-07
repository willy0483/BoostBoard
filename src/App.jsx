import "./App.scss";

import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { Sidebar } from "./components/sidebar";
import { Grid } from "./components/grid/grid";

// all my routes
import { AppRoutes } from "./routes/appRoutes";

function App() {
  return (
    <Grid>
      <Sidebar />
      <Main>
        <AppRoutes />
      </Main>
      <Footer />
    </Grid>
  );
}

export default App;
