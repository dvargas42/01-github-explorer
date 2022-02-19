type RepositoryItemProps = {
  repository: {
    full_name: string;
    description: string;
    html_url: string;
  };
};

function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository?.full_name ?? "Default"}</strong>
      <p>{repository?.description}</p>

      <a href={repository?.html_url}>Acessar repositório</a>
    </li>
  );
}

export { RepositoryItem };
