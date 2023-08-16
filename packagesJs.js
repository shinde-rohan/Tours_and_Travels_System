function getPackageInfo(event){
  var bookNowAfterClicked = event.target
  var packageInfo =bookNowAfterClicked.parentElement.parentElement.parentElement
  var placeName =packageInfo.getElementsByClassName("place-name")[0].innerText
  var placeImg =packageInfo.getElementsByClassName("place-img")[0].src
  var placeBookingPrice = packageInfo.getElementsByClassName("price")[0].innerText
  addpackageinbookings(placeName,placeImg,placeBookingPrice)
  updateTotal()
}

function addpackageinbookings(placeName ,placeImg ,placeBookingPrice){
var createDiv = document.createElement('div')
createDiv.classList.add("booking-details")
createDiv.innerText = placeName
var bookingSection = document.getElementsByClassName("booking-details")[0]
var placeNames = bookingSection.getElementsByClassName('place-name-style')
for(var i=0; i<placeNames.length;i++){
  if(placeNames[i].innerText==placeName){
    alert("This package is already added")
    return
  }
}
var bookingContents = `  <div class="package-details-bookings">
<div class="place-name booking-column">
<img src=${placeImg} class="place-img-after-book">
<strong class="place-name-style">${placeName}</strong>
</div>
<span class="place-package-price">${placeBookingPrice}</span>
<div class="package-booking booking-column">
<button class="btn-danger">REMOVE</button>
</div>
</div>`
createDiv.innerHTML = bookingContents
bookingSection.append(createDiv)
createDiv.getElementsByClassName('btn-danger')[0].addEventListener('click',function(event){
  var afterClicked = event.target
  afterClicked.parentElement.parentElement.remove()
  updateTotal()
  }
  )
}

//Code to Remove the selected packages by remove button
var removeElement = document.getElementsByClassName('btn-danger')
for(var i=0; i<removeElement.length ; i++){
    var button = removeElement[i]
    button.addEventListener('click',function(event){
        var afterClicked = event.target
        afterClicked.parentElement.parentElement.remove()
        updateTotal()
        })
}



//function to calculate total price of the packages 
function updateTotal(){
var total = 0
var bookingElement = document.getElementsByClassName('booking-details')[0]
var packagePrice =bookingElement.getElementsByClassName('package-details-bookings')
 for(var i= 0; i<packagePrice.length ; i++){
 var place = packagePrice[i]
var placeTotal = place.getElementsByClassName('place-package-price')[0]
var price =parseInt(placeTotal.innerText.replace('₹',' '))*1000
 total += price
 }
document.querySelector(".confirm .total strong").textContent = '₹'+ total
return total
}

var getButtons = document.getElementsByClassName("book-button")
for(var i=0;i<getButtons.length;i++){
  var button = getButtons[i];
  button.addEventListener("click",getPackageInfo)
}

//code to check if the no package is selected 
var submitButtonClicked = document.getElementsByClassName("submit-btn")[0]
submitButtonClicked.addEventListener('click', function(event){
  var isSubmitButtonClicked = true
 if(isSubmitButtonClicked==true){
   var getTotal = updateTotal()
   if(getTotal==0)
   {
     alert("Please select atleast one package")
   }
   else
   { 
     var packagePrice = updateTotal()
     var bookingElement = document.querySelector('.booking-details')
     var getPackageDetails = bookingElement.querySelectorAll(".package-details-bookings")
     var placeName=" "
      for(var i=0; i<getPackageDetails.length; i++)
      {
       var place = getPackageDetails[i]
       var getName= place.querySelector(".place-name-style").innerText
       placeName += getName + "  "
      }
      var setPlaceName = document.getElementById("placename")
      setPlaceName.setAttribute('value',placeName)
      var setPackagePrice = document.getElementById("package-price")
      console.log(setPackagePrice)
      setPackagePrice.setAttribute('value',('₹'+ packagePrice))

   }
 }
})