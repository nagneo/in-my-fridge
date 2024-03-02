<script>
  import "../../app.pcss";
  import { AppBar } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';
  import Menu from './Menu.svelte';

  import { menuOpen } from "../../store/store.js";
  function toggleMenu() {
    console.log('toggleMenu');
    $menuOpen = !$menuOpen;
  }
  </script>
  <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
      <a href="/">
        <Icon icon="solar:fridge-bold" style="font-size: 24px; text-align: center;" />
      </a>
    </svelte:fragment>
    <svelte:fragment slot="trail">
      <button on:click={toggleMenu}>
        {#if !$menuOpen}
          <Icon icon="mdi:hamburger-menu" style="font-size: 24px; text-align: center;"/>
        {:else}
          <Icon icon="mdi:close" style="font-size: 24px; text-align: center;" />
        {/if}
      </button>
    </svelte:fragment>
  </AppBar>
    <Menu/>
  <slot></slot>
  
  