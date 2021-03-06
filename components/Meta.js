import Head from "next/head";

const Meta = ({title, keywords, image, description}) =>
{
	return (
		<Head>
			<title>{title}</title>
			<meta id="meta-title" property="og:title" content={title} />
			<meta name="keywords" content={keywords.toString()} />
			<meta id="meta-image" property="og:image" content={image} />
			<meta id="meta-descr" property="og:description" content={description} />
		</Head>
	);
};

Meta.defaultProps = {
	title: "dasfaust.me",
	keywords: [
		"programming",
		"programmer",
		"developer",
		"software",
		"engineer",
		"blog",
		"tutorial",
		"full",
		"stack",
		"full-stack",
		"freelance",
		"for hire",
		"hire",
		"portfolio"
	],
	image: "https://dasfaust.me/profile.jpg",
	description: "Discover projects ranging from web development to game development"
};

export default Meta;