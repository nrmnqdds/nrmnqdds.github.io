import { ReactLenis } from "@studio-freight/react-lenis";

export default function LenisProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ReactLenis root>{children}</ReactLenis>;
}
