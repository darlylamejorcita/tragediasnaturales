$(document).ready(function ()  {
   $('#name').keyup(function (e) { 
      var nameValue = $('#name').val();
      setStudentName(nameValue);
   });

   var setStudentName = function (name) { 
      $("#student-name").html(name);
   };

   setStudentName('debe definir el nombre');

});

$(document).ready(function ()  {
   $('#years').keyup(function (e) { 
      var yearsValue = $('#years').val();
      setStudentYears(yearsValue);
   });

   var setStudentYears = function (years) { 
      $("#student-years").html(years);
   };

   setStudentYears('debe definir la edad');

});

$(document).ready(function ()  {
   $('#curse').keyup(function (e) { 
      var curseValue = $('#curse').val();
      setStudentCurse(curseValue);
   });

   var setStudentCurse = function (curse) { 
      $("#student-curse").html(curse);
   };

   setStudentCurse('debe definir el curso');

});

$(document).ready(function ()  {
   $('#institution').keyup(function (e) { 
      var institutionValue = $('#institution').val();
      setStudentinstitution(institutionValue);
   });

   var setStudentInstitution = function (institution) { 
      $("#student-institution").html(institution);
   };

   setStudentInstitution('debe definir la institucion');

});
