
import {Switch, Route} from 'react-router-dom'
import Header from './components/layouts/header'
import Login from './components/layouts/login'
import Register from './components/layouts/register'
import Home from './components/home'
import Cart from './components/layouts/cart'
import ProductDetails from './pages/product_details'
import About from './pages/aboutus'
import Blog from './pages/blog'
import Contact from './pages/contactus'
import Footer from './components/layouts/footer'


function App() {
  return (
    <div className="App">
    
      <Header />

      <Switch>
        
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/productdetails" exact component={ProductDetails} />

      </Switch>

      <Footer />

    </div>
  );
}

export default App;
