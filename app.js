var s, rounds, active;

s = [0, 0];
rounds= 0;
active = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
   var dice = Math.floor(Math.random() * 6) + 1;
  var diceResult = document.querySelector('.dice');
  diceResult.style.display = 'block';
  diceResult.src = 'dice-' + dice + '.png';


if(dice !== 1 )
{
rounds += dice;
document.querySelector('#current-' + active).textContent = rounds;
}

else
{
nextplayer();
}

});

document.querySelector('.btn-hold').addEventListener('click' , function()
{
    s[active] += rounds;
    document.querySelector('#score-' + active).textContent= s[active];

    if(s[active] >=100)
    {
        document.querySelector('#name-' + active).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + active + '-panel').classList.add('Winner');
        document.querySelector('.player-' + active + '-panel').classList.remove('active');

    }
    else{
        nextplayer();
    }

});

function nextplayer()
{
    active === 0 ? active = 1 : active = 0;
    rounds=0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display='none';
}

document.querySelector

