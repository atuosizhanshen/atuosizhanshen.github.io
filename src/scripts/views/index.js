var indexTpl = require('../tpl/index.string');
//require('../lib/swiper-3.3.1.min.js');
//document.body.innerHTML += indexTpl;
SPA.defineView('index',{
	html: indexTpl,
	plugins: ['delegated'],
	
	//视图的嵌套
	modules:[{
		name:'content',
		container:'.m-index-container',
		views:['home','message','contacts','usercenter'],
		defaultTag:'home'
	}],
	
	init: {
    indexSwiper: null,
    setActive: function (obj) {
      obj.addClass('active').siblings().removeClass('active');
     }
    },
	bindActions:{
		'switch.view':function(e){
//			console.log(e);
            this.modules.content.launch(e.data.tag);
            this.setActive($(e.el));
		}
	}
	
//	bindEvents:{
//		'show':function(){
//			var indexScroll = this.widgets.indexScroll;
//			console.log(indexScroll);
////			indexScroll.options.scrollX = true;
////			indexScroll.options.scrollY = false;
//		}
//	}
});

//window.onload = function(){
//var bannerSwiper = new Swiper('.banner',{
//				direction : 'horizontal',
//				autoplay : 1000,
//				speed:300,
//				loop : true,
//		});
//}