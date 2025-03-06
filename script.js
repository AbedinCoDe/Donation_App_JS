
window.onscroll = function () {myFunction()};


let header = document.getElementById('myHeader', 'myHeader2');
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
        <div class="hero mt-30">
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


document.getElementById('blogSection').addEventListener('click', function (){
    const displayBlog = document.getElementById('displayBlogSection');
    displayBlog.innerHTML = `
        <div class="flex join join-vertical bg-base-100 w-2/3 justify-center m-auto mt-50">
            <div class="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" checked="checked" />
                <div class="collapse-title font-semibold">How do I create an account?</div>
                <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the
                    registration process.</div>
            </div>
            <div class="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div class="collapse-title font-semibold">I forgot my password. What should I do?</div>
                <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the
                    instructions sent to your email.</div>
            </div>
            <div class="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div class="collapse-title font-semibold">How do I update my profile information?</div>
                <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make
                    changes.</div>
            </div>
        </div>
    `;

    const blogButton = document.getElementById('blogSection');
    blogButton.classList.add('hidden');
    const getHomeButton = document.getElementById('homeButton');
    getHomeButton.classList.remove('hidden');

    const removeDonationPage = document.getElementById('myHeader2');
    removeDonationPage.classList.add('hidden');


})






