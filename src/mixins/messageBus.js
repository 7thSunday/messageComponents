import emitter from '@/mixins/emitter.js';
export default {
  mixins: [emitter],
  mounted() {
    // 监听消息面板点击事件
    this.$on('--msg-panel-item-click--', p => {
      if (p.config.oMsg) {
        let obj = {
          realName: p.data.senderName,
          userId: p.data.senderId
        };
        // 通知聊天窗口打开对话
        this.broadcast('ChatWindow', '--start-chat-from-bus--', obj);
      }
    });
    if (!this.ws) this.openWebSocket();
  },
  props: {
    wsUrl: {
      type: String,
      default: 'ws://' + window.location.host + '/mainWeb/system/websocket'
    }
  },
  data() {
    return {
      ws: null
    };
  },
  methods: {
    /**
     * @description 打开websocket
     */
    openWebSocket() {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onerror = err => {
        this.$msg.show({
          type: 'error',
          content: 'websocket已断开连接'
        });
      };
      this.ws.onopen = () => {
        console.log('websocket opended.');
      };
      this.ws.onmessage = msg => {
        let data = JSON.parse(msg.data);
        this._handleNewMsgReceived(data);
        this.$emit('on-msg-received', data);
      };
    },
    /**
     * @description 接收新消息，分发给其他消息组件
     * @param {Array} data 消息列表
     */
    _handleNewMsgReceived(data) {
      // 分发给oMsg
      this.broadcast('ChatWindow', '--msg-received--', { data });
      // 分发给MessagePanel
      this.broadcast('MessagePanel', '--msg-received--', { data });
    }
  }
};
