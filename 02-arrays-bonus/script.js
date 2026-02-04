const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
for (let i = teachers.length - 1; i >= 0; i--) {
  const reversedTeachers = teachers[i]; /// all interno?
  console.log(reversedTeachers);
}
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    const longNames = teachers[i]
    console.log(longNames);
  } 
}

// 3. Rimuovi 'Ed' dall'array teachers
// delete teachers[1];
// console.log(teachers);
teachers.splice(1, 1)
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf('Fabio');
console.log(Boolean(isFabioPresent));

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log(teachersString);
