function SectionHeader({ title, text }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default SectionHeader;