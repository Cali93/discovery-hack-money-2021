import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/layout/navbar/Navbar';
import Paths from './components/paths/categories/PathsCategories';
import Footer from './components/layout/footer/Footer';
import Home from './components/home/Home';
import Subcategories from './components/paths/subcategories/Subcategories';
import ProjectContainer from './components/paths/projects/project-container/ProjectContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />

        <Route exact path="/register" component={Home} />
        <Route exact path="/login" component={Home} />
        <Switch>
          <Route exact path="/categories" component={Paths} />
          <Route exact path="/subcategories" component={Subcategories} />
          <Route path="/project/:id" component={ProjectContainer} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
