var animate = function(dom,data){

var timeline

function constructor(){

    // create tweenmaxtimeline
    timeline = new TimelineMax({
        paused: true
      });
      for(var i=0;i<data.length;i++){
            dom.find(data[i].name).css(data[i].initstate)
            var obj = dom.find(data[i].name)[0]
            timeline.to(obj, data[i].time, data[i].effect)
      }
}
function gotoTime(sec){
    timeline.time(sec)
}
constructor();
return{
    gotoTime:gotoTime
}

}