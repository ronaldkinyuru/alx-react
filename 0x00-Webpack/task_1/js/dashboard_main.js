import $ from 'jquery';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');


function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

// Debounce the updateCounter function to limit the rate at which it can be triggered
const debouncedUpdateCounter = _.debounce(updateCounter, 500);

// Bind the debounced function to the button click event
$('button').on('click', debouncedUpdateCounter);
