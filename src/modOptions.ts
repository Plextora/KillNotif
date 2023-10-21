import { mod } from "./index";

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
