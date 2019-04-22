var WxParse = require('../../wxParse/wxParse.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    /*images: ["/activities/img/xinfeng/xinfeng1.png", "/activities/img/xinfeng/xinfeng2.png", '/activities/img/xinfeng/xinfeng3.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  join: function () {
    wx.navigateTo({
      url: '/pages/feedback/APP',
    });
  },
  join_chart: function () {
    wx.navigateTo({
      url: '/pages/feedback/join_chart',
    });*/
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
   
    var article = '<div class="RichContent-inner"><span class="RichText ztext CopyrightRichText-richText" itemprop="text"><p>华晨宇和歌迷相处关系还蛮神奇的，他对“他的人”有一种明显的占有欲……嗯怎么说，就是猫科动物划地盘护食的占有欲，平时温吞，一靠近就龇牙，护短明着来。<br><br>也许是当了“大哥”很多年，当得中二之魂无法抑制，总觉得自己是老大，歌迷是一群小弟，成天嘴里就是“我的人”、“跟我混”、“跟我跟了多久”……配上一本正经的表情和十六岁娃娃脸，还蛮可爱的。<br><br>有次综艺（花絮），选手唱他的《我管你》，原歌有和观众互动部分，但在场观众冷漠.jpg，他就在旁边打手势“一二三起”，于是在场的歌迷们就配合了一下唱哦哦哦哦哦哦哦哦（未免选手尴尬）<br><br>旁边有嘉宾（也是歌手）就说了，好厉害啊，我可以想象花花演唱会是什么样子了，他说一二三起，全场歌迷们就能跟着唱。<br><br>某花突然嘚瑟起来了，说，我演唱会根本不需要打手势，他们就会跟着唱。（台下大吼：对！）<br><br>说完过了一会儿，冷不丁突然唱了一句“我管你的感受”……（台下吼：哦哦哦哦哦哦哦哦哦）<br><br>花花：呵呵哈哈哼（得意脸）（骄傲脸）（傲娇脸）（秀你一脸）（一嗓子吓死你脸）（我是老大快夸我脸）<br><br><br><br><br>而且他对他自己为什么能当“老大”的理由很清醒，因为写歌最好听，唱歌最厉害，于是大家才愿意跟他混，所以业务水平一直领跑，并且经常在演唱会上虐并嘲笑他歌迷们的唱歌水平，来证明他家只能有一个老大。</p><div><div class="RichText-video" data-za-detail-view-path-module="VideoItem" data-za-extra-module="{&quot;card&quot;:{&quot;content&quot;:{&quot;type&quot;:&quot;Video&quot;,&quot;sub_type&quot;:&quot;SelfHosted&quot;,&quot;video_id&quot;:&quot;988841363496108032&quot;,&quot;is_playable&quot;:true}}}"><div class="VideoCard VideoCard--interactive"><div class="VideoCard-layout"><div class="VideoCard-video"><div class="VideoCard-video-content"><div class="VideoCard-player"><iframe frameborder="0" allowfullscreen="" src="https://www.zhihu.com/video/988841363496108032"></iframe></div></div></div></div><div class="VideoCard-mask"></div></div></div></div>            <figure><noscript><img data-rawwidth="441" data-rawheight="441" src="https://pic4.zhimg.com/v2-2200c3fc0f8c7af559962e051318c0b7_b.jpg" class="origin_image zh-lightbox-thumb" width="441" data-original="https://pic4.zhimg.com/v2-2200c3fc0f8c7af559962e051318c0b7_r.jpg"></noscript><img data-rawwidth="441" data-rawheight="441" src="https://pic4.zhimg.com/80/v2-2200c3fc0f8c7af559962e051318c0b7_hd.jpg" class="origin_image zh-lightbox-thumb lazy" width="441" data-original="https://pic4.zhimg.com/v2-2200c3fc0f8c7af559962e051318c0b7_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-2200c3fc0f8c7af559962e051318c0b7_b.jpg"></figure></span></div>';
    var that=this;
    WxParse.wxParse('article', 'html', article, that, 5);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})