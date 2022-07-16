let info_data = [
    {
        icon:"fa-solid fa-user",
        header:"Name",
        info:"Peter M Lee",
        parent:"info_ul",

    },

    {
        icon:"fa-solid fa-location-dot",
        header:"Address",
        info:"2524 N 27th St Sheboygan, WI 53083",
        parent:"info_ul",
    },

    {
        icon:"fa-solid fa-phone",
        header:"Phone",
        info:"(920) - 287 - 5743",
        parent:"info_ul",
    },

    {
        icon:"fa-solid fa-envelope",
        header:"Email",
        info:"leepeter2119 @gmail.com",
        parent:"info_ul",
    }
];

let socials_data = [
    {
        icon: "fa-brands fa-twitter", 
        header: "Twitter", 
        info: "www.twitter .com/leepe", 
        parent:"social_ul",
        link:"https://twitter.com/Peterle52339923",
    },
    {
        icon: "fa-brands fa-facebook",
        header: "facebook",
        info: "www.facebook .com/leepe",
        parent:"social_ul",
        link:"https://www.facebook.com/profile.php?id=100002876891812",

    },

    {
        icon:"fa-brands fa-linkedin",
        header: "LinkedIn",
        info: "www.linkedin .com/leepe",
        parent:"social_ul",
        link:"https://www.linkedin.com/in/peter-lee-7a97b6241/",
    }
];

let award_data = [
    {
        icon: "fa-solid fa-award",
        header: "National ",
        info:"Qualified for nationals for competing in Cyber Security.",
        parent:"award_ul",

    },

    {
        icon: "fa-solid fa-award",
        header:"High Honoral",
        info: "Showing high excently within there school work.",
        parent: "award_ul",

    }


];





let work_data = [
    {
        date: "2019 - 2020",
        company: "Sheboygan Senior Community",
        position: "Dietary Aide",
        description: "Assists with meal preparation, dining room assistance, dishwashing and cleaning of kitchen.",
        parent:"work_ul",
    },
    {
        date:"2020 - 2021",
        company: "Walmart",
        position: "Cashier",
        description: "Receiving payments and issuing receipts, gift-wrapping packages and keeping track of all cash and credit transactions.",
        parent:"work_ul",
    },
    {
        date: "2021 - 2022",
        company: "Bemis Manufactoring Company",
        position: "Machine Operator",
        description: "Take care of all machine-specific functions such as configuring the equipment, loading and operating the machines, and optimizing the machine capability.",
        parent:"work_ul",
    },
]

let education_data = [
    {
        date:"2017 - 2021",
        school: "North High School",
        degree: "High School Diploma",
        description: "graduated with the class of 2021, considered a well rounded student and consistantly maintaned a GPA over 3.5", 
        parent: "edu_ul",
    },

    {
        date:"2019 - 2022",
        school: "Revalant Courses",
        degree: "Certification", 
        description: "-  Udemy -  Codecademy -  AP Computer Science -  Web development",
        parent: "edu_ul",
    }
]



let skill_data = [

    {   name: "PYTHON",
        value: "85%",
    },
    {   name: "JavaScript",
        value: "80%",
    },
    {   name: "HTML & CSS",
        value: "75%",
    },

    {   name: "Web-Dev",
        value: "80%",
    },
    {
        name:"Creativity",
        value: "90%",
    },
    {
        name:"Flexiblity",
        value: "80%",
    },
    {
        name:"Work in Groups",
        value: "85%",
    },
    {
        name:"Personality",
        value: "95%",
    }

]

function contact_slider(icon, header, info, parent, link = null){
    // create the new list element
    const newList = document.createElement("li");
    newList.className = "li";
    document.getElementsByClassName(parent)[0].appendChild(newList);


    const newOuterDiv = document.createElement('div');
    newOuterDiv.className = "contact_icon";
    newList.appendChild(newOuterDiv);

    //create icon
    const newIDiv = document.createElement("i");
    newIDiv.className = icon;
    newIDiv.style.color = "white";
    newIDiv.style.fontSize = "20px";
    newOuterDiv.appendChild(newIDiv);

    //create lower div
    const newLowerDiv = document.createElement("div");
    newLowerDiv.className = "contact_list_info";
    newList.appendChild(newLowerDiv);

    //create header
    const newHeader = document.createElement("h5");
    newLowerDiv.appendChild(newHeader);
    newHeader.innerHTML = header;

    //create info
    if(parent === "social_ul"){
        const newInfo = document.createElement("a");
        newInfo.innerHTML = info;
        newInfo.href = link;
        newInfo.target = "_blanck"
        newInfo.style.textDecoration = 'none' ;
        newLowerDiv.appendChild(newInfo);
    }
    else{
        const newInfo = document.createElement("p");
        newInfo.innerHTML = info;
        newLowerDiv.appendChild(newInfo);
    }
    
   
}


function general_slider(date, header, subheader, description, parent){

    const newList = document.createElement("li");
    newList.className = "general_list";
    document.getElementsByClassName(parent)[0].appendChild(newList);

    const newDot = document.createElement("div");
    newDot.className = "dot";
    newList.appendChild(newDot);

    const newMain = document.createElement('div');
    newMain.className = "general_list_main";
    newList.appendChild(newMain)

    const newDate = document.createElement('div');
    newDate.className = "general_date";
    newMain.appendChild(newDate);

    const date_ = document.createElement("h5");
    date_.innerHTML = date;
    newDate.appendChild(date_);

    const newInfo = document.createElement('div');
    newInfo.className = "general_list_info";
    newMain.appendChild(newInfo);

    const newHeader = document.createElement('h5');
    newHeader.innerHTML = header;
    newInfo.appendChild(newHeader);

    const newSubHeader = document.createElement('h6');
    newSubHeader.innerHTML = subheader;
    newInfo.appendChild(newSubHeader);

    const newP = document.createElement('p');
    newP.innerHTML = description;
    newInfo.appendChild(newP);

    
}

function skill_section(name, value, list){

    if(list < 4){
        const newList = document.createElement("li");
        document.getElementsByClassName("skill_ul_1")[0].appendChild(newList);

        const newMainDiv = document.createElement('div');
        newMainDiv.className = "Skill_li_div";
        newList.appendChild(newMainDiv);

        const newSkill = document.createElement("h6");
        newSkill.innerHTML = name;
        newMainDiv.appendChild(newSkill);

        const outterSkillBar = document.createElement('div');
        outterSkillBar.className = "Skill_Bar";
        newMainDiv.appendChild(outterSkillBar);

        const innerSkillBar = document.createElement('div');
        innerSkillBar.style.height= "100%";
        innerSkillBar.style.width= value;
        innerSkillBar.style.borderRadius = "5px";
        innerSkillBar.style.backgroundColor = "#696969"
        outterSkillBar.appendChild(innerSkillBar);
    }

    else{

    
    const newList = document.createElement("li");
    document.getElementsByClassName("skill_ul")[0].appendChild(newList);

    const newMainDiv = document.createElement('div');
    newMainDiv.className = "Skill_li_div";
    newList.appendChild(newMainDiv);

    const newSkill = document.createElement("h6");
    newSkill.innerHTML = name;
    newMainDiv.appendChild(newSkill);

    const outterSkillBar = document.createElement('div');
    outterSkillBar.className = "Skill_Bar";
    newMainDiv.appendChild(outterSkillBar);

    const innerSkillBar = document.createElement('div');
    innerSkillBar.style.height= "100%";
    innerSkillBar.style.width= value;
    innerSkillBar.style.borderRadius = "5px";
    innerSkillBar.style.backgroundColor = "#696969"
    outterSkillBar.appendChild(innerSkillBar);
    }



}

let i = 0;
info_data.map((data) => {
    contact_slider(data.icon, data.header, data.info, data.parent)
});
socials_data.map((data) => {
    contact_slider(data.icon, data.header, data.info, data.parent, data.link)
});
award_data.map((data) => {
    contact_slider(data.icon, data.header, data.info, data.parent)
});
work_data.map((data) => {
    general_slider(data.date, data.company, data.position, data.description, data.parent)
});
education_data.map((data) => {
    general_slider(data.date, data.school, data.degree, data.description, data.parent)
})
skill_data.map((data) => {
    skill_section(data.name, data.value, i)
    i++;
})
