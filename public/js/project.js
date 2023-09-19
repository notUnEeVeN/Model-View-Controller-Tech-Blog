// project.js

// Handle comment button click
document.getElementById('commentBtn').addEventListener('click', function() {
    document.getElementById('commentForm').style.display = 'block';
});

// Handle comment submission
document.getElementById('submitComment').addEventListener('click', async function() {
    const commentText = document.getElementById('commentText').value.trim();

    const projectId = window.location.pathname.split('/')[2]; // Assuming your project URL is like "/projects/5"

    if (commentText) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ text: commentText, project_id: projectId }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to post comment');
        }
    } else {
        alert('Please enter a comment');
    }
});
