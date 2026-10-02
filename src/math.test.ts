import { describe, expect, test } from 'vitest';
import { add, multiply, subtract, divide, square } from './math.js';

describe('math', () => {
  describe('add', () => {
    test.each([
      [2, 3, 5],
      [10, 20, 30],
      [-2, -3, -5],
      [0, 10, 10],
    ])('adds %i and %i to get %i', (a, b, expected) => {
      expect(add(a, b)).toBe(expected);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });
  });

  describe('multiply', () => {
    test.each([
      [2, 3, 6],
      [4, 5, 20],
      [-2, 3, -6],
      [0, 100, 0],
    ])('multiplies %i and %i to get %i', (a, b, expected) => {
      expect(multiply(a, b)).toBe(expected);
    });
  });

  describe('divide', () => {
    test('divides two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('rejects division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('returns zero when the numerator is zero', () => {
      expect(divide(0, 10)).toBe(0);
    });
  });

  describe('square', () => {
    test('squares to numbers', () => {
      expect(square(4)).toBe(16);
    });
  });
});
