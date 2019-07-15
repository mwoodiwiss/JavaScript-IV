// CODE here for your Lambda Classes
class Person {
    constructor(PersonAttrs) {
        this.name = PersonAttrs.name;
        this.age = PersonAttrs.age;
        this.location = PersonAttrs.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructors extends Person {
    constructor(InstructorsAttrs) {
        super(InstructorsAttrs);
        this.specialty = InstructorsAttrs.specialty;
        this.favLanguage = InstructorsAttrs.favLanguage;
        this.catchPhrase = InstructorsAttrs.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Students extends Person {
    constructor(StudentsAttrs) {
        super(StudentsAttrs);
        this.previousBackground = StudentsAttrs.previousBackground;
        this.className = StudentsAttrs.className;
        this.favSubjects = StudentsAttrs.favSubjects;
    }

    listsSubjects() {
        console.log(this.favSubjects)
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

}

class ProjectManagers extends Instructors {
    constructor(ProjectManagersAttrs) {
        super(ProjectManagersAttrs);
        this.gradClassName = ProjectManagersAttrs.gradClassName;
        this.favInstructor = ProjectManagersAttrs.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​.`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }

}

const fred = new Instructors({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const freddy = new Instructors({
    name: 'Freddy',
    location: 'Bedrocksville',
    age: 370,
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the java`
  });

  const sam = new Students({
    name: 'Sam',
    location: 'Idaho',
    age: 23,
    previousBackground: 'Chemist',
    className: 'wpt8',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });

  const frodo = new Students({
    name: 'Frodo',
    location: 'Shire',
    age: 20,
    previousBackground: 'Naught',
    className: 'wpt7',
    favSubjects: ['Second Breakfast', 'CSS', 'JavaScript']
  });

  const tim = new ProjectManagers({
    name: 'Tim',
    location: 'Cedar Rapids',
    age: 32,
    favLanguage: 'English',
    specialty: 'All-ends',
    catchPhrase: `Don't forget the java, bro`,
    gradClassName: 'CS1',
    favInstructor: 'The tall one'
  });

  console.log(fred.age);
console.log(freddy.catchPhrase);
console.log(sam.previousBackground);
console.log(frodo.favSubjects);
console.log(tim.location);
console.log(tim.debugsCode(sam.name, 'JS'));
console.log(frodo.sprintChallenge('JS'));
console.log(tim.standUp('JS'));