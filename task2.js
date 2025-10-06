
    let gradebook = {
      "S001": {
        name: "Rajesh",
        courses: [
          { name: "Math", score: 92 },
          { name: "Science", score: 85 }
        ]
      },
      "S002": {
        name: "Sam Kumar",
        courses: [
          { name: "Math", score: 78 },
          { name: "Science", score: 95 }
        ]
      }
    };

    function display(msg) {
      document.getElementById("output").textContent = msg;
    }

    function addCourseScore() {
      let id = document.getElementById("studentId").value.trim();
      let course = document.getElementById("courseName").value.trim();
      let score = parseFloat(document.getElementById("score").value);

      if (!id || !course || isNaN(score)) {
        display(" Please fill all fields!");
        return;
      }

      if (!gradebook[id]) {
        display(" Student ID not found!");
        return;
      }

      gradebook[id].courses.push({ name: course, score: score });
      display(` Added ${course} (Score: ${score}) for ${gradebook[id].name}.`);
    }

    function getStudentAverage() {
      let id = document.getElementById("studentId").value.trim();
      if (!id || !gradebook[id]) {
        display(" Please enter valid Student ID!");
        return;
      }

      let courses = gradebook[id].courses;
      let total = courses.reduce((sum, c) => sum + c.score, 0);
      let avg = (total / courses.length).toFixed(2);

      display(` ${gradebook[id].name}'s Average Score: ${avg}`);
    }

    function getCourseAverage() {
      let courseName = document.getElementById("courseName").value.trim();
      if (!courseName) {
        display(" Please enter course name!");
        return;
      }

      let total = 0, count = 0;

      for (let id in gradebook) {
        let student = gradebook[id];
        student.courses.forEach(c => {
          if (c.name.toLowerCase() === courseName.toLowerCase()) {
            total += c.score;
            count++;
          }
        });
      }

      if (count === 0) {
        display(`No scores found for course: ${courseName}`);
        return;
      }

      let avg = (total / count).toFixed(2);
      display(` Average Score in ${courseName}: ${avg}`);
    }

    function listTopStudent() {
      let topStudent = null;
      let highestAvg = 0;

      for (let id in gradebook) {
        let courses = gradebook[id].courses;
        let total = courses.reduce((sum, c) => sum + c.score, 0);
        let avg = total / courses.length;

        if (avg > highestAvg) {
          highestAvg = avg;
          topStudent = gradebook[id];
        }
      }

      if (topStudent) {
        display(` Top Student: ${topStudent.name}\nAverage Score: ${highestAvg.toFixed(2)}`);
      } else {
        display("No students found!");
      }
    }
