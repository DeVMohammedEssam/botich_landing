/** @format */

function CofounderCard({ imgSrc, name, skills = [] }) {
  return (
    <div className="cofounder-card">
      <div className="img-container">
        <img src={imgSrc} alt="" />
      </div>
      <ul className="list-unstyled skills-list">
        <span className="font-weight-bold">{name}</span>

        <li className="text-secondary">Co-Founder</li>
        {skills.map((skill = "") => (
          <li className="text-secondary">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default CofounderCard;
