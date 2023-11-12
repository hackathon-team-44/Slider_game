import appStyles from './App.module.css'
import HeaderContent from './components/header-content/header-content'
import PuzzleBoard from './components/puzzle-board/puzzle-board'
import { Route, Routes } from "react-router-dom";
import EndOfGame from "./components/EndOfGame/EndOfGame";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Rules from "./components/Rules/Rules";
import Register from "./components/Register/Register";
import NF from "./components/NF/NF";

import { Layout, Space } from 'antd';

function App() {
  const { Header, Footer, Content } = Layout;

  return (
    <>
      {/* <Header />
      <NavBar />
      <Main />
      <Rules />
      <EndOfGame />
      <Footer /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Space direction='vertical' className={appStyles.space}>
              <Layout className={appStyles.appContainer}>
                <Header className={appStyles.header}>
                  <HeaderContent />
                </Header>

                <Layout>
                  <Content className={appStyles.content}>
                    <div className={appStyles.nav}>
                      <NavBar ></NavBar>
                    </div>
                    <PuzzleBoard />
                  </Content>
                </Layout>
                <Footer className={appStyles.footer}>
                  <a href='https://sirota.ru/' target='_blank' className={appStyles.link}>
                    НАЙДИ СЕМЬЮ
                  </a>
                  <svg width="50px" height="50px" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_238_1331)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M146.371 34.5888C147.629 31.5563 148.272 28.3046 148.265 25.0218C148.267 20.0831 146.806 15.2545 144.066 11.1455C141.326 7.03648 137.431 3.83135 132.871 1.9347C128.311 0.038053 123.291 -0.465076 118.445 0.488832C113.6 1.44274 109.145 3.81092 105.644 7.29439L100.004 12.5471L94.4021 7.31163C89.7108 2.62604 83.3503 -0.00403591 76.7198 4.64873e-06C70.0894 0.00404521 63.7321 2.64187 59.0465 7.33318C54.3609 12.0245 51.7308 18.385 51.7348 25.0155C51.7389 31.6459 54.3767 38.0032 59.068 42.6888L97.5477 81.7374C97.8685 82.0631 98.2508 82.3217 98.6725 82.4983C99.0941 82.6748 99.5467 82.7658 100.004 82.7658C100.461 82.7658 100.914 82.6748 101.335 82.4983C101.757 82.3217 102.139 82.0631 102.46 81.7374L140.94 42.6888C143.268 40.3744 145.114 37.6213 146.371 34.5888ZM53.6286 165.411C52.3712 168.444 51.7276 171.695 51.7349 174.978C51.7327 179.917 53.1938 184.746 55.9336 188.855C58.6735 192.964 62.5693 196.169 67.1293 198.065C71.6892 199.962 76.7089 200.465 81.5546 199.511C86.4003 198.557 90.8547 196.189 94.3556 192.706L99.9961 187.453L105.598 192.688C110.289 197.374 116.65 200.004 123.28 200C129.911 199.996 136.268 197.358 140.954 192.667C145.639 187.976 148.269 181.615 148.265 174.985C148.261 168.354 145.623 161.997 140.932 157.311L102.452 118.263C102.132 117.937 101.749 117.678 101.327 117.502C100.906 117.325 100.453 117.234 99.9961 117.234C99.539 117.234 99.0864 117.325 98.6647 117.502C98.2431 117.678 97.8607 117.937 97.54 118.263L59.0603 157.311C56.7321 159.626 54.8859 162.379 53.6286 165.411ZM174.978 148.266C171.695 148.273 168.444 147.629 165.411 146.372C162.379 145.115 159.626 143.268 157.311 140.94L118.263 102.461C117.937 102.14 117.678 101.757 117.502 101.336C117.325 100.914 117.234 100.462 117.234 100.004C117.234 99.5473 117.325 99.0947 117.502 98.6731C117.678 98.2514 117.937 97.869 118.263 97.5483L157.311 59.0686C161.997 54.3773 168.354 51.7394 174.985 51.7354C181.615 51.7314 187.976 54.3614 192.667 59.047C197.358 63.7326 199.996 70.0899 200 76.7204C200.004 83.3509 197.374 89.7114 192.688 94.4027L187.453 100.004L192.706 105.645C196.189 109.146 198.557 113.6 199.511 118.446C200.465 123.292 199.962 128.311 198.065 132.871C196.169 137.431 192.964 141.327 188.855 144.067C184.746 146.807 179.917 148.268 174.978 148.266ZM34.5888 53.628C31.5563 52.3706 28.3046 51.727 25.0218 51.7343C20.0831 51.7321 15.2544 53.1932 11.1455 55.933C7.03647 58.6729 3.83134 62.5687 1.9347 67.1287C0.0380524 71.6887 -0.465076 76.7083 0.488831 81.554C1.44274 86.3997 3.81091 90.8542 7.29439 94.355L12.5471 99.9956L7.31163 105.597C2.62603 110.289 -0.00403599 116.649 4.64892e-06 123.28C0.00404529 129.91 2.64186 136.267 7.33317 140.953C12.0245 145.639 18.385 148.269 25.0155 148.265C31.6459 148.261 38.0032 145.623 42.6888 140.931L81.7373 102.452C82.063 102.131 82.3217 101.749 82.4982 101.327C82.6748 100.905 82.7657 100.453 82.7657 99.9955C82.7657 99.5384 82.6748 99.0858 82.4982 98.6642C82.3217 98.2425 82.063 97.8602 81.7373 97.5394L42.6888 59.0597C40.3744 56.7315 37.6213 54.8853 34.5888 53.628Z" fill="url(#paint0_linear_238_1331)" /> </g> <defs> <linearGradient id="paint0_linear_238_1331" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#B0B9FF" /> <stop offset="1" stop-color="#E7E9FF" /> </linearGradient> <clipPath id="clip0_238_1331"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
                  <a href='https://github.com/orgs/hackathon-team-44/people' target='_blank' className={appStyles.link}>
                    СДЕЛАНО С ЛЮБОВЬЮ
                  </a>
                </Footer>

              </Layout>
            </Space>
          }
        />
        <Route path="/signup" element={<Register ></Register>} />
        <Route path="/signin" element={<Register ></Register>} />
        <Route
          path="/*"
          element={
            <>
              <NF />
            </>
          }
        />
      </Routes>

    </>
  );
}

export default App;
