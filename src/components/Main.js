import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './menu/Navigation';
import NavigationBar from './menu/NavigationBar';
import Body from './layout/Body';
import Footer from './layout/Footer';
import ThemeContext from "../contexts/ThemeContext";
import LoadingContext from "../contexts/LoadingContext";
import Loading from "./page/Loading";
import MessageToast from "./layout/MessageToast";

const Main = () => {

  const { theme } = useContext(ThemeContext);
  const { loading, setLoading } = useContext(LoadingContext);

  const [showWindow, setShowWindow] = useState("H");

  useEffect(() => {
    setLoading(false);
  });

  return (
    <Container>
      <div className={"bg-" + theme}>
        <Navigation
          setShowWindow={setShowWindow} />
        <NavigationBar />
        <Container >
          {loading
            ? <Loading />
            : <Body showWindow={showWindow} />}
        </Container>
        <Footer
          setShowWindow={setShowWindow} />
      </div>
      <MessageToast />
    </Container>
  );
};

export default Main;