$(function () {
    $("img.lazy").lazyload({ effect: "fadeIn" }); if ("" != YMaps.location.city) { var e = YMaps.location.city; $(".geo").prepend(e) } document.getElementById("city").value = e, $(".tb-tele, .in-tele, .mw-tele, .samples-tele, .know-price-tele, .cp-tele").mask("+7(999)999-99-99"), window.onscroll = function () { document.getElementById("toTop").style.display = "200" < window.pageYOffset ? "block" : "none" }, $("a.ancLinks").click(function () { var e = $(this).attr("href"), l = $(e).offset().top; return $("html,body").animate({ scrollTop: l }, 1100), !1 }), $(".popup_content").magnificPopup({ type: "inline", midClick: !0 }), $(".pwimg-wrap").each(function (e) { $(this).find("a").attr("href", "#work_" + e), $(this).find(".modal-descr-pr").attr("id", "work_" + e) }), $("#slider1").responsiveSlides({
        manualControls: "#slider1-pager",
        maxwidth: 400
    }),
        $("#slider2").responsiveSlides({
            manualControls: "#slider2-pager",
            maxwidth: 400
        }),
        $("#slider3").responsiveSlides({
            manualControls: "#slider3-pager",
            maxwidth: 400
        }),
        $("#slider4").responsiveSlides({
            manualControls: "#slider4-pager",
            maxwidth: 400
        }),
        $("#slider5").responsiveSlides({
            manualControls: "#slider5-pager",
            maxwidth: 400
        }),
        $("#slider6").responsiveSlides({
            manualControls: "#slider6-pager",
            maxwidth: 400
        }),
        $("#slider7").responsiveSlides({
            manualControls: "#slider7-pager",
            maxwidth: 400
        }),
        $("#slider8").responsiveSlides({
            manualControls: "#slider8-pager",
            maxwidth: 400
        }),
        $("#slider9").responsiveSlides({
            manualControls: "#slider9-pager",
            maxwidth: 400
        }),
        $("#slider10").responsiveSlides({
            manualControls: "#slider10-pager",
            maxwidth: 400
        }),
        $("#slider11").responsiveSlides({
            manualControls: "#slider11-pager",
            maxwidth: 400
        }),
        $("#slider12").responsiveSlides({
            manualControls: "#slider12-pager",
            maxwidth: 400
        }),
        $("#slider13").responsiveSlides({
            manualControls: "#slider13-pager",
            maxwidth: 400
        }),
        $("#slider14").responsiveSlides({
            manualControls: "#slider14-pager",
            maxwidth: 400
        }),
        $("#slider15").responsiveSlides({
            manualControls: "#slider15-pager",
            maxwidth: 400
        }),
        $("#slider16").responsiveSlides({
            manualControls: "#slider16-pager",
            maxwidth: 400
        }),
        $("#slider17").responsiveSlides({
            manualControls: "#slider17-pager",
            maxwidth: 400
        }),
        $("#slider18").responsiveSlides({
            manualControls: "#slider18-pager",
            maxwidth: 400
        }),
        $("#slider19").responsiveSlides({
            manualControls: "#slider19-pager",
            maxwidth: 400
        }),
        $("#slider20").responsiveSlides({
            manualControls: "#slider20-pager",
            maxwidth: 400
        }),
        $("#slider21").responsiveSlides({
            manualControls: "#slider21-pager",
            maxwidth: 400
        }),
        $("#owl-demo").owlCarousel(
            { navigation: !0, slideSpeed: 300, paginationSpeed: 400, singleItem: !0 }
        ),
        $("#owl-demo-reviews").owlCarousel(
            { navigation: !0, slideSpeed: 300, paginationSpeed: 400, singleItem: !0 }
        ),
        $(".popup").magnificPopup(),
        $("#samples").on("show.bs.modal", function (e) {
            var l = $(e.relatedTarget).data("content");
            $(this).find("#content").text(l)
        }), $("#know-price").on("show.bs.modal",
            function (e) {
                var l = $(e.relatedTarget).data("content");
                $(this).find("#content2").text(l)
            }
        ),
        $("#fixed-menu").removeClass("def-fm"),
        $(window).scroll(function () {
            0 < $(this).scrollTop() ? $("#fixed-menu").addClass("def-fm").fadeIn("fast") : $("#fixed-menu").removeClass("def-fm").fadeIn("fast")
        }),
        $(".politic").magnificPopup(),
        $("a.link").click(
            function () {
                return window.open($(this).data("link")), !1
            }),
        $("#range-one").ionRangeSlider(
            { type: "single", min: 0, max: 100, from: 50, step: 1, keyboard: !0, grid: !0 }
        ); 
        $("#range-one").data("ionRangeSlider"); 
        $(".btn-label").click(function () { 
            $(".btn-label").removeClass("radio-checked"), $(this).addClass("radio-checked") 
        });  $(".calc-left-block, .calc-right-block").change(function () { var e = $("#range-one").val(), l = $("input:radio[name=name-mikro]:checked").val(), i = 0, t = 0, a = 0; "econom" == l && (i = e <= 30 ? 135 : 30 < e && e <= 60 ? 115 : 95, $(".purc-num").html(i + "&#8381;"), $(".sale-num").html("260&#8381;"), t = e * i, $(".zak-text-value").html(t + "&#8381;"), a = 260 * e - t, $(".profit-text-value").html(a + "&#8381;"), $(".final-price").html(2 * a + "&#8381;")), "standart" == l && (i = e <= 30 ? 139 : 30 < e && e <= 60 ? 117 : 97, $(".purc-num").html(i + "&#8381;"), $(".sale-num").html("270&#8381;"), t = e * i, $(".zak-text-value").html(t + "&#8381;"), a = 270 * e - t, $(".profit-text-value").html(a + "&#8381;"), $(".final-price").html(2 * a + "&#8381;")), "gold" == l && (i = e <= 30 ? 139 : 30 < e && e <= 60 ? 117 : 97, $(".purc-num").html(i + "&#8381;"), $(".sale-num").html("270&#8381;"), t = e * i, $(".zak-text-value").html(t + "&#8381;"), a = 270 * e - t, $(".profit-text-value").html(a + "&#8381;"), $(".final-price").html(2 * a + "&#8381;")), "b1" == l && (i = e <= 5 ? 149 : 5 < e && e <= 10 ? 119 : 99, $(".purc-num").html(i + "&#8381;"), $(".sale-num").html("280&#8381;"), t = e * i, $(".zak-text-value").html(t + "&#8381;"), a = 280 * e - t, $(".profit-text-value").html(a + "&#8381;"), $(".final-price").html(2 * a + "&#8381;")), "b2" == l && (i = e <= 5 ? 154 : 5 < e && e <= 10 ? 126 : 106, $(".purc-num").html(i + "&#8381;"), $(".sale-num").html("290&#8381;"), t = e * i, $(".zak-text-value").html(t + "&#8381;"), a = 290 * e - t, $(".profit-text-value").html(a + "&#8381;"), $(".final-price").html(2 * a + "&#8381;")), "b3" == l && (i = e <= 5 ? 159 : 5 < e && e <= 10 ? 130 : 110, $(".purc-num").html(i + "&#8381;"), $(".sale-num").html("350&#8381;"), t = e * i, $(".zak-text-value").html(t + "&#8381;"), a = 350 * e - t, $(".profit-text-value").html(a + "&#8381;"), $(".final-price").html(2 * a + "&#8381;")) }), $(".modal-form, .cart-product, .samples-form, .know-price-form, .form-for-shipping, .tb-form").submit(function () { return $.ajax({ type: "POST", url: "/send", data: $(this).serialize() }).done(function () { $(this).find("input").val(""), window.location.href = "/thank_you.html", $(".fcf-top").trigger("reset") }), !1 }); try { $.browserSelector(), $("html").hasClass("chrome") && $.smoothScroll() } catch (e) { } $("img, a").on("dragstart", function (e) { e.preventDefault() })
});