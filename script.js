document.getElementById('diagnostics-check').addEventListener('click', () => {
    const percentageElement = document.querySelector('.progress-circle span');
    const diagnosticsCircle = document.querySelector('.progress-circle');
    const newPercentage = Math.floor(Math.random() * 100);
    percentageElement.textContent = `${newPercentage}%`;
  
    diagnosticsCircle.style.background = `conic-gradient(
      #16a34a 0% ${newPercentage}%, 
      #facc15 ${newPercentage}% ${(newPercentage + 50) % 100}%, 
      #dc2626 ${(newPercentage + 50) % 100}% 100%
    )`;
  
    const tasks = document.querySelectorAll('.scheduling td:nth-child(2) .progress-bar span');
    tasks.forEach(task => {
      const progress = Math.floor(Math.random() * 100);
      task.style.width = `${progress}%`;
    });
  
    const troubleshootingItems = document.querySelectorAll('.troubleshoot li span');
    troubleshootingItems.forEach((item, index) => {
      if (index % 3 === 0) {
        item.className = 'check';
        item.textContent = 'Service is up.';
      } else if (index % 3 === 1) {
        item.className = 'warning';
        item.textContent = 'Service is degraded.';
      } else {
        item.className = 'error';
        item.textContent = 'Service is down.';
      }
    });
  });
  
