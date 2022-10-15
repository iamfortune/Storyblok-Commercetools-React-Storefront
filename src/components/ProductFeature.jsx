import { storyblokEditable } from "@storyblok/react";

const ProductFeature = ({ blok }) => {
	return (
		<div className="mt-40" {...storyblokEditable(blok)}>
			<h2 className="text-8xl text-center mb-10">{blok.headline}</h2>
			<div
				style={{
					background: `url(${blok?.product?.items[0]?.image}) no-repeat center center/cover`,
					height: 600,
					width: "100%",
					borderRadius: 12
				}}
			/>
			<h3 className="text-xl text-right">
				{blok?.product?.items[0]?.description}
			</h3>
		</div>
	);
};

export default ProductFeature;
