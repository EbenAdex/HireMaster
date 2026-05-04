import { useState } from "react";
import { useSupport } from "../../context/SupportContext";
import { useAuth } from "../../context/AuthContext";

function Support() {
  const { user } = useAuth();
  const { currentThread, addUserMessage } = useSupport();
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!messageText.trim()) return;

    addUserMessage(messageText, user?.name || "User");
    setMessageText("");
  };

  return (
    <section className="support-page">
      <div className="support-wrapper">
        <aside className="support-sidebar">
          <h2>Support Center</h2>
          <p>
            Reach HireMaster support for help with accounts, applications,
            employer listings, and platform issues.
          </p>

          <div className="support-status">
            <span className="support-status__dot"></span>
            <p>Customer service is online</p>
          </div>
        </aside>

        <div className="support-chat">
          <div className="support-chat__header">
            <div>
              <h3>Live Support</h3>
              <p>Chat with HireMaster customer service</p>
            </div>
          </div>

          <div className="support-chat__messages">
            {currentThread.map((message) => (
              <div
                key={message.id}
                className={`chat-bubble ${
                  message.senderType === "admin"
                    ? "chat-bubble--agent"
                    : "chat-bubble--user"
                }`}
              >
                <strong>{message.sender}</strong>
                <p>{message.text}</p>
                <small>{message.time}</small>
              </div>
            ))}
          </div>

          <form className="support-chat__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type your message here..."
              value={messageText}
              onChange={(event) => setMessageText(event.target.value)}
            />
            <button type="submit" className="btn btn--primary btn--button">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Support;