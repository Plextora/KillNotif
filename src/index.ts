// Script GitHub repository: https://github.com/Plextora/KillNotif
// Currently only works on The Hive

import { soundToPlay } from "./killSounds";
import { soundVolume, soundPitch, debugMode } from "./modOptions";

script.name = "Kill Notif";
script.description =
  "Plays a sound whenever you kill someone on supported servers";
script.version = "1.4.2";
script.author = "Plextora";

export let mod: Module = new Module(
  "KillNotif",
  "Kill Notif",
  script.description,
  KeyCode.None
);

client.getModuleManager().registerModule(mod);

client.on("receive-chat", (ev) => {
  if (ev.isChat && mod.isEnabled() && game.getLocalPlayer()?.isValid()) {
    if (ev.message.includes(`${game.getLocalPlayer()?.getName()!} §ckilled`)) {
      game.playSoundUI(
        soundToPlay,
        soundVolume.getValue(),
        soundPitch.getValue()
      );
      if (debugMode.getValue()) {
        script.log(
          `Played ${soundToPlay} at vol ${soundVolume.getValue()} and pitch ${soundPitch.getValue()}`
        );
      }
    }
  }
});
