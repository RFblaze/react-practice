function MyButton({ children, type = "primary", onClick }) {
  return (
    <button type={"button"} className={"btn btn-" + type} onClick={onClick}>
      {children}
    </button>
  );
}

export default MyButton;
