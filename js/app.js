document.addEventListener("DOMContentLoaded", () => {

    // Team members JSON object
    const team = {
        "teamMembers": [
            {
                "sirName": "Henry",
                "lastName": "Scott",
                "age": 27,
                "hairColor": "blond",
                "shoeSize": "45"
            },

            {
                "sirName": "Audrey",
                "lastName": "Holms",
                "age": 21,
                "hairColor": "black",
                "shoeSize": "39"
            },

            {
                "sirName": "Summer",
                "lastName": "Gilmore",
                "age": 24,
                "hairColor": "brown",
                "shoeSize": "41"
            },

            {
                "sirName": "Finn",
                "lastName": "Kirkland",
                "age": 22,
                "hairColor": "red",
                "shoeSize": "43"
            }
        ]
    };

    // Print team members
    function PrintTeamMembers() {
        for(let i = 0; i < team.teamMembers.length; i++) {

            // Team members data variables
            let sirName = team.teamMembers[i].sirName;
            let lastName = team.teamMembers[i].lastName
            let age = team.teamMembers[i].age
            let hairColor = team.teamMembers[i].hairColor
            let shoeSize = team.teamMembers[i].shoeSize

            // Create & append html elements
            let teamMembers_list = document.querySelector(".Team-members__list");
            let li = document.createElement("li");
            let hr = document.createElement("hr");
            li.classList.add("Team-members__item");
            hr.classList.add("Team-members__line");
            teamMembers_list.appendChild(li);
            teamMembers_list.appendChild(hr);

            // Insert Team members data
            li.innerHTML =
            `Name: ${sirName} ${lastName}
            ${"<br />"}Age: ${age}
            ${"<br />"}Hair color: ${hairColor}
            ${"<br />"}Shoe size: ${shoeSize}`;
        };
    };

    // Initiate function
    PrintTeamMembers();
});