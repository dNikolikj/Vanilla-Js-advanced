'run strict';

console.log(' JS Advanced Class 03 functions');

// Homework 1

// Task 1

let button = document.querySelector('#button');
let ndButton = document.querySelector('#ndButton');
let trButton = document.querySelector('#trButton');
let printResult = document.querySelector('.tbody');

let hiddenNdButton = document.querySelector('.hidden');
let hiddenStButton = document.querySelector('.hiddenAfter');
let hiddenTrButton = document.querySelector('.hiddenThird');

hiddenStButton.classList.remove('hiddenAfter');

const printPlanets = function(name, population, climate, gravity) {
    let resultPlanets = printResult;
    resultPlanets.innerHTML += '';
    resultPlanets.innerHTML += `
        <tr>
            <th> Planet: </th>
            <td>${name}</td>
            <th> Population:</th>
            <td>${population}</td>
            <th> Climate: </th>
            <td>${climate}</td>
            <th> Gravity: </th>
            <td>${gravity}</td>
        </tr>`;
};

$(document).ready(function() {
    let apiFunction = function(apiParameter) {
        $.ajax({
            url: apiParameter,
            success: function(response) {
                console.log('success');

                for (let i = 0; i < response.results.length; i++) {
                    printPlanets(
                        response.results[i].name,
                        response.results[i].population,
                        response.results[i].climate,
                        response.results[i].gravity
                    );
                }
            },
            error: function(error) {
                console.log('error');
            },
        });
    };

    button.addEventListener('click', function() {
        printResult.innerHTML = '';
        apiFunction('https://swapi.dev/api/planets/?page=1');
        hiddenNdButton.classList.remove('hidden');
    });

    ndButton.addEventListener('click', function() {
        hiddenStButton.classList.add('hiddenAfter');
        hiddenTrButton.classList.remove('hiddenThird');
        hiddenNdButton.classList.add('hidden');
        printResult.innerHTML = '';

        apiFunction('https://swapi.dev/api/planets/?page=2');
    });

    trButton.addEventListener('click', function() {
        printResult.innerHTML = '';
        hiddenTrButton.classList.add('hiddenThird');
        hiddenStButton.classList.remove('hiddenAfter');
        hiddenNdButton.classList.remove('hidden');
        apiFunction('https://swapi.dev/api/planets/?page=1');
    });
});