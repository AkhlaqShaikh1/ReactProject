import { useState, useEffect } from "react";
import JobListing from "../jobListing/JobListing";

const JobListings = ({ isHome = false }) => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/jobs");
        const data = await response.json();
        setJobListings(data);
      } catch (error) {
        alert(JSON.stringify(error));
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto ">
        <h2 className="text-indigo-500 font-bold text-3xl mb-6 text-center">
          {isHome ? "Featured Jobs" : "Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobListings.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
