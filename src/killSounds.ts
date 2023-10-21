import {
  useOrbSound,
  useExplosionSound,
  useScreenshotSound,
  usePillagerDeathSound,
} from "./modOptions";

export let soundToPlay: string = "random.orb";
let soundOptions;
let chosenSoundOption;

// i could probably do this without needing a loop running every 500ms, but meh
setInterval(() => {
  soundOptions = [
    { condition: useOrbSound.getValue(), sound: "random.orb" },
    { condition: useExplosionSound.getValue(), sound: "random.explode" },
    { condition: useScreenshotSound.getValue(), sound: "random.screenshot" },
    {
      condition: usePillagerDeathSound.getValue(),
      sound: "mob.pillager.death",
    },
  ];

  chosenSoundOption = soundOptions.find((option) => option.condition);
  soundToPlay = chosenSoundOption ? chosenSoundOption.sound : "random.orb";
}, 500);
