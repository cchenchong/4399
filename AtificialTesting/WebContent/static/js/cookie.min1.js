OT2.Cookie={set:function(e,n,t,o,i){"undefined"==typeof t&&(t=new Date((new Date).getTime()+36e5)),t=t?"; expires="+t.toGMTString():"",o=o?"; path="+o:"; path=/",i=i?";domain="+i:"",document.cookie=e+"="+escape(n)+t+o+i},get:function(e){var n=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=n?unescape(n[2]):null},clear:function(e,n,t){this.get(e)&&(n=n?"; path="+n:"; path=/",t=t?"; domain="+t:"",document.cookie=e+"="+n+t+";expires=Fri, 02-Jan-1970 00:00:00 GMT")}};