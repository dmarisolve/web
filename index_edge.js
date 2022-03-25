/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
var symbols = {
"stage": {
   version: "0.1.3",
   baseState: "Base State",
   initialState: "Base State",
   content: {
      dom: [
,
,
,
,
,
,
,
],
      symbolInstances: [
      ]
   },
   states: {
      "Base State": {
         "${_wraper} > center:nth-child(3) > iframe:nth-child(1)": [
            ["transform", "translateX", '54px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '68px'],
            ["style", "overflow", 'hidden']
         ],
         "${_wraper}": [
            ["transform", "translateY", '-34px'],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         labels: {

         },
         timeline: [
            { id: "eid10", tween: [ "transform", "${_wraper}", "translateY", '-34px', { fromValue: '-34px'}], position: 1250, duration: 0 },
            { id: "eid3", tween: [ "style", "${_wraper}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1250 },
            { id: "eid7", tween: [ "style", "${_wraper} > center:nth-child(3) > iframe:nth-child(1)", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1250, easing: "easeOutBounce" },
            { id: "eid11", tween: [ "transform", "${_wraper} > center:nth-child(3) > iframe:nth-child(1)", "translateX", '54px', { fromValue: '54px'}], position: 1250, duration: 0 },
            { id: "eid8", tween: [ "transform", "${_wraper} > center:nth-child(3) > iframe:nth-child(1)", "translateY", '3px', { fromValue: '68px'}], position: 0, duration: 1250, easing: "easeOutBounce" }]
      }
   }
}};

var comp;
Edge.registerCompositionDefn(compId, symbols);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     comp = new Edge.Composition(compId, {stage: "." + compId}, {});
	   /**
 * Adobe Edge Timeline Launch
 */
     comp.ready(function() {
         comp.play();
     });
});
})(jQuery, jQuery.Edge, "EDGE-6060890");
