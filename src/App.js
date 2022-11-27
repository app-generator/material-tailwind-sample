import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import Testimonial from "./components/Testimonial";
import PriceSection from "./components/PriceSection";
import AdsContainer from "./components/AdsContainer";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='max-w-[1280px]'>
			<Nav />
			<Hero />
			<FirstSection />
			<SecondSection />
			<Testimonial />
			<PriceSection />
			<AdsContainer />
			<Footer />
		</div>
	);
}

export default App;
