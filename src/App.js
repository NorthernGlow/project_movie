import {Route, Routes, Navigate} from "react-router-dom";

import {MoviesPage} from "./containers";
import {GenresPage, InfoAboutMoviePage, MoviePage} from "./pages";


function App() {
    const setID = (id) => {
        this.setState({id: id})
    }

    return (
        <div>
            <Routes>
                <Route path={''} element={<MoviesPage/>}>
                    <Route index element={<Navigate to={'films'}/>}/>
                    <Route path={'films'} element={<MoviePage setID={setID}/>}/>
                    <Route path={':id'} element={<InfoAboutMoviePage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
                    <Route path={'genres/:idGenre'} element={<MoviePage setID={setID}/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
