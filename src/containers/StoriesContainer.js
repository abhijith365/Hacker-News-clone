import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnapi';
import { Story } from '../Story';

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);


    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return storyIds.map(storyId => <Story key={storyId} storyId={storyId} />)
};
