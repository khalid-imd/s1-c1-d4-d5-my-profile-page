let addSubmit = []

function dateDuration() {
   let startDate = document.getElementById("start-date").value
   let endDate = document.getElementById("end-date").value 

   
   console.log(startDate);
   console.log(endDate);

   let Duration = new Date(endDate)  - new Date(startDate)

   let day = Math.floor(Duration/(1000*3600*24))

   console.log(day);

   return day
}

function submitProject(event){

   event.preventDefault()

   let projectName = document.getElementById("project-name").value
   let description = document.getElementById("desctiption").value
   let duration = dateDuration()
   let technologies = document.getElementById("checkbox").value
   let image = document.getElementById("upload").files

   let reactJs = document.getElementById("react-js").checked 
   let vueJs = document.getElementById("vue-js").checked 
   let angularJs = document.getElementById("angular-js").checked 
   let npmJs = document.getElementById("npm-js").checked

   if (projectName == "" || description == "" || duration == "" || image =="" ) {
      return alert ("Please Complete The Data")
   }


   if (reactJs) {
      reactJs = document.getElementById("react-js").value
      console.log(reactJs);
   }
   if (vueJs) {
      vueJs = document.getElementById("vue-js").value
      console.log(vueJs);
   } 
   if (angularJs) {
      angularJs = document.getElementById("angular-js").value
      console.log(angularJs);
      
   } if (npmJs) {
      npmJs = document.getElementById("npm-js").value
      console.log(npmJs);
   }

   image = URL.createObjectURL(image[0])

   let submit = {
      projectName,
      description,
      duration,
      reactJs, vueJs, angularJs, npmJs,
      image
   }

   addSubmit.push(submit)
   console.log(addSubmit);

   let dummy = `
               <div class="content">
                    <img src="https://akcdn.detik.net.id/visual/2022/06/30/anime-spy-x-family-anya-forger_169.jpeg?w=650"
                        alt="image" id="content">
                    <h2>Dumbways Mobile App - 2022</h2>
                    <h4>Duration:</h4>
                    <h4>Technologies: </h4>
                    <p>App that used for dumbways student, it was deployed and can downloaded on playstore. Happ download.
                    </p>
                    <div>
                        <i class="ri-npmjs-fill"></i>
                        <i class="ri-reactjs-line"></i>
                        <i class="ri-angularjs-fill"></i>
                    </div>
                    <button class="button-left">edit</button>
                    <button class="button-right">delete</button>
               </div>
   `
   document.getElementById("content-main").innerHTML =dummy
   for (let i = 0; i < addSubmit.length; i++) {
      
      console.log(addSubmit[i]);
      document.getElementById("content-main").innerHTML +=`
                  <div class="content">
                    <img src="${addSubmit[i].image}"
                        alt="image" id="content">
                    <h2>${addSubmit[i].projectName}</h2>
                    <h4>Duration: ${addSubmit[i].duration} Days</h4>
                    <p>${addSubmit[i].description}</p>
                    <h4>Technologies: </h4>
                    <div>
                        <i class="ri-${addSubmit[i].reactJs}-line"></i>
                        <i class="ri-${addSubmit[i].vueJs}-fill"></i>
                        <i class="ri-${addSubmit[i].angularJs}-fill"></i>
                        <i class="ri-${addSubmit[i].npmJs}-fill"></i>
                    </div>
                    <button class="button-left">edit</button>
                    <button class="button-right">delete</button>
                </div>
      `
   }


}