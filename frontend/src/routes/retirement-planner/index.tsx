import { createFileRoute } from "@tanstack/react-router";
import { AreaChartCard } from "@/components/area-chart";
export const Route = createFileRoute("/retirement-planner/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="m-4">
      <h1 className="text-4xl">Retirement Planner</h1>
      <p>
        This is the retirement planner page. Here you can plan your retirement
        and see how much you need to save.
      </p>

      <AreaChartCard />
    </div>
  );
}
