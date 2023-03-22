import { ThemeProvider } from '@emotion/react';
import { KeyboardArrowUpRounded } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import './App.scss';
import HomePage from './components/home-page/HomePage';
import NavBar from './components/nav-bar/NavBar';
import PopularJobCategoriesPage from './components/popular-job-categories-page/PopularJobCategoriesPage';
import MainTheme from './styles/themes/MainTheme';

function App() {

	const [theme, changeTheme] = useState(MainTheme);
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<div className="screen">
					<NavBar></NavBar>
					<HomePage></HomePage>
				</div>
				<div className="screen">
					<PopularJobCategoriesPage></PopularJobCategoriesPage>
				</div>
			</ThemeProvider>
			<IconButton
				className={"to-top-button button--color-deep-blue " + (scrollPosition > 20 ? "" : "hidden")}
				color="primary"
				size="small"
				onClick={() => {
					window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
				}}>
				<KeyboardArrowUpRounded fontSize="inherit" />
			</IconButton>
		</div>
	);
}

export default App;