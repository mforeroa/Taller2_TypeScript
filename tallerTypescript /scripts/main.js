import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';
var coursesTbody = document.getElementById('courses');
var studentTbody = document.getElementById('student');
var btnfilterByName = document.getElementById("button-filterByName");
var btnfilterByCredits = document.getElementById("button-filterByCredits");
var inputSearchBoxName = document.getElementById("search-box-name");
var inputSearchBoxMin = document.getElementById("search-box-min");
var inputSearchBoxMax = document.getElementById("search-box-max");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByCredits.onclick = function () { return applyFilterByCredits(); };
renderCoursesInTable(dataCourses);
renderInfoStudent(dataStudent);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderInfoStudent(student) {
    console.log('Estudiante');
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>" + "Código" + "</td>\n                           <td>" + student.code + "</td>";
    studentTbody.appendChild(trElement);
    var trElement1 = document.createElement("tr");
    trElement1.innerHTML = "<td>" + "Cédula" + "</td>\n                           <td>" + student.id + "</td>";
    studentTbody.appendChild(trElement1);
    var trElement2 = document.createElement("tr");
    trElement2.innerHTML = "<td>" + "Edad" + "</td>\n                           <td>" + student.age + "</td>";
    studentTbody.appendChild(trElement2);
    var trElement3 = document.createElement("tr");
    trElement3.innerHTML = "<td>" + "Dirección" + "</td>\n                           <td>" + student.adress + "</td>";
    studentTbody.appendChild(trElement3);
    var trElement4 = document.createElement("tr");
    trElement.innerHTML = "<td>" + "Teléfono" + "</td>\n                           <td>" + student.phone + "</td>";
    studentTbody.appendChild(trElement4);
}
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function applyFilterByCredits() {
    var min = parseInt(inputSearchBoxMin.value);
    var max = parseInt(inputSearchBoxMin.value);
    clearCoursesInTable();
    var coursesFiltered = searchCourseByCredits(max, min, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function applyFilterByName() {
    var text = inputSearchBoxName.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function searchCourseByCredits(maxKey, minKey, courses) {
    return (maxKey === null || minKey === null) ? dataCourses : courses.filter(function (c) { return c.credits <= maxKey && c.credits >= minKey; });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
