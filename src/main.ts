// Script GitHub repository: https://github.com/Plextora/KillNotif
// Currently only works on The Hive

import { getSelectedSound, soundToPlay } from "./killSounds";
import { soundVolume, soundPitch, debugMode } from "./modOptions";

export const mod: Module = new Module(
  "KillNotif",
  "Kill Notif",
  "Plays a sound whenever you kill someone on supported servers",
  KeyCode.None
);

const playerName = game.getLocalPlayer()?.getName()!;
const playerNickname = client
  .getModuleManager()
  .getModuleByName("Nickname")
  ?.getSettings()[2]
  .getValue();

client.getModuleManager().registerModule(mod);
const hivePlayerKill = new RegExp(
  decodeURI(`^(?=.*${playerName})(?=.*\u00A7c).*`)
);
const hiveNickKill = new RegExp(
  decodeURI(`^(?=.*${playerNickname})(?=.*\u00A7c).*`)
);

client.on("receive-chat", (ev) => {
  if (ev.isChat && mod.isEnabled() && game.getLocalPlayer()?.isValid()) {
    if (ev.message.match(hivePlayerKill) || ev.message.match(hiveNickKill)) {
      getSelectedSound();
      game.playSoundUI(
        soundToPlay,
        soundVolume.getValue(),
        soundPitch.getValue()
      );
      if (debugMode.getValue()) {
        clientMessage(
          `Played ${soundToPlay} at vol ${soundVolume.getValue()} and pitch ${soundPitch.getValue()}`
        );
      }
    }
  }
});
