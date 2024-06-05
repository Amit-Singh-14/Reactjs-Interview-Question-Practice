import { useEffect, useState } from "react";

export default function User({ user }) {
  const { avatar_url, followers, following, public_repos, name, login, created_at } = user;
  const [projects, setProjects] = useState([{}]);

  const fetchProject = async () => {
    const res = await fetch(`https://api.github.com/users/${login}/repos`);
    const data = await res.json();
    console.log(data);
    setProjects(data.sort((a, b) => b.id - a.id));
  };

  useEffect(() => {
    fetchProject();
  }, [login]);

  const createdDate = new Date(created_at);

  return (
    <>
      <div className="flex items-center w-full justify-center">
        <div className="w-full">
          <div className="bg-white shadow-xl rounded-lg py-3 w-56 mx-auto">
            <div className="photo-wrapper p-2">
              <img className="w-32 h-32 rounded-full mx-auto" src={avatar_url} />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>

              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">User joined on</td>
                    <td className="px-2 py-2">{`${createdDate.getDate()} ${createdDate.toLocaleString(
                      "en-us",
                      {
                        month: "short",
                      }
                    )} ${createdDate.getFullYear()}`}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Public Repos</td>
                    <td className="px-2 py-2">{public_repos}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Followers</td>
                    <td className="px-2 py-2">{followers}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Following</td>
                    <td className="px-2 py-2">{following}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center my-3">
                <a
                  className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href={`https://github.com/${login}`}
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectsGrid projects={projects} />
    </>
  );
}

const ProjectCard = ({ id, name, description, html_url }) => {
  return (
    <div className=" min-w-fit rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <a href={html_url} target="_blank">
          <div className="font-bold text-xl">{name}</div>
        </a>
        {/* <p className="text-gray-700 text-base">{description}</p> */}
      </div>
    </div>
  );
};

const ProjectsGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};
