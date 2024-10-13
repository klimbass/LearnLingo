import icon from "./symbol-defs.svg";

export default function IconComponent({
  name,
  sizeWidth,
  sizeHeight = sizeWidth,
  // fill,
  // stroke,
}) {
  return (
    <svg className="icon" width={sizeWidth} height={sizeHeight}>
      <use href={`${icon}#icon-${name}`}></use>
    </svg>
  );
}
