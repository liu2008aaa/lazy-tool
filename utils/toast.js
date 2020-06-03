/**
 * toast class
 */
class toast {
  constructor(option) {
    const _ts = this;
  }
  showFail(msg, duration) {
    wx.showToast({
      title: msg,
      image: '../images/fail.png',
      duration: duration != undefined ? duration: 3500
    });
  }
  showSuccess(msg, duration) {
    wx.showToast({
      title: msg,
      icon: 'success',
      duration: duration != undefined ? duration : 3500
    });
  }
};
module.exports = toast;
