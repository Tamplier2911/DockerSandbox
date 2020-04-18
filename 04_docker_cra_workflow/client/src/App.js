import React from "react";
import "./App.scss";

// components
import Header from "./Components/Header/Header";
import PageContent from "./Components/PageContent/PageContent";

import { Container } from "@material-ui/core";

import { AppContainer } from "./AppStyles";

function App() {
  return (
    <AppContainer>
      <Header />
      <Container maxWidth="lg">
        <PageContent />
      </Container>
    </AppContainer>
  );
}

export default App;
