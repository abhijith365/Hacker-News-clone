import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnapi';
import { Story } from '../Story';
import ReactPaginate from "react-paginate";


export const StoriesContainer = () => {
    //assinging a empty array to stroryIds
    const [storyIds, setStoryIds] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);

    //pagination

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = storyIds
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((storyId) => {
            return (
                <Story key={storyId} storyId={storyId} />
            );
        });

    const pageCount = Math.ceil(storyIds.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    useEffect(() => {

        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return <div className="App">
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
};
