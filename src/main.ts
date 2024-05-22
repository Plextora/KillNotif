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

client.getModuleManager().registerModule(mod);

client.on("receive-chat", (ev) => {
  if (ev.isChat && mod.isEnabled() && game.getLocalPlayer()?.isValid()) {
    if (
      ev.message.includes(
        decodeURI(`${game.getLocalPlayer()?.getName()!} \u00A7ckilled`)
      )
    ) {
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
