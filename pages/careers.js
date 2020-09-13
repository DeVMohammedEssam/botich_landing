import Layout from "components/Layout";
import JobCard from "components/JobCard";
import SearchWidget from "components/SearchWidget";
function careers() {
  return (
    <Layout>
      <div className="careers avoid-navbar">
        <SearchWidget />
        <main>
          <JobCard
            title="Junior Software enigneer"
            requirements={[
              "2+ years’ programming experience",
              "1+ years’ experience with JavaScript and front-end development",
              "6months/1year ReactJS development experience",
              "Experience with HTML5, CSS3, canvas, Svg and drag drop UI",
              "Experience / mid-level to deal with redux and state management",
              "Good knowledge with jest and enzyme",
              "Ability to work with agile environment",
              "Plus, git and Heroku deployment",
              "Plus, Jenkins and machine learning",
              "Ability to deal with external APIs",
              "Knowledge about software principles and clean cod",
            ]}
            responsibilities={[
              "Developing, testing and debugging react applications",
              "Build reusable components",
              "Translate ux/ui into react application",
            ]}
            description={["Career level: Mid-level", "Job type: remotely"]}
            skills={["Problem solving", "Motivating", "Resourcefulness"]}
          />
          <JobCard
            title="Junior Software enigneer"
            requirements={[
              "2+ years’ programming experience",
              "1+ years’ experience with JavaScript and front-end development",
              "6months/1year ReactJS development experience",
              "Experience with HTML5, CSS3, canvas, Svg and drag drop UI",
              "Experience / mid-level to deal with redux and state management",
              "Good knowledge with jest and enzyme",
              "Ability to work with agile environment",
              "Plus, git and Heroku deployment",
              "Plus, Jenkins and machine learning",
              "Ability to deal with external APIs",
              "Knowledge about software principles and clean cod",
            ]}
            responsibilities={[
              "Developing, testing and debugging react applications",
              "Build reusable components",
              "Translate ux/ui into react application",
            ]}
            description={["Career level: Mid-level", "Job type: remotely"]}
            skills={["Problem solving", "Motivating", "Resourcefulness"]}
          />
        </main>
      </div>
    </Layout>
  );
}

export default careers;
