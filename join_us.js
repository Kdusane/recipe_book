
        let unameNode=document.getElementById("uname");

        let passNode=document.getElementById("pass");
        let errorNode1=document.getElementById("error1");
        let errorNode2=document.getElementById("error2");
        function validateForm(){
            let v1=validate1();
            let v2=validate2();
    
            return (v1 && v2); 
        }
        function validate1(){
            let uname=unameNode.value;
            errorNode1.innerHTML="";
            if(uname===''){
                errorNode1.innerHTML="<small>username is required</small>";
                unameNode.style.border="2px solid red";
                return false;
            }
            else if(uname.length<3
 || uname.length>10){
                errorNode1.innerHTML="<small>username must be 3 to 10 characters long</small>";
                unameNode.style.border="2px solid red";
                return false;
            }
            else{
                unameNode.style.border="2px solid green";
                return true;
            }
        }
        function validate2(){
            let pass=passNode.value;
            errorNode2.innerHTML="";
            let regx=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
            if(pass===''){
                errorNode2.innerHTML="<small>Password is required</small>";
                passNode.style.border="2px solid red";
                return false;
            }
            else if(regx.test(pass)==false){
                errorNode2.innerHTML="<small>Password should be 6 to 12 characters long Password should have atleast</small>";
                passNode.style.border="2px solid red";
                return false;
            }
            else{
                passNode.style.border="2px solid green";
                return true;
            }
        }


    