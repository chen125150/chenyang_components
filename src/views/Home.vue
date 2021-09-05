<template>
  <div class="home">
    <virtualList :size="40" :remain="8" :items="items">
      <item slot-scope="{item}" :item="item">111</item>
    </virtualList>
  </div>
</template>

<script>
// @ is an alias to /src
import virtualList from '@/components/virtualList'
import item from './item'
let items = []
for (let i = 0; i < 1000; i++) {
  items.push({
    id: i,
    value: i
  })
}
export default {
  name: 'Home',
  components: {
    virtualList,
    item
  },
  data() {
    return {
      items
    }
  }
}
</script>
