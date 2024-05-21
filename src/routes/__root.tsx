import Loading from "@/components/loader";
import QueryProvider from "@/providers/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";
import LenisProvider from "../providers/LenisProvider";

export const Route = createRootRoute({
	component: () => (
		<Suspense fallback={<Loading />}>
			<QueryProvider>
				<LenisProvider>
					<Outlet />
					<TanStackRouterDevtools />
					<ReactQueryDevtools initialIsOpen={false} />
				</LenisProvider>
			</QueryProvider>
		</Suspense>
	),
});
