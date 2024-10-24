import icon from "./symbol-defs.svg";

export default function IconComponent({
  name,
  sizeWidth,
  sizeHeight = sizeWidth,
  style = "icon",
  ...restProps
}) {
  // console.log(restProps);

  return (
    <svg
      className={style}
      width={sizeWidth}
      height={sizeHeight}
      fill={restProps.fill ? restProps.fill : false}
      stroke={restProps.stroke ? restProps.stroke : false}
      id={restProps.id ? restProps.id : false}
    >
      <use href={`${icon}#icon-${name}`}></use>
    </svg>
  );
}
