import { useEffect, useState } from "react";
import SectionHeader from "../../Components/common/SectionHeader";
import AlertMessage from "../../Components/common/AlertMessage";
import { useAuth } from "../../context/AuthContext";

function Profile() {
  const { user, updateUser } = useAuth();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    avatar: user?.avatar || "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      avatar: user?.avatar || "",
    });
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(formData);
    setSuccessMessage("Profile updated successfully.");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const initials = formData.name
    ? formData.name
        .split(" ")
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase()
    : "HM";

  return (
    <section className="page-section">
      <SectionHeader
        title="Profile"
        text="Update your account details and profile image."
      />

      <AlertMessage message={successMessage} />

      <div className="profile-layout">
        <div className="profile-preview details-card">
          <div className="profile-preview__avatar">
            {formData.avatar ? (
              <img src={formData.avatar} alt={formData.name} />
            ) : (
              <span>{initials}</span>
            )}
          </div>

          <h3>{formData.name || "HireMaster User"}</h3>
          <p>{formData.email || "No email available"}</p>
        </div>

        <form className="details-card profile-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="avatar">Profile Image URL</label>
            <input
              id="avatar"
              name="avatar"
              type="text"
              placeholder="Paste image URL"
              value={formData.avatar}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn--primary btn--button">
            Save Profile
          </button>
        </form>
      </div>
    </section>
  );
}

export default Profile;



