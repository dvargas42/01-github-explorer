import { RepositoryItem } from "./RepositoryItem"

const repository2 = {
  name: 'Unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
       <RepositoryItem repository={ repository2 } />
       <RepositoryItem repository={ repository2 } />
       <RepositoryItem repository={ repository2 } />
       <RepositoryItem repository={ repository2 } />
       <RepositoryItem repository={ repository2 } />
       <RepositoryItem repository={ repository2 } />
      </ul>

    </section>
  )
}

export { RepositoryList }