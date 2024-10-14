import Select from "react-select";

const options = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "40", label: "40" },
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
    padding: "16px 60px 16px 18px",
    border: "none",
    borderRadius: "14px",
    boxShadow: "none",
    width: "110px",
  }),
  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    padding: "0",
    color: "var(--textPrimary)",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.1",
    margin: "0",
    // width: "80px",
  }),
};

export default function SelectPrice({ price, setPrice }) {
  const valuePrice = options.filter((obj) => obj.value === price);
  if (valuePrice.length < 1) {
    valuePrice.push(options[0]);
  }
  return (
    <div className="price-Icon">
      <p className="text-custom-ss text-textSecondary mb-[8px] ">Price</p>
      <Select
        defaultValue={{
          label: valuePrice[0].label,
          value: valuePrice[0].value,
        }}
        onChange={(e) => setPrice(e.value)}
        options={options}
        styles={customStyles}
      />
    </div>
  );
}
