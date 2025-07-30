import { Helmet } from "react-helmet-async";

const SEOHead = ({ title, description, keywords, url, type = "website", structuredData }) => {
	const fullUrl = `https://ankit-portfolio.vercel.app${url}`;

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords.join(", ")} />
			<meta name="author" content="Ankit Dalal" />

			{/* Open Graph */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content={type} />
			<meta property="og:url" content={fullUrl} />
			<meta property="og:site_name" content="Ankit Dalal Portfolio" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:creator" content="@ankit_dalal" />

			{/* Canonical URL */}
			<link rel="canonical" href={fullUrl} />

			{/* Structured Data */}
			{structuredData && (
				<script type="application/ld+json">
					{JSON.stringify(structuredData)}
				</script>
			)}
		</Helmet>
	);
};

export default SEOHead; 