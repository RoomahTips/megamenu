imgr=new Array();imgr[0]="http://2.bp.blogspot.com/-uitX7ROPtTU/Tyv-G4NA_uI/AAAAAAAAFBY/NcWLPVnYEnU/s1600/no+image.jpg";showRandomImg=true;aBold=true;summaryPost=100;summaryPost1=140;summaryTitle=25;numposts1=6;numposts2=0;numposts3=0;numposts4=0;numposts5=0;numposts6=0;function removeHtmlTag(strx,chop){var s=strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length)}}s=s.join("");s=s.substring(0,chop-1);return s}function showrecentposts(json){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();document.write('<ul>');for(var i=0;i<numposts1;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var pcm;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){pcm=entry.link[k].title.split(" ")[0];break}}if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";postdate=entry.published.$t;if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img[i]=d;var month=[1,2,3,4,5,6,7,8,9,10,11,12];var month2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var day=postdate.split("-")[2].substring(0,2);var m=postdate.split("-")[1];var y=postdate.split("-")[0];for(var u2=0;u2<month.length;u2++){if(parseInt(m)==month[u2]){m=month2[u2];break}}var daystr=day+' '+m+' '+y;var trtd='<li class="car"><div class="thumb"><a href="'+posturl+'"><img width="145" height="100" class="alignnone" a.async=true;a src="'+img[i]+'"/></a></div><p><a class="slider_title" href="'+posturl+'">'+posttitle+'</a></p></li>';document.write(trtd);j++}document.write('</ul>')}
$(function(){var panel=$(&#39;#panel&#39;);menu=$(&#39;nav ul&#39;);menuHeight=menu.height();$(panel).on(&#39;click&#39;,function(e){e.preventDefault();menu.slideToggle()});$(window).resize(function(){var w=$(window).width();if(w&gt;320&amp;&amp;menu.is(&#39;:hidden&#39;)){menu.removeAttr(&#39;style&#39;)}})});


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
