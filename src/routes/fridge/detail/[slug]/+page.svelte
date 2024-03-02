<h1>Slug Certain Fridge</h1><script>
  import {onMount} from 'svelte';
  import {menuOpen} from "../../../../store/store.js";
  onMount(() => {
    if ($menuOpen) {
      $menuOpen = false;
    }
  });
</script>