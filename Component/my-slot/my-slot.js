// Component/my-slot/my-slot.js
Component({
  options:{
    multipleSlots:true
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 监听页面所在生命周期
  pageLifetimes:{
    show(){
      console.log('监听页面页面显示出来时');   
    },
    hide(){
      console.log('监听页面页面隐藏出来时');   
    },
    resize(){
      console.log('监听页面尺寸改变时');  
    }
  },
  lifetimes:{
    
  }
})
