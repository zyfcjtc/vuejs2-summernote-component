webpackJsonp([1],[function(e,t){e.exports={template:'<textarea :name="name"></textarea>',props:{model:{required:!0},name:{type:String,required:!0},height:{type:String,default:"150"}},mounted:function(){var e={height:this.height},t=this;e.callbacks={onInit:function(){$(t.$el).summernote("code",t.model)},onChange:function(){t.$emit("change",$(t.$el).summernote("code"))},onBlur:function(){t.$emit("change",$(t.$el).summernote("code"))}},$(this.$el).summernote(e)}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);o.a.config.productionTip=!1,new o.a({el:"#app",data:function(){return{content:null}},components:{summernote:n(0)}})}],[2]);
//# sourceMappingURL=app.817e61f7ca29d9e2f2a5.js.map