import { useFormContext } from "react-hook-form";
import { FormValues } from "./form";

export function ClearFilter() {
  const form = useFormContext<FormValues>();

  const handleClearFilter = () => {
    form.reset();
  };

  return (
    <div className="w-full">
      <button
        onClick={handleClearFilter}
        className="w-full flex justify-center items-center font-medium text-white p-6 bg-green-700 rounded-2xl h-3"
      >
        CLEAR FILTER
      </button>
    </div>
  );
}
