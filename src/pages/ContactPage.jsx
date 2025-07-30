import SEOHead from "@/components/seo/SEOHead.jsx";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const ContactPage = () => {
	return (
		<>
			<SEOHead
				title="Contact | Ankit Dalal"
				description="Get in touch with Ankit Dalal for collaboration opportunities, project inquiries, or just to say hello."
				keywords={[
					"Contact",
					"Get in Touch",
					"Hire",
					"Collaboration",
					"Full Stack Developer",
				]}
				url="/contact"
			/>

			<div className="space-y-8">
				<div className="text-center space-y-4">
					<h1 className="text-section-title">Get In Touch</h1>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						I'm always open to discussing new opportunities, interesting projects, 
						or just having a chat about technology and development.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Contact Information */}
					<div className="space-y-6">
						<h2 className="text-xl font-semibold">Contact Information</h2>
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<Mail className="h-5 w-5 text-primary" />
								<div>
									<p className="font-medium">Email</p>
									<a
										href="mailto:171ankit.2020@gmail.com"
										className="text-muted-foreground hover:text-primary transition-colors"
									>
										171ankit.2020@gmail.com
									</a>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Phone className="h-5 w-5 text-primary" />
								<div>
									<p className="font-medium">Phone</p>
									<a
										href="tel:+917988598074"
										className="text-muted-foreground hover:text-primary transition-colors"
									>
										+91 7988598074
									</a>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<MapPin className="h-5 w-5 text-primary" />
								<div>
									<p className="font-medium">Location</p>
									<p className="text-muted-foreground">Bangalore, India</p>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div>
							<h3 className="text-lg font-semibold mb-3">Follow Me</h3>
							<div className="flex gap-4">
								<a
									href="https://github.com/numberdaar"
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 border rounded-lg hover:bg-accent transition-colors"
									title="GitHub"
								>
									<Github className="h-5 w-5" />
								</a>
								<a
									href="https://www.linkedin.com/in/ankit-dalal-154a16229"
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 border rounded-lg hover:bg-accent transition-colors"
									title="LinkedIn"
								>
									<Linkedin className="h-5 w-5" />
								</a>
								<a
									href="https://www.crio.do/learn/portfolio/crio-171ankit-2020"
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 border rounded-lg hover:bg-accent transition-colors"
									title="Portfolio"
								>
									<ExternalLink className="h-5 w-5" />
								</a>
							</div>
						</div>
					</div>

					{/* Contact Form Placeholder */}
					<div className="space-y-6">
						<h2 className="text-xl font-semibold">Send a Message</h2>
						<div className="p-6 border rounded-lg text-center space-y-4">
							<Mail className="h-12 w-12 text-muted-foreground mx-auto" />
							<h3 className="text-lg font-semibold">Contact Form Coming Soon</h3>
							<p className="text-muted-foreground">
								I'm working on a contact form. For now, please reach out via email or social media.
							</p>
							<a
								href="mailto:171ankit.2020@gmail.com"
								className="inline-flex items-center gap-2 text-primary hover:underline"
							>
								<Mail className="h-4 w-4" />
								Send Email
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactPage; 