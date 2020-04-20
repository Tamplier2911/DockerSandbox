import React from "react";
import "./App.css";

// components
import Header from "./Components/Header/Header";
import PageContent from "./Components/PageContent/PageContent";

import { Container } from "@material-ui/core";

import { AppContainer } from "./AppStyles";

function App() {
  return (
    <AppContainer>
      <Header />
      {/* <div>Test</div> */}
      <Container maxWidth="lg">
        <PageContent />
      </Container>
    </AppContainer>
  );
}

export default App;
