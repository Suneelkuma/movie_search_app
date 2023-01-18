import React, { useContext, useEffect, useState } from "react";

const Appcontext = React.createContext();

const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query,setQuery]=useState("titanic");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data =await  res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
 const timeid=   setTimeout(()=>{
      getMovies(`${API_URL}&s=${query}`);
    },2000)
  return ()=>clearTimeout(timeid);
  }, [query]);

  return (
    <Appcontext.Provider value={{ isError, isLoading, movie,query,setQuery }}>
      {children}
    </Appcontext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(Appcontext);
};

export { Appcontext, AppProvider, useGlobalContext };
