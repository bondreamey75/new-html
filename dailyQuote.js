fetch("https://api.dailyquotes.dev/api/quotes/dev", {
  headers: {
    "Authorization": "Zfmk9UsqkYmDMtUSHmiGiC49TFd477cDiUDtY6z1"
  }
})
  .then(response => response.json())
  .then(data => {
    const quote = data.quote;
    const author = data.author;
    document.getElementById("quote").innerText = `"${quote}" — ${author}`;
  })
  .catch(error => console.error("Error fetching quote:", error));