import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import ShoppingCart from "./pages/shoppingCart";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <ShoppingCart />
      </Main>
      <Footer />
    </>
  );
};

export default App;
