import { handleSubmit, onBlur } from './formHandler';
import { isValidUrl } from './nameChecker';

// Mock the `isValidUrl` function from nameChecker
jest.mock('./nameChecker', () => ({
  isValidUrl: jest.fn(),
}));

// Mock the `fetch` function since we don't need to make actual network requests during testing.
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      score_tag: 'P',
      agreement: 'AGREEMENT',
      subjectivity: 'OBJECTIVE',
      confidence: '100',
      irony: 'NONIRONIC',
    }),
  })
);

// Mock `alert`
global.alert = jest.fn();

describe('Test handleSubmit function', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form>
        <input type="text" id="name" value="" />
        <input type="submit" value="submit" />
      </form>
      <div id="results"></div>
    `;
  });

  test('Displays error for invalid URL', async () => {
    isValidUrl.mockReturnValue(false);

    const event = { preventDefault: jest.fn() };  // Mock event

    await handleSubmit(event);

    // Check that `alert` is called when the URL is invalid
    expect(global.alert).toHaveBeenCalledWith('Invalid URL');
    // Check that `fetch` is not called
    expect(fetch).not.toHaveBeenCalled();
    expect(document.getElementById('results').innerHTML).toBe('');
  });

  test('Submits form with valid URL', async () => {
    isValidUrl.mockReturnValue(true);
    document.querySelector('#name').value = 'https://example.com';

    const event = { preventDefault: jest.fn() };  // Mock event

    await handleSubmit(event);

    // Check that `fetch` is called correctly
    expect(fetch).toHaveBeenCalledWith('http://localhost:8082/api/sentiment', expect.any(Object));

    // Check that the result is updated in the DOM
    const resultsDiv = document.getElementById('results');
    expect(resultsDiv.innerHTML).toContain('Score tag: P');
    expect(resultsDiv.innerHTML).toContain('Agreement: AGREEMENT');
    expect(resultsDiv.innerHTML).toContain('Confidence: 100');
  });
});