'use strict';

;(function () {

    angular
        .module('gandalf.header')
        .directive("dropdown", function () {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    var m = angular.element(element.find(".dropdown")[0]);
                    var t = angular.element(element.find(".dropdown-open")[0]);
                    var b = angular.element(document.getElementsByTagName("body"));
                    t.on("click", function (e) {
                        console.log("click!");
                        var c = function (e) {
                            if (m.hasClass("open")) {
                                m.removeClass("open");
                                m.slideUp();
                                t.removeClass("active");
                                b.unbind("click", c);
                            } else {
                                m.addClass("open");
                                t.addClass("active");
                                m.slideDown();
                            }
                        };
                        if (!m.hasClass("open"))
                            b.bind("click", c);
                    });
                }
            };
        })

})();

