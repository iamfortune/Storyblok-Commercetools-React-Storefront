import { BrowserRouter, Routes, Route } from "react-router-dom";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Homepage from "./pages/Home";
import ProductDetails from "./pages/ProductDetails.jsx";
import Page from "./components/Page";
import ProductGrid from "./components/ProductGrid";
import ProductFeature from "./components/ProductFeature";
import ProductSlider from "./components/ProductSlider";
import Hero from "./components/Hero";

storyblokInit({
	accessToken: process.env.REACT_APP_STORYBLOK_API_KEY,
	use: [apiPlugin],
	components: {
		hero: Hero,
		page: Page,
		"product-grid": ProductGrid,
		"product-feature": ProductFeature,
		"product-slider": ProductSlider,
	},
});

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/product/:id" element={<ProductDetails />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
