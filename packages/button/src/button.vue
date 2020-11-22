<template>
  <button
    class="s-button"
    :class="[
      's-button--' + type,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
    @click="clickHandler"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "SButton",
  props: {
    type: {
      type: String,
      default: "danger",
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  methods: {
    clickHandler(ev) {
      this.$emit("click", ev);
    },
  },
};
</script>

<style lang="scss">
.s-button {
  padding: 10px 20px;
  border: 1px solid;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  appearance: none;
  outline: none;
  line-height: 1;
  cursor: pointer;
  &.is-round {
    border-radius: 18px;
  }
}
.s-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
  }
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  &.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
    &:hover, &:focus {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }
}
.s-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
  }
  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  &.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
    &:hover, &:focus {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }
}
.s-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
  }
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  &.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
    &:hover, &:focus {
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }
}
.s-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
  }
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
  &.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
    &:hover, &:focus {
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
}
.s-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
  }
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
  &.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
    &:hover, &:focus {
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
}
</style>