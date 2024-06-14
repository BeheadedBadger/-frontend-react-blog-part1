export function formatDate(date) {
    console.log(date);
    let datetoFormat = new Date(date);/*
    let day = new Date(date).getDay();
    let month = new Date(date).toLocaleString('default', { month: 'long' });
    let year = new Date(date).getFullYear();
    return day + " " + month + " " + year;*/
    return datetoFormat.getDay() + " "
         + datetoFormat.toLocaleString('default', { month: 'long' })  + " "
         + datetoFormat.getFullYear();
}