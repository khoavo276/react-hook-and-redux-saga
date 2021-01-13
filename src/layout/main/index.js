import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

const Main = ({ children }) => {
  return (
    <>
      <body id="page-top">
        <div id="wrapper">
          <SideBar />
          <div class="d-flex flex-column content-wrapper">
            <Header />
            <div className="l-pageContent">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
};

export default Main;
