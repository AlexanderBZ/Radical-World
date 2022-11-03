import { useState } from "react";
import { useRecoilState } from "recoil";
import { playingEpisodeState, playState } from "../atoms/playerAtom";

export function chooseEpisode(episode) {
  const [playingEpisode, setPlayingEpisode] =
    useRecoilState(playingEpisodeState);

  const selectEpisode = (episode) => {
    setPlayingEpisode(episode);
  };

  return {};
}

export function displayPlayer() {
  const [showPlayer, setShowPlayer] = useState(playState);
  setShowPlayer(true);

  return {};
}
