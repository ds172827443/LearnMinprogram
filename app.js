//app.js
/**
 * 1、获得code
 * 2、把code发送给服务器
 */
const TOKEN = 'token'
App({
  onLaunch: function () {
    // 1、从缓存中取出token
    const token = wx.getStorageSync(TOKEN)

    // 2、判断token是否有值
    if(token && token.length !== 0){ //已经有token，验证token是否过期
      this.check_token(token) //验证token是否过期
    }else{     //没有token，进行登录操作
      this.login()
    }
    
  },
  check_token(token){
    console.log('执行了验证操作'); 
    wx.request({
      url: 'url',
      method:'post',
      header:{
        token
      },
      success:(res) =>{
        if(!res.data.errtoken){
          this.globalData.token = token
        } else{
          this.login()
        }  
      },
      fail:(err) =>{
        console.log(err);       
      }
    })
  },
  // 登录操作
  login(){
    console.log('执行了登录操作');  
    wx.login({
      success: (res) =>{
        // 1、获得code
        const code = res.code
        // 2、把code发送给服务器
        wx.request({
          url: '123.207.32.32:3000/login',
          method:'post',
          data:{
            code:code
          },
          success:(res) =>{
            // 取出token
            const token = res.data.token

            // 把token存储在globalData对象中
            this.globalData.token = token

            // 把token存储在本地(带Sync的是同步操作，等执行完了再执行)
            this.wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },
  globalData: {
    // 把服务器返回的token存储在对象中，但是对象会销毁---（栈）
    token: ""
  }
})