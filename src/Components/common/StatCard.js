function StatCard({ label, value }) {
  return (
    <article className="stat-card">
      <p className="stat-card__label">{label}</p>
      <h3 className="stat-card__value">{value}</h3>
    </article>
  );
}

export default StatCard;
