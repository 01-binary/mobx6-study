import { FC } from "react";
import Counter from "./components/Counter";
import SuperMarket from "./components/SuperMarket";

const App: FC = () => {
  return (
    <>
      <Counter />
      <hr />
      <SuperMarket />
    </>
  );
};

export default App;
