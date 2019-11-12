<template>
  <div class="cover" @click.stop="_=>true" ref="cover" v-show="visible">
    <input
      style="display:none;"
      id="send-file"
      ref="sendFile"
      type="file"
      name="file"
      @change="handleChangeSendFile"
    />
    <!-- <input ref="sendFile" type="file" id="send-file" style="display:none" @change="handleChangeSendFile"> -->
    <div class="online-msg">
      <div class="online-msg-list">
        <div class="online-msg-list-header">
          <!-- <sg-input clearable>
            <sg-icon slot="prepend" style="background:none;" type="icon-search"></sg-icon>
          </sg-input>-->
        </div>
        <div class="online-msg-list-body">
          <div class="side-bar" ref="sideBar">
            <div class="side-bar-item" :key="0" @click="handleClickNav(0)">
              <svg
                t="1563853076791"
                class="icon-idle"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6445"
                width="32"
                height="32"
              >
                <path
                  d="M832 128 192 128C121.344 128 64 185.344 64 256l0 384c0 70.656 57.344 128 128 128l127.808 0 0 65.408c0 24 13.44 45.568 34.944 56.192 8.896 4.288 18.368 6.464 27.776 6.464 13.504 0 26.88-4.416 38.08-12.992L570.048 768 832 768c70.656 0 128-57.344 128-128L960 256C960 185.344 902.656 128 832 128zM320 512C284.608 512 256 483.392 256 448s28.608-64 64-64 64 28.608 64 64S355.392 512 320 512zM512 512C476.608 512 448 483.392 448 448s28.608-64 64-64 64 28.608 64 64S547.392 512 512 512zM704 512c-35.392 0-64-28.608-64-64s28.608-64 64-64c35.328 0 64 28.608 64 64S739.328 512 704 512z"
                  p-id="6446"
                  fill="#bbbbbb"
                />
              </svg>
              <svg
                t="1563853076791"
                class="icon-active"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6445"
                width="32"
                height="32"
              >
                <path
                  d="M832 128 192 128C121.344 128 64 185.344 64 256l0 384c0 70.656 57.344 128 128 128l127.808 0 0 65.408c0 24 13.44 45.568 34.944 56.192 8.896 4.288 18.368 6.464 27.776 6.464 13.504 0 26.88-4.416 38.08-12.992L570.048 768 832 768c70.656 0 128-57.344 128-128L960 256C960 185.344 902.656 128 832 128zM320 512C284.608 512 256 483.392 256 448s28.608-64 64-64 64 28.608 64 64S355.392 512 320 512zM512 512C476.608 512 448 483.392 448 448s28.608-64 64-64 64 28.608 64 64S547.392 512 512 512zM704 512c-35.392 0-64-28.608-64-64s28.608-64 64-64c35.328 0 64 28.608 64 64S739.328 512 704 512z"
                  p-id="6446"
                  fill="#3296fa"
                />
              </svg>
            </div>
            <div class="side-bar-item" :key="1" @click="handleClickNav(1)">
              <svg
                t="1563853542836"
                class="icon-idle"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="20826"
                width="32"
                height="32"
              >
                <path
                  d="M534.101529 489.933691l-7.71318-3.062183 6.547006-5.104944c48.630994-37.990641 76.533062-94.743759 76.533062-155.725233 0-109.232876-89.449019-198.102721-199.423471-198.102721s-199.443038 88.869845-199.443038 198.102721c0 60.965821 27.902067 117.720896 76.535019 155.725233l6.547006 5.104944-7.711223 3.062183c-128.486476 51.029868-211.515671 172.493867-211.515672 309.454667v67.616532c0 16.021187 13.129234 29.060414 29.256081 29.060414h612.640174c16.132717 0 29.254124-13.033357 29.254124-29.060414v-67.616532c0.01761-136.9608-83.007672-258.424799-211.505888-309.454667zM828.654222 624.632584c-19.116634 0-34.609521 15.492887-34.609521 34.607564 0 19.11272 15.494844 34.609521 34.609521 34.609521h142.744707v-69.215128h-142.744707zM759.102547 483.202758c-19.114677 0-34.607564 15.494844-34.607564 34.60952 0 19.114677 15.492887 34.605607 34.607564 34.605608h212.296382v-69.215128H759.102547zM703.509733 333.237951c-19.114677 0-34.609521 15.494844-34.609521 34.607564 0 19.116634 15.4968 34.609521 34.609521 34.609521h267.889196v-69.217085H703.509733z"
                  fill="#bbbbbb"
                  p-id="20827"
                />
              </svg>
              <svg
                t="1563853542836"
                class="icon-active"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="20826"
                width="32"
                height="32"
              >
                <path
                  d="M534.101529 489.933691l-7.71318-3.062183 6.547006-5.104944c48.630994-37.990641 76.533062-94.743759 76.533062-155.725233 0-109.232876-89.449019-198.102721-199.423471-198.102721s-199.443038 88.869845-199.443038 198.102721c0 60.965821 27.902067 117.720896 76.535019 155.725233l6.547006 5.104944-7.711223 3.062183c-128.486476 51.029868-211.515671 172.493867-211.515672 309.454667v67.616532c0 16.021187 13.129234 29.060414 29.256081 29.060414h612.640174c16.132717 0 29.254124-13.033357 29.254124-29.060414v-67.616532c0.01761-136.9608-83.007672-258.424799-211.505888-309.454667zM828.654222 624.632584c-19.116634 0-34.609521 15.492887-34.609521 34.607564 0 19.11272 15.494844 34.609521 34.609521 34.609521h142.744707v-69.215128h-142.744707zM759.102547 483.202758c-19.114677 0-34.607564 15.494844-34.607564 34.60952 0 19.114677 15.492887 34.605607 34.607564 34.605608h212.296382v-69.215128H759.102547zM703.509733 333.237951c-19.114677 0-34.609521 15.494844-34.609521 34.607564 0 19.116634 15.4968 34.609521 34.609521 34.609521h267.889196v-69.217085H703.509733z"
                  fill="#3296fa"
                  p-id="20827"
                />
              </svg>
            </div>
            <!-- <div class="side-bar-item" @click="handleClickNav(2)">
              <sg-icon color="#bbb" type="icon-shezhi"></sg-icon>
            </div>-->
          </div>
          <div class="list-content">
            <div v-show="showList==0" class="conversation-list">
              <div
                class="conversation-item"
                :style="i==currentChatIndex?'background:#d4e3f0':''"
                v-for="(person,i) in chatList"
                :key="i"
                @click="switchChat(i)"
              >
                <div class="avatar">
                  <svg
                    t="1563853961169"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2179"
                    width="32"
                    height="32"
                  >
                    <path
                      d="M510.45 70.554c-243.163 0-442.115 198.951-442.115 442.115 0 243.16 198.952 442.11 442.116 442.11 243.159 0 442.11-198.95 442.11-442.11 0-243.165-198.951-442.115-442.11-442.115z m11.051 132.633c168.556 0 168.556 127.11 168.556 198.95 0 71.847-66.318 204.48-168.556 207.24-99.475 0-168.556-132.632-168.556-207.24 0.001-71.841 0.001-198.95 168.556-198.95z m-11.05 726.723c-127.11 0-243.164-58.03-320.534-149.211 11.051-27.635 24.868-58.03 44.212-74.607 41.446-33.162 165.79-88.425 165.79-88.425l77.37 149.215 13.816-35.923L469 686.747l44.212-44.208 44.212 44.208-19.345 46.974 11.055 35.924 80.132-146.45s124.343 55.262 165.793 88.424c19.34 13.813 33.157 38.685 41.447 60.787C761.9 869.12 643.082 929.91 510.45 929.91z m0 0"
                      fill="#8a8a8a"
                      p-id="2180"
                    />
                  </svg>
                </div>
                <div class="info">
                  <div class="top-line">
                    <span class="name ellpsis">{{person.realName}}</span>
                    <span class="time">{{getLastMsgSendTime(person)}}</span>
                  </div>
                  <div class="msg">
                    <span class="msg-content ellpsis">{{getLastMsgContent(person)}}</span>
                    <sg-badge :color="'#95c2ea'" :value="person.unReaded&&person.unReaded.length"></sg-badge>
                  </div>
                </div>
                <div class="close" @click.stop="handleClickChatClose(i)">
                  <sg-icon type="icon-delete-fill" size="16"></sg-icon>
                </div>
              </div>
            </div>
            <div v-show="showList==1" class="contact">
              <div class="top-line" ref="contactTopLine">
                <span
                  :class="index==0?'title active':'title'"
                  v-for="(item,index) in ['联系人']"
                  :key="item+index"
                  @click="handleClickContactTopLine(index)"
                >{{item}}</span>
              </div>
              <div class="contact-list">
                <!-- 好友列表 -->
                <sg-input
                  inside
                  v-show="showContact"
                  v-model="contactSearchTxt"
                  @on-enter="handleClickContactTreeFilter"
                  @on-clear="handleClickContactTreeFilter"
                >
                  <sg-icon
                    slot="append"
                    type="icon-search"
                    style="background:none;"
                    @click.native="handleClickContactTreeFilter"
                  ></sg-icon>
                </sg-input>
                <div class="contact-tree" v-show="showContact">
                  <sg-tree
                    ref="contactTree"
                    key="id"
                    :props="{'label':'text'}"
                    :data="allUserList"
                    :render="renderUserList"
                  ></sg-tree>
                </div>
                <!-- 群聊 -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="online-msg-msg">
        <div class="online-msg-msg-header">
          <span class="name">{{currentChatPartner.realName}}</span>
          <div class="close" @click="closeOMsg">
            <sg-icon type="icon-close" size="20"></sg-icon>
          </div>
        </div>
        <div class="online-msg-msg-body">
          <div class="conversation-box">
            <div class="current-conversation">
              <div class="msg-main" ref="msgContainer">
                <div class="top-line" v-show="inputAbled">
                  <span class="show-more" @click="handleClickShowMore">
                    <svg
                      t="1563868185158"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="4827"
                      width="14"
                      height="14"
                    >
                      <path
                        d="M511.215 62.066c-247.841 0-448.76 200.919-448.76 448.766 0 247.841 200.919 448.76 448.76 448.76 247.847 0 448.766-200.919 448.766-448.76 0-247.847-200.919-448.766-448.766-448.766zM734.022 733.632c-5.145 5.145-11.888 7.718-18.625 7.718-6.743 0-13.486-2.573-18.63-7.718l-211.887-211.893v-267.967c0-14.558 11.803-26.348 26.342-26.348 14.545 0 26.348 11.791 26.348 26.348v246.152l196.452 196.452c10.289 10.278 10.289 26.971 0 37.256z"
                        p-id="4828"
                        fill="#3296fa"
                      />
                    </svg>
                    {{loadMoreTxt}}
                  </span>
                </div>
                <div class="msg-list" ref="msgList">
                  <div
                    class="msg-item"
                    v-for="(msg,index) in currentChatPartner.chatHistory"
                    :key="index"
                  >
                    <div class="info">
                      <span class="name">{{msg.senderName}}</span>
                      <span class="time">{{msg.fsendTime}}</span>
                    </div>
                    <div class="content">
                      <div v-if="msg.attachPath || msg.attachPaths">
                        <div v-if="isImage(msg.attachPath||msg.attachPaths[0])">
                          <!-- <img class="img" 
                               :src="fixBrackets(msg.attachPath||msg.attachPaths[0])" 
                               @click="handleClickOpenImg(msg.attachPath||msg.attachPaths[0])"
                          alt="[图片加载失败]">-->
                          <img
                            class="img"
                            :src="msg.imgBlob"
                            @click="handleClickDownload(msg)"
                            alt="[图片加载失败]"
                          />
                        </div>
                        <div v-else>
                          <span
                            style="margin-right:10px;"
                          >文件： {{getFileName(msg.attachPath||msg.attachPaths[0])}}</span>
                          <span v-if="showProgress(msg)">{{getProgress(msg.progress)}}</span>
                          <span v-else-if="!msg.senderId||msg.senderId==currentUserId">已发送</span>
                          <span v-else class="download" @click="handleClickDownload(msg)">下载</span>
                          <!-- <a v-else target="_blank" :href="fixBrackets(msg.attachPath||msg.attachPaths[0])" :download="getFileName(msg.attachPath||msg.attachPaths[0])">
                            {{!msg.senderId||msg.senderId==currentUserId?'已发送':'下载'}}
                          </a>-->
                        </div>
                      </div>
                      <div v-else v-html="getMsgContentRenderEmoji(msg.content)"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-area">
              <div class="top-line" v-show="inputAbled">
                <div class="ctrl emotion" title="表情">
                  <svg
                    @click="showEmoji=!showEmoji"
                    t="1563870094529"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="10074"
                    width="25"
                    height="25"
                  >
                    <path
                      d="M288.0289 400.288396c0 30.777933 24.953082 55.731014 55.732613 55.731014s55.733013-24.953082 55.733013-55.731014c0-30.778532-24.953482-55.731014-55.733013-55.731014S288.0289 369.509864 288.0289 400.288396zM622.406792 400.288396c0 30.777933 24.953881 55.731014 55.733013 55.731014 30.779132 0 55.732014-24.953082 55.732014-55.731014 0-30.778532-24.953082-55.731014-55.732014-55.731014C647.360873 344.557382 622.406792 369.509864 622.406792 400.288396zM510.941765 762.511409c-78.007911 0-156.033809-39.054521-200.61998-100.314787-16.763035-22.293685-27.822536-50.114822-39.05632-72.407708-5.528652-16.763634 5.525654-33.437329 16.763634-39.054521 16.763634-5.53025 27.823136 5.529251 33.440327 16.761636 5.528652 22.292885 16.763035 39.05552 27.822137 55.731014 44.586171 55.731014 100.318784 83.640092 161.558463 83.640092 61.266261 0 122.616666-27.820937 156.055794-78.0229 11.146443-16.762635 22.293685-38.968579 27.822936-55.731014 5.616192-16.761636 22.292885-22.292885 33.438329-16.761636 16.764634 5.528252 22.294884 22.290887 16.764634 33.437329-5.617192 27.822137-22.292885 50.114023-39.05652 72.407708C666.993562 723.54283 588.966665 762.511409 510.941765 762.511409zM510.941765 956.900214c-243.33382 0-445.129003-201.789787-445.129003-445.149589 0-243.344412 201.795183-445.134998 445.129003-445.134998 243.351408 0 445.14719 201.790586 445.14719 445.134998C956.088756 755.110427 754.293173 956.900214 510.941765 956.900214zM510.941765 125.999564c-213.638553 0-385.743466 172.100316-385.743466 385.751061 0 213.665135 172.104913 385.761054 385.743466 385.761054 213.655542 0 385.756457-172.095919 385.756457-385.761054C896.698223 298.09988 724.597307 125.999564 510.941765 125.999564z"
                      p-id="10075"
                      fill="#999999"
                    />
                  </svg>
                  <emoji ref="emojiPicker" :visible.sync="showEmoji" @on-pick="handlePickEmoji"></emoji>
                </div>
                <!-- <div class="ctrl">
                  <svg
                    t="1563870275036"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="12485"
                    width="25"
                    height="25"
                  >
                    <path
                      d="M928.67 150.89H95.33A83.42 83.42 0 0 0 12 234.22v555.56a83.42 83.42 0 0 0 83.33 83.33h833.34a83.42 83.42 0 0 0 83.33-83.33V234.22a83.42 83.42 0 0 0-83.33-83.33zM95.33 206.44h833.34a27.8 27.8 0 0 1 27.78 27.78V566c-338-181.15-579.4 8.46-600.34 25.83-148.45 105.54-258.41 33.82-288.55 9.45V234.22a27.8 27.8 0 0 1 27.77-27.78z m833.34 611.12H95.33a27.8 27.8 0 0 1-27.78-27.78v-122.5C99.1 685 145 703.08 201.34 703.08c54.23 0 118.08-16.74 187.91-66.62a28.32 28.32 0 0 0 2.25-1.79c9.5-8.38 234.07-199.81 564.94-4.87v160a27.8 27.8 0 0 1-27.77 27.76z"
                      p-id="12486"
                      fill="#999999"
                    />
                    <path
                      d="M234.22 484.22a111.11 111.11 0 1 0-111.11-111.11 111.22 111.22 0 0 0 111.11 111.11z m0-166.67a55.56 55.56 0 1 1-55.56 55.56 55.63 55.63 0 0 1 55.56-55.55z"
                      p-id="12487"
                      fill="#999999"
                    />
                  </svg>
                </div>-->
                <div class="ctrl file" title="发送文件">
                  <label for="send-file">
                    <svg
                      t="1563870516826"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="27753"
                      width="25"
                      height="25"
                    >
                      <path
                        d="M859.060949 191.217043 539.57759 191.217043 392.772037 90.88801 165.839561 90.88801c-54.689576 0-99.031481 44.922119-99.031481 100.329033l0 601.976244c0 55.405891 44.341904 100.330056 99.031481 100.330056l693.221388 0c54.688553 0 99.031481-44.924165 99.031481-100.330056L958.092429 291.546076C958.092429 236.139162 913.749502 191.217043 859.060949 191.217043zM908.576689 768.111029c0 41.542138-33.267685 75.245751-74.27361 75.245751L190.598454 843.35678c-41.054021 0-74.274634-33.704636-74.274634-75.245751L116.32382 216.299301c0-41.542138 33.219589-75.246775 74.274634-75.246775l172.675758 0 148.499126 100.329033 322.529741 0c41.005926 0 74.27361 33.704636 74.27361 75.246775L908.576689 768.111029zM668.783301 479.370859l-0.591471 0.598634-77.404927-76.238358-35.009352 35.46677 52.872185 52.076052L315.017138 491.273956l0 50.164516 292.473191 0-50.16554 50.802036 35.010375 35.467793 76.342736-77.311807 0.106424 0.104377 35.009352-35.46677-0.099261-0.097214 0.099261-0.100284L668.783301 479.370859z"
                        p-id="27754"
                        fill="#999999"
                      />
                    </svg>
                  </label>
                </div>
                <div class="ctrl" @click="showHistory=!showHistory">
                  <svg
                    t="1563870624992"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="31749"
                    width="25"
                    height="25"
                  >
                    <path
                      d="M511.658667 192C335.061333 192 192 335.36 192 512c0 176.64 143.061333 320 319.658667 320 176.981333 0 320.341333-143.36 320.341333-320 0-176.64-143.36-320-320.341333-320zM512 768c-141.44 0-256-114.56-256-256s114.56-256 256-256 256 114.56 256 256-114.56 256-256 256z"
                      p-id="31750"
                      fill="#999999"
                    />
                    <path
                      d="M528 352H480v192l168.021333 100.821333 23.978667-39.381333-144-85.418667z"
                      p-id="31751"
                      fill="#999999"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="input-frame"
                ref="inputFrame"
                :contenteditable="inputAbled"
                @click="setLastRange"
                @keyup="setLastRange"
                @keydown.13.prevent="handleEnter($event)"
                @paste="handlePaste"
              ></div>
              <div class="bottom-line" v-show="inputAbled">
                <sg-button @click="handleClickSendMsg">发送</sg-button>
              </div>
            </div>
          </div>
          <div class="history" v-if="showHistory">
            <div class="history-header">
              <div class="top-line">
                <span class="label">消息记录</span>
                <div class="close" @click="showHistory=false">
                  <sg-icon size="12" type="icon-close"></sg-icon>
                </div>
              </div>
              <div class="filter" style="visibility:hidden;">
                <div class="option">全部</div>
                <div class="option">图片</div>
                <div class="option">文件</div>
              </div>
            </div>
            <div class="history-body" ref="historyBody">
              <div class="date-block" v-for="(list, date) in historyMap" :key="date">
                <div class="top-line">
                  <span class="date">{{date}}</span>
                </div>
                <div class="msg-list">
                  <div class="msg-item" v-for="(msg, index) in list" :key="index">
                    <div class="info">
                      <span class="name">{{msg.senderName}}</span>
                      <span class="time">{{msg.fsendTime}}</span>
                    </div>
                    <div class="content">
                      <div v-if="msg.content!==null">{{getMsgContentEmojiCode(msg.content)}}</div>
                      <div v-else>
                        <span>文件:{{getFileName(msg.attachPath)}}</span>
                        <span class="download" @click="handleClickDownload(msg)">下载</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="history-footer">
              <div class="search-box">
                <sg-input
                  size="small"
                  ref="historySearch"
                  @on-clear="handleHistorySearchChange"
                  @on-change="handleHistorySearchChange"
                  v-model="historyStatus.searchTxt"
                >
                  <sg-icon
                    slot="prepend"
                    style="background:none;margin-left:10px;"
                    type="icon-search"
                    @click.native="handleClickSearchIcon"
                  ></sg-icon>
                </sg-input>
              </div>
              <div class="date-seletor">
                <sg-date-picker
                  confirm
                  placeholder="请选择日期"
                  v-model="historyStatus.date"
                  @on-ok="handleHistoryDatePicked"
                  @on-clear="handleHistoryDateClear"
                  @on-change="handleHistoryDateChange"
                ></sg-date-picker>
                <div class="btn-group">
                  <sg-icon type="icon-leftward" @click.native="handleClickFirstPage"></sg-icon>
                  <sg-icon type="icon-back" @click.native="handleClickPrevPage"></sg-icon>
                  <sg-icon type="icon-front" @click.native="handleClickNextPage"></sg-icon>
                  <sg-icon type="icon-rightward" @click.native="handleClickLastPage"></sg-icon>
                </div>
              </div>
              <div class="toatse" v-show="showToaste">{{toasteTxt}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 设置弹窗 -->
    <sg-modal class="setting-modal" v-model="showSetting" title="设置" modal-type="confirm" closable>
      <div class="setting-block">
        <span class="setting-name">消息设置：</span>
        <span class="label">新消息声音提示</span>
        <div class="val">
          <label>
            <input type="checkbox" />
            <div class="switcher"></div>
          </label>
        </div>
      </div>
    </sg-modal>
    <!-- 个人信息弹窗 -->
    <!-- <sg-modal class="info-modal" v-model="showUserInfo" closable>
      <div class="info-block">
        <div class="north">
          <span class="name">{{infoCardData.realName}}</span>
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
              <path
                d="M256 288h576v64H256V288z m0 192h352v64H256v-64z"
                p-id="10128"
                fill="#3296fa"
              />
            </svg>
          </div>
        </div>
        <div class="south">
          <div class="field">
            <span class="label">所属部门</span>
            <span class="val">-</span>
          </div>
          <div class="field">
            <span class="label">上级部门</span>
            <span class="val">-</span>
          </div>
          <div class="field">
            <span class="label">手机号码</span>
            <span class="val">{{infoCardData.phone || '-'}}</span>
          </div>
          <div class="field">
            <span class="label">邮件</span>
            <span class="val">{{infoCardData.email || '-'}}</span>
          </div>
        </div>
      </div>
    </sg-modal>-->
    <!-- 个人信息卡片 -->
    <info-card
      :visible.sync="showUserInfo"
      :data="infoCardData"
      :target="mouseoverTarget"
      @on-start-chat="handleClickStartChat"
    ></info-card>
  </div>
</template>
<script>
import infoCard from './infoCard';
import emoji from './emoji';
import emitter from '@/mixins/emitter.js';
import { $http, openWS } from '@/util/msgUtil.js';
export default {
  name: 'ChatWindow',
  components: {
    infoCard,
    emoji
  },
  mixins: [emitter],
  props: {
    visible: false, // 聊天窗口显隐
    apiConfig: {
      // 接口配置
      type: Object,
      default() {
        return {
          sendMsg: '/mainWeb/chat/sendMsg', // 发送文本消息
          sendFile: '/mainWeb/chat/sendFile', // 发送文件
          loadFile: '/mainWeb/comm/downFileByPath', // 下载文件
          getUserInfo: '/mainWeb/system/getUserInfo?rid=', // 获取用户信息
          getOrganTree: '/mainWeb/system/getOrganTree', // 获取组织树
          loadMsg: '/mainWeb/chat/loadSomeoneMsgs', // 加载与某人的消息
          markAsReaded: '/mainWeb/chat/updateMsgsType', // 消息标记为已读
          wsUrl: 'ws://' + window.location.host + '/mainWeb/system/websocket' // websocket地址
        };
      }
    },
    currentUser: {
      // 当前使用者（006的系统为从状态管理获取
      type: Object,
      default() {
        return {
          id: '', // 使用者id
          name: '' // 使用者名称
        };
      }
    },
    MsgBus: {
      // 总线组件名
      type: String,
      default: ''
    }
  },
  watch: {
    /**
     * @description 观测聊天窗口显隐
     * @param {Boolean} val
     */
    visible: {
      handler(val) {
        this.isVisible = val;
        if (val) {
          // 如果聊天窗口打开了，把当前聊天对象的消息标记为已读
          this.scrollTo();
          this.currentChatPartner.unReaded &&
            this._markMsgReaded(this.currentChatPartner.unReaded);
          this.$set(this.currentChatPartner, 'unReaded', []);
        }
      }
    },
    /**
     * @description 观测历史记录显隐
     * @param {Boolean} val
     */
    showHistory: {
      handler(val) {
        if (val) {
          // 打开历史记录，从接口获取数据
          this.historyStatus.page = 1;
          this.historyStatus.searchTxt = '';
          this.historyStatus.date = '';
          this.loadHistoryMsg();
        }
      }
    },
    /**
     * @description 观测历史记录内，翻页提示的显隐
     * @param {Boolean} val
     */
    showToaste: {
      handler(val) {
        if (val) {
          // 翻页提示显示2.5秒后关闭
          setTimeout(_ => {
            this.showToaste = false;
          }, 2500);
        }
      }
    }
  },
  data() {
    return {
      // userTreeProps: {
      //   label: "text"
      // },
      backup: null,
      showToaste: false, // 是否显示toasteTxt
      toasteTxt: 'toaste text', // 历史记录操作提示
      historyMap: {}, // 历史记录表
      historyStatus: {
        page: 1, // 当前页码，最新的历史为1
        total: 0, // 记录总条数，用来计算页数
        searchTxt: '', // 搜索条件
        date: '' // 日期
      },
      isVisible: this.visible, // 是否显示onlineMessage窗口
      showHistory: false, // 是否显示历史消息
      showList: 0, // 显示导航对应功能的下标
      showSetting: false, // 是否显示设置窗口
      showUserInfo: false, // 是否显示信息卡片
      showContact: true, // 是否显示联系人（组织项
      allUserList: [], // 树状结构的组织项数据
      flatUserList: [], // 一维数组结构的组织项数据
      infoCardData: {}, // 信息卡片的数据
      chatList: [], // 正在聊天列表
      currentChatIndex: 0, // 当前正在聊天的对象的下标
      contactSearchTxt: '', // 组织项搜索过滤条件
      mouseoverTarget: '', // DomReact对象json字符串，用于给卡片计算位置
      showEmoji: false, // 是否显示表情
      lastRange: null // 保存光标
    };
  },
  computed: {
    // 当前正在聊天的对象
    currentChatPartner() {
      return this.chatList[this.currentChatIndex]
        ? this.chatList[this.currentChatIndex]
        : { realName: '' };
    },
    // 当前使用者id
    currentUserId() {
      return this.currentUser.id;
    },
    // 当前使用者名称
    currentUserName() {
      return this.currentUser.name;
    },
    // 输入框是否允许输入
    inputAbled() {
      return this.currentChatPartner.realName ? true : false;
    },
    // 查看更多消息的提示文本
    loadMoreTxt() {
      if (!this.inputAbled) {
        return '';
      }
      if (this.currentChatPartner.allLoaded) {
        return '没有更多消息';
      }
      return '查看更多消息';
    }
  },
  methods: {
    /**
     * @description 点击导航，切换到对应的功能（聊天，通讯录，设置。。。
     * @param {Number} i：下标
     */
    handleClickNav(i) {
      if (i == 2) {
        this.showSetting = true;
        return;
      }
      this.showList = i;
      const sideBarItem = this.$refs.sideBar.querySelectorAll('.side-bar-item');
      for (let j = 0; j < sideBarItem.length; j++) {
        sideBarItem[j].classList.remove('active');
      }
      sideBarItem[i].classList.add('active');
    },
    /**
     * @description 点击发送按钮
     */
    handleClickSendMsg() {
      this.handleEnter();
    },
    /**
     * @description 回车时，发送消息
     * @param e：键盘事件对象
     */
    handleEnter(e) {
      let msgContent = this.$refs.inputFrame.innerHTML;
      if (e && e.ctrlKey) {
        // 进行换行
        document.execCommand('insertText', false, '\n');
        return;
      }
      if (!msgContent) {
        this.$message({
          type: 'warning',
          message: '内容不能为空。'
        });
        return;
      }
      // 处理表情
      msgContent = this.getMsgContentEmojiCode(msgContent);
      // 根据图片进行切分
      let contentList = this.splitByImg(msgContent);
      for (let i = 0; i < contentList.length; i++) {
        if (typeof contentList[i] == 'string') {
          this.sendMsg(contentList[i]);
        } else {
          this.sendFile(contentList[i]);
        }
      }
      this.$refs.inputFrame.innerHTML = '';
    },
    /**
     * @description 向当前聊天对象发送消息
     * @param {String} msgContent：消息内容
     */
    sendMsg(msgContent) {
      // 富文本转换为纯文本
      msgContent = msgContent.replace(/<.+?>/g, '').replace(/&nbsp;/g, ' ');
      let sendTime = this.myDate();
      let msgItem = {
        content: msgContent,
        senderId: this.currentUserId,
        senderName: this.currentUserName,
        title: `${this.currentUserName}的聊天消息`,
        sendType: 'O',
        mSign: 0,
        mtype: 2,
        receiverIdAndReceiverName: `${this.currentChatPartner.userId}:${this.currentChatPartner.realName}`,
        fsendTime: sendTime,
        groupKey: ''
      };
      let msgLocal = {
        content: msgContent,
        senderName: this.currentUserName,
        fsendTime: sendTime
      };
      // 聊天框中插入本条消息
      this.currentChatPartner.chatHistory.unshift(msgLocal);
      this.currentChatPartner.total++;
      this.scrollTo();
      $http
        .post(this.apiConfig.sendMsg, msgItem)
        .then(res => {
          if (!res.flag) {
            msgLocal.content += ' (发送失败)';
            // 失败提示
            this.$message({
              type: 'error',
              message: res.errorMessage
            });
          }
        })
        .catch(err => {
          this.$message({
            type: 'error',
            message: err
          });
        });
    },
    /**
     * @description 向当前聊天对象发送文件
     * @param {Object} file：文件对象
     */
    sendFile(file) {
      let msgItem = {
        receiverIdAndReceiverName: `${this.currentChatPartner.userId}:${this.currentChatPartner.realName}`,
        senderName: this.currentUserName,
        title: `${this.currentUserName}的聊天消息`,
        sendType: 'O',
        mSign: 0,
        mtype: 2,
        fsendTime: this.myDate(),
        groupKey: ''
      };
      let xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status == 200) {
          let res = JSON.parse(xhr.responseText);
          if (res.flag) {
            msgItem.attachPath = res.filePath;
            let param = new FormData();
            param.append('macroPath', msgItem.attachPath);
            let xhr2 = new XMLHttpRequest();
            xhr2.open('post', this.apiConfig.loadFile);
            xhr2.responseType = 'blob';
            xhr2.send(param);
            xhr2.onload = () => {
              if (xhr2.status == 200) {
                let blob = new Blob([xhr2.response]);
                let src = URL.createObjectURL(blob);
                this.$set(msgItem, 'imgBlob', src);
              }
            };
          }
        } else {
          msgItem.progress = '发送失败';
          this.$message({
            type: 'error',
            message: res.errorMessage
          });
        }
      };
      xhr.onerror = err => {
        msgItem.progress = '发送失败';
        this.$message({
          type: 'error',
          message: '发送失败。'
        });
      };
      xhr.upload.onprogress = e => {
        msgItem.progress = Math.floor((e.loaded / e.total) * 100);
      };
      xhr.open('POST', this.apiConfig.sendFile);
      let data = this.$parent.getFormData(msgItem);
      data.append('file', file);
      xhr.send(data);
      msgItem.attachPath = file.name.split('.')[0];
      msgItem.progress = 0;
      this.currentChatPartner.chatHistory.unshift(msgItem);
    },
    /**
     * @description 组织项树节点悬停事件
     * @param {Object} node：节点的数据
     * @param {Any} obj：触发事件的节点的DomReact对象json字符串
     */
    handleClickContactNode(node, obj) {
      $http.fetch(this.apiConfig.getUserInfo + node.id).then(res => {
        this.infoCardData = res;
        this.mouseoverTarget = obj;
        this.showUserInfo = true;
      });
    },
    /**
     * @description 通讯录抬头点击,用于切换显示联系人和群聊
     * @param {Number} key：下标
     */
    handleClickContactTopLine(key) {
      if (key == 0) {
        this.showContact = true;
      } else {
        this.showContact = false;
      }
      let titles = this.$refs.contactTopLine.querySelectorAll('.title');
      for (let i = 0; i < titles.length; i++) {
        if (titles[i].classList.contains('active')) {
          titles[i].classList.remove('active');
        }
        if (i == key) {
          titles[i].classList.add('active');
        }
      }
    },
    /**
     * @description 开始聊天:信息卡上的按钮点击或者树节点双击后调用
     * @param {Object} user：打开会话的目标用户
     * @param {Boolean} init：是否是初始化时执行
     * @param {Number} index：把会话窗口切换到这个index的用户
     */
    handleClickStartChat(user, init, index) {
      let flag = user;
      if (!flag || flag.type == 'click') {
        // 如果没有传入user或传入的是事件对象，使用信息卡片的数据
        flag = this.infoCardData;
      }
      for (let i = 0; i < this.chatList.length; i++) {
        if (this.chatList[i].userId == flag.userId) {
          // 如果是初始化时执行，会话窗口保持在第一个聊天对象
          this.switchChat(init ? 0 : i);
          this.loadMessage(index);
          return;
        }
      }
      this.$set(flag, 'chatHistory', []);
      this.$set(flag, 'unReaded', []);
      this.chatList.push(flag);
      this.switchChat(init ? 0 : this.chatList.length - 1);
      this.loadMessage(index);
      this.saveStorage();
    },
    /**
     * @description 接收来自socket和加载更多接口的消息
     * @param {Array} msg: 消息列表数组
     * @param {Boolean} flag: 为true时表示来自加载更多 为false表示来自socket
     */
    handleMsgReceived(msg, flag = false) {
      if (flag) {
        // 来自加载更多，把消息插入到数组最后
        let currentCount = this.currentChatPartner.chatHistory.length,
          total = this.currentChatPartner.total;
        if (total <= currentCount) {
          // 已经没有更多消息了，返回
          this.$set(this.currentChatPartner, 'allLoaded', true);
          return;
        }
        let oldHeight = this.$refs.msgList.scrollHeight;
        if (currentCount % 10 == 0) {
          for (let item of msg) {
            let url = item.attachPath || null;
            if (item.attachPaths && item.attachPaths[0]) {
              url = item.attachPaths[0];
            }
            if (url && this.isImage(url)) {
              let param = new FormData();
              param.append('macroPath', url);
              let xhr2 = new XMLHttpRequest();
              xhr2.open('post', this.apiConfig.loadFile);
              xhr2.responseType = 'blob';
              xhr2.send(param);
              xhr2.onload = () => {
                if (xhr2.status == 200) {
                  let blob = new Blob([xhr2.response]);
                  let src = URL.createObjectURL(blob);
                  this.$set(item, 'imgBlob', src);
                }
              };
            }
            this.currentChatPartner.chatHistory.push(item);
          }
        } else {
          for (let i = currentCount % 10; i < msg.length; i++) {
            let url = item.attachPath || null;
            if (item.attachPaths && item.attachPaths[0]) {
              url = item.attachPaths[0];
            }
            if (url && this.isImage(url)) {
              let param = new FormData();
              param.append('macroPath', url);
              let xhr2 = new XMLHttpRequest();
              xhr2.open('post', this.apiConfig.loadFile);
              xhr2.responseType = 'blob';
              xhr2.send(param);
              xhr2.onload = () => {
                if (xhr2.status == 200) {
                  let blob = new Blob([xhr2.response]);
                  let src = URL.createObjectURL(blob);
                  this.$set(msg[i], 'imgBlob', src);
                }
              };
            }
            this.currentChatPartner.chatHistory.push(msg[i]);
          }
        }
        this.$nextTick(() => {
          // 设置滚动条位置到原来的位置
          let newHeight = this.$refs.msgList.scrollHeight;
          this.scrollTo(newHeight - oldHeight);
        });
        return;
      }
      // 来自socket的新消息，插入到数组开头
      for (let msgItem of msg) {
        if (msgItem.msign == 0) {
          let url = msgItem.attachPath || null;
          if (msgItem.attachPaths && msgItem.attachPaths[0]) {
            url = msgItem.attachPaths[0];
          }
          if (url && this.isImage(url)) {
            let param = new FormData();
            param.append('macroPath', url);
            let xhr2 = new XMLHttpRequest();
            xhr2.open('post', this.apiConfig.loadFile);
            xhr2.responseType = 'blob';
            xhr2.send(param);
            xhr2.onload = () => {
              if (xhr2.status == 200) {
                let blob = new Blob([xhr2.response]);
                let src = URL.createObjectURL(blob);
                this.$set(msgItem, 'imgBlob', src);
              }
            };
          }
          let i = 0;
          for (; i < this.chatList.length; i++) {
            if (this.chatList[i].userId == msgItem.senderId) {
              this.chatList[i].chatHistory.unshift(msgItem);
              this.chatList[i].total++;
              if (
                this.chatList[i].userId != this.currentChatPartner.userId ||
                !this.isVisible
              ) {
                this.chatList[i].unReaded.push(msgItem.messageKey);
              } else {
                this._markMsgReaded([msgItem.messageKey]);
              }
              break;
            }
          }
          if (i >= this.chatList.length) {
            let unReaded = [msgItem.messageKey];
            if (this.chatList.length == 0) {
              unReaded = [];
              this._markMsgReaded([msgItem.messageKey]);
            }
            this.chatList.push({
              userId: msgItem.senderId,
              realName: msgItem.senderName,
              chatHistory: [msgItem],
              total: 1,
              allLoaded: false,
              unReaded: unReaded
            });
            this.saveStorage();
          }
        }
      }
    },
    /**
     * @description 点击查看更多消息
     */
    handleClickShowMore() {
      let currentCount = this.currentChatPartner.chatHistory.length,
        total = this.currentChatPartner.total;
      if (currentCount <= total) {
        let page =
          currentCount % 10 == 0
            ? currentCount / 10 + 1
            : Math.ceil(currentCount / 10);
        this.loadMessage(null, page, 10, false);
      }
      // this.loadMessage(1,currentCount,false);
    },
    /**
     * @description 关闭和某一个用户的聊天
     * @param {Number} key: chatList中对应的下标
     */
    handleClickChatClose(key) {
      this.chatList.splice(key, 1);
      this.saveStorage();
    },
    /**
     * @description 向当前聊天对象发送文件
     */
    handleChangeSendFile() {
      if (this.$refs.sendFile.files.length == 0) return;
      this.sendFile(this.$refs.sendFile.files[0]);
      this.$refs.sendFile.value = '';
    },
    /**
     * @description 执行组织项树过滤
     */
    handleClickContactTreeFilter() {
      this.searchTree(this.contactSearchTxt);
    },
    /**
     * @description 表情点击事件
     * @param {Object} emoji: 表情对象，包含编码、路径等属性
     */
    handlePickEmoji(emoji) {
      this.$nextTick(() => {
        this.$refs.inputFrame.focus();
        let selection = getSelection();
        if (this.lastRange) {
          // 把光标还原到上一次聚焦的位置
          selection.removeAllRanges();
          selection.addRange(this.lastRange);
        }
        // 把表情图片插入到光标所在位置，并保存光标的位置
        document.execCommand('insertImage', false, emoji.path);
        this.lastRange = selection.getRangeAt(0);
      });
    },
    /**
     * @description 输入框粘贴事件
     * @param {Object} e: 事件对象
     */
    handlePaste(e) {
      if (!e.clipboardData) return;
      let item = e.clipboardData.items[0];
      if (e.clipboardData.items.length > 1) {
        Array.prototype.forEach.call(e.clipboardData.items, data => {
          if (data.kind == 'file') {
            item = data;
          }
        });
      }
      if (item && item.kind != 'string') {
        e.preventDefault();
        var blob = item.getAsFile();
        var reader = new FileReader();
        reader.onloadend = function(event) {
          var imgBase64 = event.target.result; //    event.target.result.split(",")  [0]=data:image/png;base64  [1]=data
          var dataURI = imgBase64;
          document.execCommand('insertImage', false, imgBase64);
        };
        reader.readAsDataURL(blob);
      }
    },
    /**
     * @description 在聊天窗口中点击了一张图片，打开这个图片的url
     * @param {String} url: 图片的地址
     */
    handleClickOpenImg(url) {
      if (!url) return;
      window.open(this.fixBrackets(url));
    },
    /**
     * @description 在聊天窗口中点击文件下载
     * @param {String} url: 文件的地址
     */
    handleClickDownload(msg) {
      let url = msg.attachPath || msg.attachPaths[0],
        downloadFileName = this.getFileName(
          msg.attachPath || msg.attachPaths[0]
        );
      url = url.replace(downloadFileName, this.fixBrackets(downloadFileName));
      let param = new FormData();
      param.append('macroPath', url);
      var xhr = new XMLHttpRequest();
      xhr.open('post', this.apiConfig.loadFile);
      xhr.responseType = 'blob';
      xhr.onload = function() {
        if (xhr.status == 200) {
          let blob = new Blob([xhr.response]);
          if (window.navigator.msSaveBlob) {
            try {
              window.navigator.msSaveOrOpenBlob(blob, downloadFileName);
            } catch (e) {
              console.log(e);
            }
            return;
          } else {
            let ele = document.createElement('a');
            ele.download = downloadFileName;
            ele.href = URL.createObjectURL(blob);
            ele.style.display = 'none';
            document.body.appendChild(ele);
            ele.click();
            ele.remove();
          }
        }
      };
      xhr.send(param);
    },
    /**
     * @description 记录光标的位置，和插入表情配合使用
     */
    setLastRange() {
      let selection = getSelection();
      this.lastRange = selection.getRangeAt(0);
    },
    /**
     * @description 通过下标切换当前的聊天对象
     * @param {Number} i:下标
     */
    switchChat(i) {
      this.currentChatIndex = i;
      this.showUserInfo = false;
      this._markMsgReaded(this.currentChatPartner.unReaded);
      this.$set(this.currentChatPartner, 'unReaded', []);
      this.handleClickNav(0);
      this.scrollTo();
    },
    /**
     * @description 加载组织项树
     */
    loadAllUsers() {
      $http.fetch(this.apiConfig.getOrganTree).then(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].id == '#3' || res[i].text == '所有角色') {
            // 所有角色下的节点没有发起回话所需要的字段，故隐藏
            res.splice(i--, 1);
          }
        }
        this.allUserList = res;
        this.backup = JSON.stringify(res);
        let storage = JSON.parse(localStorage.getItem('ibaseOMsgData'));
        if (storage && storage.userId == this.currentUserId) {
          // 读取本地存储中的历史会话信息，并恢复到聊天窗口中
          for (let key = 0; key < storage.chatPartners.length; key++) {
            this.handleClickStartChat(storage.chatPartners[key], true, key);
          }
        }
      });
    },
    /**
     * @description 从后台获取聊天记录
     * @param {Number} index: 要加载的会话的chatList下标，为空时加载当前聊天对象的消息
     * @param {Number} page: 页码，默认为1
     * @param {Number} rows: 条数，默认为10
     * @param {Boolean} firstTime: 默认为真，为真时是初始化会话时的加载，为假时是进行加载更多
     */
    loadMessage(index, page = 1, rows = 10, firstTime = true) {
      let param = {
        userid: index
          ? this.chatList[index].userId
          : this.currentChatPartner.userId,
        page: page,
        rows: rows,
        messageType: 'O',
        searchTxt: '',
        startDate: '',
        endDate: '',
        groupKey: ''
      };
      $http.post(this.apiConfig.loadMsg, param).then(res => {
        if (!firstTime) {
          // 不是初始化加载，使用接受消息方法的加载逻辑
          this.$set(this.currentChatPartner, 'total', res.total);
          this.handleMsgReceived(res.rows, true);
          return;
        }
        let partner = index ? this.chatList[index] : this.currentChatPartner;
        for (let item of res.rows) {
          let url = item.attachPath || null;
          if (item.attachPaths && item.attachPaths[0]) {
            url = item.attachPaths[0];
          }
          if (url && this.isImage(url)) {
            let param = new FormData();
            param.append('macroPath', url);
            let xhr2 = new XMLHttpRequest();
            xhr2.open('post', this.apiConfig.loadFile);
            xhr2.responseType = 'blob';
            xhr2.send(param);
            xhr2.onload = () => {
              if (xhr2.status == 200) {
                let blob = new Blob([xhr2.response]);
                let src = URL.createObjectURL(blob);
                this.$set(item, 'imgBlob', src);
              }
            };
          }
        }
        this.$set(partner, 'chatHistory', res.rows); // 聊天记录
        this.$set(partner, 'total', res.total); //聊天记录总数
        this.$set(partner, 'allLoaded', false); //是否已经加载所有记录
        this.$set(partner, 'unReaded', []); //未读消息的条数
        this.scrollTo();
      });
    },
    /**
     * @description 将消息窗口滚动到指定位置
     * @param {Number} offset: 滚动条的偏移量，不设置则滚动到底部
     */
    scrollTo(offset) {
      this.$nextTick(() => {
        this.$refs.msgContainer.scrollTop =
          offset || this.$refs.msgList.scrollHeight;
      });
    },
    /**
     * @description 用户列表树渲染函数
     */
    renderUserList(h, { root, node, data }) {
      let that = this,
        timer = null;
      return h(
        'span',
        {
          style: {
            // display: 'inline-block',
            height: '100%',
            // width: '100%',
            lineHeight: '26px'
          },
          on: {
            mouseenter(e) {
              that.showUserInfo = false;
              if (data.iconCls != 'icon-man') return;
              timer && clearTimeout(timer);
              timer = setTimeout(() => {
                let obj = e.target.getBoundingClientRect();
                that.handleClickContactNode(data, JSON.stringify(obj));
              }, 300);
            },
            mouseleave() {
              clearTimeout(timer);
            },
            dblclick() {
              if (data.iconCls != 'icon-man') return;
              let user = {
                realName: data.text,
                userId: data.id
              };
              that.handleClickStartChat(user);
            }
          }
        },
        data.text
      );
    },
    /**
     * @description 把表情代码转换为图片或着文字
     * @param {String} content: 消息内容
     * @param {Boolean} showTxt: 转换为文字，默认为false
     * @returns {String} 转换后的消息内容
     */
    getMsgContentRenderEmoji(content, showTxt = false) {
      if (!content) return;
      let arr = [],
        patt = /\#\^\w+\^\#/g,
        result;
      result = content.match(patt);
      if (result != '' && result != null) {
        for (let i = 0; i < result.length; i++) {
          let code = result[i].match(/\d+/);
          if (code[0] > 71) break;
          arr.push({ imgSrc: result[i], code: parseInt(code[0]) });
        }
        for (let i = 0; i < arr.length; i++) {
          content = showTxt
            ? content.replace(
                arr[i].imgSrc,
                this.$refs.emojiPicker.faces[arr[i].code].title
              )
            : content.replace(
                arr[i].imgSrc,
                `<img style="height:22px;" src="${this.$refs.emojiPicker.faceSrc}${this.$refs.emojiPicker.faces[arr[i].code].img}">`
              );
        }
      }
      content = showTxt
        ? content.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        : content.replace(/\n/g, '</br>');
      return content;
    },
    /**
     * @description 把表情图片转换为代码
     * @param {String} content: 消息内容
     * @returns {String} 转换后的消息内容
     */
    getMsgContentEmojiCode(content) {
      if (!content) return;
      let arr = [],
        // patt = /<img\b.*?(?:\>|\/>)/gi,
        patt = /<img\b[^<>]*(\/public\/images\/face\/\d+)+.*?(?:\>|\/\>)+?/gi,
        result;
      result = content.match(patt);
      if (result != '' && result != null) {
        for (let i = 0; i < result.length; i++) {
          let path = result[i].match(/\bsrc\b\s*=\s*[\'\"]?([^\'\"]*)[\'\"]?/i);
          let code = path[1]
            .split('/')
            .pop()
            .split('.')
            .shift();
          arr.push(code);
        }
        for (let i = 0; i < arr.length; i++) {
          content = content.replace(result[i], `#^${arr[i]}^#`);
        }
      }
      content = content.replace(/<div>/g, '\n').replace(/<\/div>/g, '');
      content = content.replace(/<br>/g, '\n').replace(/<\/br>/g, '\n');
      content = content.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      return content;
    },
    /**
     * @description 历史记录点击下一页
     */
    handleClickNextPage() {
      if (this.historyStatus.page === 1) {
        this.toasteTxt = '已是最后一页';
        this.showToaste = true;
        return;
      }
      this.loadHistoryMsg(--this.historyStatus.page);
    },
    /**
     * @description 历史记录点击最后一页
     */
    handleClickLastPage() {
      if (this.historyStatus.page === 1) {
        this.toasteTxt = '已是最后一页';
        this.showToaste = true;
        return;
      }
      this.loadHistoryMsg(1);
      this.historyStatus.page = 1;
    },
    /**
     * @description 历史记录点击上一页
     */
    handleClickPrevPage() {
      let firstPage = Math.ceil(this.historyStatus.total / 10);
      if (this.historyStatus.page >= firstPage) {
        this.toasteTxt = '已是第一页';
        this.showToaste = true;
        return;
      }
      this.loadHistoryMsg(++this.historyStatus.page);
    },
    /**
     * @description 历史记录点击第一页
     */
    handleClickFirstPage() {
      let firstPage = Math.ceil(this.historyStatus.total / 10);
      if (this.historyStatus.page >= firstPage) {
        this.toasteTxt = '已是第一页';
        this.showToaste = true;
        return;
      }
      this.loadHistoryMsg(firstPage);
      this.historyStatus.page = firstPage;
    },
    /**
     * @description 历史记录筛选日期
     * @param {String} date 日期
     */
    handleHistoryDateChange(date) {
      if (date == this.historyStatus.date) return;
      this.historyStatus.date = date;
    },
    /**
     * @description 历史记录搜索内容
     */
    handleHistorySearchChange() {
      this.loadHistoryMsg();
      this.historyStatus.page = 1;
    },
    /**
     * @description 历史记录日期清空
     */
    handleHistoryDateClear() {
      this.historyStatus.date = '';
      this.loadHistoryMsg();
      this.historyStatus.page = 1;
    },
    /**
     * @description 历史记录选择日期
     */
    handleHistoryDatePicked() {
      this.loadHistoryMsg();
      this.historyStatus.page = 1;
    },
    /**
     * @description 点击日期选择器，聚焦到输入框，弹出选择器
     */
    handleClickSearchIcon() {
      this.$refs.historySearch.focus();
    },
    /**
     * @description 加载历史记录消息
     * @param {Number} page 页码
     */
    loadHistoryMsg(page = 1) {
      let startDate = '',
        endDate = '';
      if (this.historyStatus.date) {
        startDate = this.historyStatus.date + ' 00:00:00';
        endDate = this.historyStatus.date + ' 23:59:59';
      }
      let param = {
        userid: this.currentChatPartner.userId,
        page: page,
        rows: 10,
        messageType: 'O',
        searchTxt: this.historyStatus.searchTxt,
        startDate: startDate,
        endDate: endDate,
        groupKey: ''
      };
      $http
        .post(this.apiConfig.loadMsg, param)
        .then(res => {
          // 根据日期分割
          let temp = {};
          for (let i = res.rows.length - 1; i >= 0; i--) {
            let item = res.rows[i];
            let date = new Date(item.fsendTime).toLocaleDateString();
            if (!temp[date]) {
              temp[date] = [item];
            } else {
              temp[date].push(item);
            }
          }
          this.historyMap = temp;
          this.historyStatus.total = res.total;
          this.$nextTick(_ => {
            this.$refs.historyBody.scrollTop = 10000;
          });
        })
        .catch(err => {
          this.toasteTxt = '加载失败';
          this.showToaste = true;
        });
    },
    /**
     * @description 获取会话最后一条消息的发送时间
     * @param {Object} person 聊天对象
     * @returns {String} 最后一条消息的发送时间
     */
    getLastMsgSendTime(person) {
      if (person.chatHistory && person.chatHistory.length > 0) {
        let temp = person.chatHistory[0].fsendTime.replace(
          new RegExp(/-/gm),
          '/'
        );
        let time = new Date(temp);
        if (time.toLocaleDateString() == new Date().toLocaleDateString()) {
          return this.myDate(time).split(' ')[1];
        }
        return time.toLocaleDateString();
      }
      return '';
    },
    /**
     * @description 获取会话最后一条消息的内容
     * @param {Object} person 聊天对象
     * @returns {String} 最后一条消息的内容
     */
    getLastMsgContent(person) {
      if (person.chatHistory && person.chatHistory.length > 0) {
        if (person.chatHistory[0].content) {
          return this.getMsgContentRenderEmoji(
            person.chatHistory[0].content,
            true
          );
        }
        return `文件：${this.getFileName(
          person.chatHistory[0].attachPath ||
            person.chatHistory[0].attachPaths[0]
        )}`;
      }
      return '';
    },
    /**
     * @description 关闭聊天窗口
     */
    closeOMsg() {
      this.saveStorage();
      this.$emit('update:visible', false);
    },
    /**
     * @description 显示文件的发送进度
     * @param {Object} msg 消息对象
     * @returns {Any} 文件的发送进度
     */
    showProgress(msg) {
      if (msg.hasOwnProperty('progress')) {
        return (
          (msg.progress >= 0 && msg.progress < 100) ||
          msg.progress == '发送失败'
        );
      }
      return false;
    },
    /**
     * @description 文件发送进度转换为百分比
     * @param {Any} para 文件发送进度
     * @returns {String} 如果是数值，返回发送进度百分比
     */
    getProgress(para) {
      if (typeof para == 'number') {
        return para + '%';
      }
      return para;
    },
    /**
     * @description 根据路径获取文件名
     * @param {String} path 文件路径
     * @returns {String} 文件名
     */
    getFileName(path) {
      if (!path) return '';
      let temp =
        path.indexOf('/') !== -1
          ? path.split('/').reverse()
          : path.split('\\').reverse();
      return temp[0];
    },
    /**
     * @description 把聊天对象保存到本地，用于下次打开时加载
     */
    saveStorage() {
      let saveChatList = [];
      this.chatList.forEach(item => {
        saveChatList.push({
          userId: item.userId,
          realName: item.realName
        });
      });
      let storage = {
        userId: this.currentUserId,
        chatPartners: saveChatList
      };
      localStorage.setItem('ibaseOMsgData', JSON.stringify(storage));
    },
    /**
     * @description 格式化日期
     * @param {Any} date 将要被格式化的日期
     * @param {Boolean} dateType 为真时只返回日期不返回时间
     * @returns {String} 格式化后的日期
     */
    myDate(date, dateType) {
      var _date = new Date();
      if (date) {
        _date = new Date(date);
      }
      /*var y = _date.getFullYear(),
          m = _date.getMonth() + 1,
          d = _date.getDate();*/
      var result;
      if (dateType) {
        //    	result = y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
        result = _date.Format('yyyy-MM-dd');
      } else {
        //    	result = y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d) + ' ' + _date.toTimeString().substr(0, 8);
        result = _date.Format('yyyy-MM-dd HH:mm:ss');
      }
      return result;
    },
    /**
     * @description 判断文件是否是图片
     * @param {String} path 文件路径
     * @returns {Boolean} 是图片则返回真，否则返回假
     */
    isImage(path) {
      let ext = path
        .split('/')
        .pop()
        .split('.')
        .pop()
        .toUpperCase();
      if (
        ext != 'BMP' &&
        ext != 'JPG' &&
        ext != 'JPEG' &&
        ext != 'PNG' &&
        ext != 'GIF'
      ) {
        return false;
      }
      return true;
    },
    /**
     * @description 消息内容以图片切分，在同时发送截图和文字时，图片和文字要分开发送（类似微信
     * @param {String} content 消息内容
     * @returns {Array} 切分后的消息
     */
    splitByImg(content) {
      if (!content) return;
      let patt = /<img\b.*?(?:\>|\/>)/gi,
        result;
      result = content.match(patt);
      if (result != '' && result != null) {
        let splitedContent = [];
        for (let i = 0; i < result.length; i++) {
          content = content.replace(result[i], '#$img$#');
        }
        let arr = content.split('#$img$#'),
          j = 0,
          fileData = null;
        if (!arr[0]) {
          if (result.length > 0) {
            fileData = result
              .shift()
              .match(/\bsrc\b\s*=\s*[\'\"]?([^\'\"]*)[\'\"]?/i)[1];
            splitedContent.push(this.dataURLtoFile(fileData));
          }
          j++;
        }
        for (; j < arr.length; j++) {
          arr[j] && splitedContent.push(arr[j]);
          if (result.length > 0) {
            fileData = result
              .shift()
              .match(/\bsrc\b\s*=\s*[\'\"]?([^\'\"]*)[\'\"]?/i)[1];
            splitedContent.push(this.dataURLtoFile(fileData));
          }
        }
        return splitedContent;
      }
      return [content];
    },
    /**
     * @description base64转file对象
     * @param {String} data 文件数据
     * @returns {Objec} 文件对象
     */
    dataURLtoFile(data) {
      let arr = data.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      let blob = new Blob([u8arr], { type: mime }),
        date = new Date();
      return new window.File(
        [blob],
        'img' + date.getTime() + '.' + mime.split('/').pop()
      );
    },
    /**
     * @description 将特殊字符进行转码
     * @param {String} str 需要转码的字符串
     * @returns {String} 转码后的字符串
     */
    fixBrackets(str) {
      str = (str + '').toString();
      return str
        .replace(/%/g, '%25')
        .replace(/\[/g, '%5b')
        .replace(/\]/g, '%5d')
        .replace(/\{/g, '%7b')
        .replace(/\}/g, '%7d')
        .replace(/#/g, '%23')
        .replace(/\+/g, '%2b')
        .replace(/=/g, '%3d')
        .replace(/@/g, '%40')
        .replace(/&/g, '%26')
        .replace(/\$/g, '%24')
        .replace(/\^/g, '%5e');
    },
    /**
     * @description 树搜索实现
     * @param {String} txt 搜索文本
     */
    searchTree(txt) {
      this.flatUserList.length = 0;
      this.generateTreeMap(JSON.parse(this.backup), '#');
      if (!txt) this.clearSearch();
      let collection = []; // 将要挂到搜索结果树上节点的集合
      let targetNode = this.getTargetNode(txt); // 搜索结果节点列表，包含表达式节点和分类节点
      for (let item of targetNode) {
        let currentNode = item;
        do {
          // 从该节点往父级组装树结构
          let i = 0;
          for (; i < collection.length; i++) {
            if (collection[i].id == currentNode.id) break;
          }
          if (i >= collection.length) {
            // 判断当前目标节点是否在集合中
            collection.push(currentNode); // 若不在集合中，则加入到集合中，并进行寻找父节点的处理
          } else {
            break; // 若在集合中，则不需要再处理该节点
          }
          for (let flatNode of this.flatUserList) {
            if (flatNode.id == currentNode.$pid) {
              // 找到当前节点的父节点，把当前节点插入到父节点的子节点列表中
              if (flatNode.children && flatNode.children.length > 0) {
                flatNode.children.push(currentNode);
              } else {
                flatNode.children = [currentNode];
              }
              currentNode = flatNode; // 替换当前节点，继续寻找父节点
              break;
            }
          }
        } while (currentNode.$pid); // 直到没有$pid，则已经到达根节点
      }
      let root = []; // 搜索结果树
      for (let item of collection) {
        // 从集合中过滤出父节点为根节点的节点，插入到搜索结果树
        if (item.$pid == '#') {
          root.push(item);
        }
      }
      this.allUserList = root;
    },
    /**
     * @description 从拍平的树列表获取搜索文本匹配的节点
     * @param {String} txt 搜索文本
     * @returns {Array} 匹配的节点列表
     */
    getTargetNode(txt) {
      let res = [];
      for (let item of this.flatUserList) {
        if (item.text && item.text.indexOf(txt) > -1) {
          res.push(item);
        }
      }
      return res;
    },
    /**
     * @description 拍平树，用于搜索
     * @param {Array} list 原始树某深度
     * @param {String} pid 当前深度的父id
     */
    generateTreeMap(list, pid) {
      for (let item of list) {
        item['$pid'] = pid;
        item.expanded = true;
        this.flatUserList.push(item);
        if (item.children && item.children.length > 0) {
          this.generateTreeMap(item.children, item.id);
          /**
           * 在生成搜索结果树时，会往children里push匹配的子节点
           * 所以在这里先进行清空
           */
          item.children.length = 0;
        }
      }
    },
    /**
     * @description 清空搜索树
     */
    clearSearch() {
      this.allUserList = JSON.parse(this.backup);
      this.$nextTick(() => {
        for (let item of this.$refs.contactTree.flatState) {
          item.node.expanded = false;
        }
      });
    },
    /**
     * @description 消息标记为已读
     * @param {Array} ids 消息id列表
     */
    _markMsgReaded(ids) {
      if (!this.apiConfig.markAsReaded || ids.length === 0) return;
      let para = {
        msgsId: ids.join(','),
        type: 12
      };
      $http
        .post(this.apiConfig.markAsReaded, para)
        .then(sss => {
          // console.log(res);
        })
        .catch(err => {
          // console.log(err);
        });
    }
  },
  mounted() {
    this.loadAllUsers();
    this.handleClickNav(0);
    this.$refs.cover.addEventListener('mouseup', _ => {
      this.showEmoji = false;
    });
    if (this.MsgBus) {
      // 从总线接收新消息
      this.$on('--msg-received--', p => {
        this.handleMsgReceived(p.data);
      });
      // 从总线打开聊天窗口
      this.$on('--start-chat-from-bus--', p => {
        this.handleClickStartChat(p);
        this.$emit('update:visible', true);
      });
    } else {
      // 不使用总线，启动websocket接收消息
      openWS({
        url: this.apiConfig.wsUrl,
        onMessage: msg => {
          this.handleMsgReceived(msg);
        }
      });
    }
  }
};
</script>
