const main = {
    nav: ['About me', 'Studies and courses', 'Experience', 'Skills', 'Contact'],
    title: 'Hi! My name is Yuliia Paziura',
    subtitle: 'I am a web-developer'
}
const mainUA = {
    nav: ['Про мене', 'Навчання та курси', 'Досвід', 'Навички', 'Контакт'],
    title: 'Привіт! Мене звати Пазюра Юлія',
    subtitle: 'Я - веб-розробник'
}

const aboutMe = {
    title: 'About me',
    text: ''
}

const aboutMeUA = {
    title: 'Про мене',
    text: ''
}

const studies = {
    title: 'Studies and Courses',
    gimn: {
        title:'Gimnasium 315',
        interval: '2004 - 2015',
        text:'Studied at the gymnasium with in-depth study of foreign languages, a mathematical class. Graduated with honors.'
    },
    univer: {
        title: 'Lublin University of Technology',
        interval: '2015 - 2019',
        text:'I studied at the faculty of Civil Engineering and Architecture, the department of Architecture. I got the degree of engineer architect.' 
    },
    courseHTML: {
        title:'Udemy courses. Web-development',
        interval: '20021 - 2022',
        text:' I completed courses in web-development (HTML, CSS)'
    },
    courseJS: {
        title:'Udemy courses. Javascript + React',
        interval: '20021 - 2022',
        text:' I completed courses in Javascript + React'
    }
}

const studiesUA = {
    title: 'Навчання та курси',
    gimn: {
        title:'Гімназія 315',
        interval: '2004 - 2015',
        text:'Я навчалася в гімназии з поглибленим вивченням іноземних мов. Закінчила школу з золотою медаллю.'
    },
    univer: {
        title: 'Люблінська Політехніка',
        interval: '2015 - 2019',
        text:'Я навчалась на факультеті Будівництва та Архітектури, напрямок Архітектура. Отримала ступінь інженера-архітектора.' 
    },
    courseHTML: {
        title:'Udemy курси. Веб-розробка',
        interval: '20021 - 2022',
        text:' Закінчила курси по веб-розробці (HTML, CSS)'
    },
    courseJS: {
        title:'Udemy курси. JavaScript + React',
        interval: '20021 - 2022',
        text:'Закінчила курси по JavaScript + React'
    }
}

const skills = {
    title: 'Skills',
    skills: [
        {
            title: 'HTML',
            text: 'Experience in semantic and adaptive layout.'
        },
        {
            title: 'CSS',
            text: 'Expirience in website developement and pixel-perfect layouts.'
        },
        {
            title: 'JavaScript',
            text: 'Basic knowlage of vanila JS, OOP principals.'
        },
        {
            title: 'React',
            text: 'Basic knowledge and practice in React framework.'
        },
        {
            title: 'Language. English',
            text: 'Intermediate (B1)'
        },
        {
            title: 'Language. Polish',
            text: 'Upper intermediate (B2)'
        }
    ]
}

const skillsUA = {
    title: 'Навички',
    skills: [
        {
            title: 'HTML',
            text: 'Навички в семантичній та адоптивній верстці.'
        },
        {
            title: 'CSS',
            text: 'Навички в веб-розробці та pixel-perfect верстці.'
        },
        {
            title: 'JavaScript',
            text: 'Базові знання JavaScript ти принципів ООП.'
        },
        {
            title: 'React',
            text: 'Базові знання та практика на фреймворці React.'
        },
        {
            title: 'Мова. Англійська',
            text: 'Середній (B1)'
        },
        {
            title: 'Мова. Польська',
            text: 'Вище середнього (B2)'
        }
    ]
}

const footer = {
    framework: 'This website was created using React framework.',
    libraries: 'Libraries I used in this project:',
    libList: ['Material UI']
}

const footerUA = {
    framework: 'Ця сторінка була створена за допомогою фреймворку React.',
    libraries: 'Бібліотеки, використани в проєкті:',
    libList: ['Material UI'] 
}


export {main, mainUA, aboutMe, aboutMeUA, studies, studiesUA, skills, skillsUA, footer, footerUA};