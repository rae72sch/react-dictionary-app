import React, { useState, useCallback } from "react";

import styles from "./App.module.css";

// The 3 modules
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";

import Spotify from "./util/Spotify";

export default function App() {
  const [searchResults, setSearchResults] = useState([
    // {
    //   "name": "The Longships",
    //   "artist": "Enya",
    //   "album": "Watermark",
    //   "id": 1
    // },
    // {
    //   "name": "So Far Away",
    //   "artist": "Dire Straits",
    //   "album": "Brothers In Arms",
    //   "id": 2
    // },
    // {
    //   "name": "Layla",
    //   "artist": "Eric Clapton",
    //   "album": "Unplugged",
    //   "id": 3
    // },
    // {
    //   "name": "Zombie",
    //   "artist": "The Cranberries",
    //   "album": "No Need To Argue",
    //   "id": 4
    // }
  ]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div>
      <SearchBar onSearch={search} />
      <div className={styles.container}>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

// Photo by <a href="https://unsplash.com/@reallynattu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nattu Adnan</a> on <a href="https://unsplash.com/photos/Ai2TRdvI6gM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
