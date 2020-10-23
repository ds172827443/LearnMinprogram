// Component/My-cpn/My-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'我是My-cpn组件',
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal);      
      }
    },
  },
  externalClasses:['titleclass'],

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
})
