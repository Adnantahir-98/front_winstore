// React DOM for routing...
import {Switch, Route} from 'react-router-dom'

// Header Menu Pages
import Header from './components/layouts/header'
import Cart from './components/layouts/cart'
import Login from './components/layouts/login'
import Register from './components/layouts/register'
import Home from './screens/home'


// Main Product Pages like Details/Cart/Checkout etc...
import Shop from './pages/shop'
import ProductDetails from './screens/product_details'
import Checkout from './pages/checkout'



// Categories pages/menus
import Grocery from './pages/categorypages/grocery'
import ClothingStore from './pages/categorypages/clothingstore'
import ElectronicDevices from './pages/categorypages/electronicdevices'
import ElectronicAccessories from './pages/categorypages/electronicaccessories'
import FoodRestaurant from './pages/categorypages/foodrestaurant'
import Pharmacy from './pages/categorypages/pharmacy'
import FlashProducts from './pages/flashproducts'


// Footer pages
import Faq from './pages/faq'
import Blog from './pages/blog'
import About from './pages/aboutus'
import Contact from './pages/contactus'
import PrivacyPolicy from './pages/privacypolicy'
import ShippingPolicy from './pages/shippingpolicy'
import CancellationPolicy from './pages/cancellationpolicy'
import TermsConditions from './pages/termsconditions'
import Footer from './components/layouts/footer'


function App() {
  return (
    <div className="App">
    
      <Header />

      <Switch>
        {/* Header Pages Routes */}
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />


        <Route path="/shop" exact component={Shop} />
        <Route path="/productdetails/:id" exact component={ProductDetails} />


        {/* Categories Section/SliderMenu cateogries pages "'HeaderSliderMenu'" */}
        <Route path="/grocery" exact component={Grocery} />
        <Route path="/electronicdevices" exact component={ElectronicDevices} />
        <Route path="/electronicaccessories" exact component={ElectronicAccessories} />
        <Route path="/clothingstore" exact component={ClothingStore} />
        <Route path="/foodrestaurant" exact component={FoodRestaurant} />
        <Route path="/flashproducts/" component={FlashProducts} />
        <Route path="/pharmacy" exact component={Pharmacy} />
        
        

        {/* Sub-Categories Menu Pages "'HeaderSliderMenu'" */}

        {/* Footer Pages */}
        <Route path="/faq" exact component={Faq} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/Checkout" exact component={Checkout} />
        <Route path="/privacypolicy" exact component={PrivacyPolicy} />
        <Route path="/cancellationpolicy" exact component={CancellationPolicy} />
        <Route path="/shippingpolicy" exaxt component={ShippingPolicy} />
        <Route path="/termsconditions" exact component={TermsConditions} />
        

      </Switch>

      <Footer />

    </div>
  );
}

export default App;
