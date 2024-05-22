import { mod } from "./main";

export const debugMode = mod.addBoolSetting(
  "DebugMode",
  "Debug mode",
  "Logs stuff to chat",
  false
);

export const soundVolume = mod.addNumberSetting(
  "SoundVolume",
  "Sound volume",
  "Loudness of kill sound (default is 1)",
  0.1,
  1,
  0.1,
  1
);
export const soundPitch = mod.addNumberSetting(
  "PitchVolume",
  "Pitch volume",
  "Pitch of kill sound (default is 1)",
  0.1,
  5,
  0.1,
  1
);

export const useOrbSound = mod.addBoolSetting(
  "OrbSound",
  "Orb sound",
  "",
  true
);
export const useExplosionSound = mod.addBoolSetting(
  "ExplosionSound",
  "Explosion sound",
  "",
  false
);
export const useScreenshotSound = mod.addBoolSetting(
  "ScreenshotSound",
  "Screenshot sound",
  "",
  false
);
export const usePillagerDeathSound = mod.addBoolSetting(
  "PillagerDeathSound",
  "Pillager death sound",
  "",
  false
);
