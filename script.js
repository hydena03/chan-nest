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
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };
            
            // 제출 버튼 비활성화 및 로딩 표시
            const submitButton = document.querySelector('.submit-button');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = '제출 중...';
            
            // Google Apps Script 웹 앱 URL (이 URL을 실제 배포한 Google Apps Script 웹 앱 URL로 변경해야 합니다)
            const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
            
            // Fetch API를 사용하여 데이터 전송
            fetch(scriptURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (response.ok) {
                    // 성공 메시지 표시
                    alert('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
                    // 폼 초기화
                    contactForm.reset();
                } else {
                    throw new Error('서버 응답 오류');
                }
            })
            .catch(error => {
                console.error('제출 오류:', error);
                alert('문의 제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
            })
            .finally(() => {
                // 제출 버튼 다시 활성화
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            });
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