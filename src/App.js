import React, { useLayoutEffect, useState } from "react";

export default function App() {
  const [repositories, setRepositories] = useState([
    { id: 1, name: 'repo-teste-1' },
    { id: 2, name: 'repo-teste-2' },
    { id: 3, name: 'repo-teste-3' },
  ]);

  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}