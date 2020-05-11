function labelthumbs(t){for(var e=0;e<numposts;e++){var n,r=t.feed.entry[e],m=r.title.$t;if(e==t.feed.entry.length)break;for(var i=0;i<r.link.length;i++){if("replies"==r.link[i].rel&&"text/html"==r.link[i].type)var l=r.link[i].title,o=r.link[i].href;if("alternate"==r.link[i].rel){n=r.link[i].href;break}}var u;try{u=r.media$thumbnail.url,u=u.replace("/s72-c/","/w"+thumb_width+"-h"+thumb_height+"-c/")}catch(h){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('async = true src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),u=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb}var p=r.published.$t,w=p.substring(0,4),_=p.substring(5,7),f=p.substring(8,10),g=new Array;g[1]="January",g[2]="February",g[3]="March",g[4]="April",g[5]="May",g[6]="June",g[7]="July",g[8]="August",g[9]="September",g[10]="October",g[11]="November",g[12]="December",document.write('<span class="blanter_left">'),document.write('<ul class="blanter_thumbs">'),document.write("<li>"),1==showpostthumbnails&&document.write('<a href="'+n+'"><div class="cat_thumb"><span class="rollover"></span><img width="'+thumb_width+'" height="'+thumb_height+'" alt="'+m+'" a.async=true;a src="'+u+'"/></div></a>'),document.write('<span class="blanter_title"><a href="'+n+'" target ="_top">'+m+"</a></span>");var v="";if(document.write('<span class="blanter_meta">'),1==showpostdate&&(v=v+'<span class="blanter_meta_date">'+g[parseInt(_)]+" "+f+", "+w+"</span>"),1==showcommentnum&&("1 Comments"==l&&(l="1 Comments"),"0 Comments"==l&&(l="0 Comments"),showcomment='<span class="blanter_meta_comment"><a href="'+o+'">'+l+"</a></span>",v+=showcomment),1==displaymore&&(v=v+'<span class="blanter_meta_more"><a href="'+n+'" class="url" target ="_top">Read More...</a></span>'),document.write(v),document.write("</span>"),document.write('<span class="blanter_summary">'),"content"in r)var y=r.content.$t;else if("summary"in r)var y=r.summary.$t;else var y="";var k=/<\S[^>]*>/g;if(y=y.replace(k,""),1==showpostsummary)if(y.length<numchars)document.write(""),document.write(y),document.write("");else{document.write(""),y=y.substring(0,numchars);var $=y.lastIndexOf(" ");y=y.substring(0,$),document.write(y+"..."),document.write("")}document.write("</span>"),document.write("</li>"),document.write("</ul>"),document.write("</span>")}document.write('<span class="blanter_right">'),document.write('<ul class="blanter_thumbs2">');for(var e=1;e<numposts2;e++){var  n,r=t.feed.entry[e],m=r.title.$t;if(e==t.feed.entry.length)break;for(var i=1;i<r.link.length;i++){if("replies"==r.link[i].rel&&"text/html"==r.link[i].type)var l=r.link[i].title,o=r.link[i].href;if("alternate"==r.link[i].rel){n=r.link[i].href;break}}var x;try{x=r.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/")}catch(h){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),x=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb2}var p=r.published.$t,w=p.substring(0,4),_=p.substring(5,7),f=p.substring(8,10);1==showpostthumbnails2&&document.write('<a href="'+n+'"><div class="cat_thumb2"><img width="'+thumb_width2+'" height="'+thumb_height2+'" alt="'+m+'" a.async=true;a src="'+x+'"/></div></a>'),document.write("<li>"),document.write('<span class="blanter_title blanter_title2"><a href="'+n+'" target ="_top">'+m+"</a></span>");var v="";document.write('<span class="blanter_meta blanter_meta2">'),1==showpostdate2&&(v=v+'<span class="blanter_meta_date">'+g[parseInt(_)]+" "+f+", "+w+"</span>"),1==showcommentnum2&&("1 Comment"==l&&(l="1 Comments"),"0 Comment"==l&&(l="0 Comments"),showcomment='<span class="blanter_meta_comment blanter_meta_comment2"><a href="'+o+'">'+l+"</a></span>",v+=showcomment),1==displaymore2&&(v=v+'<span class="blanter_meta_more blanter_meta_more2"><a href="'+n+'" class="url" target ="_top">Read More...</a></span>'),document.write(v),document.write("</span>"),document.write("</li>")}document.write("</ul>"),document.write("</span>")}

function labelthumbs(json) {
    for (var i = 0; i < numposts; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                var commenttext = entry.link[k].title;
                var commenturl = entry.link[k].href;
            }
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
            }
        }
        var thumburl;	
        try {
            thumburl = entry.media$thumbnail.url;
			thumburl = thumburl.replace("/s72-c/","/w"+thumb_width+"-h"+thumb_height+"-c/");
        } catch (error) {
            s = entry.content.$t;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);
            if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                thumburl = d;
            } else thumburl = no_thumb;
        }
        var postdate = entry.published.$t;
        var cdyear = postdate.substring(0, 4);
        var cdmonth = postdate.substring(5, 7);
        var cdday = postdate.substring(8, 10);
		document.write('<ul class="rp_thumbs">');
        document.write('<li>');
        if (showpostthumbnails == true)
            document.write('<a href="' + posturl + '"><div class="rp_thumb"><span class="rollover"></span><img width="' + thumb_width + '" height="' + thumb_height + '" alt="' + posttitle + '" src="' + thumburl + '"/></div></a>');
        document.write('<span class="rp_title"><a href="' + posturl + '" target ="_top">' + posttitle + '</a></span>');
        var towrite = '';
        document.write('<span class="rp_meta">');
        if (showpostdate == true) {
            towrite = towrite + '<span class="rp_meta_date">' + cdday + '/' + cdmonth + '/' + cdyear + '</span>';
        }
        if (showcommentnum == true) {
            if (commenttext == '1 Comments') commenttext = '1 Comment';
            if (commenttext == '0 Comments') commenttext = 'No Comments';
            commenttext = '<span class="rp_meta_comment"><a href="' + commenturl + '" target ="_top">' + commenttext + '</a></span>';
            towrite = towrite + commenttext;
        }
        if (displaymore == true) {
            towrite = towrite + '<span class="rp_meta_more"><a href="' + posturl + '" class="url" target ="_top">Read More...</a></span>';
        }
        document.write(towrite);
		document.write('</span>');
		document.write('<span class="rp_summary">');
        if ("content" in entry) {
            var postcontent = entry.content.$t;
        } else
        if ("summary" in entry) {
            var postcontent = entry.summary.$t;
        } else var postcontent = "";
        var re = /<\S[^>]*>/g;
        postcontent = postcontent.replace(re, "");
        if (showpostsummary == true) {
            if (postcontent.length < numchars) {
                document.write('');
                document.write(postcontent);
                document.write('');
            } else {
                document.write('');
                postcontent = postcontent.substring(0, numchars);
                var quoteEnd = postcontent.lastIndexOf(" ");
                postcontent = postcontent.substring(0, quoteEnd);
                document.write(postcontent + '...');
                document.write('');
            }
        }
		document.write('</span>');
        document.write('</li>');
		document.write('</ul>');	
    }
    document.write('<ul class="rp_thumbs2">');
    for (var i = 1; i < numposts2; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;

        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 1; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                var commenttext = entry.link[k].title;
                var commenturl = entry.link[k].href;
            }
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
            }
        }
        var thumburl2;	
        try {
            thumburl2 = entry.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/");
        } catch (error) {
            s = entry.content.$t;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);
            if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                thumburl2 = d;
            } else thumburl2 = no_thumb2;
        }
        var postdate = entry.published.$t;
        var cdyear = postdate.substring(0, 4);
        var cdmonth = postdate.substring(5, 7);
        var cdday = postdate.substring(8, 10);
		if (showpostthumbnails2 == true)
            document.write('<a href="' + posturl + '"><div class="rp_thumb2"><img width="' + thumb_width2 + '" height="' + thumb_height2 + '" alt="' + posttitle + '" src="' + thumburl2 + '"/></div></a>');
		document.write('<li>');
		document.write('<span class="rp_title rp_title2"><a href="' + posturl + '" target ="_top">' + posttitle + '</a></span>');
        var towrite = '';
        document.write('<span class="rp_meta rp_meta2">');
        if (showpostdate2 == true) {
            towrite = towrite + '<span class="rp_meta_date rp_meta_date2">' + cdday + '/' + cdmonth + '/' + cdyear + '</span>';
        }
        if (showcommentnum2 == true) {
            if (commenttext == '1 Comments') commenttext = '1 Comment';
            if (commenttext == '0 Comments') commenttext = 'No Comments';
            commenttext = '<span class="rp_meta_comment rp_meta_comment2"><a href="' + commenturl + '" target ="_top">' + commenttext + '</a></span>';
            towrite = towrite + commenttext;
        }
        if (displaymore2 == true) {
            towrite = towrite + '<span class="rp_meta_more rp_meta_more2"><a href="' + posturl + '" class="url" target ="_top">Read More...</a></span>';
        }
        document.write(towrite);
		document.write('</span>');
		document.write('</li>');
    }
    document.write("</ul>")
}
