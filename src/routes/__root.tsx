import { Outlet, createRootRoute } from "@tanstack/react-router";
import {
  TanStackRouterDevtools,
  TanStackRouterDevtoolsPanel,
} from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import Header from "../components/Header";
import {
  ReactQueryDevtools,
  ReactQueryDevtoolsPanel,
} from "@tanstack/react-query-devtools";
import { ZustandTimeTravel } from "@/zustandTimeTravel";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />

      <TanStackRouterDevtools />
      <ReactQueryDevtools initialIsOpen={false} />

      <TanStackDevtools
        plugins={[
          {
            name: "TanStack Query",
            render: <ReactQueryDevtoolsPanel />,
          },
          {
            name: "TanStack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
          {
            name: "Zustand time travel",
            render: <ZustandTimeTravel />,
          },
        ]}
      />
    </>
  ),
});
