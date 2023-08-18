<script>
  import { slide } from "svelte/transition";

  let dummydata = Array(10).fill(0);
  export let show = false;
</script>

{#if show}
  <div out:slide class="startmenu">
    <div class="top_section">
      <div class="pinned_apps" />
      {#each dummydata as _}
        <div class="lol">hehe</div>
      {/each}
      <div class="recommended" />
    </div>
    <div class="bottom_section">
      <div class="user_control" />
    </div>
  </div>
{/if}

<style>
  .startmenu {
    position: absolute;
    bottom: 60px;
    left: 50%;
    max-height: 850px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 70%;
    width: 80%;
    max-width: 600px;
    background-color: #fff;
    transform: translate(-50%, 0%);
    backdrop-filter: blur(20.5px);
    -webkit-backdrop-filter: blur(20.5px);
    border-radius: 8px;
    transition: 0.2s background ease;
    animation: 0.4s slideUp;
    animation-timing-function: cubic-bezier(0.3, 0.5, 0, 1);
    background: transparent;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07);
    /* transition: 0.3s transform ease; */
  }

  .startmenu.active {
    animation: 0.2s slideDown ease;
    /* animation-timing-function: cubic-bezier(0.3, 0.5, 0, 1); */
  }

  .top_section {
    background: rgba(255, 255, 255, 0.596);
    min-height: 80%;
  }
  .bottom_section {
    height: 20%;
  }

  @keyframes slideUp {
    from {
      transform: translate(-50%, 100%);
    }
    to {
      transform: translate(-50%, 0%);
    }
  }
  @keyframes slideDown {
    from {
      transform: translate(-50%, 0%);
    }
    to {
      transform: translate(-50%, 100%);
    }
  }
</style>
