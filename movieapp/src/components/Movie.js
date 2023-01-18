import React from "react";
import {Link} from 'react-router-dom'
import { useGlobalContext } from "./context";

const Movie = () => {
  const { movie } = useGlobalContext();
  return (
    <>
    <section className=" container movie-page">
        <div className="grid grid-4-col">
            {
                movie.map((currMovie)=>{
                    const {imdbID,Title,Poster}=currMovie;

                    const movieName=Title.substring(0,15)
                    return <Link to={`movie/${imdbID}`}>
                        <div className="card">
                            <div className="card-info">
                                <h2>{movieName.length>=15?`${movieName}...`:movieName}</h2>
                                <img src={Poster} alt="no" />
                                <p>{imdbID}</p>
                            </div>

                        </div>
                    </Link>
                })
            }
        </div>
    </section>
      
    </>
  );
};

export default Movie;
