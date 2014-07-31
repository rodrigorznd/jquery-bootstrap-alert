/*
 * jquery-bootstrap-alert
 * 
 *
 * Copyright (c) 2014 Rodrigo Rezende
 * Licensed under the MIT license.
 */

(function ($) {
  
  // Collection method.
  $.fn.bsAlert = function (options) {
    options = $.extend({}, $.bsAlert.options, options);
    options.id = Math.random().toString(36).substring(10);
    if(typeof(options.dismiss) === 'object') {
      if(options.dismiss.callback){
        (function (callback) {
          $(document).on(
            'close.bs.alert', 
            '#'+options.id,
            function(e){
              e.stopPropagation();
              callback(e);
            }
          );
        })(options.dismiss.callback);
      }
      if(options.dismiss.timeout){
        setTimeout(function() {
           $('#'+options.id).alert('close');
        }, options.dismiss.timeout * 1000);
      } 
      if(typeof options.dismiss.button === "undefined") {
          options.dismiss = true;
      } else {
          options.dismiss = options.dismiss.button;
      }
    }
       
    if((typeof(options.buttons) === 'object') && !(options.buttons instanceof Array)){
        options.buttons = [options.buttons];
    }
    if(options.buttons){
        options.buttons.forEach(function(button){
            if(!button.type){
                button.type = 'default';
            }
            button.id = Math.random().toString(36).substring(10);
            (function (callback) {
              $(document).on(
                'click', 
                '#'+button.id,
                function(e){
                  e.stopPropagation();
                  callback(e);
                }
              );
            })(button.callback);
        });
    }
      
    var alert = $.bsAlert.buildAlert(options);
    var alert = $(alert).prependTo(this);
    $(alert).trigger('opened.bs.alert');
    return alert;
  };

  // Static method.
  $.bsAlert = function (options) {
    return $('body').bsAlert(options);
  };

  // Static method default options.
  $.bsAlert.options = {
    type: 'warning',
    title: '',
    message: '',
    icon: true,
    dismiss: true,
    buttons: false
  };
    
  $.bsAlert.sourceAlert = "<div id={{id}} class='fade in alert alert-{{type}}' role='alert'>" +
                            "{{#if dismiss}}" +
                                "<button type='button' class='close' data-dismiss='alert'>" +
                                  "<span aria-hidden='true'>×</span>" +
                                  "<span class='sr-only'>Close</span>" +
                                "</button>" +
                              "{{/if}}" +
                              "{{#if title}}<strong>{{title}}</strong>{{/if}}" +
                              "<p>" +
                                "{{#if icon}}" +
                                  "<i></i>" +
                                "{{/if}}" + 
                                "{{message}}" +
                              "</p>" +
                              "{{#if buttons}}" +
                                "<p>" +
                                  "{{#each buttons}}" +
                                    "<button id={{id}} type='button' class='btn btn-{{type}}'>{{name}}</button>" +
                                  "{{/each }}" +
                                "</p>" +
                              "{{/if}}" +
                            "</div>";
  
  $.bsAlert.buildAlert = function (data){
      var template = Handlebars.compile($.bsAlert.sourceAlert);
      return template(data);
  };

}(jQuery));