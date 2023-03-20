/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createClient } from "@commercetools/sdk-client";
import { createAuthMiddlewareForClientCredentialsFlow } from "@commercetools/sdk-middleware-auth";
import { createHttpMiddleware } from "@commercetools/sdk-middleware-http";

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
	host: process.env.REACT_APP_CT_AUTH_URL,
	projectKey: process.env.REACT_APP_CT_PROJECT_KEY,
	credentials: {
		clientId: process.env.REACT_APP_CT_CLIENT_ID,
		clientSecret: process.env.REACT_APP_CT_CLIENT_SECRET,
	},
	scopes: [process.env.REACT_APP_CT_PRODUCT_SCOPES],
});

const httpMiddleware = createHttpMiddleware({
	host: "https://api.europe-west1.gcp.commercetools.com",
});

const client = createClient({
	middlewares: [authMiddleware, httpMiddleware],
});

const FetchProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		client
			.execute({
				uri: `/${process.env.REACT_APP_CT_PROJECT_KEY}/products`,
				method: "GET",
			})
			.then((response) => setProducts(response.body.results))
			.catch((error) => console.error(error));
	}, []);

	return (
		<StyledSection>
			<Link to="/">
				<h3 className="text-black text-3xl">Anime Store</h3>
			</Link>

			<main className="!mt-20">
				<pre>{JSON.stringify(products, null, 2)}</pre>
			</main>
		</StyledSection>
	);
};

const StyledSection = styled.section`
	max-width: 90%;
	margin: 2rem auto;
	overflow: hidden;
`;

export default FetchProducts;
