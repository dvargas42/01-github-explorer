import { useEffect, useState } from "react";
import axios from "axios";

import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.github.com/orgs/rocketseat/repos",
    }).then((response) => setRepositories(response.data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}

export { RepositoryList };
