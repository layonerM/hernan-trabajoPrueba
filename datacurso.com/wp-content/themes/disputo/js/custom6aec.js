/* TAG INPUT */
!function(r){var u=[],o=[],s=[];r.fn.addTag=function(e,i){return i=jQuery.extend({focus:!1,callback:!0},i),this.each(function(){var t=r(this).attr("id"),a=r(this).val().split(l(u[t]));if(""===a[0]&&(a=[]),e=jQuery.trim(e),o[t].unique&&r(this).tagExist(e)||!n(e,o[t],a,u[t]))return r("#"+t+"_tag").addClass("error"),!1;r("<span>",{class:"tag"}).append(r("<span>",{class:"tag-text"}).text(e),r("<button>",{class:"tag-remove"}).click(function(){return r("#"+t).removeTag(encodeURI(e))})).insertBefore("#"+t+"_addTag"),a.push(e),r("#"+t+"_tag").val(""),i.focus?r("#"+t+"_tag").focus():r("#"+t+"_tag").blur(),r.fn.tagsInput.updateTagsField(this,a),i.callback&&s[t]&&s[t].onAddTag&&s[t].onAddTag.call(this,this,e),s[t]&&s[t].onChange&&(a.length,s[t].onChange.call(this,this,e))}),!1},r.fn.removeTag=function(n){return n=decodeURI(n),this.each(function(){var t=r(this).attr("id"),a=r(this).val().split(l(u[t]));r("#"+t+"_tagsinput .tag").remove();var e="";for(i=0;i<a.length;++i)a[i]!=n&&(e=e+l(u[t])+a[i]);r.fn.tagsInput.importTags(this,e),s[t]&&s[t].onRemoveTag&&s[t].onRemoveTag.call(this,this,n)}),!1},r.fn.tagExist=function(t){var a=r(this).attr("id"),e=r(this).val().split(l(u[a]));return 0<=jQuery.inArray(t,e)},r.fn.importTags=function(t){var a=r(this).attr("id");r("#"+a+"_tagsinput .tag").remove(),r.fn.tagsInput.importTags(this,t)},r.fn.tagsInput=function(t){var n=jQuery.extend({interactive:!0,placeholder:"Add a tag",minChars:0,maxChars:null,limit:null,validationPattern:null,width:"auto",height:"auto",autocomplete:null,hide:!0,delimiter:",",unique:!0,removeWithBackspace:!0},t),i=0;return this.each(function(){var t,a,e;void 0===r(this).data("tagsinput-init")&&(r(this).data("tagsinput-init",!0),n.hide&&r(this).hide(),(t=r(this).attr("id"))&&!l(u[r(this).attr("id")])||(t=r(this).attr("id","tags"+(new Date).getTime()+ ++i).attr("id")),a=jQuery.extend({pid:t,real_input:"#"+t,holder:"#"+t+"_tagsinput",input_wrapper:"#"+t+"_addTag",fake_input:"#"+t+"_tag"},n),u[t]=a.delimiter,o[t]={minChars:n.minChars,maxChars:n.maxChars,limit:n.limit,validationPattern:n.validationPattern,unique:n.unique},(n.onAddTag||n.onRemoveTag||n.onChange)&&(s[t]=[],s[t].onAddTag=n.onAddTag,s[t].onRemoveTag=n.onRemoveTag,s[t].onChange=n.onChange),e=r("<div>",{id:t+"_tagsinput",class:"tagsinput"}).append(r("<div>",{id:t+"_addTag"}).append(n.interactive?r("<input>",{id:t+"_tag",class:"tag-input",value:"",placeholder:n.placeholder}):null)),r(e).insertAfter(this),r(a.holder).css("width",n.width),r(a.holder).css("min-height",n.height),r(a.holder).css("height",n.height),""!==r(a.real_input).val()&&r.fn.tagsInput.importTags(r(a.real_input),r(a.real_input).val()),n.interactive&&(r(a.fake_input).val(""),r(a.fake_input).data("pasted",!1),r(a.fake_input).on("focus",a,function(t){r(a.holder).addClass("focus"),""===r(this).val()&&r(this).removeClass("error")}),r(a.fake_input).on("blur",a,function(t){r(a.holder).removeClass("focus")}),null!==n.autocomplete&&void 0!==jQuery.ui.autocomplete?(r(a.fake_input).autocomplete(n.autocomplete),r(a.fake_input).on("autocompleteselect",a,function(t,a){return r(t.data.real_input).addTag(a.item.value,{focus:!0,unique:n.unique}),!1}),r(a.fake_input).on("keypress",a,function(t){d(t)&&r(this).autocomplete("close")})):r(a.fake_input).on("blur",a,function(t){return r(t.data.real_input).addTag(r(t.data.fake_input).val(),{focus:!0,unique:n.unique}),!1}),r(a.fake_input).on("keypress",a,function(t){if(d(t))return t.preventDefault(),r(t.data.real_input).addTag(r(t.data.fake_input).val(),{focus:!0,unique:n.unique}),!1}),r(a.fake_input).on("paste",function(){r(this).data("pasted",!0)}),r(a.fake_input).on("input",a,function(t){if(r(this).data("pasted")){r(this).data("pasted",!1);var a=r(t.data.fake_input).val();a=(a=a.replace(/\n/g,"")).replace(/\s/g,"");var e=h(t.data.delimiter,a);if(1<e.length){for(var i=0;i<e.length;++i)r(t.data.real_input).addTag(e[i],{focus:!0,unique:n.unique});return!1}}}),a.removeWithBackspace&&r(a.fake_input).on("keydown",function(t){var a,e;8==t.keyCode&&""===r(this).val()&&(t.preventDefault(),a=r(this).closest(".tagsinput").find(".tag:last > span").text(),e=r(this).attr("id").replace(/_tag$/,""),r("#"+e).removeTag(encodeURI(a)),r(this).trigger("focus"))}),r(a.fake_input).keydown(function(t){-1===jQuery.inArray(t.keyCode,[13,37,38,39,40,27,16,17,18,225])&&r(this).removeClass("error")})))}),this},r.fn.tagsInput.updateTagsField=function(t,a){var e=r(t).attr("id");r(t).val(a.join(l(u[e])))},r.fn.tagsInput.importTags=function(t,a){r(t).val("");var e=r(t).attr("id"),n=h(u[e],a);for(i=0;i<n.length;++i)r(t).addTag(n[i],{focus:!1,callback:!1});s[e]&&s[e].onChange&&s[e].onChange.call(t,t,n)};var l=function(t){return void 0===t||"string"==typeof t?t:t[0]},n=function(e,t,a,i){var n=""===e?!1:!0;return e.length<t.minChars&&(n=!1),null!==t.maxChars&&e.length>t.maxChars&&(n=!1),null!==t.limit&&a.length>=t.limit&&(n=!1),null===t.validationPattern||t.validationPattern.test(e)||(n=!1),"string"==typeof i?-1<e.indexOf(i)&&(n=!1):r.each(i,function(t,a){return-1<e.indexOf(a)&&(n=!1),!1}),n},d=function(e){var i=!1;return 13===e.which||("string"==typeof e.data.delimiter?e.which===e.data.delimiter.charCodeAt(0)&&(i=!0):r.each(e.data.delimiter,function(t,a){e.which===a.charCodeAt(0)&&(i=!0)}),i)},h=function(t,a){if(""===a)return[];if("string"==typeof t)return a.split(t);var e=a;return r.each(t,function(t,a){e=e.split(a).join("∞")}),e.split("∞")}}(jQuery);
/* CUSTOM */
(function($) {
    "use strict";

    /* HEADER BACKGROUND IMAGE */
    var headerBgImage = function() {
        var disputo_img = $('#disputo-page-title-img').data('img');
        $('#disputo-page-title-img').css('background-image', 'url("' + disputo_img + '")');
    };

    /* BOOTSTRAP DROPDOWN ON HOVER */
    var disputo_hover = function() {
        var screen_width = document.body.clientWidth;
        if (screen_width >= 991) {
            $('#disputo-main-menu').find('ul.nav li.dropdown').on({
                mouseenter: function() {
                    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200).addClass('menudown');
                },
                mouseleave: function() {
                    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200).removeClass('menudown');
                }
            });
        }
    };

    /* GO TO TOP BUTTON */
    $('#disputo-go-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /* CMB2 Form Message */
    var cmb_url = $("#disputo_usercover").prop("action") + '?updated=true';
    $("#disputo_usercover").prop("action", cmb_url);

    $(document).on('click', '#disputo-top-bar-login-form .dropdown-menu', function (e) {
        e.stopPropagation();
    });

    /* EVENTS */
    $(document).ready(function() {
        disputo_hover();
        headerBgImage();
        $("#disputo_usercover").attr('autocomplete', 'off');
        $('body').find('select').addClass('custom-select');
        $('#disputo-main-menu').find('.dropdown-menu').addClass(disputo_dropdown_vars.disputo_dropdown_align);
        $('#disputo-top-bar-login').find('.dropdown-menu').addClass(disputo_dropdown_vars.disputo_dropdown_align_2);
        $('#disputo-top-bar-login-form').find('.dropdown-menu').addClass(disputo_dropdown_vars.disputo_dropdown_align_2);
        $('#bbpress-forums').find('.dropdown-menu').addClass(disputo_dropdown_vars.disputo_dropdown_align_2);
        $('body').find('.disputo-masonry-grid').css('opacity', '1');
        $('.disputo-four-columns').find('.card-masonry').addClass('card-small');
        $('.disputo-five-columns').find('.card-masonry').addClass('card-small');
        $('#disputo-main-inner').find('.disputo-popover').popover({
            html: true
        });
        $('body').find('[data-toggle="tooltip"]').tooltip();
        $('#bbp_topic_tags').tagsInput({placeholder:''});
    });
})(jQuery);