import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => {
	return (
		<main {...storyblokEditable(blok)}>
			{blok.body.map((nestedBlok) => {
				return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
			})}
		</main>
	);
};

export default Page;
