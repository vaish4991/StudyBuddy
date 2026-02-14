// Content data for each grade
const gradeContent = {
    1: {
        books: [
            "The Very Hungry Caterpillar by Eric Carle",
            "Green Eggs and Ham by Dr. Seuss",
            "Where the Wild Things Are by Maurice Sendak",
            "Goodnight Moon by Margaret Wise Brown"
        ],
        ideas: [
            "Draw your favorite animal and color it",
            "Make a paper chain with different colors",
            "Create a story about your family",
            "Build something with blocks or Lego"
        ],
        thought: "Every day is a new adventure! Be curious and ask questions. Remember, mistakes help us learn and grow."
    },
    2: {
        books: [
            "Charlotte's Web by E.B. White",
            "The Magic Tree House series by Mary Pope Osborne",
            "Frog and Toad Are Friends by Arnold Lobel",
            "Diary of a Worm by Doreen Cronin"
        ],
        ideas: [
            "Start a nature journal and draw plants you see",
            "Write a letter to your future self",
            "Create a puppet show with friends",
            "Make a collage from old magazines"
        ],
        thought: "Reading opens doors to magical worlds. Be kind to everyone you meet, and always try your best!"
    },
    3: {
        books: [
            "Matilda by Roald Dahl",
            "The BFG by Roald Dahl",
            "Ramona Quimby, Age 8 by Beverly Cleary",
            "Tales of a Fourth Grade Nothing by Judy Blume"
        ],
        ideas: [
            "Start a small garden and watch plants grow",
            "Create your own comic book character",
            "Build a fort using blankets and pillows",
            "Learn to make simple origami animals"
        ],
        thought: "Believe in yourself! You are capable of amazing things. Every expert was once a beginner."
    },
    4: {
        books: [
            "Harry Potter and the Sorcerer's Stone by J.K. Rowling",
            "Wonder by R.J. Palacio",
            "The One and Only Ivan by Katherine Applegate",
            "Because of Winn-Dixie by Kate DiCamillo"
        ],
        ideas: [
            "Start a book club with friends",
            "Create a science experiment at home",
            "Write and illustrate your own short story",
            "Learn a new skill like juggling or yo-yo tricks"
        ],
        thought: "Choose kindness always. Your words and actions have power to make someone's day better."
    },
    5: {
        books: [
            "Percy Jackson series by Rick Riordan",
            "Holes by Louis Sachar",
            "The Chronicles of Narnia by C.S. Lewis",
            "Bridge to Terabithia by Katherine Paterson"
        ],
        ideas: [
            "Start coding with Scratch or Code.org",
            "Create a time capsule to open in 5 years",
            "Design and build a simple machine",
            "Start a blog or journal about your interests"
        ],
        thought: "Challenges make you stronger. Don't be afraid to fail - that's how we learn the most valuable lessons."
    },
    6: {
        books: [
            "The Giver by Lois Lowry",
            "Hatchet by Gary Paulsen",
            "Number the Stars by Lois Lowry",
            "The Outsiders by S.E. Hinton"
        ],
        ideas: [
            "Learn a musical instrument or practice one you know",
            "Create a documentary about something you care about",
            "Start a recycling or environmental project",
            "Design a board game with your own rules"
        ],
        thought: "Your uniqueness is your strength. Stand up for what's right, even when it's difficult."
    },
    7: {
        books: [
            "The Hunger Games by Suzanne Collins",
            "Holes by Louis Sachar",
            "The Lightning Thief by Rick Riordan",
            "Roll of Thunder, Hear My Cry by Mildred D. Taylor"
        ],
        ideas: [
            "Start a YouTube channel about your passion",
            "Learn photography and create a photo essay",
            "Volunteer in your community",
            "Create a podcast with friends"
        ],
        thought: "Your voice matters. Use it to speak up for yourself and others. Be the change you want to see."
    },
    8: {
        books: [
            "To Kill a Mockingbird by Harper Lee",
            "The Book Thief by Markus Zusak",
            "Fahrenheit 451 by Ray Bradbury",
            "Anne Frank: The Diary of a Young Girl"
        ],
        ideas: [
            "Start learning a new language",
            "Create a business plan for a startup idea",
            "Write poetry or short stories",
            "Learn video editing and create content"
        ],
        thought: "Education is the key to unlocking your potential. Stay curious, ask questions, and never stop learning."
    },
    9: {
        books: [
            "1984 by George Orwell",
            "Lord of the Flies by William Golding",
            "The Catcher in the Rye by J.D. Salinger",
            "Animal Farm by George Orwell"
        ],
        ideas: [
            "Start a debate club or join one",
            "Create a research project on a topic you love",
            "Learn web development and build a website",
            "Mentor younger students in subjects you excel at"
        ],
        thought: "Think critically and question everything. Your perspective is valuable, and your future is bright."
    },
    10: {
        books: [
            "The Great Gatsby by F. Scott Fitzgerald",
            "Pride and Prejudice by Jane Austen",
            "Brave New World by Aldous Huxley",
            "The Alchemist by Paulo Coelho"
        ],
        ideas: [
            "Prepare for college with SAT/ACT practice",
            "Start building your professional portfolio",
            "Learn about investing and financial literacy",
            "Create a personal development plan for your goals"
        ],
        thought: "You're on the edge of incredible opportunities. Work hard, stay focused, and believe in your dreams. The world needs what you have to offer."
    }
};

// Initialize the app
function init() {
    const gradeButtons = document.getElementById('gradeButtons');
    
    // Create grade buttons
    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement('button');
        btn.className = 'grade-btn';
        btn.textContent = `Grade ${i}`;
        btn.onclick = () => showGradeContent(i);
        gradeButtons.appendChild(btn);
    }
    
    // Back button functionality
    document.getElementById('backBtn').onclick = () => {
        document.querySelector('.grade-selector').style.display = 'block';
        document.getElementById('contentDisplay').style.display = 'none';
    };
}

// Display content for selected grade
function showGradeContent(grade) {
    const content = gradeContent[grade];
    
    // Update title
    document.getElementById('gradeTitle').textContent = `Grade ${grade} Resources`;
    
    // Update books
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';
    content.books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        booksList.appendChild(li);
    });
    
    // Update ideas
    const ideasList = document.getElementById('ideasList');
    ideasList.innerHTML = '';
    content.ideas.forEach(idea => {
        const li = document.createElement('li');
        li.textContent = idea;
        ideasList.appendChild(li);
    });
    
    // Update thought
    document.getElementById('thoughtDisplay').textContent = content.thought;
    
    // Show content, hide grade selector
    document.querySelector('.grade-selector').style.display = 'none';
    document.getElementById('contentDisplay').style.display = 'block';
}

// Start the app when page loads
document.addEventListener('DOMContentLoaded', init);
