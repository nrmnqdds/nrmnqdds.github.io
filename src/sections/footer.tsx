const Footer = () => {
	return (
		<footer className="bg-zinc-900 flex flex-col gap-5 items-center justify-center py-10 border-t border-zinc-600">
			<h1 className="text-white">
				&copy; {new Date().getFullYear()} Quddus. All rights reserved.
			</h1>
		</footer>
	);
};

export default Footer;
