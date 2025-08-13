let button=document.querySelectorAll(".box");
let body =document.querySelector("body");
let con=document.querySelector(".con");
let contain=document.querySelector(".contain");
let container=document.querySelector(".container");


const randomColor= function(){
    const hex="0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;

}


let forgrey="fo";
let forwhite="w";
let forblue="b";
let foryellow="y";

button.forEach((button)=>{
    button.addEventListener("click",(kik)=>{
        if(kik.target.id === "grey" && forgrey==="fo"){
            container.style.backgroundColor = "grey";
            forgrey="rc";
        }
        else if(kik.target.id === "grey" && forgrey==="rc"){
            contain.style.backgroundColor = "grey";
            forgrey="on";

        }
        else if(kik.target.id === "grey" && forgrey==="on"){
            con.style.backgroundColor = "grey";
            forgrey="tain";

        }
        else if(kik.target.id === "grey" && forgrey==="tain"){
            body.style.backgroundColor="grey";
            forgrey="fo";
        }



        if(kik.target.id === "white" && forwhite === "w"){
            container.style.backgroundColor = "white";
            forwhite="h";

        }
        else if(kik.target.id === "white" && forwhite==="h"){
            contain.style.backgroundColor = "white";
            forwhite="i";

        }
        else if(kik.target.id === "white" && forwhite==="i"){
            con.style.backgroundColor = "white";
            forwhite="t";

        }
        else if(kik.target.id === "white" && forwhite==="t"){
            body.style.backgroundColor="white";
            forwhite="w";
        }





        if(kik.target.id === "blue" && forblue === "b"){
            container.style.backgroundColor = "blue";
            forblue = "l"

        }
        else if(kik.target.id === "blue" && forblue === "l"){
            contain.style.backgroundColor = "blue";
            forblue = "u";

        }
        else if(kik.target.id === "blue" && forblue === "u"){
            con.style.backgroundColor = "blue";
            forblue = "e";

        }
        else if(kik.target.id === "blue" && forblue === "e"){
            body.style.backgroundColor="blue";
            forblue = "b";
        }








        if(kik.target.id === "yelow" && foryellow === "y"){
            container.style.backgroundColor = "yellow"; 
            foryellow="e";

        }
        else if(kik.target.id === "yelow" && foryellow === "e"){
            contain.style.backgroundColor = "yellow";
            foryellow="ll";

        }
        else if(kik.target.id === "yelow" && foryellow === "ll"){
            con.style.backgroundColor = "yellow";
            foryellow="ow";

        }
        else if(kik.target.id === "yelow" && foryellow === "ow"){
            body.style.backgroundColor="yellow";
            foryellow="y";
        }

    })

})




