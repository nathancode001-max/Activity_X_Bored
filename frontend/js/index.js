const activity = document.getElementById("activity");
const type = document.getElementById("type");
const participants = document.getElementById("participants");

const submit_btn = document.getElementById("submit_btn");
const option_type = document.getElementById("option_type");
const option_participants = document.getElementById("option_participants");



const url = 'http://localhost:3000/'


async function getActivities() {

    const typeEmojis = {
    education: "📚",
    recreational: "🎮",
    social: "👥",
    diy: "🛠️",
    charity: "❤️",
    cooking: "🍳",
    relaxation: "🛌",
    music: "🎵",
    busywork: "💼"
    };

    try {
        const res = await fetch(url);

        const data = await res.json();

        if(res.ok){
            activity.textContent = `${data.activity}`;
            type.textContent = `${typeEmojis[data.type] || "❓"} ${data.type}`;
            participants.textContent = `👥 Participants: ${data.participants}`;
        }
    } catch (error) {
        console.error(error);
    };
    
};


getActivities();

submit_btn.addEventListener("click", async () => {


   const userInput =  {type: option_type.value, participants: option_participants.value};

    try {

        const res = await fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInput)
    });

    if(!res.ok){
        console.log("okay")
    }
        
    } catch (error) {
        console.error(error);
    }

});