const form = document.querySelector(".data");

form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("Just Kidding");
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    console.log(height);
    console.log(weight);
    const bmi = (weight/((height * height) / 10000)).toFixed(2);
    console.log(bmi);
    result.innerHTML = `${bmi}`;
});