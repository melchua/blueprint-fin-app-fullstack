import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="m-4">
      Blueprint Financial is a comprehensive financial planning tool that helps
      you take control of your financial future. With powerful features like
      retirement planning and budgeting tools, we make it easy to set and track
      your financial goals. Whether you're saving for retirement, managing your
      monthly budget, or planning for major life events, Blueprint Financial
      provides the insights and guidance you need to make informed financial
      decisions.
    </div>
  );
}
