import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { projects } from "./ProjectsData";

export default function ProjectDetailsPage() {
  const { id } = useParams(); // Get project ID from URL
  console.log(id)
  const project = projects.find((p) => p.id === Number(id));
  console.log(projects)
  if (!project) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container-xs p-5 md:p-0 md:pt-24">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <img src={project.userImage} alt={project.title} className="w-full h-60 object-cover rounded" />
          <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
          <p className="text-gray-700 mt-2">{project.description}</p>
          <div className="mt-4">
            <p><strong>Budget:</strong> {project.budget}</p>
            <p><strong>Start Date:</strong> {project.startDate}</p>
            <p><strong>End Date:</strong> {project.endDate}</p>
            <p><strong>Status:</strong> {project.status}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
