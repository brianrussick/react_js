import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        { title: 'Learning to Fly', duration: '4:10' },
        { title: 'Jumper', duration: '3:30' },
        { title: 'Changes', duration: '4:50' },
        { title: 'Like a Prayer', duration: '4:37' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
