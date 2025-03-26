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

  const prgsData = `
  First Name:${firstName}
  Last Name:${lastName}

  
  First Period Class:${firstClass}
  First Period Grade:${firstGrade}
  
  Second Period Class:${secondClass}
  Second Period Grade:${secondGrade}
  
  Third Period Class:${thirdClass}
  Third Period Grade:${thirdGrade}
  
  Fourth Period Class:${fourthClass}
  Fourth Period Grade:${fourthGrade}
  
  Other Class:${otherClass}
  Other Grade:${otherGrade}
  
  
  First Period Assignments:
  ${firstAssignments}
  
  Second Period Assignments:
  ${secondAssignments}
  
  Third Period Assignments:
  ${thirdAssignments}
  
  Fourth Period Assignments:
  ${fourthAssignments}
  
  Other Assignments:
  ${otherAssignments}
  `;

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
