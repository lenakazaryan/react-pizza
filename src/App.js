import "./App.css";
import Header from "./components/header";
import Menu from "./components/menu";
import Pizza from "./components/pizza";
import tw from "tailwind-styled-components";

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
          <Menu />
          <Pizza />
        </Content>
      </Container>
    </div>
  );
}

export default App;
