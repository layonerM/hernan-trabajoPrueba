/*!
* eForm - WordPress Form Builder
*
* Autogenerated by Grunt on: 2021-09-22
* @version 4.15.1
* @author Swashata Ghosh (WPQuark)
* @license GPL-3.0
*/
/**
 * eForm JavaScript Helper for getting values of elements
 *
 * Works just like the value class on the server side
 *
 * @author Swashata Ghosh
 * @license GPL-3.0
 */
!function(t,e,i,n){"use strict";var r={optionDelimiter:", ",rowDelimiter:"\n",rangeDelimiter:"/",entryDelimiter:" : "};function u(e,i,n){this.formId=e,this.element=i,this.jElement=t(this.element),this.settings=t.extend({},r,n),this._defaults=r}u.prototype={getValue:function(i,n,r,u){void 0==r&&(r="string"),void 0==u&&(u="label");var a=t("#ipt_fsqm_form_"+this.formId+"_"+i+"_"+n);if(!a.length)return null;var l=a.prev().val(),_=this.__mTypeMethod(l);return"function"==typeof this[_]?this[_](a,r,u):"function"==typeof e["eFormExtendedValues"+_]?e["eFormExtendedValues"+_].call(this,a,r,u):null},_valueCheckbox:function(t,e,i){return this.__getMCQTypes(t,e,i)},_valueRadio:function(t,e,i){return this.__getMCQTypes(t,e,i)},_valueSelect:function(t,e,i){return this.__getSelectTypes(t,e,i)},_valueThumbselect:function(e,i,n){var r,u=[];return e.find(".ipt_uif_thumbselect").filter(":checked").each(function(){r=t(this),u[u.length]="label"==n?r.data("label").trim():r.val()}),"string"==i?u.join(this.getOptionDelimiter()):u},_valuePricingTable:function(e,i,n){var r,u=[];return e.find(".eform-pricing-table-radio").filter(":checked").each(function(){r=t(this),u[u.length]="label"==n?r.data("label").trim():r.val()}),"string"==i?u.join(this.getOptionDelimiter()):u},_valueSlider:function(t,e,i){return t.find(".ipt_uif_slider").val().trim()},_valueRange:function(t,e,i){var n=[];return n[0]=t.find(".ipt_uif_slider").val().trim(),n[1]=t.find(".ipt_uif_slider_range_max").val().trim(),"string"==e?n.join(this.getRangeDelimiter()):n},_valueGrading:function(e,i,n){var r,u,a=[],l=this;return e.find(".ipt_uif_slider_box").each(function(){r=t(this),u={label:r.parent().prev().find("label").text(),values:[r.find(".ipt_uif_slider").val().trim()]},r.find(".ipt_uif_slider_range_max").length&&(u.values[1]=r.find(".ipt_uif_slider_range_max").val().trim()),a[a.length]="string"==i?u.label+l.getEntryDelimiter()+u.values.join(l.getRangeDelimiter()):u}),"string"==i?a.join(this.getRowDelimiter()):a},_valueSmileyrating:function(e,i,n){var r=[],u=e.find(".ipt_uif_smiley_rating_feedback");return e.find(".ipt_uif_smiley_rating_radio").filter(":checked").each(function(){r[r.length]=t(this).data("label")}),u.length&&""!=u.val().trim()&&(r[r.length]=u.val().trim()),"string"==i?r.join(this.getRowDelimiter()):r},_valueStarrating:function(t,e,i){return this.__getRatingTypes(t,e,i)},_valueScalerating:function(t,e,i){return this.__getRatingTypes(t,e,i)},_valueSpinners:function(e,i,n){var r,u,a=[],l=this;return e.find(".eform-spinner-container").each(function(){r=t(this),void 0===(u={label:r.find(".ipt_uif_question_label label").text(),value:r.find(".ipt_uif_uispinner").val()}).value&&(u.value=""),u.value=u.value.trim(),a[a.length]="string"==i?u.label+l.getEntryDelimiter()+u.value:u}),"string"==i?a.join(this.getRowDelimiter()):a},_valueMatrix:function(e,i,n){var r,u,a,l,_,s,o=[],f=[];if(r=e.find(".ipt_uif_matrix tbody > tr"),u=e.find(".ipt_uif_matrix thead > tr > th"),r.each(function(e){f[e]=[t(this).find("> th").text()]}),e.find(".ipt_uif_radio, .ipt_uif_checkbox").filter(":checked").each(function(){_=t(this),a=r.index(_.closest("tr")),l=_.closest("tr").find("> *").index(_.closest("td")),void 0==f[a]&&(f[a]=[]),f[a].push(u.eq(l).text())}),"string"==i){for(s in f)o[s]=f[s].join(this.getEntryDelimiter());return o.join(this.getRowDelimiter())}return f},_valueMatrixDropdown:function(e,i,n){var r,u,a,l,_,s=[],o=[],f=this;return r=e.find(".ipt_uif_matrix tbody > tr"),u=e.find(".ipt_uif_matrix thead > tr > th"),r.each(function(e){_=t(this).find("> th").text(),t(this).find("td").each(function(e){(o=[_]).push(u.eq(e+1).text()),a=t(this).find("select.ipt_uif_select"),l=[],a.find("option").filter(":selected").each(function(){""!=t(this).val()&&l.push("label"==n?t(this).text():t(this).val())}),"string"==i?o.push(l.join(f.getOptionDelimiter())):o.push(l),s.push("string"==i?o.join(f.getEntryDelimiter()):o)})}),"string"==i?s.join(this.getRowDelimiter()):s},_valueLikedislike:function(e,i,n){var r=[],u=e.find(".ipt_uif_likedislike_rating_feedback");return e.find(".ipt_uif_likedislike_rating_radio").filter(":checked").each(function(){r[r.length]=t(this).data("label")}),u.length&&""!=u.val().trim()&&(r[r.length]=u.val().trim()),"string"==i?r.join(this.getRowDelimiter()):r},_valueToggle:function(t,e,i){var n=t.find(".ipt_uif_switch");return n.is(":checked")?n.data("on"):n.data("off")},_valueSorting:function(t,e,i){return this.__getSortingTypes(t,e,i)},_valueFeedbackLarge:function(t,e,i){return this.__getTextTypes(t,e,i)},_valueFeedbackSmall:function(t,e,i){return this.__getTextTypes(t,e,i)},_valueUpload:function(t,e,i){return"Not Supported"},_valueMathematical:function(t,e,i){return t.find(".ipt_uif_mathematical_input").val()},_valueFeedbackMatrix:function(e,i,n){var r=[];return e.find(".ipt_uif_text, .ipt_uif_textarea").each(function(){r.push(t(this).val().trim())}),"string"==i?r.join(this.getRowDelimiter()):r},_valueSignature:function(t,e,i){var n=t.find(".ipt_uif_jsignature_pad ").jSignature("getData","svgbase64");return n&&n[0]&&n[1]?"data:"+n.join(","):""},_valueGps:function(e,i,n){var r,u,a=[],l=this;return e.find(".locationpicker-widget > .ipt_uif_column").each(function(){u=t(this),r="string"==i?u.find("label").text()+l.getEntryDelimiter()+u.find("input.ipt_uif_text").val().trim():{label:u.find("label").text(),value:u.find("input.ipt_uif_text").val().trim()},a.push(r)}),"string"==i?a.join(this.getRowDelimiter()):a},_valuePayment:function(t,e,i){return t.find("input.ipt_uif_mathematical_input").val()},_valueFName:function(t,e,i){return this.__getTextTypes(t,e,i)},_valueLName:function(t,e,i){return this.__getTextTypes(t,e,i)},_valueEmail:function(t,e,i){return this.__getTextTypes(t,e,i)},_valuePhone:function(t,e,i){return this.__getTextTypes(t,e,i)},_valuePPhone:function(t,e,i){return this.__getTextTypes(t,e,i)},_valuePName:function(t,e,i){return this.__getTextTypes(t,e,i)},_valuePEmail:function(t,e,i){return this.__getTextTypes(t,e,i)},_valueTextinput:function(t,e,i){return this.__getTextTypes(t,e,i)},_valueTextarea:function(t,e,i){return this.__getTextTypes(t,e,i)},_valuePassword:function(t,e,i){return this.__getTextTypes(t,e,i)},_valueKeypad:function(t,e,i){return this.__getTextTypes(t,e,i)},_valueDatetime:function(t,e,i){return this.__getTextTypes(t,e,i)},_valuePCheckbox:function(t,e,i){return this.__getMCQTypes(t,e,i)},_valuePRadio:function(t,e,i){return this.__getMCQTypes(t,e,i)},_valuePSelect:function(t,e,i){return this.__getSelectTypes(t,e,i)},_valueSCheckbox:function(t,e,i){return this.__getMCQTypes(t,e,i)},_valueAddress:function(e,i,n){var r,u=[];return e.find(".ipt_uif_text").each(function(){""!=(r=t(this).val().trim())&&u.push(r)}),"string"==i?u.join(this.getRowDelimiter()):u},_valuePSorting:function(t,e,i){return this.__getSortingTypes(t,e,i)},_valueHidden:function(t,e,i){return this.__getTextTypes(t,e,i)},_valueRepeatable:function(t,e,i){return"Not supported"},_valueGuestblog:function(t,e,i){return"Not supported"},__getTextTypes:function(t,e,i){return t.find(".ipt_uif_text, .ipt_uif_textarea, .ipt_uif_password, .ipt_uif_hidden_input").val()},__getMCQTypes:function(e,i,n){var r,u=[],a=!1;return e.find(".ipt_uif_radio, .ipt_uif_checkbox").filter(":checked").each(function(){r=t(this),u[u.length]="label"==n?r.next("label").html().trim():r.val(),"others"==r.val()&&(a=!0)}),a&&e.find(".ipt_uif_question_others").length&&(u[u.length]=e.find(".ipt_uif_question_others").find(".ipt_uif_text, .ipt_uif_textarea").val().trim()),"string"==i?u.join(this.getOptionDelimiter()):u},__getSelectTypes:function(e,i,n){var r,u=[],a=!1;return e.find("select.ipt_uif_select option:selected").each(function(){r=t(this),u[u.length]="label"==n?r.html().trim():r.val(),"others"==r.val()&&(a=!0)}),a&&e.find(".ipt_uif_question_others").length&&(u[u.length]=e.find(".ipt_uif_question_others").find(".ipt_uif_text, .ipt_uif_textarea").val()),"string"==i?u.join(this.getOptionDelimiter()):u},__getSortingTypes:function(e,i,n){var r=[];return e.find(".ipt_uif_sorting .ipt_uif_sortme").each(function(){r[r.length]=t(this).find(".eform-sortable-label").text()}),"string"==i?r.join(this.getRowDelimiter()):r},__getRatingTypes:function(e,i,n){var r,u,a=[],l=this;return e.find(".eform-rating-container").each(function(){r=t(this),void 0===(u={label:r.find(".ipt_uif_question_label label").text(),value:r.find(".ipt_uif_rating .ipt_uif_radio").filter(":checked").val()}).value&&(u.value=""),a[a.length]="string"==i?u.label+l.getEntryDelimiter()+u.value:u}),"string"==i?a.join(this.getRowDelimiter()):a},__mTypeMethod:function(t){var e,i="_value",n=t.split("_");for(e in n)i+=n[e].charAt(0).toUpperCase()+n[e].slice(1);return i},getOptionDelimiter:function(){return this.settings.optionDelimiter},getRowDelimiter:function(){return this.settings.rowDelimiter},getEntryDelimiter:function(){return this.settings.entryDelimiter},getRangeDelimiter:function(){return this.settings.rangeDelimiter}},e.eFormValues=u}(jQuery,window,document);