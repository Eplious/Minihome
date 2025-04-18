function addGuestbook() {
  const input = document.getElementById('guestInput');
  const text = input.value.trim();
  if (text !== '') {
    const ul = document.getElementById('guestbookList');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
    input.value = '';
  }
}
