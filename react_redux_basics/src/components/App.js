import React from 'react';
import SongList from './SongList';

const App = () => {
    return (
    <div className="ui contained grid">
        <div className="ui row">
            <div className="column four wide">
            <SongList />
            </div>
        </div>
    </div>
    );
};

export default App;
