import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

function App(props) {

  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/profile' element={<Profile posts={props.posts}/>}/>
          <Route path="/dialogs/*" element={<Dialogs />} /> 
          {/* <Route path={urls.courses} element={<CoursesList otherProp={myProp} />} /> */}

          {/* <Route path='/dialogs' element={<Dialogs />}/> */}
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
