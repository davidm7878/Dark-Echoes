import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisdode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h3>Episode Details</h3>
          <p>Select an episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
        <button>Watch now</button>
      </section>
    );
  }

  function EpisodeList() {
    return (
      <section className="episodeList">
        <h2>Episode List</h2>
        <ul className="episodeList">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisdode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}
