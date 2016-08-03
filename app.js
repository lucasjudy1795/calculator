// DOM Elements
var result = document.getElementById('result');
var numbers = document.getElementsByClassName('numbers');
var operators = document.getElementsByClassName('operators');
var clear = document.getElementsByClassName('clear')[0];
var space = document.getElementsByClassName('space')[0];
var evaluator = document.getElementsByClassName('eval')[0];

var resultStateView = '';
var resultState = 0;

var numbersClick = function () {
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function (evt) {
      var num = evt.target.innerHTML;
      resultStateView += num;
      result.innerHTML = resultStateView;
    });
  }
};

var evaluate = function () {
  evaluator.addEventListener('click', function () {
    resultStateView = math.eval(resultStateView);
    result.innerHTML = resultStateView;
  });
}

var spaceClick = function () {
  space.addEventListener('click', function () {
    resultStateView += ' ';
  });
}

var clearClick = function () {
  clear.addEventListener('click', function () {
    resultStateView = '';
    result.innerHTML = resultStateView;
  });
}

var operatorsClick = function () {
  for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function (evt) {
      operator = evt.target.innerHTML;
      resultStateView += ' ' + operator + ' ';
      result.innerHTML = resultStateView;
    });
  }
}

numbersClick();
spaceClick();
operatorsClick();
clearClick();
evaluate();
