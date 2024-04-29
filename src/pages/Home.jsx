import Hero from "../components/hero/Hero";
import JobListings from "../components/jobListings/JobListings";
import ViewAll from "../components/viewAll/ViewAll";
import HomeCards from "../components/homeCards/HomeCards";
function HomePage() {
  return (
    <>
      <Hero
        title="Become A React Developer"
        subtitle="Find the job that Fits your skill set"
      />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAll />
    </>
  );
}

export default HomePage;
