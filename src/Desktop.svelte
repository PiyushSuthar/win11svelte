<script lang="ts">
  import Wallpaper_light from "./assets/wallpapers/default_light.jpg";
  import Wallpaper_dark from "./assets/wallpapers/default_dark.jpg";
  import Taskbar from "./lib/TaskBar/Taskbar.svelte";

  import themeStore from "./store/theme";
</script>

<main
  data-theme={$themeStore}
  style="--wallpaper: url({$themeStore == 'dark'
    ? Wallpaper_dark
    : Wallpaper_light})"
>
  <Taskbar />
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    background: var(--wallpaper);
    background-size: cover;
    transition: background 0.1s ease-in-out;
    position: relative;
    overflow: hidden;
  }
</style>
