import React from "react";
// import StateExample from './components/StateExample';
// import EffectExample from './components/EffectExample';
// import RefExample from './components/RefExample';
// import MemoExample from './components/MemoExample';
// import CallbackExample from './components/CallbackExample';
import ContextAlertComponent from "./components/ContextAlertComponent";
import ContextMainComponent from "./components/ContextMainComponent";
import { AlertProvider } from './contexts/AlertContext'

function App() {
  return (
    <div>
      <AlertProvider>
        <ContextAlertComponent text={'Error'} />
        <ContextMainComponent />
      </AlertProvider>
    </div>
  );
}

export default App;
