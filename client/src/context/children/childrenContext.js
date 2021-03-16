import { createContext, useContext } from "react";
import { useChildrenReducer } from "./childrenReducer";
import { initialState } from "./ChildrenState";

const ChildrenStateContext = createContext();
const ChildrenDispatchContext = createContext();

const ChildrenProvider = (props) => {
  const [state, dispatch] = useChildrenReducer(initialState);
  return (
    <ChildrenStateContext.Provider value={state}>
      <ChildrenDispatchContext.Provider value={dispatch}>
        {props.children}
      </ChildrenDispatchContext.Provider>
    </ChildrenStateContext.Provider>
  );
};

export default ChildrenProvider;
export const useChildrenState = () => useContext(ChildrenStateContext);
export const useChildrenDispatch = () => useContext(ChildrenDispatchContext);
