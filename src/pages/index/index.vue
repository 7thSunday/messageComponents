<template>
  <div class="index flex flex-col" style="height: 100vh">
    <!-- 集成 开始 -->
    <div style="margin-bottom: 50px;">
      <p>集成</p>
      <sg-button @click="showMsgPanel=true">打开消息提醒面板</sg-button>
      <message-panel :visible.sync="showMsgPanel" MsgBus="index" @on-item-click="handleClickMsg"></message-panel>
      <sg-button @click="showChat=!showChat">打开聊天窗口</sg-button>
      <chat-window :visible.sync="showChat" :currentUser="cu" MsgBus="index"></chat-window>
    </div>
    <!-- 集成 结束 -->

    <!-- 独立 开始 -->
    <!-- <div>
      <p>独立</p>
      <sg-button @click="showMsgPanel1=true">打开消息提醒面板</sg-button>
      <message-panel :visible.sync="showMsgPanel1" @on-item-click="handleClickMsg"></message-panel>
      <sg-button @click="showChat1=!showChat1">打开聊天窗口</sg-button>
      <chat-window :visible.sync="showChat1" :currentUser="cu"></chat-window>
    </div>-->
    <!-- 独立 结束 -->
  </div>
</template>

<script>
import messageBus from '@/mixins/messageBus.js';
import MessagePanel from '_c/MessagePanel/MessagePanel';
import ChatWindow from '_c/ChatWindow/ChatWindow';
export default {
  name: 'index',
  components: {
    MessagePanel,
    ChatWindow
  },
  mixins: [messageBus],
  data() {
    return {
      showMsgPanel: false,
      showMsgPanel1: false,
      showChat: false,
      showChat1: false,
      cu: {
        id: '602ee03d-c009-4096-8c72-8db07bf7d93a',
        name: '李莉'
      }
    };
  },
  methods: {
    // 消息推送条目点击
    handleClickMsg(config, msg) {
      console.log('点击了条目，在这里进行跳转操作', config, msg);
      // if (config.targetUrl) {
      //   let pageUrl = config.targetUrl + msg.targetParam,
      //     moduleId = 'FromMSG_' + new Date().getTime();
      //   let obj = {
      //     pageUrl,
      //     moduleId,
      //     name: '新标签页'
      //   };
      //   this.$parent.addTab(obj);
      //   this.$emit('update:showMessagePush', false);
      // }
    }
  }
};
</script>
