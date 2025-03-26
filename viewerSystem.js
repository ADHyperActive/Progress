document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            const lines = content.split('\n');
            let displayHtml = '';
            let dataObject = {}; // Store data for URL parameters

            lines.forEach(line => {
                const parts = line.split(':');
                if (parts.length === 2) {
                    displayHtml += `<p><strong>${parts[0]}:</strong> ${parts[1]}</p>`;
                    dataObject[parts[0]] = parts[1]; // Store in dataObject
                }
            });
            document.getElementById('dataDisplay').innerHTML = displayHtml;
            document.getElementById('embedButton').style.display = 'block'; // Show the button

            // Add event listener to the embed button
            document.getElementById('embedButton').addEventListener('click', function() {
                let urlString = "https://adhyperactive.github.io/Progress/embed.html?";
                for (const key in dataObject) {
                    urlString += encodeURIComponent(key) + "=" + encodeURIComponent(dataObject[key]) + "&";
                }
                urlString = urlString.slice(0, -1); // Remove trailing '&'
                document.getElementById('embedLinkDisplay').innerHTML = `<p>Embed Link: <a href="${urlString}" target="_blank">${urlString}</a></p>`;
            });

        };
        reader.readAsText(file);
    }
});
