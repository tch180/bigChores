import { createContext, useContext } from "react";
import { useAlertReducer } from "./alertReducer";
import { initialState } from "./AlertState";

const AlertStateContext = createContext();
const AlertDispatchContext = createContext();

const AlertProvider = (props) => {
  const [state, dispatch] = useAlertReducer(initialState);
  return (
    <AlertStateContext.Provider value={state}>
      <AlertDispatchContext.Provider value={dispatch}>
        {props.children}
      </AlertDispatchContext.Provider>
    </AlertStateContext.Provider>
  );
};

export default AlertProvider;
export const useAlertState = () => useContext(AlertStateContext);
export const useAlertDispatch = () => useContext(AlertDispatchContext);
