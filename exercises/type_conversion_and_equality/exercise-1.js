// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function parseAsNumber(input) {
  // TODO: attempt to parse input as a number
  // return { ok: true, value: number } if successful
  // return { ok: false } if not successful
}

function formatAsCurrency(number, currencySymbol) {
  // TODO: format number as currency string (e.g. "£25.13", "$10.00", rounded to 2 decimal places)
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
const inputs = [25.129, "25.129", "hello", "1.23e+5", "0XF", "NaN"];

for (let i = 0; i < inputs.length; i++) {
  const result = parseAsNumber(inputs[i]);
  if (result.ok) {
    console.log(formatAsCurrency(result.value, "£"));
  } else {
    console.log(`✗ Could not parse "${inputs[i]}" as a number.`);
  }
}
