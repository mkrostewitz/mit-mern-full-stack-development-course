const student_record = [ ]

function grading(student_name,teacher_name,result) {
  let i;
  
    //add student to the record  
    student_record.push({name:student_name});
    i = student_record.length - 1;
    student_record[i].teacher = teacher_name;
    student_record[i].result = result;
    
    //adding passed to record if score is >= 90
      if (result >= 90) {
      let passed = true;
      student_record[i].passed = passed;
  };

}

grading('kyle','Mr. T',90);
console.log(student_record)