import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Catalog from './components/Catalog';
import AboutPage from './components/AboutPage';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Page404 from './components/Page404';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="container">
          <div className="row">
            <div className="col">
              <Banner />
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/catalog" component={Catalog} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contacts" component={Contacts} />
                <Route path="*" component={Page404} />
              </Switch>
            </div>
          </div>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
