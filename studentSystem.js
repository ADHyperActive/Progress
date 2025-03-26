document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const firstClass = document.getElementById('firstClass').value;
  const firstGrade = document.getElementById('firstGrade').value;
  const secondClass = document.getElementById('secondClass').value;
  const secondGrade = document.getElementById('secondGrade').value;
  const thirdClass = document.getElementById('thirdClass').value;
  const thirdGrade = document.getElementById('thirdGrade').value;
  const fourthClass = document.getElementById('fourthClass').value;
  const fourthGrade = document.getElementById('fourthGrade').value;
  const otherClass = document.getElementById('otherClass').value;
  const otherGrade = document.getElementById('otherGrade').value;
  const firstAssignments = document.getElementById('firstAssignments').value;
  const secondAssignments = document.getElementById('secondAssignments').value;
  const thirdAssignments = document.getElementById('thirdAssignments').value;
  const fourthAssignments = document.getElementById('fourthAssignments').value;
  const otherAssignments = document.getElementById('otherAssignments').value;

  const prgsData = `FirstName:${firstName}\nLastName:${lastName}\nFirstClass:${firstClass}\nFirstGrade:${firstGrade}\nSecondClass:${secondClass}\nSecondGrade:${secondGrade}\nThirdClass:${thirdClass}\nThirdGrade:${thirdGrade}\nFourthClass:${fourthClass}\nFourthGrade:${fourthGrade}\nOtherClass:${otherClass}\nOtherGrade:${otherGrade}\nFirstAssignments:${firstAssignments}\nSecondAssignments:${secondAssignments}\nThirdAssignments:${thirdAssignments}\nFourthAssignments:${fourthAssignments}\nOtherAssignments:${otherAssignments}`;

  const blob = new Blob([prgsData], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${firstName}_${lastName}.PRGS`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
});
