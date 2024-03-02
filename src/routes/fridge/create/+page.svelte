<script>
  import {onMount} from 'svelte';
  import {menuOpen} from "../../../store/store.js";
  import Icon from '@iconify/svelte';

  let isPrivate = false;
  onMount(() => {
    if ($menuOpen) {
      $menuOpen = false;
    }
  });

</script>

<div class=root>
  <div class="card p-4 flex flex-col space-y-12 px-12 py-8">
    <div class="logo-container">
      <Icon icon="solar:fridge-bold" style="font-size: 48px; text-align: center;"/>
    </div>
    <form method="POST" class="flex flex-col space-y-8">
      <label class="label">
        <span>이름*</span>
        <input class="input variant-form-material px-4 py-2" type="text" placeholder="냉장고 이름" />
      </label>
      <label class="label">
        <label class="flex items-center space-x-2">
          <p>비공개</p>
          <input class="checkbox " type="checkbox" bind:checked="{isPrivate}" />
        </label>
        <input class="input variant-form-material px-4 py-2" type="password" placeholder="비밀번호" disabled={!isPrivate}/>
      </label>
      <button class="btn btn-lg variant-filled">만들기</button>
    </form>
  </div>
</div>

<style>
  .root {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  .logo-container {
    display: flex;
    justify-content: center;
  }
</style>