
import React, { useState, useEffect } from 'react';
import NewsCard from './components/NewsCard';
import { getStory } from './services/hnapi';



export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    return story && story.url ? (
        <>
            <NewsCard header={story.title} url={story.url} auth={story.by} />

        </>
    ) : null;
};
