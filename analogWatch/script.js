const step = () => {
    let time = new Date();
    let hrs = time.getHours(), min = time.getMinutes(), sec = time.getSeconds();
    hrs = hrs > 12 ? (hrs - 12) : hrs;
    let secAngle = sec * 6 || 0;
    let minAngle = min * 6 + parseInt(secAngle/60);
    let hrsAngle = hrs * 30 + parseInt(minAngle/12);
    let secElm = document.querySelector('span.second');
    secElm.style.transform = 'rotate(' + secAngle + 'deg)';
    let minElm = document.querySelector('span.minute');
    minElm.style.transform = 'rotate(' + minAngle + 'deg)';
    let hrsElm = document.querySelector('span.hour');
    hrsElm.style.transform = 'rotate(' + hrsAngle + 'deg)';

    window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);