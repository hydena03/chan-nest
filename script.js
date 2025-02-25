document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글 기능
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuBtn && closeMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.add('active');
        });
        
        closeMenuBtn.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    }
    
    // 모바일 메뉴 링크 클릭 시 메뉴 닫기
    const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    });
    
    // 스크롤 시 헤더 스타일 변경
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        }
    });
    
    // 스무스 스크롤 기능
    const navLinks = document.querySelectorAll('nav ul li a, .mobile-nav ul li a, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 문의 양식 제출 처리
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 폼 데이터 수집
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // 여기에 실제 폼 제출 로직 추가 (예: AJAX 요청)
            console.log('문의 양식 제출:', formData);
            
            // 성공 메시지 표시
            alert('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
            
            // 폼 초기화
            contactForm.reset();
        });
    }

    // 더 보기 버튼 기능
    const aboutReadMoreBtn = document.getElementById('about-read-more');
    const aboutHiddenContent = document.getElementById('about-hidden-content');
    
    if (aboutReadMoreBtn && aboutHiddenContent) {
        aboutReadMoreBtn.addEventListener('click', function() {
            aboutHiddenContent.classList.toggle('show');
            aboutReadMoreBtn.textContent = aboutHiddenContent.classList.contains('show') ? '접기' : '더 보기';
        });
    }

    // Properties 섹션 더 보기 버튼
    const property1ReadMoreBtn = document.getElementById('property1-read-more');
    const property1HiddenContent = document.getElementById('property1-hidden-content');
    
    if (property1ReadMoreBtn && property1HiddenContent) {
        property1ReadMoreBtn.addEventListener('click', function() {
            property1HiddenContent.classList.toggle('show');
            property1ReadMoreBtn.textContent = property1HiddenContent.classList.contains('show') ? '접기' : '더 보기';
        });
    }

    // Concept 섹션 더 보기 버튼
    const conceptReadMoreBtns = [
        { btn: document.getElementById('concept1-read-more'), content: document.getElementById('concept1-hidden-content') },
        { btn: document.getElementById('concept2-read-more'), content: document.getElementById('concept2-hidden-content') },
        { btn: document.getElementById('concept3-read-more'), content: document.getElementById('concept3-hidden-content') }
    ];
    
    conceptReadMoreBtns.forEach(item => {
        if (item.btn && item.content) {
            item.btn.addEventListener('click', function() {
                item.content.classList.toggle('show');
                item.btn.textContent = item.content.classList.contains('show') ? '접기' : '더 보기';
            });
        }
    });
}); 