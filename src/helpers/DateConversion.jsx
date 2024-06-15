export function formatDate(date) {
    console.log(date);
    let datetoFormat = new Date(date);
    return datetoFormat.getDay() + " "
         + datetoFormat.toLocaleString('default', { month: 'long' })  + " "
         + datetoFormat.getFullYear();
}