import Layout from "components/Layout";
import JobCard from "components/JobCard";
import SearchWidget from "components/SearchWidget";
function careers() {
  return (
    <Layout>
      <div className="careers avoid-navbar">
         
        <SearchWidget />
        <div className="container">

        
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
              "3+ years’ programming experience",
              "1+ years’ experience with JavaScript",
              "1year Nodejs development experience",
              "Experience with MVC architecture ",
              "Experience with async and sync control flow patterns ",
              "Knowledge about design patterns ",
              "Good knowledge about Facebook, twitter or any social APIs ",
              "Good knowledge mocha, jest or chai ",
              "Ability to work with agile environment",
              "Plus, git and Heroku deployment",
              "Plus, Jenkins and machine learning  ",
              "Experience/mid-level with NoSQL database (mongo dB) "
              ,"Ability to build a full system’s database scheme",
              "A basic understanding of front-end technologies (Reactjs) is therefore necessary as well.",
              "Knowledge about software principles and clean code"
            ]}
            responsibilities={[
              "Developing, testing and debugging react applications",
              "Build reusable libraries ",
              "Translate requirements into a software ",
              "Build database schemas "
            ]}
            description={["Career level: Mid-level", "Job type: remotely"]}
            skills={["Problem solving", "Motivating", "Resourcefulness"]}
          />
              <JobCard
            title="Junior UX/UI desinger"
            requirements={[
              "1-3 years’ experience with ux/ui",
              "Understanding of HTML/CSS",
              "Strong command of visual and communication design principles.",
              "Adobe XD,photoshop and illustrator",
              "A portfolio of professional UI/UX design work for both web and mobile platforms."
             
            ]}
            responsibilities={[
              "Design & modify user interface for web applications and mobile apps (tablets and phones).",
              "Translate concepts into wire-frames and mockups that lead to intuitive and friendly user experiences.",
              "Create prototypes for new product ideas to select the most appropriate and convenient interface design that match the client’s requiremen",
              "Up-to-date with the latest UI trends, techniques, and technologies Building apps that respond to the natural human thought process.",
              "Developing a comprehensive UI/UX design strategy.",
            ]}
            description={["Career level: Mid-level", "Job type: remotely"]}
            skills={["Creativity", "Motivating", "Self development"]}
          />
        </main>
        </div>
      </div>
    </Layout>
  );
}

export default careers;
