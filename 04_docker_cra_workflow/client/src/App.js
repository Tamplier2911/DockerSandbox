import React from "react";
import "./App.scss";

// components
import Header from "./Components/Header/Header";
import PageContent from "./Components/PageContent/PageContent";

import { Container } from "@material-ui/core";

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <PageContent />
      </Container>
    </div>
  );
}

export default App;
