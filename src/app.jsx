import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./components/shared/themeProvider.jsx";
import "./index.css";
import Layout from "./layout.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import BlogsDetails from "./pages/BlogsDetails.jsx";
import BlogsPage from "./pages/Blogspage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import HomePage from "./pages/Homepage.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import ProjectsPage from "./pages/Projectspage.jsx";
import { BlogProvider } from "./context/blog.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path="blogs" element={<BlogsPage />} />
			<Route path="blogs/:slug" element={<BlogsDetails />} />
			<Route path="projects" element={<ProjectsPage />} />
			<Route path="projects/:slug" element={<ProjectDetails />} />
			<Route path="experience" element={<ExperiencePage />} />
			<Route path="contact" element={<ContactPage />} />
			<Route path="about" element={<AboutMe />} />
			<Route path="*" element={<ErrorPage />} />
		</Route>,
	),
);

const App = () => {
	return (
		<HelmetProvider>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<BlogProvider>
					<RouterProvider router={router} />
				</BlogProvider>
			</ThemeProvider>
		</HelmetProvider>
	);
};

export default App; 