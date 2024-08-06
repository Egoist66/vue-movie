export function debounce(func: () => void, delay: number) {
    let timeoutId: any;
  
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    }
}