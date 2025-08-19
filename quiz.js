document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const q1 = parseInt(document.getElementById("q1").value);
  const q2 = parseInt(document.getElementById("q2").value);
  const q3 = parseInt(document.getElementById("q3").value);

  if (isNaN(q1) || isNaN(q2) || isNaN(q3)) {
    alert("Please answer all questions.");
    return;
  }

  const total = q1 + q2 + q3;

  let resultText = "";
  let suggestion = "";
  let videoEmbed = "";

  if (total <= 2) {
    resultText = "✅ Low Stress Level";
    suggestion = "You're doing great! Keep it up with mindfulness and good habits.";
    videoEmbed = `<iframe src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  } else if (total <= 4) {
    resultText = "⚠️ Moderate Stress Level";
    suggestion = "Try breathing exercises, relaxing music, and journaling.";
    videoEmbed = `<iframe src="https://www.youtube.com/embed/OdIJ2x3nxzQ?autoplay=1&mute=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  } else {
    resultText = "🚨 High Stress Level";
    suggestion = "Please rest, meditate, and avoid screens. Try breathing deeply and taking breaks.";
    videoEmbed = `<iframe src="https://www.youtube.com/embed/1ZYbU82GVz4?autoplay=1&mute=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <h2>${resultText}</h2>
    <p>${suggestion}</p>
    ${videoEmbed}
  `;
});