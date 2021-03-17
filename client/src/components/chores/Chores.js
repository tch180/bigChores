/* eslint-disable no-unused-vars */
import React, {
  useEffect,
  Fragment,
  useContext,
  useState,
  useCallback,
} from "react";
import axios from "axios";


import AuthContext from "../../context/Auth/authContext";
import ChoresItem from "./ChoresItem";
import { useParams } from "react-router";

const Chores = () => {
  const authContext = useContext(AuthContext);
  const [chores, setChores] = useState([]);
  const params = useParams();

  useEffect(() => {
    authContext.loadUser();
    //getChores();
    //  console.log("get chores")
    //eslint-disable-next-line
  }, [params, authContext]);

  const getNewChores = useCallback(async () => {
    const { data } = await axios.get(`/api/chore/${params.id}`);
    setChores(data);
  }, [params.id]);

  useEffect(() => {
    if (params.id) {
      getNewChores();
    }
  }, [params, getNewChores]);

  return (
    <div>
      <h1>Chores</h1>
      <div>
        {chores.map((chore, index) => (
          <div key={index}>
            <ChoresItem chore={chore} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Chores;
