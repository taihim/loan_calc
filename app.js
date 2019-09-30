//Get values
const animation = document.querySelector('#loading');

const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');

const mPayment = document.querySelector('#monthly-payment');
const tPayment = document.querySelector('#total-payment');
const tInterest = document.querySelector('#total-interest');

const calc = document.querySelector('#loan-form');


calc.addEventListener('submit', calculateResult);

function calculateResult(e){
    if(amount.value == '' || interest.value == '' || years.value == '')
        {
            const card = document.querySelector('.card');
            const heading = document.querySelector('.heading');

            const errorDiv = document.createElement('div');
            errorDiv.className = 'alert alert-danger';

            errorDiv.appendChild(document.createTextNode('Please fill in all fields.'));

            card.insertBefore(errorDiv, heading);

            setTimeout(() => {
                errorDiv.remove();
            }, 2000);

        }
    else
    {
        animation.style.display = 'block';

        setTimeout(() => {
            animation.style.display = 'none';
        }, 1500);

        const results = document.querySelector('.results');
        
        setTimeout(() => {
        
            results.style.display = 'block';
        
            const p = parseFloat(amount.value);
            const r = parseFloat(interest.value);
            const t = parseFloat(years.value);
    
            const i = ((p*r*t)/100);
            const total = i+p;

            const monthly = (total/(t*12)).toFixed(2);
        
            tPayment.value = total;
            mPayment.value = monthly;
            tInterest.value = i;

        }, 1550);
         
    
    }
    

    



    e.preventDefault();
}