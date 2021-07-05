function changeMarks(courseId)
{
    let course = document.getElementById(courseId);
    let marks = course.querySelector('#score');
    if(marks.value!="" && Number(marks.value)>=0 && Number(marks.value)<=100){
        let m = Number(marks.value);
        let grade = findGrade(m);
        let gradePoint = findGradePoint(m);
        course.querySelector("#gradePoint").innerHTML = gradePoint;
        course.querySelector("#grade").innerHTML = grade;        
    }
    else{
        alert("Please Enter Marks between 0 to 100");
        marks.value = "";
        course.querySelector("#gradePoint").innerHTML = "";
        course.querySelector("#grade").innerHTML = "";
    }     
}

function calculateGrade()
{
    let gpa = "";
    let course;
    let count = 0;
    let courseId;
    let sum = 0;
    let totalCreditHours = 0;
    let creditHour;
    for(let i=1;i<=7;i++){
        courseId = `course${i}`;
        course = document.getElementById(courseId);
        console.log(course);
        marks = course.querySelector('#score');
        if(marks.value!="")
        {
            creditHour = Number(course.querySelector('#creditHour').value);
            sum += findGradePoint(marks.value) * creditHour; 
            totalCreditHours += creditHour;
            count++;
            console.log(count);

        }   
    }
    if(count>0){
        console.log(`Sum = ${sum}`);
        console.log(`Total Credit Hours = ${totalCreditHours}`);
        gpa = sum / totalCreditHours;
        document.getElementById('gpa').innerHTML = gpa.toFixed(2).toString();
    }

}

function findGrade(m){
    // let gradePointList = {"A":4.00, "A-": 3.70,"B+":3.30,"B":3.00, "B-":2.70, "C+":2.30, "C":2.00, "C-": 1.70, "D": 1.00, "F":0.00 };
    if(m>=85){
        grade = 'A';  
      }
      else if(m>=80){
          grade = 'A-';
      }
      else if(m>=75){
          grade = 'B+';
      }
      else if(m>=70){
          grade = 'B';
      }
      else if(m>=65){
          grade = 'B-';
      }
      else if(m>=61){
          grade = 'C+';
      }
      else if(m>=58){
          grade = 'C';
      }
      else if(m>=55){
          grade = 'C-';
      }
      else if(m>=50){
          grade = 'D';
      }
      else{
          grade = 'F';
      }
      return grade;
}

function findGradePoint(m){ 
    let gradePointList = {"A":4.00, "A-": 3.70,"B+":3.30,"B":3.00, "B-":2.70, "C+":2.30, "C":2.00, "C-": 1.70, "D": 1.00, "F":0.00 };
    if(m>=85){
        grade = 'A';  
      }
      else if(m>=80){
          grade = 'A-';
      }
      else if(m>=75){
          grade = 'B+';
      }
      else if(m>=70){
          grade = 'B';
      }
      else if(m>=65){
          grade = 'B-';
      }
      else if(m>=61){
          grade = 'C+';
      }
      else if(m>=58){
          grade = 'C';
      }
      else if(m>=55){
          grade = 'C-';
      }
      else if(m>=50){
          grade = 'D';
      }
      else{
          grade = 'F';
      }
      return gradePointList[grade];
}