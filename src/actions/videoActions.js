import { FETCH_VIDEOS, NEW_VIDEO } from './types';

export const fetchVideos = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(videos =>
            dispatch({
                type: FETCH_VIDEOS,
                payload: videos
            })
        );
};

export const provideVideo = videoData => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'PROVIDE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(videoData)
    })
        .then(res => res.json())
        .then(video =>
            dispatch({
                type: NEW_VIDEO,
                payload: video
            })
        );
};
