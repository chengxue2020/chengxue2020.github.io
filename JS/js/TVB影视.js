var rule={
title:'TVA云播',
host:'http://www.tvyb03.com',
url:'/vod/type/id/fyclass/page/fypage.html',
searchUrl:'/vod/search/page/fypage/wd/**.html',
searchable:2,
quickSearch:1,
filterable:0,
headers:{'User-Agent':'MOBILE_UA', },
class_name:'电影&电视剧&综艺&动漫',
class_url:'1&2&3&4',
推荐:'.myui-vodlist.clearfix li;*;*;*;*',
一级:'.myui-vodlist.clearfix li;a&&title;.lazyload&&data-original;.tag&&Text;a&&href',
二级:{"title":"h1&&Text;.data:eq(0) a:eq(0)&&Text","img":".lazyload&&data-original","desc":";.data:eq(0) a:eq(2)&&Text;.data:eq(0) a:eq(1)&&Text;.data:eq(2)&&Text;.data:eq(3)&&Text","content":".text-collapse span&&Text","tabs":".myui-panel__head h3","lists":".myui-content__list:eq(#id) li"},
搜索:'.myui-vodlist__media.clearfix li;*;*;*;*',
}