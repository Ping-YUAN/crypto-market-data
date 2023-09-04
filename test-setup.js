import 'jest-preset-angular/setup-jest';

Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
      getPropertyValue: (prop) => {
        return '';
      },
    };
  },
});

jest.spyOn(global, 'fetch').mockResolvedValue({
  json: jest.fn().mockResolvedValue({}),
});
