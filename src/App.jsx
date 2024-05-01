import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJob";
import EditJobPage from "./pages/EditJob";

const App = () => {
  const addJob = async (newJob) => {
    try {
      const response = await fetch(
        "https://react-project-backend-sable.vercel.app/add-job",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newJob),
        }
      );
    } catch (error) {
      alert("Failed to add job");
    }
  };

  const deleteJob = async (id) => {
    try {
      const response = await fetch(
        `https://react-project-backend-sable.vercel.app/jobs/${id}`,
        {
          method: "DELETE",
        }
      );
    } catch (error) {
      alert("Failed to delete job");
    }
  };
  const updateJob = async (job, id) => {
    const res = await fetch(
      `https://react-project-backend-sable.vercel.app/jobs/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      }
    );
    return;
  };

  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={routers} />;
};

export default App;
