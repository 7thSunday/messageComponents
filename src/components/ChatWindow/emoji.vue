<template>
  <div v-show="visible" ref="picker" class="emoji-picker" @click.stop="_=>true">
    <div class="emoji" v-for="item in faces" :key="item.code" @click="handleClickEmoji(item)">
      <img :src="faceSrc+item.img" :title="item.title" :alt="item.title" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'emoji',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.setPosition();
      }
    }
  },
  data() {
    return {
      faceSrc: '/public/images/face/',
      faces: [
        { code: 0, title: '[微笑]', img: '0.gif' },
        { code: 1, title: '[嘻嘻]', img: '1.gif' },
        { code: 2, title: '[哈哈]', img: '2.gif' },
        { code: 3, title: '[可爱]', img: '3.gif' },
        { code: 4, title: '[可怜]', img: '4.gif' },
        { code: 5, title: '[挖鼻]', img: '5.gif' },
        { code: 6, title: '[吃惊]', img: '6.gif' },
        { code: 7, title: '[害羞]', img: '7.gif' },
        { code: 8, title: '[挤眼]', img: '8.gif' },
        { code: 9, title: '[闭嘴]', img: '9.gif' },
        { code: 10, title: '[鄙视]', img: '10.gif' },
        { code: 11, title: '[爱你]', img: '11.gif' },
        { code: 12, title: '[泪]', img: '12.gif' },
        { code: 13, title: '[偷笑]', img: '13.gif' },
        { code: 14, title: '[亲亲]', img: '14.gif' },
        { code: 15, title: '[生病]', img: '15.gif' },
        { code: 16, title: '[太开心]', img: '16.gif' },
        { code: 17, title: '[白眼]', img: '17.gif' },
        { code: 18, title: '[右哼哼]', img: '18.gif' },
        { code: 19, title: '[左哼哼]', img: '19.gif' },
        { code: 20, title: '[嘘]', img: '20.gif' },
        { code: 21, title: '[衰]', img: '21.gif' },
        { code: 22, title: '[委屈]', img: '22.gif' },
        { code: 23, title: '[吐]', img: '23.gif' },
        { code: 24, title: '[哈欠]', img: '24.gif' },
        { code: 25, title: '[抱抱]', img: '25.gif' },
        { code: 26, title: '[怒]', img: '26.gif' },
        { code: 27, title: '[疑问]', img: '27.gif' },
        { code: 28, title: '[馋嘴]', img: '28.gif' },
        { code: 29, title: '[拜拜]', img: '29.gif' },
        { code: 30, title: '[思考]', img: '30.gif' },
        { code: 31, title: '[汗]', img: '31.gif' },
        { code: 32, title: '[困]', img: '32.gif' },
        { code: 33, title: '[睡]', img: '33.gif' },
        { code: 34, title: '[钱]', img: '34.gif' },
        { code: 35, title: '[失望]', img: '35.gif' },
        { code: 36, title: '[酷]', img: '36.gif' },
        { code: 37, title: '[色]', img: '37.gif' },
        { code: 38, title: '[哼]', img: '38.gif' },
        { code: 39, title: '[鼓掌]', img: '39.gif' },
        { code: 40, title: '[晕]', img: '40.gif' },
        { code: 41, title: '[悲伤]', img: '41.gif' },
        { code: 42, title: '[抓狂]', img: '42.gif' },
        { code: 43, title: '[黑线]', img: '43.gif' },
        { code: 44, title: '[阴险]', img: '44.gif' },
        { code: 45, title: '[怒骂]', img: '45.gif' },
        { code: 46, title: '[互粉]', img: '46.gif' },
        { code: 47, title: '[心]', img: '47.gif' },
        { code: 48, title: '[伤心]', img: '48.gif' },
        { code: 49, title: '[猪头]', img: '49.gif' },
        { code: 50, title: '[熊猫]', img: '50.gif' },
        { code: 51, title: '[兔子]', img: '51.gif' },
        { code: 52, title: '[ok]', img: '52.gif' },
        { code: 53, title: '[耶]', img: '53.gif' },
        { code: 54, title: '[good]', img: '54.gif' },
        { code: 55, title: '[NO]', img: '55.gif' },
        { code: 56, title: '[赞]', img: '56.gif' },
        { code: 57, title: '[来]', img: '57.gif' },
        { code: 58, title: '[弱]', img: '58.gif' },
        { code: 59, title: '[草泥马]', img: '59.gif' },
        { code: 60, title: '[神马]', img: '60.gif' },
        { code: 61, title: '[囧]', img: '61.gif' },
        { code: 62, title: '[浮云]', img: '62.gif' },
        { code: 63, title: '[给力]', img: '63.gif' },
        { code: 64, title: '[围观]', img: '64.gif' },
        { code: 65, title: '[威武]', img: '65.gif' },
        { code: 66, title: '[奥特曼]', img: '66.gif' },
        { code: 67, title: '[礼物]', img: '67.gif' },
        { code: 68, title: '[钟]', img: '68.gif' },
        { code: 69, title: '[话筒]', img: '69.gif' },
        { code: 70, title: '[蜡烛]', img: '70.gif' },
        { code: 71, title: '[蛋糕]', img: '71.gif' }
      ]
    };
  },
  methods: {
    handleClickEmoji(emoji) {
      emoji.path = this.faceSrc + emoji.img;
      this.$emit('on-pick', emoji);
      this.closeEmoji();
    },
    closeEmoji() {
      this.$emit('update: visible', false);
    },
    setPosition() {
      let h = getComputedStyle(this.$refs.picker.parentElement)['height'];
      let position = getComputedStyle(this.$refs.picker.parentElement)[
        'position'
      ];
      if (position == 'static') {
        this.$refs.picker.parentElement.style.position = 'relative';
      }
      this.$refs.picker.style.bottom = `${h}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.emoji-picker {
  position: absolute;
  user-select: none;
  width: 272px;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);
  .emoji {
    display: inline-block;
    &:hover {
      background-color: #eee;
    }
    img {
      margin: 4px;
      width: 22px;
      height: 22px;
    }
  }
}
</style>
