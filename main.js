// visitCount
// 初めてきた人に、「ご入会はこちら」というモーダルを表示していた際のコード。参考までに残しています。
let visitCount = localStorage.getItem('visitCount');
let campaign = localStorage.getItem('campaign');

if (visitCount) {
    visitCount++;
} else {
    visitCount = 1;
    campaign = 'on';
}
localStorage.setItem('visitCount', visitCount);
localStorage.setItem('campaign', campaign);

if (visitCount % 5 === 2 && campaign !== 'off') {
    $('#campaignModalCenter').modal();
}

$('#campaignCheck').change(() => {
    $('#campaignCheck').prop("checked") === true ? campaign = 'off' : campaign = 'on';
    localStorage.setItem('campaign', campaign);
});


//Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});


//fade
const targets = document.getElementsByClassName('fade');
for (let i = targets.length; i--;) {
    let observer = new IntersectionObserver((entries, observer) => {
        let j = entries.findIndex((e) => {return e.isIntersecting}); // isIntersectingの要素のインデックスを返す
        entries[j].target.classList.add('active');
        observer.unobserve(entries[j].target);
    });
    observer.observe(targets[i]);
}