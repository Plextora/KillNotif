import {
  useOrbSound,
  useExplosionSound,
  useScreenshotSound,
  usePillagerDeathSound,
} from "./modOptions";

export let soundToPlay: string = "random.orb";

export function getSelectedSound() {
  if (useOrbSound.getValue()) {
    soundToPlay = "random.orb";
  } else if (useExplosionSound.getValue()) {
    soundToPlay = "random.explode";
  } else if (useScreenshotSound.getValue()) {
    soundToPlay = "random.screenshot";
  } else if (usePillagerDeathSound.getValue()) {
    soundToPlay = "mob.pillager.death";
  } else {
    soundToPlay = "random.orb";
  }
}
