/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import {
	useStoryblokState,
	getStoryblokApi,
	storyblokEditable,
} from "@storyblok/react";

const ProductDetails = () => {
	const { id } = useParams();
	const storyblokApi = getStoryblokApi();
	const [story, setStory] = useState();

	const product = useStoryblokState(story);

	const fetchHomeStory = async () => {
		try {
			const { data } = await storyblokApi.get(`cdn/stories/product/${id}`, {
				version: "draft",
			});

			setStory(data?.story);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (id) {
			fetchHomeStory();
		}
	}, [id]);

	return (
		<StyledSection>
			<Link to="/">
				<h3 className="text-black text-3xl">Go Back</h3>
			</Link>

			<main
				className="!mt-20 flex items-center justify-center"
				{...storyblokEditable(product?.content)}
			>
				<img
					src={product?.content?.images[0]?.filename}
					alt={product?.content?.images[0]?.alt}
					style={{ width: 240, height: 320 }}
					className="object-cover"
				/>
				<div className="ml-10">
					<h2 className="text-2xl font-bold mb-1">{product?.content?.name}</h2>
					<p>{product?.content?.description}</p>
					<h2 className="text-2xl font-bold mt-10 mb-4">
						${product?.content?.price}
					</h2>
					<button>Order now</button>
				</div>
			</main>
		</StyledSection>
	);
};

const StyledSection = styled.section`
	max-width: 90%;
	margin: 2rem auto;
	overflow: hidden;

	& button {
		display: block;
		background: #03b3b0;
		color: #fff;
		height: 45px;
		padding: 0 1.5rem;
		border-radius: 6px;
	}
`;

export default ProductDetails;
