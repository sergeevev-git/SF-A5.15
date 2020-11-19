const dataURL = "https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f";

function handleButton() {
  let a = $.getJSON( dataURL, function (data) {
    handleData(data);
  });
}

function handleData(data) {
  $("#result").text(data.text); 
}

function changeButton() {
  let a = $.getJSON( dataURL, function (data) {
    changeData(data);
  });
}

function changeData(data) {
  const var1 = $("input[name='var1']").val();
  const var2 = $("input[name='var2']").val();
  const var3 = $("input[name='var3']").val();
  const var4 = $("input[name='var4']").val();
  const var5 = $("input[name='var5']").val();
  const var6 = $("input[name='var6']").val();
  const speech = $("input[name='speech']").val();
  for (key in data.text) {
    data.text[key] = data.text[key].replace('{var1}', var1);
    data.text[key] = data.text[key].replace('{var2}', var2);
    data.text[key] = data.text[key].replace('{var3}', var3);
    data.text[key] = data.text[key].replace('{var4}', var4);
    data.text[key] = data.text[key].replace('{var5}', var5);
    data.text[key] = data.text[key].replace('{var6}', var6);
    data.text[key] = data.text[key].replace('{speach}', speech);
  }
	$("#result").text(data.text);
}

function init() {
  $("#button-fetch").click(handleButton);
  $("#button-change").click(changeButton);
}

$(document).ready(init);
