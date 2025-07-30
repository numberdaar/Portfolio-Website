import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button.jsx";
import ModeToggle from "./modeToggle.jsx";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/projects", label: "Projects" },
		{ href: "/experience", label: "Experience" },
		{ href: "/blogs", label: "Blog" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link to="/" className="text-xl font-bold text-gradient pointer-bounce">
						Ankit Dalal
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-6">
						{navItems.map((item) => (
							<Link
								key={item.href}
								to={item.href}
								className={`text-sm font-medium transition-colors hover:text-primary pointer-lift ${
									location.pathname === item.href ? "text-primary" : "text-muted-foreground"
								}`}
							>
								{item.label}
							</Link>
						))}
					</div>

					{/* Right side items */}
					<div className="flex items-center space-x-4">
						<ModeToggle />
						<Button asChild className="hidden sm:inline-flex">
							<Link to="/contact">Get In Touch</Link>
						</Button>

						{/* Mobile menu button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary transition-colors pointer-lift"
						>
							{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden py-4 border-t">
						<div className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<Link
									key={item.href}
									to={item.href}
									onClick={() => setIsOpen(false)}
									className={`text-sm font-medium transition-colors hover:text-primary pointer-lift ${
										location.pathname === item.href ? "text-primary" : "text-muted-foreground"
									}`}
								>
									{item.label}
								</Link>
							))}
							<Button asChild className="w-full">
								<Link to="/contact" onClick={() => setIsOpen(false)}>
									Get In Touch
								</Link>
							</Button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar; 