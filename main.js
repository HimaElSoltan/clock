var clock = document.getElementById('clock');
var w = clock.style.width.toString().replace('px','');
var s_w = w/20;
// document.writeln(w);
addToSVG('clock', 'circle', [
['cx',w/2+1],
['cy',w/2+1], 
['r',w/2-5],
['style','Fill:#830267;stroke:#b3469b; stroke-width:'+s_w/5+';']]);
for(var i=1 ; i<=12 ; i++){
addToSVG('clock', 'line', [
['x1',w/2], ['y1',w/15],
['x2',w/2], ['y2',w/9],
['style','stroke:#aaa; stroke-width:'+s_w/2.5+';'],
['transform','rotate('+(i*360/12)+" "+w/2+" "+w/2+')']
]);
}
addToSVG('clock', 'line', [ 
['id', 'pin_h'],
['x1',w/2], ['y1',w/2],   
['x2',w/2], ['y2',w/4],
['style','stroke:#fff; stroke-width:'+s_w/4.5+';'],
['transform','rotate(0 '+w/2+' '+w/2+')']
]);
addToSVG('clock', 'line', [   
['id', 'pin_m'],
['x1',w/2], ['y1',w/2],   
['x2',w/2], ['y2',w/5],
['style','stroke:#fff; stroke-width:'+s_w/4+';'],
['transform','rotate(0 '+w/2+' '+w/2+')']
]);
addToSVG('clock', 'line', [
['id', 'pin_s'],
['x1',w/2], ['y1',w/2],
['x2',w/2], ['y2',w/7],
['style','stroke:#1ee5ff; stroke-width:'+s_w/9+';'],
['transform','rotate(0 '+w/2+' '+w/2+')']
]);
addToSVG('clock', 'circle', [
    ['cx',w/2+1],
    ['cy',w/2+1], 
    ['r',w/40],
    ['style','Fill:#000;stroke:#1ee5ff; stroke-width:5;']
]);
function addToSVG(mainSvgId, elSvg, attribs){
var el = document.createElementNS('http://www.w3.org/2000/svg', elSvg);
for(var i = 0 ; i<attribs.length ; i++){
    el.setAttribute(attribs[i][0], attribs[i][1]);
}
document.querySelector("#"+mainSvgId).appendChild(el);
};
function setTime(){
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    document.getElementById("pin_h").setAttribute(
    'transform','rotate('+(h+m/60)*360/12+' '+w/2+' '+w/2+')');
    document.getElementById("pin_m").setAttribute(
    'transform','rotate('+(m+s/60)/60*360+' '+w/2+' '+w/2+')');
    document.getElementById("pin_s").setAttribute(
    'transform','rotate('+(s/60)*360+' '+w/2+' '+w/2+')');
setTimeout(setTime,1000);
}