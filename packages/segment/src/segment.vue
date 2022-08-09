<template>
  <div class="s-segment">
    <div class="segment-wrap">
      <div
        class="segment-thumb"
        :style="{ width: w + 'px', transform: 'translateX(' + x + 'px)', display: isInit ? 'block' : 'none' }"
      ></div>
      <label
        ref="labelRef"
        :class="['segment-item', { 'segment-item-disabled': item.disabled }]"
        v-for="(item, index) in options"
        :key="index"
        @click.self="changeHandler(item, $event)"
      >
        <input type="radio" name="segment" />
        <div>{{ item.label }}</div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SSegment',
  data() {
    return {
      w: 0,
      x: 0,
      isInit: false
    };
  },
  props: {
    options: {
      required: true,
      type: Array
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$nextTick(() => {
        const firstEl = this.$refs.labelRef[0];
        this.w = firstEl.clientWidth;
        this.x = firstEl.offsetLeft;
        this.isInit = true;
      });
    },

    changeHandler(item, ev) {
      if (item.disabled) return;
      this.w = ev.target.clientWidth;
      this.x = ev.target.offsetLeft;
      this.$emit('change', item.value);
    }
  }
};
</script>

<style scoped lang="scss">
.s-segment {
  display: inline-block;
  color: rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 2px;
  box-sizing: border-box;
}

.segment-wrap {
  position: relative;
  display: flex;
  align-items: stretch;
  justify-items: flex-start;
  width: 100%;
  .segment-item {
    position: relative;
    text-align: center;
    cursor: pointer;
    &.segment-item-disabled {
      color: #00000040;
      cursor: not-allowed;
    }
    & > div {
      min-height: 28px;
      padding: 0 11px;
      line-height: 28px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: keep-all;
      pointer-events: none;
    }
    & > input {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      opacity: 0;
      pointer-events: none;
    }
  }

  .segment-thumb {
    display: none;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.07), 0 0 1px rgba(0, 0, 0, 0.07);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    padding: 4px 0;
    box-sizing: border-box;
    transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    will-change: transform, width;
  }
}
</style>