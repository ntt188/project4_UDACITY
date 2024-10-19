import { isValidUrl } from './nameChecker';

export const handleSubmit = async (event) => {
  event.preventDefault();

  const input = document.querySelector('input').value;
  if (!input || !isValidUrl(input)) {
    alert('Invalid URL');
    return;
  }

  try {
    // Send a POST request to the server with data from the form
    const response = await fetch('http://localhost:8082/api/sentiment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: input }),
    });

    const data = await response.json();

    // Update the result in the DOM
    document.getElementById('results').innerHTML = `
      Score tag: ${data.score_tag}<br>
      Agreement: ${data.agreement}<br>
      Subjectivity: ${data.subjectivity}<br>
      Confidence: ${data.confidence}<br>
      Irony: ${data.irony}
    `;

    // Return the data to enable testing
    return data;
  } catch (error) {
    console.error('Error:', error);
    return;  // Ensure undefined is returned in case of an error
  }
};

// onBlur function to check when the user leaves the input field
export const onBlur = () => {
  const input = document.getElementById('name').value;

  if (!isValidUrl(input)) {
    alert('Invalid URL. Please enter a valid URL.');
  }
};