 const DATA_SOURCE = 'http://localhost:3010/students';

 const XHR_DONE = 4;
 const XHR_SUCCESS = 200;

 var rcolor=document.querySelectorAll(".rcolor");

 function dataToHtmlRepresentation(dataObjects){
     let html = `
                 <table>
                    <tr id="h">
                        <td id="htd">Name</td>
                        <td id="htd">Info</td>
                        <td id="htd">Points</td>
                    </tr>
                `;
     const l = dataObjects.length;
     for(let i=0; i < l; i++){
         const dataObject = dataObjects[i];

         const points = (`${dataObject.exercise_points}` === "null") ? `&ndash;` : `${dataObject.exercise_points}`;

         const bc = (points>50)?"#2ea9b0":"#de789a";
         
         html += `
                <tr style="background-color: ` + bc + `">
                    <td id="ni">${dataObject.name}</td>
                    <td id="ni">${dataObject.info}</td>
                    <td id="points">` + points + `</td>
                </tr>
                `
     }
     html += "</table>"
     return html;
 }

 function getData(){
     const xhr = new XMLHttpRequest();
     xhr.open('GET', DATA_SOURCE);

     xhr.onreadystatechange = function(){
         if (this.readyState === XHR_DONE){
             if(this.status === XHR_SUCCESS){
                 const e = document.getElementById('data');
                 const data = JSON.parse(this.responseText);
                 e.innerHTML = dataToHtmlRepresentation(data);
             }
             else{
                 console.log('Error! ' + xhr.status);
             }
         }
     }

     xhr.send();
 }