import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Feature from './components/feature/Feature';
import Delivery from './components/delivery/Delivery';
import ProductFeatures from './components/productfeatures/ProductFeatures';
import CountDown from './components/countdown/Countdown';
import Gallery from './components/gallery/Gallery';
import FAQ from './components/faq/FAQ';
import Achievements from './components/achievements/Achievements';
import PricingTables from './components/pricing-tables/PricingTables';
import Form from './components/form/Form';

function App(): JSX.Element {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Feature></Feature>
      <Delivery></Delivery>
      <ProductFeatures></ProductFeatures>
      <CountDown></CountDown>
      <Gallery></Gallery>
      <FAQ></FAQ>
      <Achievements></Achievements>
      <PricingTables></PricingTables>
      <Form></Form>
    </>
  );
}

export default App;
