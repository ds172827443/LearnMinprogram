/**网络请求封装 
 * options为传过来的参数
 * Promise最大的好处就是防止回调地狱
 * */ 

export default function request(options){
  return new Promise((resolve,reject) =>{
    wx.request({
      url: options.url,
      method:options.method || 'get',
      data:options.data || {},
      success:(res) =>{
        resolve(res)
      },
      fail: (err) =>{
        reject(err)
      }
      
    })
  })
}