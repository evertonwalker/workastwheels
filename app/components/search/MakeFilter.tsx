import { Controller, useFormContext } from "react-hook-form";
import { FormValues } from "./form";
import * as Checkbox from "@radix-ui/react-checkbox";

interface MakeFilterProps {
  makesList: Array<string> | undefined;
}

export function MakeFilter({ makesList }: MakeFilterProps) {
  const form = useFormContext<FormValues>();

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium">Make Filter</label>
      <Controller
        control={form.control}
        name="make"
        render={({ field }) => (
          <div className="flex flex-col gap-3">
            {makesList?.map((make, index) => (
              <label className="flex gap-2" key={index}>
                <Checkbox.Root
                  checked={field.value.includes(make)}
                  onCheckedChange={(checked) => {
                    field.onChange(
                      checked
                        ? [...field.value, make]
                        : field.value.filter((value) => value !== make),
                    );
                  }}
                  className="w-6 h-6 border rounded-md flex items-center justify-center transition-all 
                            data-[state=checked]:bg-blue-500 relative"
                >
                  <Checkbox.Indicator className="w-3">
                    <span
                      className="absolute w-2 h-4 border-white border-r-2 border-b-2 
                               rotate-45 opacity-0 transition-opacity 
                               data-[state=checked]:opacity-100"
                    ></span>
                  </Checkbox.Indicator>
                </Checkbox.Root>
                {make}
              </label>
            ))}
          </div>
        )}
      ></Controller>
    </div>
  );
}
