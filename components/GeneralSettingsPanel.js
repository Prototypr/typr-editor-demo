import React, { useState } from "react";

const GeneralPanel = ({ generalMenu, onValueChange }) => {
  const [entries, setEntries] = useState(generalMenu);

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

  const handleRemoveEntry = (index) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
    onValueChange(newEntries);
  };
  return (
    <div>
      {entries?.length && entries.map((entry, index) => (
        <div key={index} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {entry.label || "New Entry"}
          </label>
          <input
            type="text"
            placeholder="Type"
            value={entry.type}
            onChange={(e) => handleChange(index, "type", e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 mb-2"
          />
          <input
            type="text"
            placeholder="Field"
            value={entry.field}
            onChange={(e) => handleChange(index, "field", e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 mb-2"
          />
          <input
            type="text"
            placeholder="Label"
            value={entry.label}
            onChange={(e) => handleChange(index, "label", e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 mb-2"
          />
          <input
            type="text"
            placeholder="Initial Value"
            value={entry.initialValue}
            onChange={(e) => handleChange(index, "initialValue", e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 mb-2"
          />
          <button
            onClick={() => handleRemoveEntry(index)}
            className="mt-2 py-1 px-3 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Remove
          </button>
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

export default GeneralPanel;