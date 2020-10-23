// Component/my-event/my-event.js
Component({

  methods: {
    btnAddClick(){
      // console.log('11111111');
      this.triggerEvent('btnAddClick',{name:'dong',age:18},{})
      
    }
  }
})
