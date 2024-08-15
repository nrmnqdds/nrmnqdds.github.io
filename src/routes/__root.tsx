import Loading from "@/components/loader";
import QueryProvider from "@/providers/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createRootRoute({
	component: () => (
		<Suspense fallback={<Loading />}>
			<QueryProvider>
				<Outlet />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryProvider>
		</Suspense>
	),
});
