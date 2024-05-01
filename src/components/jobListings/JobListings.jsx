import { useState, useEffect } from "react";
import JobListing from "../jobListing/JobListing";
import Spinner from "../Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiURL = isHome
        ? "https://react-project-backend-sable.vercel.app/jobs"
        : "https://react-project-backend-sable.vercel.app/jobs";
      try {
        const response = await fetch(apiURL);
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

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobListings.map((job) => (
              <JobListing key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
