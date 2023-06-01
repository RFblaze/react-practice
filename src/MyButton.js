function MyButton({ children, type = "primary", onClick }) {
  let buttonClass = type;

  return (
    <button
      type={"button"}
      className={"btn btn-" + buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default MyButton;
