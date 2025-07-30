import { createContext, useContext } from "react";

const initialState = {
	// Add blog-related state and functions here when needed
};

const BlogContext = createContext(initialState);

export const useBlog = () => {
	const context = useContext(BlogContext);
	if (context === undefined) {
		throw new Error("useBlog must be used within a BlogProvider");
	}
	return context;
};

export const BlogProvider = ({ children }) => {
	return (
		<BlogContext.Provider value={{}}>
			{children}
		</BlogContext.Provider>
	);
}; 