const bodyStyle = document.body.classList;

const bodyScrollLockToggle = (...value) => {
  const fix = value.includes(true);

  fix ? bodyStyle.add("lock-scroll") : bodyStyle.remove("lock-scroll");
};
export default bodyScrollLockToggle;
