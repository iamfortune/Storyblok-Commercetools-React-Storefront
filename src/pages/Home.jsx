/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
	useStoryblokState,
	getStoryblokApi,
	StoryblokComponent,
} from "@storyblok/react";
import { Link } from "react-router-dom";

const Homepage = () => {
	const storyblokApi = getStoryblokApi();
	const [story, setStory] = useState();

	const home = useStoryblokState(story);

	const fetchHomeStory = async () => {
		try {
			const { data } = await storyblokApi.get("cdn/stories/home", {
				version: "draft",
			});

			setStory(data?.story);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchHomeStory();
	}, []);

	// console.log(home?.content);

	return (
		<StyledSection>
			<Link to="/">
				<h3 className="text-black text-3xl">Anime Store</h3>
			</Link>

			<main className="!mt-20">
				{home?.content && <StoryblokComponent blok={home.content} />}
			</main>
		</StyledSection>
	);
};

const StyledSection = styled.section`
	max-width: 90%;
	margin: 2rem auto;
	overflow: hidden;
`;

export default Homepage;
