import '../styles/main.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='favicon' href='./favicon' />
				<title>Oznoj</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
