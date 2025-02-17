import { useFormContext } from "react-hook-form";
import { FormValues } from "./form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QuantityPassengersFilterProps {
  passengerCount: Array<number> | undefined;
}

export function QuantityPassengersFilter({
  passengerCount,
}: QuantityPassengersFilterProps) {
  const form = useFormContext<FormValues>();
  const quantity = form.watch("minPassengers");

  return (
    <div className="grid">
      <FormField
        control={form.control}
        name="minPassengers"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Quantity of Passengers</FormLabel>
            <FormControl>
              <Select
                value={String(quantity)}
                onValueChange={field.onChange}
                defaultValue={String(quantity)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a quantity" />
                </SelectTrigger>
                <SelectContent>
                  {passengerCount?.map((quantity, index) => (
                    <SelectItem key={index} value={String(quantity)}>
                      {quantity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        )}
      ></FormField>
    </div>
  );
}
