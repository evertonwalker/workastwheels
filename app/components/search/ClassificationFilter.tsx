import { Controller, useFormContext } from "react-hook-form";
import { FormValues } from "./form";
import * as Checkbox from "@radix-ui/react-checkbox";

interface ClassificationFilterProps {
  classificationList: Array<string> | undefined;
}

export function ClassificationFilter({
  classificationList,
}: ClassificationFilterProps) {
  const form = useFormContext<FormValues>();

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium">Classification Filter</label>
      <Controller
        control={form.control}
        name="classification"
        render={({ field }) => (
          <div className="flex flex-col gap-4">
            {classificationList?.map((classification, index) => (
              <label className="flex gap-2" key={index}>
                <Checkbox.Root
                  checked={field.value.includes(classification)}
                  onCheckedChange={(checked) => {
                    field.onChange(
                      checked
                        ? [...field.value, classification]
                        : field.value.filter(
                            (value) => value !== classification,
                          ),
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
                {classification}
              </label>
            ))}
          </div>
        )}
      ></Controller>
    </div>
  );
}
