import { mod } from "./index";

export let debugMode = mod.addBoolSetting(
  "DebugMode",
  "Debug mode",
  "Logs stuff to chat",
  false
);

export let soundVolume = mod.addNumberSetting(
  "SoundVolume",
  "Sound volume",
  "Loudness of kill sound (default is 1)",
  0.1,
  1,
  0.1,
  1
);
export let soundPitch = mod.addNumberSetting(
  "PitchVolume",
  "Pitch volume",
  "Pitch of kill sound (default is 1)",
  0.1,
  5,
  0.1,
  1
);

export let useOrbSound = mod.addBoolSetting("OrbSound", "Orb sound", "", true);
export let useExplosionSound = mod.addBoolSetting(
  "ExplosionSound",
  "Explosion sound",
  "",
  false
);
export let useScreenshotSound = mod.addBoolSetting(
  "ScreenshotSound",
  "Screenshot sound",
  "",
  false
);
export let usePillagerDeathSound = mod.addBoolSetting(
  "PillagerDeathSound",
  "Pillager death sound",
  "",
  false
);
