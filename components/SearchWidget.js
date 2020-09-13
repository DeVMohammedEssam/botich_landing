function SearchWidget() {
  return (
    <aside className="search-widget">
      <input type="search" placeholder="Search.." />
      <span className="mb-2">search for jobs that will fit your skills</span>
      <ul className="list-unstyled">
        <li>Software engineer</li>
        <li>UX/UI Designer</li>
      </ul>
    </aside>
  );
}

export default SearchWidget;
