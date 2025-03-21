document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach(element => observer.observe(element));
});

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.slide-up');

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show'); // Thêm class "show" khi xuất hiện trên màn hình
                }
            });
        },
        { threshold: 0.2 }
    ); // Kích hoạt khi 20% phần tử hiển thị trên màn hình

    elements.forEach(el => observer.observe(el));
});

// document.addEventListener('DOMContentLoaded', function () {});

// const sections = document.querySelectorAll('section[id]');

// const scrollActive = () => {
//     const scrollDown = window.scrollY;

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight,
//             sectionTop = current.offsetTop - 58,
//             sectionId = current.getAttribute('id'),
//             sectionsClass = document.querySelector(`a[href="#${sectionId}"]`);

//         if (
//             scrollDown > sectionTop &&
//             scrollDown <= sectionTop + sectionHeight
//         ) {
//             sectionsClass.classList.add('active');
//         } else {
//             sectionsClass.classList.remove('active');
//         }
//     });
// };
// window.addEventListener('scroll', scrollActive);

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
const headerHeight = document.querySelector('header').offsetHeight;

const scrollActive = () => {
    let scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - headerHeight - 20; // Giữ khoảng cách
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector(
            `nav a[href="#${sectionId}"]`
        );

        if (
            scrollDown >= sectionTop &&
            scrollDown < sectionTop + sectionHeight
        ) {
            navLinks.forEach(link => link.classList.remove('active'));
            sectionsClass.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollActive);
