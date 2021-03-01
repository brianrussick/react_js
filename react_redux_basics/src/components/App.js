import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return (
    <div className="ui contained grid">
        <div className="ui row">
            <div className="column four wide">
                <SongList />
            </div>
            <div className="column four wide">
                <SongDetail />
            </div>
        </div>
    </div>
    );
};

export default App;
