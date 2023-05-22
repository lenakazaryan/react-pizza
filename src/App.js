import "./App.css";
import Header from "./components/Header";
import tw from "tailwind-styled-components";
import { Outlet } from "react-router-dom";

const Container = tw.div`
  p-[20px]
  bg-primary
  w-full
  h-full
`;

const Content = tw.div`
  bg-white
`;

function App() {
  return (
    <div>
      <Container>
        <Content>
          <Header />
          <Outlet />
        </Content>
      </Container>
    </div>
  );
}

export default App;
