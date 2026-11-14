const button = document.getElementById("draw-button");

button.addEventListener("click", function() {
    const number = Math.floor(Math.random() * words.length);            // 覚える！
    document.getElementById("words").textContent = words[number];       // 覚える！
});

const words = [
    "今日もいい日",
    "今日はのんびり",
    "たまには寄り道",
    "明日のことは明日考えよう",
    "今日は何もしない時間を作って、好きなお茶を飲みながら、のんびり過ごしてみよう"
];