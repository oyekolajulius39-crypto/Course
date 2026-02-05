// App State
const AppState = {
    currentUser: null,
    enrolledCourses: [],
    completedLessons: {},
    courses: [
        {
            id: 1,
            title: "Complete Web Development Bootcamp",
            category: "web-development",
            level: "Beginner",
            duration: "8 weeks",
            lessons: 24,
            rating: 4.8,
            reviews: 2300,
            description: "Learn HTML, CSS, JavaScript, and modern web frameworks from scratch. Build real-world projects and deploy them to production.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
            instructor: "Sarah Johnson",
            syllabus: [
                { id: 1, title: "Introduction to Web Development", duration: "30 min" },
                { id: 2, title: "HTML Fundamentals", duration: "45 min" },
                { id: 3, title: "CSS Basics and Styling", duration: "60 min" },
                { id: 4, title: "JavaScript Essentials", duration: "90 min" },
                { id: 5, title: "Building Your First Website", duration: "120 min" },
                { id: 6, title: "Responsive Design with CSS Grid", duration: "75 min" }
            ]
        },
        {
            id: 2,
            title: "Data Science with Python",
            category: "data-science",
            level: "Intermediate",
            duration: "10 weeks",
            lessons: 32,
            rating: 4.9,
            reviews: 1800,
            description: "Master data analysis, visualization, and machine learning fundamentals using Python, pandas, and scikit-learn.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
            instructor: "Dr. Michael Chen",
            syllabus: [
                { id: 1, title: "Python Programming Basics", duration: "45 min" },
                { id: 2, title: "NumPy and Pandas", duration: "90 min" },
                { id: 3, title: "Data Visualization with Matplotlib", duration: "60 min" },
                { id: 4, title: "Statistical Analysis", duration: "75 min" },
                { id: 5, title: "Introduction to Machine Learning", duration: "120 min" },
                { id: 6, title: "Building Your First ML Model", duration: "90 min" }
            ]
        },
        {
            id: 3,
            title: "UI/UX Design Fundamentals",
            category: "design",
            level: "Beginner",
            duration: "6 weeks",
            lessons: 18,
            rating: 4.7,
            reviews: 1500,
            description: "Create beautiful, user-centered designs with industry-standard tools. Learn design thinking, prototyping, and user research.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
            instructor: "Emily Rodriguez",
            syllabus: [
                { id: 1, title: "Introduction to UI/UX Design", duration: "30 min" },
                { id: 2, title: "Design Thinking Process", duration: "60 min" },
                { id: 3, title: "User Research Methods", duration: "75 min" },
                { id: 4, title: "Wireframing and Prototyping", duration: "90 min" },
                { id: 5, title: "Visual Design Principles", duration: "60 min" },
                { id: 6, title: "Designing for Mobile", duration: "45 min" }
            ]
        },
        {
            id: 4,
            title: "Digital Marketing Mastery",
            category: "marketing",
            level: "All Levels",
            duration: "4 weeks",
            lessons: 20,
            rating: 4.6,
            reviews: 2100,
            description: "Build effective marketing campaigns across all digital channels including SEO, social media, email, and paid advertising.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop",
            instructor: "David Park",
            syllabus: [
                { id: 1, title: "Digital Marketing Overview", duration: "30 min" },
                { id: 2, title: "SEO Fundamentals", duration: "60 min" },
                { id: 3, title: "Social Media Marketing", duration: "75 min" },
                { id: 4, title: "Email Marketing Strategies", duration: "45 min" },
                { id: 5, title: "Google Ads and PPC", duration: "90 min" },
                { id: 6, title: "Analytics and Measurement", duration: "60 min" }
            ]
        },
        {
            id: 5,
            title: "Photography Masterclass",
            category: "photography",
            level: "Beginner",
            duration: "5 weeks",
            lessons: 16,
            rating: 4.8,
            reviews: 1200,
            description: "From camera basics to advanced composition and editing techniques. Learn to capture stunning images in any situation.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
            instructor: "Amanda White",
            syllabus: [
                { id: 1, title: "Camera Settings and Controls", duration: "45 min" },
                { id: 2, title: "Understanding Exposure", duration: "60 min" },
                { id: 3, title: "Composition Techniques", duration: "75 min" },
                { id: 4, title: "Lighting Fundamentals", duration: "90 min" },
                { id: 5, title: "Portrait Photography", duration: "60 min" },
                { id: 6, title: "Photo Editing with Lightroom", duration: "120 min" }
            ]
        },
        {
            id: 6,
            title: "Financial Analysis & Modeling",
            category: "business",
            level: "Intermediate",
            duration: "7 weeks",
            lessons: 22,
            rating: 4.7,
            reviews: 980,
            description: "Learn financial statements, ratios, and Excel modeling techniques used by investment professionals.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
            instructor: "Robert Anderson",
            syllabus: [
                { id: 1, title: "Financial Statements Overview", duration: "45 min" },
                { id: 2, title: "Income Statement Analysis", duration: "60 min" },
                { id: 3, title: "Balance Sheet Fundamentals", duration: "75 min" },
                { id: 4, title: "Cash Flow Analysis", duration: "90 min" },
                { id: 5, title: "Financial Ratios", duration: "60 min" },
                { id: 6, title: "Excel Financial Modeling", duration: "120 min" }
            ]
        }
    ]
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    initializeNavigation();
    initializeAuthSystem();
    
    // Page-specific initializations
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    
    if (page === 'index.html' || page === '') {
        initializeHomePage();
    } else if (page === 'courses.html') {
        initializeCoursesPage();
    } else if (page === 'course.html') {
        initializeCoursePage();
    } else if (page === 'lesson.html') {
        initializeLessonPage();
    } else if (page === 'dashboard.html') {
        initializeDashboard();
    }
    
    // Animate on scroll
    initializeAOS();
});

// Load user data from localStorage
function loadUserData() {
    const userData = localStorage.getItem('freeLearnUser');
    if (userData) {
        AppState.currentUser = JSON.parse(userData);
        updateAuthUI();
    }
    
    const enrolledData = localStorage.getItem('enrolledCourses');
    if (enrolledData) {
        AppState.enrolledCourses = JSON.parse(enrolledData);
    }
    
    const completedData = localStorage.getItem('completedLessons');
    if (completedData) {
        AppState.completedLessons = JSON.parse(completedData);
    }
}

// Save user data to localStorage
function saveUserData() {
    if (AppState.currentUser) {
        localStorage.setItem('freeLearnUser', JSON.stringify(AppState.currentUser));
    }
    localStorage.setItem('enrolledCourses', JSON.stringify(AppState.enrolledCourses));
    localStorage.setItem('completedLessons', JSON.stringify(AppState.completedLessons));
}

// Navigation
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Highlight active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Authentication System
function initializeAuthSystem() {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    const loginForm = document.getElementById('loginForm');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            if (AppState.currentUser) {
                // Logout
                AppState.currentUser = null;
                localStorage.removeItem('freeLearnUser');
                updateAuthUI();
                showAlert('Logged out successfully!', 'success');
            } else {
                // Show login modal
                loginModal.classList.add('active');
            }
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            loginModal.classList.remove('active');
        });
    }
    
    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
            }
        });
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            
            AppState.currentUser = { username, email };
            saveUserData();
            updateAuthUI();
            loginModal.classList.remove('active');
            showAlert(`Welcome back, ${username}!`, 'success');
        });
    }
}

function updateAuthUI() {
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        if (AppState.currentUser) {
            loginBtn.textContent = 'Sign Out';
            loginBtn.classList.remove('btn-secondary');
            loginBtn.classList.add('btn-outline');
        } else {
            loginBtn.textContent = 'Sign In';
            loginBtn.classList.add('btn-secondary');
            loginBtn.classList.remove('btn-outline');
        }
    }
}

// Home Page
function initializeHomePage() {
    // Animate statistics
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        animateCount(stat, target);
    });
}

function animateCount(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Courses Page
function initializeCoursesPage() {
    displayCourses();
    initializeFilters();
}

function displayCourses(filteredCourses = null) {
    const coursesGrid = document.querySelector('.courses-grid');
    if (!coursesGrid) return;
    
    const courses = filteredCourses || AppState.courses;
    
    coursesGrid.innerHTML = courses.map(course => `
        <div class="course-card" data-aos="fade-up">
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
                <div class="course-badge">${course.level}</div>
            </div>
            <div class="course-content">
                <div class="course-meta">
                    <span class="course-category">${formatCategory(course.category)}</span>
                    <span class="course-duration">${course.duration}</span>
                </div>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-footer">
                    <div class="course-stats">
                        <span>${course.lessons} lessons</span>
                        <span>⭐ ${course.rating} (${formatNumber(course.reviews)})</span>
                    </div>
                    <a href="course.html?id=${course.id}" class="btn-primary btn-small">View Course</a>
                </div>
            </div>
        </div>
    `).join('');
    
    initializeAOS();
}

function initializeFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const levelFilter = document.getElementById('levelFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    
    if (levelFilter) {
        levelFilter.addEventListener('change', applyFilters);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
    
    // Check URL parameters
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category && categoryFilter) {
        categoryFilter.value = category;
        applyFilters();
    }
}

function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const levelFilter = document.getElementById('levelFilter');
    const searchInput = document.getElementById('searchInput');
    
    let filtered = AppState.courses;
    
    if (categoryFilter && categoryFilter.value !== 'all') {
        filtered = filtered.filter(c => c.category === categoryFilter.value);
    }
    
    if (levelFilter && levelFilter.value !== 'all') {
        filtered = filtered.filter(c => c.level === levelFilter.value);
    }
    
    if (searchInput && searchInput.value.trim()) {
        const query = searchInput.value.toLowerCase();
        filtered = filtered.filter(c => 
            c.title.toLowerCase().includes(query) ||
            c.description.toLowerCase().includes(query)
        );
    }
    
    displayCourses(filtered);
}

// Course Detail Page
function initializeCoursePage() {
    const params = new URLSearchParams(window.location.search);
    const courseId = parseInt(params.get('id'));
    const course = AppState.courses.find(c => c.id === courseId);
    
    if (!course) {
        window.location.href = 'courses.html';
        return;
    }
    
    displayCourseDetail(course);
    
    const enrollBtn = document.getElementById('enrollBtn');
    if (enrollBtn) {
        const isEnrolled = AppState.enrolledCourses.includes(courseId);
        updateEnrollButton(enrollBtn, isEnrolled, courseId);
        
        enrollBtn.addEventListener('click', () => {
            if (!AppState.currentUser) {
                showAlert('Please sign in to enroll in courses', 'warning');
                document.getElementById('loginModal').classList.add('active');
                return;
            }
            
            if (isEnrolled) {
                window.location.href = 'dashboard.html';
            } else {
                enrollInCourse(courseId);
                updateEnrollButton(enrollBtn, true, courseId);
            }
        });
    }
}

function displayCourseDetail(course) {
    // Update course hero
    const heroTitle = document.getElementById('courseHeroTitle');
    const heroDescription = document.getElementById('courseHeroDescription');
    const heroMeta = document.getElementById('courseHeroMeta');
    
    if (heroTitle) heroTitle.textContent = course.title;
    if (heroDescription) heroDescription.textContent = course.description;
    if (heroMeta) {
        heroMeta.innerHTML = `
            <span>${formatCategory(course.category)}</span>
            <span>•</span>
            <span>${course.level}</span>
            <span>•</span>
            <span>⭐ ${course.rating} (${formatNumber(course.reviews)} reviews)</span>
        `;
    }
    
    // Update sidebar
    const sidebarInfo = document.getElementById('sidebarInfo');
    if (sidebarInfo) {
        sidebarInfo.innerHTML = `
            <div style="margin-bottom: var(--spacing-md);">
                <strong>Duration:</strong> ${course.duration}
            </div>
            <div style="margin-bottom: var(--spacing-md);">
                <strong>Lessons:</strong> ${course.lessons}
            </div>
            <div style="margin-bottom: var(--spacing-md);">
                <strong>Level:</strong> ${course.level}
            </div>
            <div>
                <strong>Instructor:</strong> ${course.instructor}
            </div>
        `;
    }
    
    // Display syllabus
    const lessonList = document.getElementById('lessonList');
    if (lessonList) {
        lessonList.innerHTML = course.syllabus.map((lesson, index) => {
            const lessonKey = `${course.id}-${lesson.id}`;
            const isCompleted = AppState.completedLessons[lessonKey];
            
            return `
                <li class="lesson-item ${isCompleted ? 'completed' : ''}" 
                    onclick="goToLesson(${course.id}, ${lesson.id})">
                    <div>
                        <span class="lesson-number">${index + 1}.</span>
                        ${lesson.title}
                    </div>
                    <div style="display: flex; align-items: center; gap: var(--spacing-sm);">
                        <span style="font-size: 0.85rem; color: var(--text-tertiary);">${lesson.duration}</span>
                        ${isCompleted ? '<span style="color: var(--success);">✓</span>' : ''}
                    </div>
                </li>
            `;
        }).join('');
    }
}

function updateEnrollButton(btn, isEnrolled, courseId) {
    if (isEnrolled) {
        btn.textContent = 'Go to Dashboard';
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline');
    } else {
        btn.textContent = 'Enroll Now - Free';
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-outline');
    }
}

function enrollInCourse(courseId) {
    if (!AppState.enrolledCourses.includes(courseId)) {
        AppState.enrolledCourses.push(courseId);
        saveUserData();
        showAlert('Successfully enrolled in course!', 'success');
    }
}

function goToLesson(courseId, lessonId) {
    window.location.href = `lesson.html?course=${courseId}&lesson=${lessonId}`;
}

// Lesson Page
function initializeLessonPage() {
    const params = new URLSearchParams(window.location.search);
    const courseId = parseInt(params.get('course'));
    const lessonId = parseInt(params.get('lesson'));
    
    const course = AppState.courses.find(c => c.id === courseId);
    if (!course) {
        window.location.href = 'courses.html';
        return;
    }
    
    const lesson = course.syllabus.find(l => l.id === lessonId);
    if (!lesson) {
        window.location.href = `course.html?id=${courseId}`;
        return;
    }
    
    displayLesson(course, lesson);
    
    const completeBtn = document.getElementById('completeLessonBtn');
    if (completeBtn) {
        const lessonKey = `${courseId}-${lessonId}`;
        const isCompleted = AppState.completedLessons[lessonKey];
        
        if (isCompleted) {
            completeBtn.textContent = 'Completed ✓';
            completeBtn.classList.remove('btn-primary');
            completeBtn.classList.add('btn-outline');
        }
        
        completeBtn.addEventListener('click', () => {
            markLessonComplete(courseId, lessonId);
            completeBtn.textContent = 'Completed ✓';
            completeBtn.classList.remove('btn-primary');
            completeBtn.classList.add('btn-outline');
        });
    }
    
    // Next lesson button
    const nextBtn = document.getElementById('nextLessonBtn');
    if (nextBtn) {
        const currentIndex = course.syllabus.findIndex(l => l.id === lessonId);
        const nextLesson = course.syllabus[currentIndex + 1];
        
        if (nextLesson) {
            nextBtn.addEventListener('click', () => {
                window.location.href = `lesson.html?course=${courseId}&lesson=${nextLesson.id}`;
            });
        } else {
            nextBtn.textContent = 'Back to Course';
            nextBtn.addEventListener('click', () => {
                window.location.href = `course.html?id=${courseId}`;
            });
        }
    }
}

function displayLesson(course, lesson) {
    const lessonTitle = document.getElementById('lessonTitle');
    const courseTitle = document.getElementById('courseTitle');
    
    if (lessonTitle) lessonTitle.textContent = lesson.title;
    if (courseTitle) {
        courseTitle.innerHTML = `
            <a href="course.html?id=${course.id}" style="color: var(--text-secondary);">
                ${course.title}
            </a>
        `;
    }
}

function markLessonComplete(courseId, lessonId) {
    const lessonKey = `${courseId}-${lessonId}`;
    AppState.completedLessons[lessonKey] = true;
    saveUserData();
    showAlert('Lesson marked as complete!', 'success');
}

// Dashboard Page
function initializeDashboard() {
    if (!AppState.currentUser) {
        window.location.href = 'index.html';
        return;
    }
    
    displayDashboard();
}

function displayDashboard() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage && AppState.currentUser) {
        welcomeMessage.textContent = `Welcome back, ${AppState.currentUser.username}!`;
    }
    
    // Display enrolled courses
    const enrolledList = document.getElementById('enrolledCoursesList');
    if (enrolledList) {
        if (AppState.enrolledCourses.length === 0) {
            enrolledList.innerHTML = `
                <p style="color: var(--text-secondary); text-align: center; padding: var(--spacing-lg);">
                    You haven't enrolled in any courses yet.
                    <br><br>
                    <a href="courses.html" class="btn-primary">Browse Courses</a>
                </p>
            `;
        } else {
            enrolledList.innerHTML = AppState.enrolledCourses.map(courseId => {
                const course = AppState.courses.find(c => c.id === courseId);
                if (!course) return '';
                
                const progress = calculateCourseProgress(courseId, course);
                
                return `
                    <div class="enrolled-course-item">
                        <div class="enrolled-course-title">${course.title}</div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <div class="enrolled-course-progress">
                            <span>${progress}% complete</span>
                            <a href="course.html?id=${courseId}" class="btn-primary btn-small">Continue</a>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }
    
    // Display stats
    const totalCoursesEl = document.getElementById('totalCourses');
    const completedCoursesEl = document.getElementById('completedCourses');
    const totalLessonsEl = document.getElementById('totalLessons');
    
    if (totalCoursesEl) totalCoursesEl.textContent = AppState.enrolledCourses.length;
    
    let completedCount = 0;
    let totalLessons = 0;
    
    AppState.enrolledCourses.forEach(courseId => {
        const course = AppState.courses.find(c => c.id === courseId);
        if (course) {
            const progress = calculateCourseProgress(courseId, course);
            if (progress === 100) completedCount++;
            totalLessons += course.syllabus.length;
        }
    });
    
    if (completedCoursesEl) completedCoursesEl.textContent = completedCount;
    if (totalLessonsEl) totalLessonsEl.textContent = totalLessons;
}

function calculateCourseProgress(courseId, course) {
    const totalLessons = course.syllabus.length;
    let completedLessons = 0;
    
    course.syllabus.forEach(lesson => {
        const lessonKey = `${courseId}-${lesson.id}`;
        if (AppState.completedLessons[lessonKey]) {
            completedLessons++;
        }
    });
    
    return Math.round((completedLessons / totalLessons) * 100);
}

// Utilities
function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

function showAlert(message, type = 'success') {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    alert.style.position = 'fixed';
    alert.style.top = '100px';
    alert.style.right = '20px';
    alert.style.zIndex = '9999';
    alert.style.minWidth = '300px';
    alert.style.animation = 'slideInRight 0.3s ease';
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => alert.remove(), 300);
    }, 3000);
}

// Animate on Scroll
function initializeAOS() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
