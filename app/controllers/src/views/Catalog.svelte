<script>
  const MULTIVERSE_CLASS_IDENTIFIER = "main";
  export const CatalogTarget = "";
  
  import Item from "./Item.svelte";
  const data = [1,1,1,1,1];
</script>

<div id={MULTIVERSE_CLASS_IDENTIFIER}>
 {#each data as dataum}
  <Item />
 {/each}
</div>
  