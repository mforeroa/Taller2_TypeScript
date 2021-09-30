import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';
import { Student } from './student.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
let studentTbody: HTMLElement = document.getElementById('student')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByCredits: HTMLElement = document.getElementById("button-filterByCredits")!;
const inputSearchBoxName: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box-name")!;
const inputSearchBoxMin: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box-min")!;
const inputSearchBoxMax: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box-max")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();
btnfilterByCredits.onclick = () => applyFilterByCredits();

renderCoursesInTable(dataCourses);

renderInfoStudent(dataStudent);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`

function renderInfoStudent(student: Student):void{
    console.log('Estudiante');
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${"Código"}</td>
                           <td>${student.code}</td>`;
    studentTbody.appendChild(trElement);

    let trElement1 = document.createElement("tr");
    trElement1.innerHTML = `<td>${"Cédula"}</td>
                           <td>${student.id}</td>`;
    studentTbody.appendChild(trElement1);

    let trElement2 = document.createElement("tr");
    trElement2.innerHTML = `<td>${"Edad"}</td>
                           <td>${student.age}</td>`;
    studentTbody.appendChild(trElement2);

    let trElement3 = document.createElement("tr");
    trElement3.innerHTML = `<td>${"Dirección"}</td>
                           <td>${student.adress}</td>`;
    studentTbody.appendChild(trElement3);

    let trElement4 = document.createElement("tr");
    trElement.innerHTML = `<td>${"Teléfono"}</td>
                           <td>${student.phone}</td>`;
    studentTbody.appendChild(trElement4);

}

function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 

function applyFilterByCredits() { 
  let min = parseInt(inputSearchBoxMin.value);
  let max = parseInt(inputSearchBoxMin.value);
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByCredits(max, min, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function applyFilterByName() { 
    let text = inputSearchBoxName.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
  }

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}

function searchCourseByCredits(maxKey: number, minKey: number, courses: Course[]) {
    return (maxKey === null || minKey === null)? dataCourses :courses.filter(c=> c.credits<=maxKey && c.credits>=minKey);
  }


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}