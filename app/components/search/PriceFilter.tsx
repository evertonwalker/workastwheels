import { useFormContext } from "react-hook-form";
import { FormValues } from "./form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form.tsx";
import { RangeSlider } from "../ui/slider";

export function PriceFilter() {
  const form = useFormContext<FormValues>();
  const price = form.watch("price");

  const minAndMaxFilterValues = [20, 52];

  const handlePrices = (value: [number, number]) => {
    form.setValue("price", value);
  };

  return (
    <div className="flex flex-col gap-2">
      <FormField
        control={form.control}
        name="minPassengers"
        render={() => (
          <FormItem>
            <FormLabel>Filter price per hour.</FormLabel>
            <RangeSlider
              value={price}
              onValueChange={handlePrices}
              defaultValue={price}
              min={minAndMaxFilterValues[0]}
              max={minAndMaxFilterValues[1]}
            ></RangeSlider>
          </FormItem>
        )}
      ></FormField>
      <div className="flex justify-between p-2">
        <span>${price[0].toFixed(2)}/hr</span>
        <span>${price[1].toFixed(2)}/hr</span>
      </div>
    </div>
  );
}
