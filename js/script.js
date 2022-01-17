AOS.init({
    duration: 350,
    offset:50,
});


const model = document.querySelector('.model');
const boxContainer = document.querySelector('.model .box-container');
const btnIcon = document.querySelector('.icon-arrow');

btnIcon.onclick = () =>{
    model.classList.add('active');
}

model.addEventListener('click', hideModel)
function hideModel() {
    model.classList.remove('active');
}

// fix sự kiện nổi bọt bong bóng nước
boxContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

// khai báo hàm 
let showRequired = document.querySelector('.btn-required');
let model_required = document.querySelector('.model-required');
let security = document.querySelector('.security');

// sự kiện hiện box nhập mã yêu cầu & xóa model 1
showRequired.addEventListener('click', reQuired)

function reQuired() {
    security.classList.add('active');
    model.classList.remove('active');
}

// điều kiện kết quả đúng & sai
var CORREC_GIFT = '17112001';

var inputGift = document.getElementById('password');
var formGift = document.getElementById('form-login');

if(formGift.attachEvent){
    formGift.attachEvent('submit', onFormSubmit)
}else{
    formGift.addEventListener('submit', onFormSubmit)
}

function onFormSubmit(e) {
    var gift = inputGift.value;

    if(gift == CORREC_GIFT){
        alert('Thành công !')
        model_required.classList.add('active');
        security.classList.remove('active');
        e.preventDefault();
    }else{
        alert('Mã sai !');
    }
}


// Tắt toàn bộ sự kiện được lắng nghe
const closeRequireds = document.querySelectorAll('.icon-btn');

for(const closeRequired of closeRequireds ){
    closeRequired.addEventListener('click', closeAll)
}

function closeAll() {
    model_required.classList.remove('active');
    security.classList.remove('active');
}