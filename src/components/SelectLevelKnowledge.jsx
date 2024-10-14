import Select from "react-select";

const options = [
  { value: "a1", label: "A1 Beginner" },
  { value: "a2", label: "A2 Elementary" },
  { value: "b1", label: "B1 Intermediate" },
  { value: "b2", label: "B2 Upper-intermediate" },
];

const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,

    color: state.isSelected ? "var(--textPrimary)" : "var(--textSecondary)",
    border: "none",
    borderRadius: "6px",
    backgroundColor: state.isFocused ? "var(--accentSecondary)" : "#fff",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.1",
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,
    borderRadius: "12px",
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "#fff",
    padding: "16px 40px 16px 18px",
    border: "none",
    borderRadius: "14px",
    boxShadow: "none",
    width: "215px",
  }),
  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    padding: "0",
    color: "var(--textPrimary)",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.1",
    margin: "0",
  }),
};

export default function SelectLevelKnowledge({
  levelKnowledge,
  setLevelKnowledge,
}) {
  const valueLevel = options.filter((obj) => obj.value === levelKnowledge);
  if (valueLevel.length < 1) {
    valueLevel.push(options[0]);
  }
  return (
    <div>
      <p className="text-custom-ss text-textSecondary mb-[8px]">
        Level of knowledge
      </p>
      <Select
        defaultValue={{
          label: valueLevel[0].label,
          value: valueLevel[0].value,
        }}
        onChange={(e) => setLevelKnowledge(e.value)}
        options={options}
        styles={customStyles}
      />
    </div>
  );
}
