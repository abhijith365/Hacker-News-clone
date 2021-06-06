import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import NewsCard from "../components/NewsCard";
import { mapTime } from "../mappers/mapTime";
import { getStory, getStoryIds } from "../services/hnapi";


export function Pagination() {
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = getStory
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((story) => {
            return (
                <div className="user">
                    <NewsCard header={story.title} url={story.url} auth={story.by} time={mapTime(story.time)} />
                </div>
            );
        });

    const pageCount = Math.ceil(getStoryIds.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    return (
        <div className="App">
            {displayUsers}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    );

}