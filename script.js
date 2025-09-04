// Theme Toggle Functionality
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
}

// Initialize theme on page load
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
}

// Navigation function
function navigateTo(page) {
    window.location.href = page;
}

// Back navigation function
function goBack() {
    window.history.back();
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', initializeTheme);

// Form submission helpers
function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    // Style the toast
    Object.assign(toast.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 24px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateY(-20px)',
        transition: 'all 0.3s ease'
    });
    
    if (type === 'success') {
        toast.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    } else if (type === 'error') {
        toast.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    }
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Mood selection functionality
function selectMood(moodId) {
    // Remove active class from all mood buttons
    document.querySelectorAll('.mood-option').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to selected mood
    const selectedMood = document.getElementById(moodId);
    if (selectedMood) {
        selectedMood.classList.add('active');
    }
    
    // Store selected mood
    window.selectedMood = moodId;
}

// Form validation and submission
function submitCheckin() {
    const thoughts = document.getElementById('thoughts')?.value;
    
    if (!window.selectedMood) {
        showToast('Please select your mood to continue.', 'error');
        return;
    }
    
    if (!thoughts || thoughts.trim().length === 0) {
        showToast('Please share your thoughts to complete the check-in.', 'error');
        return;
    }
    
    // Simulate API call
    showToast('Check-in recorded! Thank you for sharing.');
    
    // Reset form
    setTimeout(() => {
        document.querySelectorAll('.mood-option').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById('thoughts').value = '';
        window.selectedMood = null;
    }, 1500);
}

// Journal entry submission
function submitJournalEntry() {
    const title = document.getElementById('journal-title')?.value;
    const content = document.getElementById('journal-content')?.value;
    
    if (!title || title.trim().length === 0) {
        showToast('Please add a title for your journal entry.', 'error');
        return;
    }
    
    if (!content || content.trim().length === 0) {
        showToast('Please write some content for your journal entry.', 'error');
        return;
    }
    
    showToast('Journal entry saved successfully!');
    
    // Reset form
    setTimeout(() => {
        document.getElementById('journal-title').value = '';
        document.getElementById('journal-content').value = '';
    }, 1500);
}

// Chat functionality
function sendMessage() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    
    if (!input || !messages) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const responses = [
            "Thank you for sharing that with me. How are you feeling about this situation?",
            "I understand that can be challenging. What would help you feel better right now?",
            "It's completely normal to feel that way. You're doing great by talking about it.",
            "That sounds like a difficult experience. Remember that it's okay to take things one step at a time.",
            "I appreciate you opening up to me. What kind of support would be most helpful today?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const messages = document.getElementById('chat-messages');
    if (!messages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = text;
    
    messageDiv.appendChild(messageContent);
    messages.appendChild(messageDiv);
    
    // Scroll to bottom
    messages.scrollTop = messages.scrollHeight;
}

// Handle Enter key in chat input
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});