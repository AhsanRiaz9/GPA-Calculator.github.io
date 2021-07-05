function changeMarks(courseId)
{
    let course = document.getElementById(courseId);
    let marks = course.querySelector('#score');
    if(marks.value<0 || marks.value>100){
        alert("Please Enter Marks between 0 to 100");
        marks.value = "";
        course.querySelector("#gradePoint").innerHTML = "";
        course.querySelector("#grade").innerHTML = "";
    }
    else{
        let gradePointList = {"A":4.00, "A-": 3.70,"B+":3.30,"B":3.00, "B-":2.70, "C+":2.30, "C":2.00, "C-": 1.70, "D": 1.00, "F":0.00 };
        let m = Number(marks.value);
        let grade = '';
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
        // Testing
        // alert(grade + ":" + gradePointList[grade] );
        //Update Grade Point and Grade
        course.querySelector("#gradePoint").innerHTML = gradePointList[grade];
        course.querySelector("#grade").innerHTML = grade;        
    }     
}

function calculateGrade()
{
    alert('he');
    // let gradePointList = {"A":4.00, "A-": 3.70,"B+":3.30,"B":3.00, "B-":2.70, "C+":2.30, "C":2.00, "C-": 1.70, "D": 1.00, "F":0.00 };
    let gpa = "";
    let course;
    let count = 0;
    let courseId;
    let sum = 0;
    let totalCreditHours = 0;
    let creditHour;
    for(let i=1;i<=7;i++){
        courseId = "cousrse" + i.toString();
        course = document.getElementById(courseId);
        marks = course.querySelector('#score');
        if(marks.value!="")
        {
            creditHour = course.querySelector('#creditHour').value;
            sum += marks.value * creditHour; 
            totalCreditHours += creditHour;
            count++;
        }
    }
    if(count>0){
        gpa = sum / count;
        document.getElementById('gpa').innerHTML = gpa.toString();
    }
    

}