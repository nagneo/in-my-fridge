<script>
  import { fly, scale } from 'svelte/transition';
  import { quadOut } from 'svelte/easing';
  import { menuOpen } from "../../store/store.js";

</script>
{#if $menuOpen}
<div class="menu-container bg-surface-900">
  <div class="bar" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
  <div class="menu">
      {#each [ {title: '냉장고 만들기', href: "/fridge/create"}, {title: '둘러보기', href: "/fridge/list"}] as link, i}
          <p transition:fly={{ y: -15, delay: 50 * i }}>
              <a href={link.href}>{link.title}</a>
          </p>
      {/each}
  </div>    
</div>
{/if}

<style>
  .menu-container {
    position: fixed;
    top: var(--menu-bar-height);
    left: 0;
    width: 100%;
    height: 100%;
    z-index: var(--menu-z-index);
  }
  
  .menu {
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.15em;
    padding: 1em;
    padding-top: 0;
    color: #eef;
  }

  p {
      cursor: pointer;
      width: max-content;
      margin: 1rem auto;
  }

  p:hover {
      text-decoration: underline;
  }

  .bar {
      border-style: solid;
      border-color: white;
      border-width: 1px;
      height: 0;
  }
</style>