// Component/Tabar/tabar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:['默认一','默认二','默认三'],
    }
  },
  data: {
    currentIndex:0
  },
  methods: {
    TabarClick(event){
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
      // 组件向外发送事件/值
      this.triggerEvent('TabarClick',{index:index,titles:this.properties.titles[index]})
    }
  }
})
