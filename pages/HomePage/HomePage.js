// pages/HomePage/HomePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: ["/activities/img/xinfeng/xinfeng1.png", "/activities/img/xinfeng/xinfeng2.png", "/activities/img/xinfeng/xinfeng3.png"],
    indicatorDots: true, 
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    categoryList: [
      { name: "特色文化", src: "/img/class/special_culture.png",a_src: "/img/class/special_culture1.png"},
      { name: "艺术体育", src: "/img/class/art&sports.png", a_src: "/img/class/art&sports1.png"},
      { name: "志愿公益", src: "/img/class/volunteer.png", a_src: "/img/class/volunteer1.png"},
      { name: "创新创业", src: "/img/class/pioneer.png", a_src: "/img/class/pioneer1.png"}, 
      { name: "兴趣爱好", src: "/img/class/interest.png", a_src: "/img/class/interest1.png"},
      { name: "凑热闹", src: "/img/class/logo1.png", a_src: "/img/class/logo.png"}
      ],
      societiesList:[
        {
          name: "雪域文化交流协会",
          image: "/activities/img/xinfeng/xinfeng1.png",
          info: "雪域文化交流协会创建于2007 年8 月，是一个年轻又富有激情与活力的社团。协会兼具热情和民族特色，经过多年的发展已经成为中央民族大学社团中的佼佼者。活动办得有声有色，富有感染力和凝聚力，又能以亲和力与广大师生打成一片。且积极参与校内外的各类演出和活动，让很多校内外人士了解到这个极具民族特色的社团的优秀文化，从而弘扬了藏族文化。雪域文化交流协会在发展中逐渐成熟，为了给广大师生打造一个充满激情与爱的舞台，是中央民族大学社团中的亮点。 " 
        },
      ]
  },
  chooseImg: function (e) {
    this.setData({
      imgHoverIndex: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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