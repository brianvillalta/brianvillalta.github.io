// Enforce a 200-word limit on the message textarea
document.getElementById('message').addEventListener('input', function() {
  let text = this.value.trim();
  let words = text.split(/\s+/).filter(word => word.length > 0);
  
  if (words.length > 200) {
    let trimmed = words.slice(0, 200).join(" ");
    this.value = trimmed;
    words = trimmed.split(/\s+/);
  }

  // Update word count display
  document.getElementById('wordCount').innerText = words.length + " words";
});
