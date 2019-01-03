function tipCalculate(slider, bill){
    var tip = document.getElementById('tip');
    var slideval = document.getElementById('slideval');
    var bill = document.getElementById(bill).value; 
    var prcnt = slider *.01;
    slideval.innerHTML = slider + "%"
    tip.innerHTML = "$" + (bill * prcnt).toFixed(2);
};