
const submit=document.getElementById('submit')
const id1=document.getElementById('id1');


let pw1=document.getElementById('pw1');
let pw2=document.getElementById('pw2');
let name1=document.getElementById('name1');
let email1=document.getElementById('email1');
let tel1=document.getElementById('tel1');
let id1Msg=document.getElementById('id1Msg');
let pw1Msg=document.getElementById('pw1Msg');
let pw2Msg=document.getElementById('pw2Msg');
let gender1Msg=document.getElementById('gender1Msg');

let regId=/^[A-Z][a-zA-Z0-9]{4,}$/; 
let regPw1=/^.*(?=^.{8,16})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).*$/;
let regName1=/[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{3,}/
let regEmail1=/^[a-zA-Z0-9]([-_.]?[0-9a-zA-Z])*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9]*.[a-zA-Z]{2,3})$/
let regPhone1=/(^01[016789]{1})([0-9]{3,4})[0-9]{4}$/;

id1.addEventListener("blur",function(){
    if(!regId.test(id1.value)){
        id1Msg.style.color="red";
        id1Msg.innerHTML="아이디는 5글자 이상 첫글자가 대문자이고 영문자, 숫자만 가능합니다"
    }else{
        id1Msg.style.color="blue";
        id1Msg.innerHTML="사용가능한 ID입니다."
    }
});

pw1.addEventListener("blur",function(){
    if(!regPw1.test(pw1.value)){
        pw1Msg.style.color="red";
        pw1Msg.innerHTML="패스워드를 입력하세요"
    }else{
        pw1Msg.style.color="blue";
        pw1Msg.innerHTML="사용가능한 비밀번호입니다."
    }
})

pw2.addEventListener("focus",function(){
    if(document.getElementById('pw1').value==""){
        alert("패스워드를 입력하세요");
        document.getElementById("pw1").focus();
    }
});
pw2.addEventListener("blur",function(){
    if(pw1.value !=pw2.value){
        pw2Msg.style.color="red"
        pw2Msg.innerHTML="비밀번호가 일치하지않습니다."
        return false;
    }else{
        if((pw1.value=='')&&(pw2.value=='')){
            pw2Msg.innerHTML="" 
        }else{
            pw2Msg.style.color="blue";
            pw2Msg.innerHTML="비밀번호가 일치합니다."
        }
       
    }
});
name1.addEventListener("blur",function(){
    if(!regName1.test(name1.value)){
        name1Msg.style.color="red";
        name1Msg.innerHTML="이름은 한글만 가능합니다."
    }else{
        name1Msg.style.color="blue";
        name1Msg.innerHTML="감사합니다"
    }
});

tel1.addEventListener("blur",function(){
    if(!regPhone1.test(tel1.value)){
        tel1Msg.style.color="red";
        tel1Msg.innerHTML="올바르지 않은 입력값입니다."
    }else{
        tel1Msg.style.color="blue";
        tel1Msg.innerHTML="사용가능한 전화번호입니다."
    }
});



document.getElementById('submit').addEventListener("click",function(){
    if(id1.value==""){
        alert("아이디를 입력하세요");
        return false;
    }else{
        if(!regPw1.test(pw1.value)){
            alert("특수문자, 문자, 숫자 포함하고 8~16 이내의 값만 가능합니다.")
            pw1.value=""
            return false;
        }
    }
    if(document.querySelector('[name=gender]:checked')==null){
        gender1Msg.style.color="red";
        gender1Msg.innerHTML="성별을 체크해주세요.";
        document.getElementById("m").focus();
    }else{
        location.href = "result.html"
    }

    
})