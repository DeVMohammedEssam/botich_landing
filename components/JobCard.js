function JobCard({
  title,
  requirements = [],
  responsibilities = [],
  description = [],
  skills = [],
}) {
  return (
    <article className="job-card">
      <h6 className="job-title">{title}</h6>
      <div className="row px-5 pb-1">
        <div className="col-12 col-lg-8">
          <ul>
            <h6 className="title">Requirements</h6>
            {requirements.map(req => (
              <li key={req}>{req}</li>
            ))}
          </ul>

          <ul>
            <h6 className="title">Responsibilities</h6>
            {responsibilities.map(res => (
              <li key={res}>{res}</li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-lg-4">
          <ul>
            <h6 className="title">Description</h6>
            {description.map(desc => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>

          <ul>
            <h6 className="title">Salary</h6>
            <li>Confidential attractive</li>
          </ul>

          <ul>
            <h6 className="title">Interpersonal skills</h6>
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default JobCard;
