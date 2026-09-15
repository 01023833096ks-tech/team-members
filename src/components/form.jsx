import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { initialTeamMembers } from "./teamMembers";

function NewMemberForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const editingMember = location.state?.member;
  const [form, setForm] = useState({
    name: editingMember?.name || "",
    title: editingMember?.title || "",
    image: editingMember?.image || "",
  });

  const [error, setError] = useState({});

  const urlRegex =
    /^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\/[^\s]*)?$/;
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const NewErrors = {};

    if (!form.name.trim()) {
      NewErrors.name = "Name is required";
    }

    if (!form.title.trim()) {
      NewErrors.title = "title is required";
    }

    if (!form.image.trim()) {
      NewErrors.image = "imageURL is required";
    }
    if (!urlRegex.test(form.image)) {
      NewErrors.image = "Url is not valid";
    }
    return NewErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = validate();
    setError(validateErrors);

    if (Object.keys(validateErrors).length > 0) return;

    const storedMembers = localStorage.getItem("teamMembers");
    const currentMembers = storedMembers
      ? JSON.parse(storedMembers)
      : initialTeamMembers;
    const savedMember = {
      id: editingMember?.id || crypto.randomUUID(),
      name: form.name,
      title: form.title,
      image: form.image,
    };
    const updatedMembers = editingMember
      ? currentMembers.map((member) =>
          member.id === editingMember.id ? savedMember : member,
        )
      : [...currentMembers, savedMember];

    localStorage.setItem("teamMembers", JSON.stringify(updatedMembers));
    navigate("/");
  };

  return (
    <main className="page-shell form-page">
      <Link to="/" className="back-link">
        Back to team members
      </Link>
      <section className="form-panel">
        <p className="eyebrow">Team directory</p>
        <h1>{editingMember ? "Edit team member" : "Add a new member"}</h1>
        <p className="page-intro">
          {editingMember
            ? "Edit the details of an existing team member."
            : "Add a person to your shared team directory."}
        </p>
        <form className="member-form" onSubmit={handleSubmit}>
          <label htmlFor="member-name">Name</label>
          <input
            id="member-name"
            type="text"
            name="name"
            placeholder="Enter the new-member's name"
            onChange={handleChange}
            value={form.name}
            aria-label="Name"
          />
          {error.name && <p>{error.name}</p>}
          <label htmlFor="member-title">Title</label>
          <input
            id="member-title"
            type="text"
            name="title"
            placeholder="Enter the title"
            onChange={handleChange}
            value={form.title}
            aria-label="Title"
          />
          {error.title && <p>{error.title}</p>}
          <label htmlFor="member-image">Profile image URL</label>
          <input
            id="member-image"
            type="text"
            name="image"
            placeholder="Enter the image URL"
            onChange={handleChange}
            value={form.image}
            aria-label="Profile image URL"
          />
          {error.image && <p>{error.image}</p>}
          <button className="button button-primary form-submit" type="submit">
            {editingMember ? "Save changes" : "Add member"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default NewMemberForm;
