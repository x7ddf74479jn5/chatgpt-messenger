"use client";

import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => {
  return fetch("/api/getEngines").then((res) => res.json());
};
export const ModalSelection = () => {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div>
      <Select
        className="mt-2"
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (_state) => "bg-[#434654] border-[#434654]",
        }}
        onChange={(e) => setModel(e.target.value)}
      />
    </div>
  );
};
