<template>
  <div>
    <scroller
      style="top: 44px"
      :on-refresh="refresh"
      :on-infinite="infinite"
      ref="scroller"
    >
      <div v-for="(item, index) in items" class="row" :class="{'grey-bg': index % 2 == 0}" :key="index">
        {{ item }}
      </div>
    </scroller>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },

  mounted () {
    // for (var i = 1; i <= 20; i++) {
    //   this.items.push(i + ". keep walking, be 2 with you.");
    // }
    // this.top = 1;
    // this.bottom = 20;
  },
  methods: {
    refresh (done) {
      console.log('refresh')
      setTimeout(() => {
        var start = this.top - 1
        for (var i = start; i > start - 10; i--) {
          this.items.splice(0, 0, i + 'keep walking, be 2 with you.')
        }
        this.top = this.top - 10
        done()
      }, 1500)
    },
    infinite (done) {
      // console.log('infinite')
      setTimeout(() => {
        console.log(111)
        done()
      }, 2000)
      
      // this.$refs.scroller.finishInfinite()
      // setTimeout(() => {
      //   var start = this.bottom + 1;
      //   for (var i = start; i < start + 10; i++) {
      //     this.items.push(i + "keep walking, be 2 with you.");
      //   }
      //   this.bottom = this.bottom + 10;
      //   done();
      // }, 1500);
    }
  }
}
</script>

<style scoped>
.row {
  height: 50px;
  padding: 0 12px;
}
</style>
