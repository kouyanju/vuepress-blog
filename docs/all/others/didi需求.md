---
title: 扫码付口碑值牵引
---
## 扫码付口碑值牵引
（需求评审-对UI、安排排期-开发-联调-提测-改bug-测试-上线）
## 一：需求背景
通过口碑值牵引，可以刺激司机更多使用滴滴收款码收款，提升扫码付规模
## 二：解决方案
采用口碑值附加分加分方式，自然月内，有效扫码付累计贡献每满100单 任务分加分5分，上限10分；
## 三：详细需求
1. 新增附加分上限逻辑，附加分最高25分，若子项加分超过25则只展示25。
2. 新增（任务分）“快的收款码-收款加分”卡片；<br>

### （1）任务分卡片部分
**加分展示区域**：展示司机当前生效的分数
- **主标题**：快的收款码收款
- **副标题**：根据当前加分状态展示不同文案：<br>

**收款进度区域**：展示司机本月收款进度
- **进度展示**：当不满最高阶段时，展示收款进度。左侧数字为司机当前有效收款订单；右侧数字为司机活动分数所需订单。
- **卡片交互**：点击卡片，进入收款明细

### （2）任务分详情页面展示
#### 【收款卡片】
- 主标题：展示固定文案“快的收款码-收款加分”
- 副标题：展示有效期 满分分数限制；
#### 【计算规则】展示固定文案：
- 收款计入规则：
	1. 需使用快的新出租平台发放的收款码、端内收车费电子码向乘客收取车费；
  2. 滴滴线上订单及不符合出租车运营规则的订单不计入。

-	加分有效期：
    1. 当月加分由上月月底收款数量决定；
    2. 若本月新累计收款量达到加分标准，则实时加分，有效期至下月月底。

#### 【收款明细】
展示司机当月的收款明细
- 若订单命中反作弊&线上单，则展示标签“不符合计入条件”

## 附加分首页页面开发过程
前提：需求评审和ui对接完成后，前端同学需向后端沟通需要传输的数据字段，明确所给数据的格式和类型，作出相应的逻辑处理。

1. 在page文件夹下创建additional-score.vue页面，
2. 在router文件夹下面配置相应的路由路径
```js
{
  path: '/additional-score-order-detail',
  name: 'additionalScoreOrderDetail',
  component: AdditionalScoreOrderDetail
}
```
3. 根据ui图进行布局和样式设计
- 采用最常用的flex布局(给父元素添加)
```css
.parent
  display flex
  justify-content center
  align-items center
```
4. 附加分分为认证分、活动分、任务分等类型
- 卡片类型不同，但结构大致相同，可通过先后使用v-for指令循环后端传过来数组数据
- 针对不同卡片具有相同的逻辑时，统一作处理即可
  - 比如：加分为0时
    - 盾牌图标、详情右箭头、分数0 都需要将其颜色变成灰色
    - 方法：1.给div去判断分数是否为0，去动态绑定不同的类选择器，设置不同的样式。
      ```html
      <div :class="[item_status.score === 0?'is-gray':'is-black']">
        <span class="is-dinumber">{{item_status.score}}</span>分
        <img src="../../assets/right.png" />
      </div>
      ```
    - 方法：2.也可以在method里写方法
      - 比如图片的更替，来通过resolveImg()方法里标志位不同取值来进行字符串拼接图片名，达到动态绑定需要显示的图片
      ```js
      resolveImg (item) {
        let prefix = 'shield'
        let suffix = (+item.certify_flag === 1 || (item.certify_flag === undefined && item.score >= 5)) ? '' : '-failed'
        let src = require(`../../assets/${prefix}${suffix}.png`)
        return src
      },
      ```
- 针对不同的卡片类型作出相应的布局和样式调整
  - 比如：任务分卡片
    - 下方需要添加完单数量/目标数量，以及相应的文案解释
    - 方法：
      1. 需要通过唯一的标志位判断出不同客片类型，此时需要用到**v-if**指令来判断
      2. 根据选出来需要特殊处理的卡片类型，添加相应的布局样式
      3. 注意：此思路不是最优方法，代码量会有大量重复，待优化
- 任务分类型的卡片会有任务分详情，此时需要跳转到详情页面
  - 方法：在最合适的div里面，判断为当前卡片类型时，添加点击事件@click
  ```js
  goToAdditionalScoreOrderDetail () {
    this.routerWrapper('/additional-score-order-detail')
  }
  ```
- 任务卡中，若为上个月无订单的这种情形
  - 此时需要判断目标订单数目为0时，将完单数量/目标订单数目-如：80/100，此div块元素区域区域进行隐藏。
    - 方法：页面首次加载时便会显示，且停留页面时不会再改变，因此，使用v-if指令进行隐藏
html部分
```html
<div class="panel" v-for="(item, index) in addtionalDataV1" :key="index">
  <h2>
    <span class="line"></span>
    <span class="title">{{item.title}}</span>
    <span class="line"></span>
  </h2>
  <div class="status" v-for="(item_status, index_status) in item.detail" :key="index_status">
    <div v-if="item_status.tag_id===1005" @click="goToAdditionalScoreOrderDetail">
      <div class="status_title">
        <img :src="resolveImg(item_status)" width=34 alt="">
        <div class="text">
          <p class="desc">{{item_status.desc}}</p>
          <p class="time">{{item_status.content}}</p>
        </div>
        <div class="score">
          <div :class="[item_status.score === 0?'is-gray':'is-black']">
            <span class="is-dinumber">{{item_status.score}}</span>分
            <img src="../../assets/right.png" />
          </div>
        </div>
      </div>
      <div class="status_footer">
        <div class="status_footer_detail">
          <div class="status_footer_detail_left"  v-if="item_status.target!==0">
            <span class="orders">{{item_status.orders}}</span>/<span class="orders">{{item_status.target}}</span>
          </div>
          <div class="status_footer_detail_right">
            <span class="orders_detail">{{item_status.task_desc}}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="status_title">
        <img :src="resolveImg(item_status)" width=34 alt="">
        <div class="text">
          <p class="desc">{{item_status.desc}}</p>
          <p class="time">{{item_status.content}}</p>
        </div>
        <div class="score">
          <div :class="[item_status.score === 0?'is-gray':'is-black']">
            <span class="is-dinumber">{{item_status.score}}</span>分
            <img src="../../assets/right.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
- js部分
```js
<script>
import { pageTransitionMixin, routerHelps } from 'common/js/mixins'
import { dSpecialContributionScoreDetail } from 'api/index'
import { toastMixin } from 'common/js/mixin'
import { trackEvent } from 'common/js/omega'

export default {
  name: 'additional-score',
  data() {
    return {
      flag: false,
      addtionalDataV1: [],
      score: 0,
      content: '',
      notice: '',
      diff: 0
    }
  },
  mixins: [pageTransitionMixin, routerHelps, toastMixin],
  created() {
    this._dSpecialContributionScoreDetail()
    trackEvent('unione-service-score_addtional-score_sw')
  },
  methods: {
    _dSpecialContributionScoreDetail() {
      this.showLoading()
      dSpecialContributionScoreDetail().then(res => {
        this.hideToast()
        this.addtionalDataV1 = res.special_score_items_v1 || []
        this.score = res.special_score
        this.content = res.special_score_content
        this.notice = res.special_score_notice
        this.diff = res.score_diff
        this.flag = true
      }).catch(err => {
        this.commonErrAlert(err.message)
      })
    },
    resolveScoreChangeIcon (diff, isIcon = true) {
      let prefix = isIcon ? 'icon-' : ''
      let icon = diff >= 0 ? `${prefix}acend` : `${prefix}decend`
      return icon
    },
    resolveImg (item) {
      let prefix = 'shield'
      let suffix = (+item.certify_flag === 1 || (item.certify_flag === undefined && item.score >= 5)) ? '' : '-failed'
      let src = require(`../../assets/${prefix}${suffix}.png`)
      return src
    },
    toDetail(isEnable) {
      if (isEnable) {
        trackEvent('unione-service-score_attest_ck')
        location.href = 'https://page.udache.com/driver-biz/driver-certification/index.html#/'
      }
    },
    goToAdditionalScoreOrderDetail () {
      this.routerWrapper('/additional-score-order-detail')
    }
  }
}
</script>
```

```js
// mock里的模拟数据data
"special_score_items_v1":[{
  "name": "verify_data",
  "title":"认证分",
  "score":0,
  "detail":[{
    "tag_id":1003,
    "desc":"优选出租车认证加分",
    "content":"认证通过可获得20分",
    "score":20,
    "certify_flag":1,
    "can_authenticate":true
    }]
  },{
  "name":"activity_data",
  "title":"任务分",
  "score":0,
  "detail":[{
      "tag_id":1004,
      "desc":"9月30冲单活动",
      "content":"有效期：2020年10月15日至10月25日",
      "score":20
    },{
      "tag_id":1004,
      "desc":"9月30冲单活动",
      "content":"有效期：2020年10月15日至10月25日",
      "score":0
    },{
      "tag_id":1005,
      "desc":"快的收款码-收款加分",
      "content":"有效期至2021年8月31日",
      "score":0,
      "type":1,
      "orders":85,
      "target":100,
      "task_desc":"还需20单，可加5分"
    },{
      "tag_id":1005,
      "desc":"快的收款码-收款加分",
      "content":"本月暂无加分",
      "score":0,
      "type":1,
      "orders":0,
      "target":0,
      "task_desc":"本月暂无收款"
    }]
}]
```
