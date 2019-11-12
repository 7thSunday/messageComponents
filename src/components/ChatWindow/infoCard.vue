<template>
  <div
    class="info-card"
    ref="card"
    v-show="visible"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <div class="name">{{data.realName}}</div>
    <div class="phone">
      <svg
        t="1565164217816"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2001"
        width="14"
        height="14"
      >
        <path
          d="M862.9 673.6c-84.3-68.5-130.7-79.8-166.6-50.6-12.6 10.3-53.6 65.3-67.2 78.8-16.1 16-39.8 11.8-68-4.8l-2.4-1.5c-28.1-17.1-94.8-77-94.9-76-10.8-10.1-21.5-20.6-32-31.1-79.3-79.3-146-154.6-110-191.2 13.4-13.6 68.2-54.8 78.4-67.5 29.1-36.1 17.8-82.7-50.4-167.4-62-77.1-119-76.3-158.9-42.8-19.4 16.2-59.4 68.5-74.3 90.2-46.3 68-17 272.5 209.4 486 13 12.3 26 24 38.8 35.2 148.8 146.2 290 197.2 379 195.7h1.1c19.3 0.4 35.7-2.3 48.8-7.9 8.4-2.9 15.8-6.5 22-10.8 21.6-14.9 73.6-55.2 89.8-74.6 33.3-40.1 34.2-97.3-42.6-159.7z"
          p-id="2002"
          fill="#3296fa"
        />
      </svg>
      <span class="val">{{data.phone || '-'}}</span>
    </div>
    <div class="email">
      <svg
        t="1565164406498"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3116"
        width="14"
        height="14"
      >
        <path
          d="M153.258667 163.1232h714.752c48.810667 0 88.712533 38.468267 89.326933 85.845333l-446.464 242.517334-446.5664-242.346667c0.4096-47.445333 40.004267-86.016 88.917333-86.016z m-88.951467 178.858667l-0.4096 429.056c0 47.786667 40.209067 86.869333 89.326933 86.869333h714.752c49.152 0 89.361067-39.082667 89.361067-86.869333V341.777067l-436.0192 231.253333a22.6304 22.6304 0 0 1-21.4016 0L64.3072 342.016z"
          p-id="3117"
          fill="#3296fa"
        />
      </svg>
      <span class="val">{{data.email || '-'}}</span>
    </div>
    <div class="btn-chat" @click="handleClickStartChat">
      <svg
        t="1564392126649"
        class="icon"
        viewBox="0 0 1056 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="10126"
        width="24"
        height="24"
      >
        <path
          d="M225.12 832.768H1056V0H0v1024l225.12-191.232z m741.696-89.344H192.288L89.184 831.04V89.344h877.632v654.08z"
          p-id="10127"
          fill="#3296fa"
        />
        <path d="M256 288h576v64H256V288z m0 192h352v64H256v-64z" p-id="10128" fill="#3296fa" />
      </svg>
    </div>
    <div class="pin"></div>
  </div>
</template>
<script>
export default {
  name: 'infoCard',
  props: {
    data: {
      type: Object,
      default() {
        return null;
      }
    },
    target: '',
    visible: false
  },
  data() {
    return {
      myTarget: this.target,
      timer: null
    };
  },
  watch: {
    target(val) {
      if (!val) return;
      this.myTarget = val;
      this.setPosition();
    }
  },
  methods: {
    // 点击聊天按钮
    handleClickStartChat() {
      this.$emit('on-start-chat');
    },
    // 设置位置
    setPosition() {
      let obj = JSON.parse(this.myTarget);
      this.$refs.card.style.top = obj.top - 5 + 'px';
      this.$refs.card.style.left = obj.right - 20 + 'px';
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.handleMouseleave();
      }, 2000);
    },
    handleMouseleave() {
      this.$emit('update:visible');
    },
    handleMouseenter() {
      clearTimeout(this.timer);
    }
  }
};
</script>
<style lang="scss" scoped>
.info-card {
  border-radius: 5px;
  line-height: 1;
  width: 280px;
  background: #fff;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  color: #666;
  padding: 20px;
  padding-right: 40px;
  position: fixed;
  .phone {
    margin-bottom: 15px;
  }
  .name {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .btn-chat {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
  // .pin {
  //   position: absolute;
  //   width: 0px;
  //   height: 0px;
  //   border-style: solid;
  //   border-color: #fff #fff transparent transparent;
  //   border-width: 7px;
  //   box-shadow: 3px -3px 3px 1px rgba(0, 0, 0, 0.1);
  //   transform: rotate(-135deg);
  //   top: 15px;
  //   left: -7px;
  // }
}
</style>
