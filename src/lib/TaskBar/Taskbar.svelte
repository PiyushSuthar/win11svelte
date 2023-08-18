<script>
  import Icons from "./icons";
  import themeStore from "../../store/theme";
  import StartMenu from "./StartMenu/StartMenu.svelte";

  let showStart = false;
</script>

<StartMenu show={showStart} />

<div data-theme={$themeStore} class="taskbar">
  <div class="taskbar_icons">
    <button on:click={() => (showStart = !showStart)} class="icon">
      <img src={Icons.StartMenuIcon} alt="Start menu" />
    </button>

    <button class="icon">
      <img
        src={$themeStore === "dark" ? Icons.SearchIconDark : Icons.SearchIcon}
        height="20px"
        alt="Search"
      />
    </button>
    <button class="icon">
      <img src={Icons.TaskViewIcon} alt="Task View" />
    </button>
    <button class="icon">
      <img src={Icons.WidgetsIcon} alt="Widgets" />
    </button>
    <button class="icon">
      <img src={Icons.FileExplorerIcon} alt="File Explorer" />
    </button>
    <button
      class="icon"
      on:click={() => {
        themeStore.update((prev) => (prev === "dark" ? "light" : "dark"));
      }}
    >
      <img
        src={$themeStore === "dark" ? Icons.DarkModeIcon : Icons.LightModeIcon}
        alt="Theme Change"
      />
    </button>
  </div>
</div>

<style>
  .taskbar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 50px;

    background: rgba(255, 255, 255, 0.658);
    backdrop-filter: blur(20.5px);
    -webkit-backdrop-filter: blur(20.5px);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  [data-theme="dark"].taskbar {
    background: rgba(3, 21, 41, 0.658);
  }
  .taskbar_icons {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 10px; */
    height: 100%;
    width: 100%;
  }

  .icon {
    all: unset;
    padding: 8px 6px;
    margin: 2px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    /* transition: 0.3s filtre ease; */
    transition: 0.1s all ease-in-out;
  }
  .icon:hover,
  .icon.active {
    background-color: rgba(243, 243, 243, 0.747);
  }
  [data-theme="dark"] .icon.active {
    background-color: rgba(3, 21, 41, 0.562);
  }
  [data-theme="dark"] .icon:hover {
    background-color: rgba(3, 21, 41, 0.562);
  }
  .icon:active img {
    transform: scale(0.8);
    /* filter: grayscale(100%); */
  }

  .icon img {
    transition: 0.1s all ease-in;

    height: 27px;

    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
  }
</style>
