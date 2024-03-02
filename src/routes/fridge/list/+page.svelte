<script>
  import {onMount} from 'svelte';
  import {menuOpen} from "../../../store/store.js";
  export let data;
  onMount(() => {
    if ($menuOpen) {
      $menuOpen = false;
    }
    console.log(data);
  });
</script>
<h1>List of fridges</h1>
<ul>
  {#each data.list as item}
    <li>
      <p>{item.title}</p>
    </li>
    {/each}
</ul>