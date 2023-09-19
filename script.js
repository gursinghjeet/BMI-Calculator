const form = document.querySelector(".data");

form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("Just Kidding");
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    console.log(height);
    console.log(weight);
    if(height<0 || isNaN(height) || height === ''){
        result.innerHTML = `Please Enter Valid height.`
    }else if(weight<0 || isNaN(weight) || weight === ''){
        result.innerHTML = `Please Enter Valid weight.`
    }else{
    const bmi = (weight/((height * height) / 10000)).toFixed(2);
    console.log(bmi);
    
    result.innerHTML = `${bmi}`;
    
    
      if(bmi <= 18.6){
        description.innerHTML = `You Are Under Weight`;
      }else if(bmi < 24.9 &&  bmi> 18.6){
        description.innerHTML = `Congratulation You Are Fit`;
      }else{
         description.innerHTML = `You Are Over Weight`;
      }
    }
});
