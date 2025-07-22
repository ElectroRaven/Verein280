function updateCountdown() {
    const now = new Date().getTime();
    const target = new Date(now + 48*60*60*1000).getTime(); //48 hours
    
    function update() {
        const current = new Date().getTime();
        const remaining = target - current;
        
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 48)) / (1000 * 60 * 60));  //48 hours
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        if (remaining > 0) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

document.addEventListener('DOMContentLoaded', updateCountdown);