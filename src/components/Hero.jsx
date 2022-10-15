import { storyblokEditable } from "@storyblok/react";
import styled from "styled-components";

const Hero = ({ blok }) => {
	return (
		<StyledDiv className="flex items-center" {...storyblokEditable(blok)}>
			<div style={{ minWidth: 300 }}>
				<h2 className="mb-4">{blok?.headline}</h2>
				<p>{blok?.description}</p>
			</div>

			<img
				{...storyblokEditable(blok)}
				src={blok?.image?.filename}
				alt={blok?.image?.name}
			/>
		</StyledDiv>
	);
};

const StyledDiv = styled.div`
	& h2 {
		font-size: 32px;
		line-height: 27px;
	}

	& p {
		line-height: 26px;
	}

	& img {
		dispay: block;
		width: 100%;
	}
`;

export default Hero;
