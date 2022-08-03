import {Route, Routes, Navigate} from "react-router-dom";

import {MoviesPage} from "./containers";
import {InfoAboutMoviePage, MoviePage} from "./pages";


function App() {
    return (
        <div>
            <Routes>
                <Route path={''} element={<MoviesPage/>}>
                    <Route index element={<Navigate to={'films'}/>}/>
                    <Route path={'films'} element={<MoviePage/>}/>
                    <Route path={'fullInformationAboutFilm'} element={<InfoAboutMoviePage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
