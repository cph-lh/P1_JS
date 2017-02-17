let names = ["Pink","Dårlig","Warlock","Fluffy","Unicorn"];

/*let filternames = names.filter(function(name){
//    return name.length>=3;
//});
console.log(filternames);
*/

let rows = names.map(function(name){
    return "<td>"+name+"<td>";
});
let rowsString = rows.join(" ");
//console.log(rowsString);

let table = `<table><tbody> ${rowsString} </tbody></table>`;
console.log(table);





