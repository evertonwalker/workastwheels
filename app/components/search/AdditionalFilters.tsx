import { trpc } from "@/trpc";
import { ClassificationFilter } from "./ClassificationFilter";
import { ClearFilter } from "./ClearFilter";
import { MakeFilter } from "./MakeFilter";
import { PriceFilter } from "./PriceFilter";
import { QuantityPassengersFilter } from "./QuantityPassengersFilter";
import { Skeleton } from "../ui/skeleton";

export function AdditionalFilters() {
  const { data, isLoading } = trpc.vehicles.options.useQuery();
  if (data) console.log(data);

  if (isLoading) {
    return (
      <>
        <div className="flex flex-col gap-4">
          <Skeleton className="w-full h-[100px] rounded" />
          <Skeleton className="w-full h-[100px] rounded" />
          <Skeleton className="w-full h-[400px] rounded" />
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <QuantityPassengersFilter passengerCount={data?.passengerCounts} />
      <PriceFilter />
      <div className="flex justify-between">
        <MakeFilter makesList={data?.makes} />
        <ClassificationFilter classificationList={data?.classifications} />
      </div>
      <ClearFilter />
    </div>
  );
}
