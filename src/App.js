import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/Shared/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import Course from './components/Home/Courses/Course';
import Contact from './components/Home/Contact/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/Home/About/About';
import Menubar from './components/Shared/Menubar/Menubar';
import Review from './components/Home/Review/Review';
import Footer from './components/Shared/Footer/Footer';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menubar></Menubar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/course">
            <Course></Course>
          </Route>
          <Route path="/allcourse">
            <Course></Course>
          </Route>
          <Route path="/contactus">
            <Contact></Contact>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/booking/:courseId">
            <Booking></Booking>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
