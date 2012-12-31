function age(){
var dt = new Date(); 
var mois = dt.getMonth();
var jour = dt.getDate();
var annee = dt.getFullYear();	
var x = ((jour - 13) + (30 * (mois - 6) + (365* (annee - 1986))))/ 365;
var mnAge = Math.round(x);
return mnAge;
}

$(function(){
	$('#ageCourant').html(age());
});