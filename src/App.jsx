import { Provider } from "react-redux";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { COLOR, CONTAINER } from "./styles.js";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { store } from "redux/store.jsx";

const AppStyle = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: ${COLOR.TEXT.BLACK};
    background-color: ${COLOR.WHITE};
`;

const Main = styled.main`
    ${CONTAINER}
    margin: 4rem auto;
    position: relative;
`;

function App() {
    return (
        <AppStyle>
            <Provider store={store}>
                <Nav />
                <Main>
                    <Outlet />
                </Main>
            </Provider>
            <Footer />
        </AppStyle>
    );
}

export default App;
