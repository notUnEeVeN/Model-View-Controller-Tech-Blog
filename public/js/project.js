document.addEventListener('DOMContentLoaded', function() {

    // Function to handle new comment submission
    const newCommentHandler = async (event) => {
        event.preventDefault();

        const commentText = document.getElementById('commentText').value.trim();
        const projectId = window.location.pathname.split('/')[2];  // Assuming your project URL structure is like "/projects/5"

        console.log("Sending comment data:", { text: commentText, project_id: projectId });

        if (commentText) {
            const response = await fetch('/api/comments', {
                method: 'POST',
                body: JSON.stringify({ text: commentText, project_id: projectId }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                // location.reload();
            } else {
                alert('Failed to post comment');
            }
        } else {
            alert('Please enter a comment');
        }
    };

    // Comment button logic
    const commentBtn = document.getElementById('commentBtn');
    const commentForm = document.getElementById('commentForm');

    if(commentBtn) {
        commentBtn.addEventListener('click', function() {
            console.log("comment button clicked!")
            if(commentForm) {
                commentForm.style.display = commentForm.style.display === 'none' ? '' : 'none';
            }
        });
    }

    if(commentForm) {
        commentForm.addEventListener('submit', newCommentHandler);
    }

});
