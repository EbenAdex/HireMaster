function AlertMessage({ type = "success", message }) {
  if (!message) return null;

  return (
    <div className={`alert-message alert-message--${type}`}>
      <p>{message}</p>
    </div>
  );
}

export default AlertMessage;
