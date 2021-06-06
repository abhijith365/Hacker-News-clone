
import React, { useState, useEffect } from 'react';
import NewsCard from './components/NewsCard';
import { getStory } from './services/hnapi';
import { mapTime } from './mappers/mapTime'; //unix time convertion
import { Pagination } from './pagination/pagination';




export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});

    //storing singular data and assing to stroy
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    return story && story.url ? (
        <>


            <NewsCard header={story.title} url={story.url} auth={story.by} time={mapTime(story.time)} />


        </>
    ) : null;
};
