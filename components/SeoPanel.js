import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";

const SeoPanel = ({ seoMenu, onValueChange }) => {
  const [entries, setEntries] = useState(seoMenu);

  const handleAddEntry = () => {
    const newEntries = [
      ...entries,
      { type: "", field: "", label: "", initialValue: "" },
    ];
    setEntries(newEntries);
    onValueChange(newEntries);
  };

  const handleChange = (index, field, value) => {
    const newEntries = entries.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setEntries(newEntries);
    onValueChange(newEntries);
  };

  const handleRemoveEntry = index => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
    onValueChange(newEntries);
  };

  return (
    <div className="relative">
      {entries?.length &&
        entries.map((entry, index) => (
          <div key={index} className="mb-4 z-[999]">
            <label className="block text-sm mb-2 font-medium text-gray-700 ">
              Field {index+1}
              {/* {entry.label || "New Entry"} */}
            </label>
            <div className="flex flex-col gap-2">
              <Select.Root
                value={entry.type}
                onValueChange={value => {
                  console.log(value);
                  handleChange(index, "type", value);
                }}
              >
                <Select.Trigger className="w-full h-[32px] px-2 text-sm border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 flex items-center">
                  <Select.Value placeholder="Type" />
                </Select.Trigger>
                <Select.Portal avoidCollisions={false}>
                  <Select.Content className="bg-white border border-gray-300 rounded-md shadow-sm">
                    <Select.Viewport>
                      <Select.Item
                        value="text"
                        className="h-[32px] px-2 cursor-pointer hover:bg-gray-100 focus:bg-gray-200"
                      >
                        <Select.ItemText>text</Select.ItemText>
                      </Select.Item>

                      <Select.Item
                        value="description"
                        className="h-[32px] px-2 cursor-pointer hover:bg-gray-100 focus:bg-gray-200"
                      >
                        <Select.ItemText>description</Select.ItemText>
                      </Select.Item>
                      <Select.Item
                        value="number"
                        className="h-[32px] px-2 cursor-pointer hover:bg-gray-100 focus:bg-gray-200"
                      >
                        <Select.ItemText>number</Select.ItemText>
                      </Select.Item>
                      <Select.Item
                        value="date"
                        className="h-[32px] px-2 cursor-pointer hover:bg-gray-100 focus:bg-gray-200"
                      >
                        <Select.ItemText>date</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
              {/* <input
              type="text"
              placeholder="Type"
              value={entry.type}
              onChange={e => handleChange(index, "type", e.target.value)}
              className="w-full h-[32px] px-2 border border-gray-300 text-sm bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 "
            /> */}
              <input
                type="text"
                placeholder="Field"
                value={entry.field}
                onChange={e => handleChange(index, "field", e.target.value)}
                className="w-full h-[32px] px-2 border border-gray-300 text-sm bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 "
              />
              <input
                type="text"
                placeholder="Label"
                value={entry.label}
                onChange={e => handleChange(index, "label", e.target.value)}
                className="w-full h-[32px] px-2 border border-gray-300 text-sm bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 "
              />
              <input
                type="text"
                placeholder="Initial Value"
                value={entry.initialValue}
                onChange={e =>
                  handleChange(index, "initialValue", e.target.value)
                }
                className="w-full h-[32px] px-2 border border-gray-300 text-sm bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 "
              />
              <button
                onClick={() => handleRemoveEntry(index)}
                className="py-1 px-3 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      <button
        onClick={handleAddEntry}
        className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Add Entry
      </button>
    </div>
  );
};

export default SeoPanel;
