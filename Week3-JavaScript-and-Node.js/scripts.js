const mainTitle = document.querySelector('#title');
let curValue = 0;
let totalSum = JSON.parse(localStorage.getItem('totalSum')) || 0; // โหลดค่า Total Sum ที่เคยบันทึกไว้

// เลือกปุ่มและองค์ประกอบใน HTML
const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');
const btnSave = document.querySelector('#save');
const btnClearSaved = document.querySelector('#clearSaved');
const savedList = document.querySelector('#savedList');
const totalSumDisplay = document.querySelector('#totalSum'); // แสดงผลรวม Total Sum

// ฟังก์ชันอัปเดตค่าในหน้าเว็บ
function updateTitle() {
    mainTitle.textContent = curValue;
}

// ฟังก์ชันแสดงค่าที่บันทึกไว้
function displaySavedValues() {
    savedList.innerHTML = '';
    const savedEntries = JSON.parse(localStorage.getItem('savedValues')) || [];

    if (savedEntries.length === 0) {
        savedList.innerHTML = '<li>No data recorded</li>';
        return;
    }

    savedEntries.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `Counter: ${entry.value}, Time: ${entry.timestamp}`;
        savedList.appendChild(listItem);
    });

    // อัปเดตค่า Total Sum ที่แสดง
    totalSumDisplay.textContent = `Total Sum: ${totalSum}`;
}

// Event Listeners สำหรับปุ่ม
btnIncrement.addEventListener('click', () => {
    curValue++;
    updateTitle();
});

btnDecrement.addEventListener('click', () => {
    curValue--;
    updateTitle();
});

btnReset.addEventListener('click', () => {
    curValue = 0;
    totalSum = 0; // รีเซ็ต Total Sum
    localStorage.setItem('totalSum', JSON.stringify(totalSum)); // อัปเดตค่าใน localStorage
    updateTitle();
    displaySavedValues(); // อัปเดตค่าใน UI
});

// บันทึกค่าและอัปเดต Total Sum
btnSave.addEventListener('click', () => {
    const now = new Date();
    const formattedTime = now.toLocaleString();

    const savedData = {
        value: curValue,
        timestamp: formattedTime
    };

    // ดึงข้อมูลเก่าจาก localStorage และอัปเดต
    const savedEntries = JSON.parse(localStorage.getItem('savedValues')) || [];
    savedEntries.push(savedData);
    localStorage.setItem('savedValues', JSON.stringify(savedEntries));

    // อัปเดต Total Sum
    totalSum += curValue;
    localStorage.setItem('totalSum', JSON.stringify(totalSum)); // บันทึกค่าใหม่ลง localStorage

    // แสดงค่าที่บันทึกบนหน้าเว็บ
    displaySavedValues();
});

// ปุ่มล้างข้อมูลที่บันทึก
btnClearSaved.addEventListener('click', () => {
    localStorage.removeItem('savedValues'); // ล้างค่าที่บันทึก
    localStorage.setItem('totalSum', JSON.stringify(0)); // รีเซ็ต Total Sum เป็น 0
    totalSum = 0;
    displaySavedValues(); // อัปเดต UI
});

// โหลดค่าที่บันทึกไว้ตอนเริ่มต้น
window.addEventListener('load', displaySavedValues);
