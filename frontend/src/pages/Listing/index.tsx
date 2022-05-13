import { useEffect, useState } from "react";
import axios from "axios";

import { BASE_URL } from "shared/utils/requests";

import { MoviePage } from "shared/types/movie";

import Pagination from "shared/components/Pagination";
import MovieCard from "shared/components/MovieCard";


function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/?size=12&page=0`)
            .then(response => {
                const data = response.data as MoviePage
                setPageNumber(data.number);
                console.log(response.data);            
            });
    }, []);


    return (
        <>
        <p>{pageNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Listing;