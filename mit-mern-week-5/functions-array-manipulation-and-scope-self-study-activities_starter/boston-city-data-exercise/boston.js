//Comparer Function for salary
function GetSortOrder() {
    return function (a, b) {
      if ( Number(a[11]) > Number(b[11]) ) {
        return -1;
      } else if ( Number(a[11]) < Number(b[11]) ) {
        return 1
      } else {
        return 0
      }
    }
  }

function TopFiveSalaries(boston, container) {
    let person = boston.data;
    person.sort(GetSortOrder()); //Sort Data
    let topfive = person.slice(0,5) //Filter the first top 5
    var len = topfive.length;
    var html = '';
    for (let i = 0; i < len; i++) {
      html += '<li class="post">' +
        '<h2>' + topfive[i][8] + '</h2>' +
        '<h3>' + topfive[i][11] + '</h3>'
    }
    container.innerHTML = '<h1>Top 5 Salaries</h1><ul id = "topSalaries">' + html + '</ul>';
  }

TopFiveSalaries(boston, document.getElementById('TopFiveSalaries'));

function TopEmployees(boston, container) {
    let person = boston.data;
    let topsalaries = person.filter(salary => Number (salary[11]) > 200000 );
    var len = topsalaries.length;
    var html = '';
    for (let i = 0; i < len; i++) {
      html += '<li class="post">' +
        '<h2>' + topsalaries [i][8] + '</h2>' +
        '<h3>' + topsalaries [i][11] + '</h3>'
    }
    container.innerHTML = '<h1>Top Earners > 200k</h1><ul id = "topEmployees">' + html + '</ul>';
  }

TopEmployees(boston, document.getElementById('TopEarners'));
