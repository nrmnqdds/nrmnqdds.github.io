import Loading from "@/components/loader";
import QueryProvider from "@/providers/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";

export const Route = createRootRoute({
	component: () => (
		<Suspense fallback={<Loading />}>
			<QueryProvider>
				<Outlet />
				<TanStackRouterDevtools />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryProvider>
		</Suspense>
	),
});
