import eventBus from "./eventBus";
import {
  getMusicDetailAction,
  getCurrentPanelAction,
  getMusicLyricAction
} from "pages/player/store/actionCreators";
import {message} from "antd";
import {checkMusic} from "services/player";

/**
 * toPlay
 * @param id 歌曲id
 * @param dispatch dispatch
 * @param history history
 */
export const toPlay = (id, dispatch, history) => {
  eventBus.emit("toPlayer", id);
  eventBus.emit("linkHistory", history);
  dispatchCurrentMusic(id, dispatch);
}

/**
 * dispatch currentMusic
 * @param id 歌曲 id
 * @param dispatch dispatch
 */
const dispatchCurrentMusic = (id, dispatch) => {
  id !== 0 && dispatch(getMusicDetailAction(id));
}

/**
 * dispatch currentPanel
 * @param id 歌曲 id
 * @param dispatch dispatch
 */
export const dispatchCurrentPanel = (id, dispatch) => {
  id !== 0 && dispatch(getCurrentPanelAction(id));
}

/**
 * checkMusicAndPlay
 * @param id
 * @param dispatch
 * @param history
 */
export const checkMusicAndPlay = (id, dispatch, history) => {
  checkMusic(id).then(res => {
    if (res.success && res.message === "ok") {
      toPlay(id, dispatch, history)
    }
  }).catch(err => {
    console.log(err)
    message.warning("暂时不能播放哦~~")
  })
}

export const dispatchLyric = (id, dispatch) => {
  id !== 0 && dispatch(getMusicLyricAction(id));
}

