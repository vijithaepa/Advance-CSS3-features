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

function selectStyleSheet(){
    var cssNum = document.getElementById("styleNo").value;
    var cssTemp = document.styleSheets[cssNum].cssText;

    var cssTemp1 = "";
    for(var i = 0; i <= cssTemp.length; i++){
        var char = cssTemp.substr(i, i+1);
        cssTemp1 += char;
        if(char == "{" || char == "}" || char == ";"){
            cssTemp1 += "<br>"
        }
    }
    document.getElementById("styleOutput").innerHTML = cssTemp1;
}

function listRules(){
    var indexVal = 0;

    var cssTemp = document.styleSheets[0].cssText;
    var cssTemp1 = "<b>Index #0</b><br>"

    for(i = 0; i<cssTemp.length; i++){
        char = cssTemp.substring(i, i+1);
        if(char == "{"){
            indexVal++;
            cssTemp1 += char + "<br><b>Index #" + indexVal + "</b></<br>";
        } else if(char == "{" || char == ";") {
            cssTemp1 += char + "<br>";
        } else {
            cssTemp1 += char;
        }
    }

    document.getElementById("styleOutputUpdated").innerHTML = cssTemp1;

}

function addRule(){
    var sheets = document.styleSheets[0];
    var ruleName = document.getElementById("ruleName").value;
    var ruleIndex = document.getElementById("ruleIndex").value;
    var ruleParams = document.getElementById("params").value;
    document.styleSheets[0].insertRule(ruleName + ruleParams, ruleIndex);
}

function removeRule(){
    var sheets = document.styleSheets[0];
    var ruleIndex = document.getElementById("ruleIndex").value;
    document.styleSheets[0].removeRule(ruleIndex);
}

function disableRules(){
    document.styleSheets[0].disabled = true;
}

function enableRules(){
    document.styleSheets[0].disabled = false;
}