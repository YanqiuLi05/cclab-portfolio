
function goToNextPage(nextPage) {
    window.location.href = nextPage;
  }
  
  function saveAndNext(questionKey, answerValue, nextPage) {
    saveAnswer(questionKey, answerValue);
    goToNextPage(nextPage);
  }
  