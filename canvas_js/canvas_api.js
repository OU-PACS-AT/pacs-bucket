// ==UserScript==
// @name          Canvas API
// @namespace     
// @description   Extends JQuery with functions for interacting with the canvas API
// @include       /^https?:\/\/[^\.]+\.((beta|test)\.)?instructure\.com\/accounts\/\d+$/
// @version       
// @updateURL     
// ==/UserScript==

jQuery.extend({
    api_url: document.location.origin + "/api/v1/",
    
    canvasCallback: function(data) {
        this.canvasData = data;
    },

    canvasGet: function(api_call, callback) {
        this.ajax({
            method: "GET",
            url: this.api_url + api_call,
            success: callback,
            error: function(msg) {
                alert(msg);
            }
        });
    },
    
    getCourses: function(callback) {
        this.canvasGet("courses",callback);
    },
    //asljfdalskdjflaskjdfasdfasdfasdf
    // alskjd flksajd flksajfd klj asdfasdfasdfas
    // alskjdflaskjdflsakjdf lsakjdf asdfasdfasdf
    // lakjsdlfksajd flkjlkjasdjfsal
    getCourse: function(courseID, callback) {
        this.canvasGet("courses/" + courseID ,callback);
    },
    
    getTeacherURL: function(callback) {
         var teacher = {};
        
         var match = /\/courses\/(\d+)/.exec(document.location.pathname);
         
         if (match !== null) {
           var getTeacherFromCourse = function(course) {
               
               if (course !== null && course.teachers !== null && course.teachers !== undefined && course.teachers.length) {
                    var teacherID = course.teachers[0].id;
                    callback(document.location.origin + "/courses/" + courseID + "/users/" + teacherID);
               } else {
                   callback({});
               }
           } 
             
           var courseID = match[1];       
           
           this.canvasGet("courses/" + courseID + "?include[]=teachers", getTeacherFromCourse) ;
            
         } 
         else {
             callback({});
         }
         
         
    }

});