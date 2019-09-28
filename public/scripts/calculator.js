//////Global variables//////
var originalCalculatorBox = document.getElementById("cal-box").cloneNode(true);

//////Main functions//////
function updatePercentage()
{
  var gradeList = document.getElementsByClassName("actual-grade");
  var totalList = document.getElementsByClassName("total-grade");
  var percentageList = document.getElementsByClassName("percentage");
  var size = gradeList.length;
  for(var i = 0; i < size; i++)
  {
    var currentGrade = gradeList[i].value;
    var currentTotal = totalList[i].value;
    if((currentGrade.length != 0 && currentTotal.length != 0) &&
    (!isNaN(currentGrade) && !isNaN(currentTotal)) &&
    (!isNegative(currentGrade) && !isNegative(currentTotal)))
    {
        percentageList[i].innerHTML = parseFloat(currentGrade / currentTotal);
    }
    else
    {
        percentageList[i].innerHTML = "";
    }
  }
}

function weighted()
{
  var percentageList = document.getElementsByClassName("percentage");
  var weightList = document.getElementsByClassName("weight");
  var total = 0;
  var divisor = 0;
  for(var i = 0; i < percentageList.length; i++)
  {
    var currentWeight = weightList[i].value;
    var currentPercentage = percentageList[i].textContent;
    if(currentWeight.length != 0 && !isNaN(currentWeight) && !isNegative(currentWeight))
    {
      total += parseFloat(currentPercentage * currentWeight);
      divisor += parseFloat(currentWeight);
    }
  }
  finalizeResult(total, divisor);
}

function mean()
{
  var percentageList = document.getElementsByClassName("percentage");
  var total = 0;
  var divisor = 0;
  for(var i = 0; i < percentageList.length; i++)
  {
    var currentPercentage = percentageList[i].textContent;
    if(currentPercentage.length != 0 && !isNaN(currentPercentage))
    {
      total += parseFloat(currentPercentage);
      divisor++;
    }
  }
  finalizeResult(total, divisor);
}

function newActivity()
{
  var table = document.getElementById("grade-table");
  var originalTr = document.getElementsByClassName("activity-row")[0];
  var tr = originalTr.cloneNode(true);
  table.appendChild(tr);
}

function newCalculatorBox()
{
  var cloneCalculatorBox = originalCalculatorBox.cloneNode(true);
  var parent = document.getElementById("cal-background-box");
  parent.appendChild(cloneCalculatorBox);
}

function copyText()
{
  document.execCommand("copy");
}

//////Support functions//////
function isNegative(x)
{
  if(parseFloat(x) < 0)
  {
    return true;
  }
  return false;
}

function updateResult(x)
{

  document.getElementById("result").innerHTML = parseFloat(x);
}

function finalizeResult(total, divisor)
{
  if(divisor != 0)
  {
    updateResult(total / divisor);
  }
  else
  {
    updateResult("");
  }
}
/*
function updateNewRow(tr)
{
  updateRowName(tr);
  updateRowShortName(tr);
  updateRowWeight(tr);
  updateRowGrade(tr);
  updateRowPercent(tr);
}

function updateRowName(tr)
{
  tr[0].innerHTML = "Activity " + (tr.length + 1);
}

function updateRowShortName(tr)
{
  tr[1].innerHTML = "A" + (tr.length + 1);
}

function updateRowWeight(tr)
{
  tr[2].innerHTML = "";
}

function updateRowGrade(tr)
{
  tr[3].getElementsByClassName("actual-grade").innerHTML = "";
  tr[3].getElementsByClassName("total-grade").innerHTML = "";
}

function updateRowPercent(tr)
{
  tr[3].getElementsByClassName("percentage").innerHTML = "";
}
*/
