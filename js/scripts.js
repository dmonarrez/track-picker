function calculateScore(q1, q2, q3, q4, q5) {
  var total = q1 + q2 + q3 + q4 + q5;
  return total * 2
}

function yourLanguage(score){
  if (score >= 10 && score <= 14) {
    return "C#/.NET"
  } else if (score >= 15 && score <= 18) {
    return "Java/Android"
  } else if (score >= 19 && score <= 21) {
    return "PHP/Drupal"
  } else if (score >= 22 && score <= 30) {
    return "Ruby/Rails"
  }
}



$(document).ready(function (){
  $("form").submit(function(event){
    event.preventDefault();
    let q1 = parseInt($("#question1").val());
    let q2 = parseInt($("#question2").val());
    let q3 = parseInt($("#question3").val());
    let q4 = parseInt($("#question4").val());
    let q5 = parseInt($("#question5").val());
    let totalScore = calculateScore(q1, q2, q3, q4, q5);
    let language = yourLanguage(totalScore);

    $("#language").text(language);
  });
});
