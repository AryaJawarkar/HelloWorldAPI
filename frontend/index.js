const Greet = document.getElementById("formlang");
const disp = document.getElementById("result-display");
Greet.addEventListener("submit",async (e) =>{
    e.preventDefault();
    try {
        const lang = e.target["language"].value;
        const res = await fetch(`http://localhost:5000/hello?language=${lang}`,{
            method:"GET"
        });
        const result = await res.json();
        if(res.status === 200){
            disp.textContent = result.message.greet;
        }
        else{
            disp.textContent = result.error_message;
        }
    } catch (error) {
        disp.textContent = "Something went wrong";
    }
    
})