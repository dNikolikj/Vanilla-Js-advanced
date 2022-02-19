'run strict';

console.log('Class 06 Higher Order Functions Homework');

// Exercise

fetch('./students.json')
    .then(response => response.json())
    .then(data => {
        console.log(
            `--------All students with an average grade higher than 3--------`
        );

        let filterOne = data.filter(item => item.averageGrade > 3);
        console.log(filterOne);

        console.log(
            `--------All female student names with an average grade of 5--------`
        );

        let filterTwo = data
            .filter(item => item.gender === 'Female' && item.averageGrade === 5)
            .map(item => ` ${item.firstName}`);
        console.log(filterTwo);

        console.log(
            `--------All male student full names who live in Skopje and are over 18 years old--------`
        );

        let filterThree = data
            .filter(item => item.city === 'Skopje' && item.age > 18)
            .map(item => `${item.firstName} ${item.lastName}`);
        console.log(filterThree);

        console.log(
            `--------The average grades of all female students over the age  of 24--------`
        );

        let filterFour = data
            .filter(item => item.gender === 'Female' && item.age > 24)
            .map(
                item =>
                ` ${item.firstName} ${item.lastName} (Average Grade : ${item.averageGrade})`
            );

        console.log(filterFour);

        console.log(
            `--------All male students with a name starting with B and average grade over 2--------`
        );

        let filterFive = data
            .filter(item => item.gender === 'Male' && item.averageGrade > 2)
            .filter(item => item.firstName.charAt(0) === 'B')
            .map(item => `${item.firstName}`);

        console.log(filterFive);
    });