function changePage(page) {
    const content = document.getElementById('app-content');
    if(page === 'home') {
        content.innerHTML = `<div class="card"><h2>স্বাগতম মারুফ!</h2><p>আজকের কাজগুলো শুরু করুন।</p></div>`;
    } else if(page === 'tasks') {
        content.innerHTML = `<div class="card"><h3>Daily Task</h3><p>রিওয়ার্ড: ৳৫.০০</p><button class="btn">Start</button></div>`;
    } else if(page === 'refer') {
        content.innerHTML = `<div class="card"><h3>Leaderboard</h3><p>১. মারুফ - ৳১২৫০</p><button class="btn">Refer Now</button></div>`;
    } else if(page === 'withdraw') {
        content.innerHTML = `<div class="card"><h3>Withdraw (Nagad)</h3><input type="number" placeholder="Number" style="width:100%; padding:10px; margin:10px 0;"><button class="btn">Submit</button></div>`;
    }
}
window.onload = () => changePage('home');
