const main = {
    nav: ['About me', 'Studies and Courses', 'Experience', 'Skills', 'Contact'],
    title: 'Hi!🙋🏻‍♀️  My name is Yuliia Paziura',
    subtitle: 'I am a web-developer'
}
const mainUA = {
    nav: ['Про мене', 'Навчання та курси', 'Досвід', 'Навички', 'Контакти'],
    title: `Привіт!🙋🏻‍♀️  Мене звати Пазюра Юлія`,
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
    stud: [ {
        title:'Gimnasium 315',
        interval: '2004 - 2015',
        text:'Studied at the gymnasium with in-depth study of foreign languages, a mathematical class. Graduated with honors.'
    },
     {
        title: 'Lublin University of Technology',
        interval: '2015 - 2019',
        text:'I studied at the faculty of Civil Engineering and Architecture, the department of Architecture. I got the degree of engineer architect.' 
    },
     {
        title:'Udemy courses. Web-development',
        interval: '20021 - 2022',
        text:' I completed courses in web-development (HTML, CSS)'
    },
     {
        title:'Udemy courses. Javascript + React',
        interval: '20021 - 2022',
        text:' I completed courses in Javascript + React'
    }]
}

const studiesUA = {
    title: 'Навчання та Курси',
    stud:[ {
        title:'Гімназія 315',
        interval: '2004 - 2015',
        text:'Я навчалася в гімназії з поглибленим вивченням іноземних мов.'
    },
    {
        title: 'Люблінська Політехніка',
        interval: '2015 - 2019',
        text:'Я навчалась на факультеті Будівництва та Архітектури, напрямок Архітектура. Отримала ступінь інженера-архітектора.' 
    },
     {
        title:'Udemy курси. Веб-розробка',
        interval: '20021 - 2022',
        text:' Закінчила курси по веб-розробці (HTML, CSS)'
    },
    {
        title:'Udemy курси. JavaScript + React',
        interval: '20021 - 2022',
        text:'Закінчила курси по JavaScript + React'
    }]
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
            text: 'Expirience in pixel-perfect layouts.'
        },
        {
            title: 'JavaScript',
            text: 'Basic knowledge of vanila JS, OOP principals.'
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
            text: 'Досвід в семантичній та адаптивній верстці.'
        },
        {
            title: 'CSS',
            text: 'Досвід в pixel-perfect верстці.'
        },
        {
            title: 'JavaScript',
            text: 'Базові знання JavaScript та принципів ООП.'
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

const experience = {
    titlle: 'Experience',
    work: [
        {
            title: 'Inventarisation. Practice',
            company: 'Lublin University of Technology',
            interval: '2017 - 2017',
            text: 'Inventarisation of catholic church of st. Ignacy Loyola (main entrance).'
        },
        {
            title: 'Inventarisation. Practice',
            company: 'Archimatika',
            interval: '2018 - 2018',
            text: 'Inventarisation of residential building using CloudPoints.'
        },
        {
            title: 'BIM-assistant',
            company: 'Archimatika',
            interval: '2019 - 2020',
            text: 'Automation of workflows, creation of parametric geometry using Grasshopper.'
        },
        {
            title: 'Developer-assistant',
            company: 'Archimatika',
            interval: '2020 - now',
            text: 'Creation of workers database based on Dataverse and supporting. Working with data, their transformation and presentation.'
        },
    ]
}

const experienceUA = {
    titlle: 'Досвід',
    work: [
        {
            title: 'Інвентаризація. Практика',
            company: 'Люблінська Політехніка',
            interval: '2017 - 2017',
            text: 'Інвентаризація костелу св. Ігнатія Лойолі (головний вхід).'
        },
        {
            title: 'Інвентаризація. Практика',
            company: 'Archimatika',
            interval: '2018 - 2018',
            text: 'Інвентаризація житловоі будівлі з використанням техніки CloudPoints.'
        },
        {
            title: 'BIM-асистент',
            company: 'Archimatika',
            interval: '2019 - 2020',
            text: 'Автоматизація робочих процесів, створення параметричної геометрії з використанням Grasshopper.'
        },
        {
            title: 'Помічник розробника',
            company: 'Archimatika',
            interval: '2020 - зараз',
            text: 'Створення бази данних працівників на базі Dataverse. Робота з данними, їх трансформація та презентація.'
        },
    ]
}



export {experience, experienceUA, main, mainUA, aboutMe, aboutMeUA, studies, studiesUA, skills, skillsUA, footer, footerUA};