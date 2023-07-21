function createBoxes() 
{
  const wordInput = document.getElementById('wordInput');
  const word = wordInput.value.trim();

  if (word === "") 
  {
    alert("Please enter a word.");
    return;
  }

  const boxContainer = document.getElementById('boxContainer');
  boxContainer.innerHTML = '';

  for (let i = 0; i < word.length; i++) 
  {
    const box = document.createElement('div');
    box.classList.add('box');
    boxContainer.appendChild(box);

    box.addEventListener('click', function() 
    {
      if (this.classList.contains('green-box')) 
      {
        return; // If the box is already green, do nothing on click
      }

      this.classList.toggle('green-box');
      this.textContent = word[i];

      const allBoxes = document.querySelectorAll('.box');
      const allGreenBoxes = document.querySelectorAll('.green-box');

      if (allBoxes.length === allGreenBoxes.length) 
      {
        document.body.style.backgroundColor = '#005500'; // Change the background color to green when all boxes are green
        showRestartButton(); // Show the restart button when all boxes are green
      } 
      else 
      {
        document.body.style.backgroundColor = '#f0f0f0'; // Change the background color back to the default when not all boxes are green
        hideRestartButton(); // Hide the restart button when not all boxes are green
      }
    });
  }
  wordInput.value = '';
}

function showRestartButton() 
{
  const restartButton = document.getElementById('restartButton');
  restartButton.style.display = 'block'; // Show the restart button
  restartButton.addEventListener('click', restartGame);
}

function hideRestartButton() 
{
  const restartButton = document.getElementById('restartButton');
  restartButton.style.display = 'none'; // Hide the restart button
}

function restartGame() 
{
  const allBoxes = document.querySelectorAll('.box');
  allBoxes.forEach(box => 
  {
    box.remove(); // Remove all boxes
  });
  document.body.style.backgroundColor = '#f0f0f0'; // Reset the background color to default
  hideRestartButton(); // Hide the restart button
  createBoxes(); // Recreate the boxes
}

document.getElementById('submitButton').addEventListener('click', createBoxes);

document.getElementById('wordInput').addEventListener('keyup', function(event) 
{
  if (event.key === 'Enter') 
  {
    createBoxes();
  }
});

// Hide the restart button initially when the page is loaded
document.addEventListener('DOMContentLoaded', function() 
{
  hideRestartButton();
});