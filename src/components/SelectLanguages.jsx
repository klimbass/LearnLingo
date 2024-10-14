import Select from "react-select";

const options = [
  { value: "french", label: "French" },
  { value: "english", label: "English" },
  { value: "german", label: "German" },
  { value: "ukrainian", label: "Ukrainian" },
  { value: "polish", label: "Polish" },
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
    padding: "16px 140px 16px 18px",
    border: "none",
    borderRadius: "14px",
    boxShadow: "none",
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

export default function SelectLanguages({ language, setLanguage }) {
  const valueLang = options.filter((obj) => obj.value === language);
  if (valueLang.length < 1) {
    valueLang.push(options[0]);
  }
  return (
    <div>
      <p className="text-custom-ss text-textSecondary mb-[8px]">Languages</p>
      <Select
        defaultValue={{ label: valueLang[0].label, value: valueLang[0].value }}
        onChange={(e) => setLanguage(e.value)}
        options={options}
        styles={customStyles}
      />
    </div>
  );
}
