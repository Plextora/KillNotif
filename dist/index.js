script.name = "Kill Notif";
script.description =
    "Plays a sound whenever you kill someone on supported servers";
script.version = "0.0.0";
script.author = "Plextora";
let mod = new Module("KillNotif", "Kill Notif", script.description, 0 /* KeyCode.None */);
client.getModuleManager().registerModule(mod);
