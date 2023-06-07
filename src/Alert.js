function Alert({ show, closeClick, children }) {
  return (
    <>
      {show === true ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          {children}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={closeClick}
          ></button>
        </div>
      ) : null}
    </>
  );
}

export default Alert;
