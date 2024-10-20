
console.log("JavaScript file is connected!");

const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
        sectionNum: 1, 
        roomNum: 'STC 353', 
        enrolled: 26, 
        days: 'Tth', 
        instructor: 'Bro T'
        },
        {
        sectionNum: 2, 
        roomNum: 'STC 347', 
        enrolled: 28, 
        days: 'TTh', 
        instructor: 'Sis A'
        },
    ]    
};

function courseDetails(course) { // put the whole object in as a parameter
      document.getElementById('courseName').textContent = course.name;
      document.getElementById('courseCode').textContent = course.code;
}

function tableSections(section) {
    return `
        <tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>
    `; 
}

function renderSections(sections) {
    const html = sections.map(tableSections);
    document.querySelector("#sections").innerHTML = html.join("");
}

courseDetails(aCourse); // call the function using our object
renderSections(aCourse.sections);
