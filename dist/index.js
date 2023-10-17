// Currently only works on The Hive
script.name = "Kill Notif";
script.description =
    "Plays a sound whenever you kill someone on supported servers";
script.version = "0.0.0";
script.author = "Plextora";
let mod = new Module("KillNotif", "Kill Notif", script.description, 0 /* KeyCode.None */);
client.getModuleManager().registerModule(mod);
client.on("receive-chat", (ev) => {
    var _a, _b;
    if (ev.isChat && mod.isEnabled() && ((_a = game.getLocalPlayer()) === null || _a === void 0 ? void 0 : _a.isValid())) {
        let playerName = (_b = game.getLocalPlayer()) === null || _b === void 0 ? void 0 : _b.getName();
        if (ev.message.includes(`${playerName} §ckilled`)) {
            game.playSoundUI("random.orb", 1, 1); // ding sound
        }
    }
});
