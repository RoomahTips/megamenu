function labelthumbs(t){for(var e=0;e<numposts;e++){var n,r=t.feed.entry[e],m=r.title.$t;if(e==t.feed.entry.length)break;for(var i=0;i<r.link.length;i++){if("replies"==r.link[i].rel&&"text/html"==r.link[i].type)var l=r.link[i].title,o=r.link[i].href;if("alternate"==r.link[i].rel){n=r.link[i].href;break}}var u;try{u=r.media$thumbnail.url,u=u.replace("/s72-c/","/w"+thumb_width+"-h"+thumb_height+"-c/")}catch(h){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('async = true src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),u=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb}var p=r.published.$t,w=p.substring(0,4),_=p.substring(5,7),f=p.substring(8,10),g=new Array;g[1]="January",g[2]="February",g[3]="March",g[4]="April",g[5]="May",g[6]="June",g[7]="July",g[8]="August",g[9]="September",g[10]="October",g[11]="November",g[12]="December",document.write('<span class="blanter_left">'),document.write('<ul class="blanter_thumbs">'),document.write("<li>"),1==showpostthumbnails&&document.write('<a href="'+n+'"><div class="cat_thumb"><span class="rollover"></span><img width="'+thumb_width+'" height="'+thumb_height+'" alt="'+m+'" a.async=true;a src="'+u+'"/></div></a>'),document.write('<span class="blanter_title"><a href="'+n+'" target ="_top">'+m+"</a></span>");var v="";if(document.write('<span class="blanter_meta">'),1==showpostdate&&(v=v+'<span class="blanter_meta_date">'+g[parseInt(_)]+" "+f+", "+w+"</span>"),1==showcommentnum&&("1 Comments"==l&&(l="1 Comments"),"0 Comments"==l&&(l="0 Comments"),showcomment='<span class="blanter_meta_comment"><a href="'+o+'">'+l+"</a></span>",v+=showcomment),1==displaymore&&(v=v+'<span class="blanter_meta_more"><a href="'+n+'" class="url" target ="_top">Read More...</a></span>'),document.write(v),document.write("</span>"),document.write('<span class="blanter_summary">'),"content"in r)var y=r.content.$t;else if("summary"in r)var y=r.summary.$t;else var y="";var k=/<\S[^>]*>/g;if(y=y.replace(k,""),1==showpostsummary)if(y.length<numchars)document.write(""),document.write(y),document.write("");else{document.write(""),y=y.substring(0,numchars);var $=y.lastIndexOf(" ");y=y.substring(0,$),document.write(y+"..."),document.write("")}document.write("</span>"),document.write("</li>"),document.write("</ul>"),document.write("</span>")}document.write('<span class="blanter_right">'),document.write('<ul class="blanter_thumbs2">');for(var e=1;e<numposts2;e++){var  n,r=t.feed.entry[e],m=r.title.$t;if(e==t.feed.entry.length)break;for(var i=1;i<r.link.length;i++){if("replies"==r.link[i].rel&&"text/html"==r.link[i].type)var l=r.link[i].title,o=r.link[i].href;if("alternate"==r.link[i].rel){n=r.link[i].href;break}}var x;try{x=r.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/")}catch(h){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),x=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb2}var p=r.published.$t,w=p.substring(0,4),_=p.substring(5,7),f=p.substring(8,10);1==showpostthumbnails2&&document.write('<a href="'+n+'"><div class="cat_thumb2"><img width="'+thumb_width2+'" height="'+thumb_height2+'" alt="'+m+'" a.async=true;a src="'+x+'"/></div></a>'),document.write("<li>"),document.write('<span class="blanter_title blanter_title2"><a href="'+n+'" target ="_top">'+m+"</a></span>");var v="";document.write('<span class="blanter_meta blanter_meta2">'),1==showpostdate2&&(v=v+'<span class="blanter_meta_date">'+g[parseInt(_)]+" "+f+", "+w+"</span>"),1==showcommentnum2&&("1 Comment"==l&&(l="1 Comments"),"0 Comment"==l&&(l="0 Comments"),showcomment='<span class="blanter_meta_comment blanter_meta_comment2"><a href="'+o+'">'+l+"</a></span>",v+=showcomment),1==displaymore2&&(v=v+'<span class="blanter_meta_more blanter_meta_more2"><a href="'+n+'" class="url" target ="_top">Read More...</a></span>'),document.write(v),document.write("</span>"),document.write("</li>")}document.write("</ul>"),document.write("</span>")}
//<![CDATA[
    // Script Widget Sticky
$(function(){if($("#HTML2").length){var o=$("#HTML2"),t=$("#HTML2").offset().top,i=$("#HTML2").height();$(window).scroll(function(){var s=$("#footer-wrapper").offset().top-i-70,f=$(window).scrollTop();if(f>t?o.css({position:"fixed",top:0}):o.css("position","static"),f>s){var n=s-f;o.css({top:n})}})}});
    //]]>
jQuery(document).ready(function($) {
 $(&#39;#adajaxmenu&#39;).ajaxBloggerMenu({
  numPosts : 4, // Number of Posts to show
  defaultImg : &#39;http://url-to-image.com/default-image.jpeg&#39; // Default thumbnail Image
 });
});

$(function(){
  $(&#39;.searchblog&#39;).submit(function(e){
    if($(&#39;.search-form .searchbar&#39;).val().length==0){
       $(&#39;.search-form .search-alert&#39;).fadeIn().css(&#39;display&#39;,&#39;inline-block&#39;);
      e.preventDefault();
    }
  });
});

function getCurrentYear(){var e=new Date;return e.getFullYear()}el=document.getElementById(&quot;current-year&quot;),el.innerHTML=getCurrentYear();
function show(e){document.getElementById(e).style.display=&quot;block&quot;}function hide(e){document.getElementById(e).style.display=&quot;none&quot;}
// Slide toggle
$(function(){$(&quot;#simplify-click &gt; li&quot;).click(function(i){var l=$(&quot;ul&quot;,this);return $(&quot;#simplify-click &gt; li &gt; ul&quot;).not(l).slideUp(),l.stop(!0,!0).slideToggle(400),!1}),$(&quot;#simplify-click &gt; li &gt; ul &gt; li&quot;).click(function(i){i.stopPropagation()})});
//<![CDATA[
// Back to top button
$(function(){$(window).scroll(function(){$(this).scrollTop()>400?$(".simplifytotop").addClass('arlniainf'):$(".simplifytotop").removeClass('arlniainf')}),$(".simplifytotop").click(function(){return $("html,body").animate({scrollTop:0},400),!1})});
//]]>
