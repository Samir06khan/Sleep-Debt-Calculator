 
 function calculateSleepDebt() {
    // Define the ideal sleep hours per night
    const idealSleepHours = 8;

    // Get the sleep hours for each day from the input fields
    const sleepHours = {
      monday: Number(document.getElementById('monday').value),
      tuesday: Number(document.getElementById('tuesday').value),
      wednesday: Number(document.getElementById('wednesday').value),
      thursday: Number(document.getElementById('thursday').value),
      friday: Number(document.getElementById('friday').value),
      saturday: Number(document.getElementById('saturday').value),
      sunday: Number(document.getElementById('sunday').value)
    };

    // Calculate the total sleep hours for the week
    let totalSleepHours = 0;
    for (let day in sleepHours) {
      totalSleepHours += sleepHours[day];
    }
    

    // Calculate the ideal sleep hours for the week
    const idealSleepHoursWeek = idealSleepHours * 7;

    // Calculate the sleep debt
    const sleepDebt = idealSleepHoursWeek - totalSleepHours;
    
     
    // Display the result
    if (sleepDebt > 0) {
      document.getElementById('result').textContent = `You have a sleep debt of ${sleepDebt} hours.`;
    } else if (sleepDebt < 0) {
      document.getElementById('result').textContent = `You have overslept by ${Math.abs(sleepDebt)} hours.`;
    } else {
      document.getElementById('result').textContent = `You have met your ideal sleep hours for the week!`;
    }
  }
  