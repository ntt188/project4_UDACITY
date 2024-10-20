import { isValidUrl } from './nameChecker';

describe('Test isValidUrl function', () => {

  test('Valid URL with http', () => {
    const url = 'http://example.com';
    expect(isValidUrl(url)).toBe(true); 
  });

  test('Valid URL with https', () => {
    const url = 'https://example.com';
    expect(isValidUrl(url)).toBe(true);
  });

  test('Valid URL with path', () => {
    const url = 'https://example.com/path/to/resource';
    expect(isValidUrl(url)).toBe(true);
  });

  test('Valid URL with subdomain', () => {
    const url = 'https://sub.example.com';
    expect(isValidUrl(url)).toBe(true);
  });

  test('Valid URL with complex path', () => {
    const url = 'https://kubernetes.io/docs/tutorials/kubernetes-basics/';
    expect(isValidUrl(url)).toBe(true);  // Valid URL with full path
  });

  test('Invalid URL without protocol', () => {
    const url = 'example.com';
    expect(isValidUrl(url)).toBe(false);  // Missing protocol, invalid URL
  });

  test('Invalid URL with invalid domain', () => {
    const url = 'http://example.invalid_domain';
    expect(isValidUrl(url)).toBe(false);  // Invalid domain name
  });

  test('Invalid URL with missing domain', () => {
    const url = 'http://';
    expect(isValidUrl(url)).toBe(false);  // Missing domain part
  });

  test('Invalid URL with numbers in domain name', () => {
    const url = 'http://example123';
    expect(isValidUrl(url)).toBe(false);  // Numbers in the main domain name are invalid
  });

  test('Invalid URL with special characters in domain', () => {
    const url = 'http://example.com/$$$/';
    expect(isValidUrl(url)).toBe(false);  // Invalid characters in the path
  });

});