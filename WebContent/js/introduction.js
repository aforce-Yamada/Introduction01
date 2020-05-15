/*マウスオーバーで透明度の変更*/
$(function(){
$('#navigate1,#navigate2,#navigate3,#navigate4,#ball1,#ball2,#ball3').hover(function(){
	$(this).css('opacity',0.5);
},function(){
	$(this).css('opacity',1);

});
});

/* モンスターボール マウスオーバーで説明文*/
 $(function () {
    $('#ball1').hover(function(){
        $('#explanation1').css('opacity',1);
    },function(){
    	$('#explanation1').css('opacity',0);
    });
 });

$(function () {
    $('#ball2').hover(function(){
        $('#explanation2').css('opacity',1);
    },function(){
    	$('#explanation2').css('opacity',0);

    });
});

$(function () {
    $('#ball3').hover(function(){
        $('#explanation3').css('opacity',1);
    },function(){
    	$('#explanation3').css('opacity',0);
    });
});


// モンスターボール揺れ

$(function(){
	$('#ball1').hover(function(){
		$('#ball1').css({transform:"rotate(45deg)"})
	},function(){
		$('#ball1').css({transform:"rotate(0deg)"});
	});
});

$(function(){
	$('#ball2').hover(function(){
		$('#ball2').css({transform:"rotate(90deg)"})
	},function(){
		$('#ball2').css({transform:"rotate(0deg)"});
	});
});

$(function(){
	$('#ball3').hover(function(){
		$('#ball3').css({transform:"rotate(360deg)"})
	},function(){
		$('#ball3').css({transform:"rotate(0deg)"});
	});
});

// モンスターボール クリックで画像
$('#ball1').on('click',function(){
	$('#demo').html('<img src="../image/フシギダネ02.gif" alt="フシギダネ" id = poke1>');
	$('#poke1').css({
		'transform': 'translateY(700px)',
	    'transition': 'all 1.5s',
		'width':'100px',
		'height':'100px',
		'opacity':'0',
		});
	$("#poke1").animate({
		  'width': '350px',
		  'height': '350px',
		  'opacity':'1', });
	$('#poke1').css({
		'transform': 'translateY(0px)',  });
	});

$('#ball2').on('click',function(){
	$('#demo').html('<img src="../image/ヒトカゲ02.gif" alt="ヒトカゲ" id = poke2>');
	$('#poke2').css({
		'transform': 'translateY(700px)',
	    'transition': 'all 1.5s',
		'width':'100px',
		'height':'100px',
		'opacity':'0',
		});
	$("#poke2").animate({
		  'width': '350px',
		  'height': '350px',
		  'opacity':'1', });
	$('#poke2').css({
		'transform': 'translateY(0px)',  });

	});



$('#ball3').on('click',function(){
	$('#demo').html('<img src="../image/ゼニガメ01.gif" alt="ゼニガメ" id = poke3>');
	$('#poke3').css({
		'transform': 'translateY(700px)',
	    'transition': 'all 1.5s',
		'width':'100px',
		'height':'100px',
		'opacity':'0',
		});
	$("#poke3").animate({
		  'width': '350px',
		  'height': '350px',
		  'opacity':'1', });
	$('#poke3').css({
		'transform': 'translateY(0px)',  });


	});




//---------------------------
//▼A：対象要素を得る
//---------------------------
var tabs = document.getElementById('tabcontrol').getElementsByTagName('a');
var pages = document.getElementById('tabbody').getElementsByTagName('div');

//---------------------------
//▼B：タブの切り替え処理
//---------------------------
function changeTab() {
// ▼B-1. href属性値から対象のid名を抜き出す
var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);

// ▼B-2. 指定のタブページだけを表示する
for(var i=0; i<pages.length; i++) {
   if( pages[i].id != targetid ) {
      pages[i].style.display = "none";
   }
   else {
      pages[i].style.display = "block";
   }
}

// ▼B-3. クリックされたタブを前面に表示する
for(var i=0; i<tabs.length; i++) {
   tabs[i].style.zIndex = "0";
}
this.style.zIndex = "10";

// ▼B-4. ページ遷移しないようにfalseを返す
return false;
}

//---------------------------
//▼C：すべてのタブに対して、クリック時にchangeTab関数が実行されるよう指定する
//---------------------------
for(var i=0; i<tabs.length; i++) {
tabs[i].onclick = changeTab;
}

//---------------------------
//▼D：最初は先頭のタブを選択しておく
//---------------------------
tabs[0].onclick();

// スライドショー
const pics_src = ["../image/trip1.jpg" , "../image/trip2.jpg" , "../image/trip3.jpg" ,
	              "../image/trip4.jpg" , "../image/trip5.jpg" , "../image/trip6.jpg" ,
	              "../image/trip7.jpg" , "../image/trip8.jpg" , "../image/trip9.jpg" ,
	              "../image/trip10.jpg"];
let num = -1;

function slideshow_timer(){
	if(num === 9){
		num === -1;
	} else {
		num ++;
	}
	document.getElementById("mypic").src = pics_src[num];
}
setInterval(slideshow_timer, 4000);

