const activity = document.getElementById("activity");
const type = document.getElementById("type");
const participants = document.getElementById("participants");




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
        console.log(error);
    };
    
};


getActivities();