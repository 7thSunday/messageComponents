<template>
  <div
    class="message-box"
    id="message-box"
    v-show="isVisible"
    @mouseup.stop="_=>true"
    @click.stop="_=>true"
    @dblclick.stop="_=>true"
  >
    <div class="header">
      <div
        class="header-title"
        :class="current==index?'active':''"
        v-for="(item,index) in dataProps"
        :key="index"
        @click="handleSwitch(index)"
        :title="item.name"
      >
        {{item.name.length > 9 ? item.name.slice(0,9)+"..." : item.name}}
        <span
          v-if="getCount(index)>0"
        >({{getCount(index)}})</span>
      </div>
    </div>
    <div class="body">
      <transition v-for="(page, pageIndex) in dataProps" :key="pageIndex">
        <div class="list" v-if="current==pageIndex">
          <div
            class="list-item"
            v-for="(data, index) in page.data?page.data.rows:[]"
            :key="index"
            @click="handleClick(pageIndex,data)"
          >
            <div v-if="data.mSign==0">
              <div :class="['row','ellipsis', index]">
                {{data.senderName}}的聊天消息
                <sg-badge :value="data.count"></sg-badge>
              </div>
            </div>
            <div v-else class="sys-msg">
              <div class="mark" v-if="data.msign>0" @click.stop="handleClickMark(pageIndex,data)">
                <sg-icon type="icon-close" size="12"></sg-icon>
              </div>
              <div :class="['info']">
                <div class="row-box">
                  <div :class="['row','ellipsis', index]">
                    <sg-tooltip :content="data.content" placement="bottom" transfer>{{data.content}}</sg-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="load-more"
            v-show="page.data&&page.data.store&&page.data.store.length>0"
            @click.stop="loadMore(pageIndex)"
          >更多</div>
          <div
            class="empty-text"
            v-if="!page.data||!page.data.rows||page.data.rows.length==0"
          >暂无{{page.name}}</div>
        </div>
      </transition>
    </div>
    <!-- <div class="footer"></div> -->
  </div>
</template>
<script>
import emitter from '@/mixins/emitter.js';
import { $http, openWS } from '@/util/msgUtil.js';
export default {
  name: 'MessagePanel',
  mixins: [emitter],
  props: {
    visible: {// 消息面板显隐
      type: Boolean,
      default: false
    }, 
    MsgBus: {
      // 总线组件名
      type: String,
      default: ''
    },
    apiConfig: {
      // 接口配置
      type: Object,
      default() {
        return {
          fetchMsgConfig: '/mainWeb/chat/getReminderPanelModule', // 获取消息配置
          fetchMsgNotRead: '/mainWeb/chat/getNotReadMsgList', // 获取未读消息
          markAsReaded: '/mainWeb/chat/updateMsgsType', // 消息标记为已读
          wsUrl: 'ws://' + window.location.host + '/mainWeb/system/websocket' // websocket地址
        };
      }
    },
    faces: {
      // 表情配置
      type: Array,
      default() {
        return [
          { code: 0, title: '[微笑]' },
          { code: 1, title: '[嘻嘻]' },
          { code: 2, title: '[哈哈]' },
          { code: 3, title: '[可爱]' },
          { code: 4, title: '[可怜]' },
          { code: 5, title: '[挖鼻]' },
          { code: 6, title: '[吃惊]' },
          { code: 7, title: '[害羞]' },
          { code: 8, title: '[挤眼]' },
          { code: 9, title: '[闭嘴]' },
          { code: 10, title: '[鄙视]' },
          { code: 11, title: '[爱你]' },
          { code: 12, title: '[泪]' },
          { code: 13, title: '[偷笑]' },
          { code: 14, title: '[亲亲]' },
          { code: 15, title: '[生病]' },
          { code: 16, title: '[太开心]' },
          { code: 17, title: '[白眼]' },
          { code: 18, title: '[右哼哼]' },
          { code: 19, title: '[左哼哼]' },
          { code: 20, title: '[嘘]' },
          { code: 21, title: '[衰]' },
          { code: 22, title: '[委屈]' },
          { code: 23, title: '[吐]' },
          { code: 24, title: '[哈欠]' },
          { code: 25, title: '[抱抱]' },
          { code: 26, title: '[怒]' },
          { code: 27, title: '[疑问]' },
          { code: 28, title: '[馋嘴]' },
          { code: 29, title: '[拜拜]' },
          { code: 30, title: '[思考]' },
          { code: 31, title: '[汗]' },
          { code: 32, title: '[困]' },
          { code: 33, title: '[睡]' },
          { code: 34, title: '[钱]' },
          { code: 35, title: '[失望]' },
          { code: 36, title: '[酷]' },
          { code: 37, title: '[色]' },
          { code: 38, title: '[哼]' },
          { code: 39, title: '[鼓掌]' },
          { code: 40, title: '[晕]' },
          { code: 41, title: '[悲伤]' },
          { code: 42, title: '[抓狂]' },
          { code: 43, title: '[黑线]' },
          { code: 44, title: '[阴险]' },
          { code: 45, title: '[怒骂]' },
          { code: 46, title: '[互粉]' },
          { code: 47, title: '[心]' },
          { code: 48, title: '[伤心]' },
          { code: 49, title: '[猪头]' },
          { code: 50, title: '[熊猫]' },
          { code: 51, title: '[兔子]' },
          { code: 52, title: '[ok]' },
          { code: 53, title: '[耶]' },
          { code: 54, title: '[good]' },
          { code: 55, title: '[NO]' },
          { code: 56, title: '[赞]' },
          { code: 57, title: '[来]' },
          { code: 58, title: '[弱]' },
          { code: 59, title: '[草泥马]' },
          { code: 60, title: '[神马]' },
          { code: 61, title: '[囧]' },
          { code: 62, title: '[浮云]' },
          { code: 63, title: '[给力]' },
          { code: 64, title: '[围观]' },
          { code: 65, title: '[威武]' },
          { code: 66, title: '[奥特曼]' },
          { code: 67, title: '[礼物]' },
          { code: 68, title: '[钟]' },
          { code: 69, title: '[话筒]' },
          { code: 70, title: '[蜡烛]' },
          { code: 71, title: '[蛋糕]' }
        ];
      }
    }
  },
  watch: {
    /**
     * @description 观测消息面板的显隐，初始化面板
     * @param {Boolean} val
     */
    visible: {
      handler(val) {
        this.isVisible = val;
        if (val) {
          this.initMsgPanel();
        }
      }
    }
  },
  data() {
    return {
      dataProps: [],
      isVisible: this.visible,
      msgPool: {},
      current: '',
      config: {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }
    };
  },
  computed: {
    actived() {
      return this.dataProps[this.current];
    }
  },
  methods: {
    /**
     * @description 初始化消息面板
     */
    initMsgPanel() {
      // 加载配置
      $http
        .fetch(this.apiConfig.fetchMsgConfig)
        .then(res => {
          this.dataProps = res.sort((a, b) => a.order - b.order);
          // 获取未读消息...
          for (let i = 0; i < this.dataProps.length; i++) {
            this._fetchsNotReadMsg(i, this.dataProps[i].mSign);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * @description 获取未读消息
     * @param {any} index 消息配置的标识
     * @param {any} mSign 消息类型
     */
    _fetchsNotReadMsg(index, mSign) {
      let qs = { msign: mSign };
      $http
        .fetch(this.apiConfig.fetchMsgNotRead, qs)
        .then(res => {
          if (mSign === 0) {
            let chatMsgData = this._mergeChatMsg(res);
            if (chatMsgData.length == 0) return;
            this.setChatMsg(chatMsgData);
            return;
          }
          for (let item of res) {
            let patt = /\$\{.*?\}/g,
              result = item.content.match(patt);
            let targetParam = [];
            if (result && result.length > 0) {
              for (let pa of result) {
                targetParam.push(this._getParam(pa));
                item.content = item.content.replace(pa, '');
              }
            }
            item.targetParam = targetParam.join('');
          }
          this.setMsgPageList(index, res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * @description 获取跳转路径参数
     * @param {String} str 消息内容
     * @returns {String} 跳转路径参数
     */
    _getParam(str) {
      let end = str.indexOf('}');
      return str.substring(2, end);
    },
    /**
     * @description 合并聊天消息
     * @param {Array} arr 消息列表
     * @returns {Array} 合并后的消息列表
     */
    _mergeChatMsg(arr) {
      let temp = {
        total: 0,
        rows: []
      };
      for (let msg of arr) {
        if (msg.msign == 0) {
          let i = 0;
          temp.total++;
          for (; i < temp.rows.length; i++) {
            if (temp.rows[i].ids && temp.rows[i].senderId == msg.senderId) {
              temp.rows[i].count++;
              temp.rows[i].ids.push(msg.rid);
              if (temp.sendTime < msg.sendTime) {
                temp.sendTime = msg.sendTime;
              }
              break;
            }
          }
          if (i >= temp.rows.length) {
            temp.rows.push({
              senderId: msg.senderId,
              senderName: msg.senderName,
              sendTime: msg.sendTime,
              count: 1,
              mSign: 0,
              ids: [msg.rid]
            });
          }
        }
      }
      return temp;
    },
    /**
     * @description 为对应的配置设置消息列表
     * @param {any} index 消息配置的标识
     * @param {Array} list 消息列表
     */
    setMsgPageList(index, list) {
      let rows = [],
        i = 0;
      while (list.length > 0) {
        rows.push(list.shift());
        if (++i >= 10) break;
      }
      let dataObj = {
        rows: rows,
        store: list,
        total: list.length + rows.length
      };
      this.$set(this.dataProps[index], 'data', dataObj);
    },
    /**
     * @description 切换tab
     * @param {any} index 消息配置标识
     */
    handleSwitch(index) {
      this.current = index;
    },
    /**
     * @description 设置聊天消息
     * @param {any} data 聊天消息数据
     */
    // 设置聊天消息
    setChatMsg(data) {
      for (let page of this.dataProps) {
        if (page.oMsg) {
          this.$set(page, 'data', data);
          break;
        }
      }
    },
    /**
     * @description 获取某栏目下消息条目数量
     * @param {any} index 消息配置标识
     * @returns {Number} 消息条目数量
     */
    getCount(index) {
      if (this.dataProps[index].data) {
        let size = this.dataProps[index].data.total;
        if (size) return size;
      }
      return 0;
    },
    /**
     * @description 获取消息总条目数
     * @returns {Number} 消息总条目数量
     */
    // 获取总条目数
    getTotalCount() {
      let res = 0;
      for (let index in this.dataProps) {
        res += this.getCount(index);
      }
      return res;
    },
    /**
     * @description 显示更多消息
     * @param {any} index 消息配置标识
     */
    loadMore(index) {
      let page = this.dataProps[index];
      if (page.data.store.length <= 0) {
        return;
      }
      let i = 0;
      while (page.data.store.length > 0) {
        page.data.rows.push(page.data.store.shift());
        if (++i >= 10) break;
      }
    },
    /**
     * @description 消息条目的点击事件
     * @param {any} pageIndex 消息配置标识
     * @param {Object} data 消息对象
     */
    handleClick(pageIndex, data) {
      if (this.dataProps[pageIndex].oMsg) {
        // 改变状态为已读
        this._markMsgReaded(data.ids);
      } else {
        this._markMsgReaded([data.rid]);
      }
      this.$emit('update:visible', false);
      this.$emit('on-item-click', this.dataProps[pageIndex], data);
      if (this.MsgBus) {
        this.dispatch(this.MsgBus, '--msg-panel-item-click--', {
          config: this.dataProps[pageIndex],
          data: data
        });
      }
    },
    /**
     * @description 标记为已读点击事件（条目右上角的叉
     * @param {any} pageIndex 消息配置标识
     * @param {Object} data 消息对象
     */
    handleClickMark(pageIndex, data) {
      this.$emit('on-item-mark', this.dataProps[pageIndex], data);
      this._markMsgReaded([data.rid]);
      let list = this.dataProps[pageIndex].data.rows;
      for (let i = 0; i < list.length; i++) {
        if (list[i].rid && list[i].rid == data.rid) {
          list.splice(i, 1);
          this.dataProps[pageIndex].data.total--;
          break;
        }
      }
    },
    /**
     * @description 将消息标记为已读状态
     * @param {Array} ids 消息id列表
     */
    _markMsgReaded(ids) {
      if (ids.length === 0) return;
      let para = {
        msgsId: ids.join(','),
        type: 12
      };
      $http
        .post(this.apiConfig.markAsReaded, para);
    },
    /**
     * @description 弹出提醒
     * @param {Array} data 消息列表
     */
    showNotice(data) {
      for (let msg of data) {
        let desc = msg.content ? msg.content : '';
        let patt = /\$\{.*?\}/g,
          result = desc.match(patt);
        let targetParam = [];
        if (result && result.length > 0) {
          for (let pa of result) {
            targetParam.push(this._getParam(pa));
            desc = desc.replace(pa, '');
          }
        }
        msg.targetParam = targetParam.join('');
        desc = this._renderTextEmoji(desc);
        msg.rid && this.$set(this.msgPool, msg.rid, true);
        this.$notice.open({
          type: 'info',
          name: msg.rid,
          title: msg.senderName? msg.senderName: '' + '    ' + msg.title? msg.title: '',
          desc: '辅助描述内容',
          duration: msg.msign == 910 || msg.msign == 911 ? 0 : 3,
          onClose: () => {
            msg.rid && this.$delete(this.msgPool, msg.rid);
          },
          render: h => {
            return h(
              'span',
              {
                style: {
                  display: 'block',
                  'padding-left': '16px'
                },
                on: {
                  click: () => {
                    this._handleFloatClick(msg);
                    this.$notice.close(msg.rid);
                    msg.rid && this.$delete(this.msgPool, msg.rid);
                  }
                }
              },
              desc
            );
          }
        });
      }
    },
    /**
     * @description 将消息中的表情替换为对应的文本
     * @param {String} content 消息内容
     * @returns {String} 替换后的消息内容
     */
    _renderTextEmoji(content) {
      if (!content) return;
      let arr = [],
        patt = /#\^\w+\^#/g,
        result;
      result = content.match(patt);
      if (result != '' && result != null) {
        for (let i = 0; i < result.length; i++) {
          let code = result[i].match(/\d+/);
          if (code[0] > 71) break;
          arr.push({ imgSrc: result[i], code: parseInt(code[0]) });
        }
        for (let i = 0; i < arr.length; i++) {
          content = content.replace(
            arr[i].imgSrc,
            this.faces[arr[i].code].title
          );
        }
      }
      content = content.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      return content;
    },
    /**
     * @description 弹出提醒的点击事件
     * @param {Object} data 消息对象
     */
    _handleFloatClick(data) {
      this.$emit('on-float-click', data);
    }
  },
  mounted() {
    this.initMsgPanel();
    document.addEventListener('mouseup', () => {
      this.$emit('update:visible', false);
    });
    if (this.MsgBus) {
      // 使用总线接收消息
      this.$on('--msg-received--', p => {
        this.showNotice(p.data);
        this.initMsgPanel();
      });
    } else {
      // 不使用总线，启动websocket接收消息
      openWS({
        url: this.apiConfig.wsUrl,
        onMessage: msg => {
          this.showNotice(msg);
          this.initMsgPanel();
        }
      });
    }
  }
};
</script>
