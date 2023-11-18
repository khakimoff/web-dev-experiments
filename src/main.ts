function calculateSum() {
    const number1Input = document.getElementById('number1') as HTMLInputElement;
    const number2Input = document.getElementById('number2') as HTMLInputElement;
    const textContenr =   document.getElementById('result') as HTMLElement;
  
    const number1 = parseInt(number1Input.value);
    const number2 = parseInt(number2Input.value);
  
    if (isNaN(number1) || isNaN(number2)) {
      // Handle the case where input values are not valid numbers
      textContenr.textContent = "Please enter a valid value"
      return;
    } 
  
    const worker = new Worker('./src/worker.ts');
  
    worker.postMessage({ num1: number1, num2: number2 });
  
    worker.onmessage = function (event) {
      const result = event.data;
      textContenr.textContent = `Sum: ${result}`;
    };
  }