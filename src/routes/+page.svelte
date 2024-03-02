<script>
  import Icon from '@iconify/svelte';
</script>
<div class=root>
  <div class="card p-4 flex flex-col space-y-4 px-12 py-8">
    <div class="logo-container">
      <Icon icon="solar:fridge-bold" style="font-size: 48px; text-align: center;"/>
    </div>
    <h1 class="app-title">냉장고에.. <br/> 뭐 있더라?</h1>
    <div class="space-y-48"></div>
    <a href="/fridge/create" class="btn btn-lg variant-filled">냉장고 만들기</a>
    <a href="/fridge/list" class="btn btn-sm underline">먼저 둘러보기</a>
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
  .app-title {
    font-family: "Nanum Pen Script", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 48px;
    color: white;
    text-align: center;
    line-height: 120%;
  }
</style>