
function calculateFunction(donateFieldId, updatedMoney, myAccountDetails, historyContent, DonateField, Name) {
    let donateField = parseFloat(document.getElementById(donateFieldId).value);
    let updateAmount = parseFloat(document.getElementById(updatedMoney).innerText);

    let myAmount = parseFloat(document.getElementById(myAccountDetails).innerText);

    if (isNaN(donateField) || donateField <=0) {
        alert("Your Input Is Invalid");
        return false;
    }
    if (donateField > myAmount) {
        alert("You Don't Have Enough To Donate!!")
        return false;
    }
    let updatedAmount = updateAmount + donateField;

    let updatedMyAmount = myAmount - donateField;


    document.getElementById(updatedMoney).innerText = updatedAmount;
    document.getElementById(myAccountDetails).innerText = updatedMyAmount;

    my_modal_2.showModal();

    historyRecord(historyContent, DonateField, Name);

}


function historyRecord(id, donateField, Name) {
    const donateAmount = parseFloat(document.getElementById(donateField).value);

    const displayHistoryContent = document.getElementById(id);
    let currentTime = new Date();
    let formatedTime = currentTime.toLocaleString();

    let createHistoryDiv = document.createElement('div');
    let createHistoryh2 = document.createElement('h2');
    let createHistoryP = document.createElement('p')

    createHistoryh2.innerText = `${donateAmount} Taka is Donated for famine-2024 at ${Name}, Bangladesh`;
    createHistoryP.innerText = formatedTime;

    createHistoryDiv.style.width = '70%';
    createHistoryDiv.style.padding = '20px';
    createHistoryDiv.style.backgroundColor = '#ededed';
    createHistoryDiv.style.borderRadius = '15px';
    createHistoryDiv.style.margin = 'auto';
    createHistoryDiv.style.marginTop = '20px';

    createHistoryDiv.appendChild(createHistoryh2);
    createHistoryDiv.appendChild(createHistoryP);
    displayHistoryContent.appendChild(createHistoryDiv);


}