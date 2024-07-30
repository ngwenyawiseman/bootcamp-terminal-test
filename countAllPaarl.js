export default function countAllPaarl(registrationNumbers) {
    const regNums = registrationNumbers.split(", ");
    let count = 0;
    for (let i = 0; i < regNums.length; i++) {
    if (regNums[i].startsWith("CJ")) {
      count++;
     }
    }
     return count;
  }
 