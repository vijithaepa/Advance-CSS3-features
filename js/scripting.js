/**
 * Created by EPAV on 22/08/2016.
 */

function doIt(){
    var element = document.getElementById("input1").value;
    var attr = document.getElementById("input2").value;
    var str = 'document.getElementById("' + element + '").style.' + attr;
    console.log(str);
    var result = eval(str);


    document.getElementById("output").innerHTML = element + " " + attr + " is " + result;
}

function changeIt(){
    var element = document.getElementById("elementId").value;
    var attr = document.getElementById("elementAttr").value;
    var attrValue = document.getElementById("elementAttrVal").value;
    var cssStr = 'document.getElementById("' + element + '").style.' + attr + '="' + attrValue + '"\;';
    console.log(cssStr);
    var result = eval(cssStr);


    document.getElementById("changeOutput").innerHTML = element + " " + attr + " is " + result;
}