import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnapi';
import { Story } from '../Story';


export const StoriesContainer = () => {
    //assinging a empty array to stroryIds
    const [storyIds, setStoryIds] = useState([]);


    //taking promise and separate data from it
    useEffect(() => {
        //taking 30 ids from api
        getStoryIds().then(data => setStoryIds(data.slice(0, 20)));
    }, []);
    // storyids itaration 
    return storyIds.map(storyId => <Story key={storyId} storyId={storyId} />)
};
