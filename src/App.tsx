import { FC } from "react";
import { autorun } from 'mobx'
import { observer } from "mobx-react";
import store from "./store";

const App: FC = observer(() => {
  const { countStore, doubleStore } = store;


  autorun(() => {
    console.log('temp');
  })

  return (
    <>
      <div style={{ padding: "50px" }}>
        <div style={{ marginBottom: "50px" }}>
          <div>number: {countStore.num}</div>
          <button onClick={() => countStore.increase()}>plus</button>
          <button onClick={() => countStore.decrease()}>minus</button>
        </div>
      </div>

      <div>
        <h1>Computed</h1>
        <div>double number: {doubleStore.value}</div>
        <button onClick={() => doubleStore.increment()}>
          double increment
        </button>
      </div>
    </>
  );
});

export default App;
