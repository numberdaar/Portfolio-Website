import Navbar from "@/components/shared/navbar.jsx";
import Footer from "@/components/shared/footer.jsx";
import { Toaster } from "@/components/ui/sonner.jsx";
import { Outlet } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop.jsx";
import "./index.css";

const Layout = () => {
	useScrollToTop();
	
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="mx-auto mt-32 max-sm:mt-40 lg:p-0 px-5 max-w-screen-sm flex-1">
				<Outlet />
				<Toaster position="top-center" richColors />
			</main>
			<Footer />
		</div>
	);
};

export default Layout; 