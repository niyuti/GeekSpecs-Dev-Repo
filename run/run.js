 // Get the modal
 var modal = document.querySelector('#mymodal1');
 const modal2 = document.querySelector('#mymodal2');
 
 // Get the button that opens the modal
 var btn = document.querySelector("#mybtn1");
 const btn2 = document.querySelector('#mybtn2');
 
 // Get the <span> element that closes the modal
 var span = document.querySelector('#closeit1');
 const span2 = document.querySelector('#closeit2');
 // When the user clicks the button, open the modal 
 btn.onclick = () => modal.style.display = "block";

 btn2.onclick = ()=> modal2.style.display = 'block';
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = () => modal.style.display = "none";

 span2.onclick = ()=> modal2.style.display = "none";
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = (event)=> {
   if (event.target == modal || event.target == modal2) {
     modal.style.display = "none";
     modal2.style.display = 'none';
   }
 }

   // Example starter JavaScript for disabling form submissions if there are invalid fields
   (function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
        })
    })();