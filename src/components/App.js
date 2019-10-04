import React from 'react';
import SongList from './SongList';
import { selectSong } from "../actions"; // Curly braces means we want to import a named export

const App = () => {
    return (
        <div className={"ui container grid"}>
            <div className={"ui row"}>
                <div className={"column eight wide"}>
                <SongList />
                </div>
            </div>
        </div>
        );
};

export default App;