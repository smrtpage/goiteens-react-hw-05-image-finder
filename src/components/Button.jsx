function Button({ onClick }) {
  return (
    <div className="btnWrap">
      <button onClick={onClick} className="Button">
        Load more
      </button>
    </div>
  );
}
export default Button;
