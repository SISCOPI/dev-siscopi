function introFull(){var n=$(".intro-fixed-next"),o=$(".intro-fixed"),t=o.height();$(".intro-fixed-content").height();$(window).width()<768?(n.css("marginTop","0px"),n.addClass("intro-next-static"),o.addClass("intro-fixed-static")):(n.css("marginTop",t+"px"),n.removeClass("intro-next-static"),o.removeClass("intro-fixed-static"))}function navbarScroll(){var n=$(".intro-fixed").height();$(window).scrollTop()>n?$(".navbar").addClass("navbar-scroll"):$(".navbar").removeClass("navbar-scroll")}window.onresize=introFull;var handler=window.onresize;handler.apply(window,[" On"]),$(document).ready(introFull),$(window).resize(introFull),$(window).scroll(navbarScroll),$(function(){var n=$("#go-intro-fixed-next"),o=$("#intro-next");n.click(function(){$("html, body").stop().animate({scrollTop:o.offset().top},1e3)}),$("body").scrollspy({target:"#navbar-lead",offset:200}),$('[data-spy="scroll"]').each(function(){$(this).scrollspy("refresh")}),setTimeout(function(){introFull()},200)});