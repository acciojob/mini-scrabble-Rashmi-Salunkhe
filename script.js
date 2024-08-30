//your code here
document.getElementById('evaluatedText').addEventListener('input', function() {
    const textLength = this.value.length;
    document.getElementById('letterCount').textContent = textLength;
});
