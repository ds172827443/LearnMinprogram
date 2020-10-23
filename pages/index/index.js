//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    counter:0,
    titles:['衣服','裤子','鞋子']
  },
  // 点击加1
  btnAddClick(e){
    console.log('11111111',e); 
    this.setData({
      counter:this.data.counter + 1
    })
    var detail = e.detail
    console.log(detail);  
  },
  // Tabar
  TabarClick(e){
    console.log(e);  
  },
  // 组件内获取对象
  MySelClick(){
    const Mysel = this.selectComponent('.mysel')
    console.log(Mysel);
    // 建议用组件内的方式来改变变量 , 不建议直接使用setData改变变量
    Mysel.AddCounter(10)
  }


})
