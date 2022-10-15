import { storyblokEditable } from "@storyblok/react";

const ProductSlider = ({ blok }) => {
	return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default ProductSlider;
