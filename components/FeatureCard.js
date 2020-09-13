function FeatureCard({ color, title, icon, desc }) {
  return (
    <div style={{ backgroundColor: color }} className="feature-card">
      <h6 className="mb-4">{title}</h6>
      <div className="icon mb-4 ">{icon}</div>
      <p>{desc}</p>
    </div>
  );
}

export default FeatureCard;
