import { useEffect, useState } from "react";
import SectionHeader from "../../Components/common/SectionHeader";
import { useSupport } from "../../context/SupportContext";

function SupportInbox() {
  const { threads, threadKeys, addAdminMessageToThread, clearThread } = useSupport();
  const [selectedThreadKey, setSelectedThreadKey] = useState("");
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    if (!selectedThreadKey && threadKeys.length > 0) {
      setSelectedThreadKey(threadKeys[0]);
    }
  }, [selectedThreadKey, threadKeys]);

  const selectedMessages = selectedThreadKey ? threads[selectedThreadKey] || [] : [];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!replyText.trim() || !selectedThreadKey) return;

    addAdminMessageToThread(selectedThreadKey, replyText, "HireMaster Admin");
    setReplyText("");
  };

  return (
    <section className="page-section">
      <SectionHeader
        title="Support Inbox"
        text="Monitor incoming support threads and reply to users directly."
      />

      <div className="admin-support-master-layout">
        <aside className="details-card admin-support-users">
          <h3>User Conversations</h3>

          <div className="admin-support-users__list">
            {threadKeys.length > 0 ? (
              threadKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`admin-support-user ${
                    selectedThreadKey === key ? "is-active" : ""
                  }`}
                  onClick={() => setSelectedThreadKey(key)}
                >
                  {key}
                </button>
              ))
            ) : (
              <p>No support conversations yet.</p>
            )}
          </div>
        </aside>

        <div className="admin-support-layout">
          <div className="details-card">
            <div className="admin-support__top">
              <h3>{selectedThreadKey || "Conversation Thread"}</h3>

              {selectedThreadKey && (
                <button
                  type="button"
                  className="btn btn--ghost btn--button"
                  onClick={() => clearThread(selectedThreadKey)}
                >
                  Reset Chat
                </button>
              )}
            </div>

            <div className="admin-support__messages">
              {selectedMessages.length > 0 ? (
                selectedMessages.map((message) => (
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
                ))
              ) : (
                <p>No conversation selected yet.</p>
              )}
            </div>
          </div>

          <form className="details-card admin-support__form" onSubmit={handleSubmit}>
            <h3>Reply to User</h3>

            <div className="form-group">
              <label htmlFor="adminReply">Message</label>
              <textarea
                id="adminReply"
                rows="8"
                placeholder="Type your reply here..."
                value={replyText}
                onChange={(event) => setReplyText(event.target.value)}
              />
            </div>

            <button type="submit" className="btn btn--primary btn--button">
              Send Reply
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SupportInbox;