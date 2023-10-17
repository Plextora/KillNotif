// Currently only works on The Hive

script.name = "Kill Notif";
script.description =
  "Plays a sound whenever you kill someone on supported servers";
script.version = "1.1.0";
script.author = "Plextora";

let mod: Module = new Module(
  "KillNotif",
  "Kill Notif",
  script.description,
  KeyCode.None
);

client.getModuleManager().registerModule(mod);

client.on("receive-chat", (ev) => {
  if (ev.isChat && mod.isEnabled() && game.getLocalPlayer()?.isValid()) {
    let playerName: string = game.getLocalPlayer()?.getName()!;
    if (ev.message.includes(`${playerName} §ckilled`)) {
      game.playSoundUI("random.orb", 1, 1); // ding sound
    }
  }
});
