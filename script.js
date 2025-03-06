
window.onscroll = function () {myFunction()};


let header = document.getElementById('myHeader');
let sticky = header.offsetTop;


function myFunction(){
    if(window.pageYOffset > sticky){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
}





document.getElementById('donation_Button').addEventListener('click', function () {
    const displayHeroContent = document.getElementById('hero_content');
    displayHeroContent.innerHTML = `
        <div class="hero mt-5">
            <div class="hero-content flex-col lg:flex-row border border-[#e0e0e0] rounded-lg p-10">
                <img src="assets/noakhali.png" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <div class="flex">
                        <img class="w-5 h-auto mr-3" src="assets/coin.png" alt="">
                        <p id="update_Money_Noakhali" class="mr-3">100</p>
                        <p>BDT</p>
                    </div>
                    <h1 class="text-xl font-bold -mb-3 mt-3">Donate for Flood at Noakhali, Bangladesh</h1>
                    <p class="py-6">The recent floods in Noakhali have caused significant damage to homes
                        infrastructure. Your donation will help provide essential supplies and to those affected by this
                        disaster. Every contribution, big or small, makes difference. Please join us in supporting the
                        relief efforts and making a positive impact on the lives of those in need.</p>
                    <input id="donate_Field_Noakhali" type="text" class="w-full p-2 mb-3 border-neutral-300"
                        placeholder="Donate Amount Here">
                    <button id="donate_Button_Noakhali" class="btn w-full bg-[#B4F461]">Donate Now</button>
                </div>
            </div>
        </div>
        <div class="hero mt-5">
            <div class="hero-content flex-col lg:flex-row border border-[#e0e0e0] rounded-lg p-10">
                <img src="assets/feni.png" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <div class="flex">
                        <img class="w-5 h-auto mr-3" src="assets/coin.png" alt="">
                        <p id="update_Money_Feni" class="mr-3">1000</p>
                        <p>BDT</p>
                    </div>
                    <h1 class="text-xl font-bold -mb-3 mt-3">Donate for Flood at Noakhali, Bangladesh</h1>
                    <p class="py-6">The recent floods in Noakhali have caused significant damage to homes
                        infrastructure. Your donation will help provide essential supplies and to those affected by this
                        disaster. Every contribution, big or small, makes difference. Please join us in supporting the
                        relief efforts and making a positive impact on the lives of those in need.</p>
                    <input id="donate_Field_Feni" type="text" class="w-full p-2 mb-3 border-neutral-300"
                        placeholder="Donate Amount Here">
                    <button id="donate_Button_Feni" class="btn w-full bg-[#B4F461]">Donate Now</button>
                </div>
            </div>
        </div>
        <div class="hero mt-5">
            <div class="hero-content flex-col lg:flex-row border border-[#e0e0e0] rounded-lg p-10">
                <img src="assets/quota-protest.png" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <div class="flex">
                        <img class="w-5 h-auto mr-3" src="assets/coin.png" alt="">
                        <p id="update_Money_quota" class="mr-3">200</p>
                        <p>BDT</p>
                    </div>
                    <h1 class="text-xl font-bold -mb-3 mt-3">Donate for Flood at Noakhali, Bangladesh</h1>
                    <p class="py-6">The recent floods in Noakhali have caused significant damage to homes
                        infrastructure. Your donation will help provide essential supplies and to those affected by this
                        disaster. Every contribution, big or small, makes difference. Please join us in supporting the
                        relief efforts and making a positive impact on the lives of those in need.</p>
                    <input id="donate_Field_Quota" type="text" class="w-full p-2 mb-3 border-neutral-300"
                        placeholder="Donate Amount Here">
                    <button id="donate_Button_Quota" class="btn w-full bg-[#B4F461]">Donate Now</button>
                </div>
            </div>
        </div>
    `;


    document.getElementById('hero_content').style.display = 'block';
    document.getElementById('history_Content').style.display = 'none';
    document.getElementById('history_button').style.backgroundColor = '';
    document.getElementById('donation_Button').style.backgroundColor = '#B4F461';


    document.getElementById('donate_Button_Noakhali').addEventListener('click', function () {

        calculateFunction('donate_Field_Noakhali', 'update_Money_Noakhali', 'my_Account_Details', 'history_Content', 'donate_Field_Noakhali', 'Noakhali');

    })

    document.getElementById('donate_Button_Feni').addEventListener('click', function () {

        calculateFunction('donate_Field_Feni', 'update_Money_Feni', 'my_Account_Details', 'history_Content', 'donate_Field_Feni', 'Feni');

    })

    document.getElementById('donate_Button_Quota').addEventListener('click', function () {

        calculateFunction('donate_Field_Quota', 'update_Money_quota', 'my_Account_Details', 'history_Content', 'donate_Field_Quota', 'For Quota');

    })

})


document.getElementById('history_button').addEventListener('click', function () {
    document.getElementById('history_button').style.backgroundColor = '#B4F461';
    document.getElementById('donation_Button').style.backgroundColor = '';
    document.getElementById('hero_content').style.display = 'none';
    document.getElementById('history_Content').style.display = 'block';
})





