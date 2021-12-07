const app = new Vue({
    el: "#root",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '02/12/2021 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '02/12/2021 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '02/12/2021 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received',
                    menu: false,
                }
                ],
                msgLength: 0,
                muted: false,
                menu: false,
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '03/12/2021 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '03/12/2021 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    menu: false,
                },
                {
                    date: '03/12/2021 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    menu: false,
                }
                ],
                msgLength: 0,
                muted: true,
                menu: false,
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '29/11/2021 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received',
                    menu: false,
                },
                {
                    date: '29/11/2021 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '29/11/2021 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received',
                    menu: false,
                }
                ],
                msgLength: 0,
                muted: false,
                menu: false,
            },
            {
                name: 'Giuseppe',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2021 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2021 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        menu: false,
                    },
                    {
                        date: '23/09/2021 18:26:34',
                        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure unde nisi sequi neque autem eligendi id enim doloribus? Voluptatem repudiandae natus iusto, accusamus ab eum esse nisi amet. Illo nesciunt aperiam exercitationem in provident amet, minima dolorum ducimus saepe?',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '23/09/2021 18:28:08',
                        message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, optio!',
                        status: 'received',
                        menu: false,
                    },
                    {
                        date: '23/09/2021 18:30:55',
                        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus quisquam rerum error id sunt!',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '03/12/2021 10:34:08',
                        message: 'Ciao!',
                        status: 'received',
                        menu: false,
                    },
                    {
                        date: '03/12/2021 10:35:58',
                        message: 'Ciao!',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '03/12/2021 10:36:08',
                        message: 'Come va?',
                        status: 'received',
                        menu: false,
                    },
                    {
                        date: '03/12/2021 11:05:55',
                        message: 'Molto bene, a te?',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '03/12/2021 11:07:00',
                        message: 'Tutto bene, grazie',
                        status: 'received',
                        menu: false,
                    },
                    {
                        date: '04/12/2021 10:26:34',
                        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure unde nisi sequi neque autem eligendi id enim doloribus? Voluptatem repudiandae natus iusto, accusamus ab eum esse nisi amet. Illo nesciunt aperiam exercitationem in provident amet, minima dolorum ducimus saepe?',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '04/12/2021 10:28:08',
                        message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, optio!',
                        status: 'received',
                        menu: false,
                    },
                    {
                        date: '04/12/2021 10:30:55',
                        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus quisquam rerum error id sunt!',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '04/12/2021 10:34:08',
                        message: 'Loremo ipsum',
                        status: 'received',
                        menu: false,
                    },
                    {
                        date: '04/12/2021 10:35:58',
                        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus quisquam rerum error id sunt!',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '04/12/2021 10:36:08',
                        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus quisquam rerum error id sunt!',
                        status: 'received',
                        menu: false,
                    },
                ],
                msgLength: 0,
                muted: false,
                menu: false,
            },
            {
                name: 'Antonio',
                avatar: '_5',
                visible: true,
                messages: [{
                    date: '10/08/2021 14:30:43',
                    message: 'Ciao Antonio, tutto bene?',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '10/08/2021 14:33:00',
                    message: 'Tutto bene, a te?',
                    status: 'received',
                    menu: false,
                },
                {
                    date: '10/08/2021 16:15:22',
                    message: 'Tutto okay, grazie',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '10/08/2021 16:16:10',
                    message: 'Quando sei libero ci vediamo!',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '10/08/2021 16:20:54',
                    message: 'Volentieri!',
                    status: 'received',
                    menu: false,
                },
                ],
                msgLength: 0,
                muted: false,
                menu: false,
            },
            {
                name: 'Laura',
                avatar: '_6',
                visible: true,
                messages: [{
                    date: '08/11/2021 10:30:43',
                    message: 'Lorem ipsum dolor sit amet.',
                    status: 'received',
                    menu: false,
                },
                {
                    date: '10/11/2021 10:43:00',
                    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic?',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '10/11/2021 10:51:22',
                    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
                    status: 'received',
                    menu: false,
                },
                {
                    date: '10/11/2021 11:11:10',
                    message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, voluptatibus. Natus praesentium tempore alias aut quod ducimus blanditiis necessitatibus, deleniti explicabo ex laborum!',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '10/11/2021 12:20:54',
                    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis assumenda ea tempore accusamus deserunt aliquam fuga sapiente vitae excepturi. Nam officiis laborum adipisci earum blanditiis explicabo?',
                    status: 'received',
                    menu: false,
                },
                ],
                msgLength: 0,
                muted: false,
                menu: false,
            },
            {
                name: 'Francesco',
                avatar: '_7',
                visible: true,
                messages: [{
                    date: '23/11/2021 10:30:43',
                    message: 'Lorem ipsum dolor sit amet.',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '23/11/2021 10:43:00',
                    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic?',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '23/11/2021 10:51:22',
                    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
                    status: 'received',
                    menu: false,
                },
                {
                    date: '23/11/2021 11:11:10',
                    message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, voluptatibus. Natus praesentium tempore alias aut quod ducimus blanditiis necessitatibus, deleniti explicabo ex laborum!',
                    status: 'received',
                    menu: false,
                },
                {
                    date: '23/11/2021 12:20:54',
                    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis assumenda ea tempore accusamus deserunt aliquam fuga sapiente vitae excepturi. Nam officiis laborum adipisci earum blanditiis explicabo?',
                    status: 'received',
                    menu: false,
                },
                ],
                msgLength: 0,
                muted: true,
                menu: false,
            },
            {
                name: 'Luca',
                avatar: '_8',
                visible: true,
                messages: [{
                    date: '03/12/2021 10:30:43',
                    message: 'Lorem ipsum dolor sit amet.',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '03/12/2021 10:43:00',
                    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic?',
                    status: 'received',
                    menu: false,
                },
                {
                    date: '03/12/2021 10:51:22',
                    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '03/12/2021 11:11:10',
                    message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, voluptatibus. Natus praesentium tempore alias aut quod ducimus blanditiis necessitatibus, deleniti explicabo ex laborum!',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '03/12/2021 12:20:54',
                    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis assumenda ea tempore accusamus deserunt aliquam fuga sapiente vitae excepturi. Nam officiis laborum adipisci earum blanditiis explicabo?',
                    status: 'received',
                    menu: false,
                },
                ],
                msgLength: 0,
                muted: false,
                menu: false,
            },
            {
                name: 'Sara',
                avatar: '_9',
                visible: true,
                messages: [{
                    date: '27/11/2021 10:30:43',
                    message: 'Lorem ipsum dolor sit amet.',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '27/11/2021 10:43:00',
                    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic?',
                    status: 'received',
                    menu: false,
                },
                {
                    date: '31/11/2021 10:51:22',
                    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
                    status: 'sent',
                    menu: false,
                },
                {
                    date: '31/11/2021 11:11:10',
                    message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, voluptatibus. Natus praesentium tempore alias aut quod ducimus blanditiis necessitatibus, deleniti explicabo ex laborum!',
                    status: 'received',
                    menu: false,
                },
                {
                    date: '31/11/2021 12:20:54',
                    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis assumenda ea tempore accusamus deserunt aliquam fuga sapiente vitae excepturi. Nam officiis laborum adipisci earum blanditiis explicabo?',
                    status: 'sent',
                    menu: false,
                },
                ],
                msgLength: 0,
                muted: true,
                menu: false,
            },
        ],
        viewChat: false,
        selectedChat: null,
        searchInput: "",
        searching: false,
        hideNotifyAlert: false,
        allHidden: false,
        messageInput: "",
        selectedMsg: null,
    },
    methods: {
        getMsgLength: function() {
            this.contacts.forEach(contact => {
                contact.msgLength = contact.messages.length - 1;
            });
        },
        getNewMsgLength: function() {
            this.contacts.forEach(contact => {
                contact.lastDay = contact.newDayChat.length - 1;
                contact.newDayChat.forEach(day => {
                    day.lastMsg = day.messages.length - 1;
                });
            });
        },
        openChat: function(i) {
            this.viewChat = true;
            this.selectedChat = i;
            setTimeout(function() {
                document.getElementById("message-input").focus();
            }, 10);
            this.scrollLastMsg();
        },
        getSearchedContacts: function() {
            this.contacts.forEach(contact => {
                const name = contact.name.toLowerCase();
                const search = this.searchInput.toLowerCase();
                if (name.includes(search)) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
            const array = this.contacts.filter(contact => {
                if (contact.visible == false) {
                    return contact;
                }
            });
            if (array.length == this.contacts.length) {
                this.allHidden = true;
            } else this.allHidden = false;
            if (this.searchInput == "") {
                this.searching = false;
            } else this.searching = true;
        },
        sendMessage: function() {
            const fullDate = dayjs().format("DD/MM/YYYY HH:mm:ss");
            const newMessage = 
            {
                date: fullDate,
                message: this.messageInput,
                status: 'sent',
                newDate: this.getDate(fullDate),
                menu: false,
            }
            if (this.messageInput != "") {
                this.contacts[this.selectedChat].messages.push(newMessage);
                const inputForBot = this.messageInput;
                this.messageInput = "";
                this.getMsgLength();
                this.lastMsgReorder();
                this.selectedChat = 0;
                this.botMsg(inputForBot);
                this.getDayChat();
                this.getNewMsgLength();
                this.scrollLastMsg();
            }
        },
        getDate: function(fullDate) {
            let date = dayjs(fullDate, "DD/MM/YYYY HH:mm:ss").format("M/D/YYYY");
            const time = dayjs(fullDate, "DD/MM/YYYY HH:mm:ss").format("h:mm A");
            const today = dayjs();
            if ((today.diff(date, "day") > 1) && (today.diff(date, "day") < 7)) {
                date = dayjs(fullDate, "DD/MM/YYYY HH:mm:ss").format("dddd");
            } else if (today.diff(date, "day") == 0) {
                date = "today";
            } else if (today.diff(date, "day") == 1) {
                date = "yesterday";
            }
            const newDate = [date, time];
            return newDate;
        },
        changeDates: function() {
            this.contacts.forEach(contact => {
                contact.messages.forEach(message => {
                    message.newDate = this.getDate(message.date);
                });
            });
        },
        addLastSeen: function() {
            this.contacts.forEach(contact => {
                const h = Math.floor(Math.random() * dayjs().format("H"));
                const m = Math.floor(Math.random() * 60);
                const time = dayjs(h + ":" + m, "H:m").format("h:mm A");
                contact.lastSeen = "last seen today at " + time;
            });
        },
        lastMsgReorder: function() {
            function reorder(a, b) {
                const date = dayjs(a.messages[a.msgLength].date, "DD/MM/YYYY HH:mm:ss");
                const date1 = dayjs(b.messages[b.msgLength].date, "DD/MM/YYYY HH:mm:ss");
                return date > date1 ? -1 : 1;
            }
            this.contacts.sort(reorder);
        },
        botMsg: function(msg) {
            const msgInput = msg.toLowerCase();
            const ref = this;
            const thisChat = ref.selectedChat;
            this.contacts[this.selectedChat].lastSeen = "typing...";
            setTimeout(function(){
                const fullDate = dayjs().format("DD/MM/YYYY HH:mm:ss");
                const newMessage = 
                {
                    date: fullDate,
                    message: iaAnswer(),
                    status: 'received',
                    newDate: ref.getDate(fullDate),
                    menu: false,
                };
                ref.contacts[thisChat].messages.push(newMessage);
                ref.getMsgLength();
                ref.lastMsgReorder();
                ref.contacts[thisChat].lastSeen = "Online";
                ref.getDayChat();
                ref.getNewMsgLength();
                ref.scrollLastMsg();
                // function randomAnswer() {
                //     const answers = ["Okay", "A presto!", "Ciao", "Tutto bene", "No", "Sì"];
                //     const choose = Math.floor(Math.random() * answers.length);
                //     return answers[choose];
                // };
                function iaAnswer() {
                    let botOutput, choose;
                    let answers = [];
                    let emoji = [":)", ":D", "(:"];
                    switch(msgInput) {
                        case "ciao": case "salve": case "buona sera": case "buonasera": case "buongiorno": case "ehi": case `ciao ${ref.contacts[thisChat].name.toLowerCase()}`: case `buona sera ${ref.contacts[thisChat].name.toLowerCase()}`: case `buongiorno ${ref.contacts[thisChat].name.toLowerCase()}`: case `ehi ${ref.contacts[thisChat].name.toLowerCase()}`: case `buonasera ${ref.contacts[thisChat].name.toLowerCase()}`:
                            answers = ["Ciao", "Ciao!", "Ehi", "Ehi!", "Ehilà", "Ehilà!", timeAnswer()];
                            choose = randomChoose(answers);
                            botOutput = answers[choose] + " " + randomEmoji();
                            break;
                        case "come stai?": case "come stai": case "come va?": case "come va": case "tutto bene?": case "come te la passi?": case "come te la passi": case "come vanno le cose?": case "come vanno le cose":
                            answers = ["Tutto bene, tu?", "Tutto bene, grazie", "Tutto apposto, tu?", "Tutto apposto, grazie", "Tutto bene", "Tutto apposto", "Molto bene, grazie", "Molto bene, tu?", "Molto bene"];
                            choose = randomChoose(answers);
                            botOutput = answers[choose];
                            break;
                        case "va bene": case "ok": case "okay": case "bene": case "d'accordo": case "si": case "sì":
                            answers = ["Perfetto!", "Perfetto", "Okay", "Bene", "Ok", "Ottimo", "Fantastico", "Ottimo!", "Fantastico!"];
                            choose = randomChoose(answers);
                            botOutput = answers[choose];
                            break;
                        case "tutto bene, grazie": case "tutto bene": case "bene, grazie": case "molto bene": case "tutto apposto": case "tutto apposto, grazie":
                            answers = ["Perfetto!", "Perfetto", "Okay", "Bene", "Ok", "Ottimo", "Fantastico", "Ottimo!", "Fantastico!"];
                            choose = randomChoose(answers);
                            botOutput = answers[choose] + " " + randomEmoji();
                            break;
                        case "usciamo?": case "usciamo": case "andiamo al cinema?": case "andiamo al cinema": case "andiamo in pizzeria?": case "andiamo in pizzeria": case "vuoi fare qualcosa?": case "facciamo qualcosa?": case "andiamo da qualche parte?": case "facciamo qualcosa": case "vuoi uscire?": case "vuoi uscire":
                            answers = ["Sì, ci sono!", "Non posso, ho già un impegno", "Facciamo un'altra volta", "Va bene", "Ok", "Okay", "Volentieri", "Sono impegnato", "Ho da fare"];
                            choose = randomChoose(answers);
                            botOutput = answers[choose];
                            break;
                        case "lol":
                            answers = ["Lol", "Yolo", "Trololol", "Lmao"];
                            choose = randomChoose(answers);
                            botOutput = answers[choose];
                            break;
                        default:
                            answers = ["Lol", "Scusa ma devo andare!", "Ora non posso parlare, ci sentiamo più tardi", "Ora non posso parlare", "Sono al telefono, ci sentiamo dopo"];
                            choose = randomChoose(answers);
                            botOutput = answers[choose];
                    }
                    return botOutput;
                    function timeAnswer() {
                        const time = dayjs().format("H");
                        if (time < 13) {
                            return "Buongiorno"
                        } else return "Buonasera"
                    }
                    function randomEmoji() {
                        const bool = Math.floor(Math.random() * 1);
                        if (bool == 0) {
                            choose = randomChoose(emoji);
                            return emoji[choose];
                        } else return "";
                    }
                    function randomChoose(array) {
                        return Math.floor(Math.random() * array.length);
                    }
                }
            },3000);
            setTimeout(function(){
                const time = dayjs().format("h:mm A");
                ref.contacts[thisChat].lastSeen = "last seen today at " + time;
            }, 4000);
        },
        getDayChat: function() {
            this.contacts.forEach(contact => {
                const datesArray = [];
                contact.messages.forEach(message => {
                    if (!(datesArray.includes(message.newDate[0]))) {
                        datesArray.push(message.newDate[0]);
                    }
                });
                contact.datesArray = datesArray;
                contact.newDayChat = [];
                contact.datesArray.forEach(data => {
                    const dayChat = [];
                    contact.messages.forEach(message => {
                        if (message.newDate[0] == data) {
                            dayChat.push(message);
                        }
                    });
                    contact.newDayChat.push({
                        date: data,
                        messages: dayChat}
                        );
                });
            });
        },
        showMenu: function(message) {
            message.menu = !message.menu;
            this.closeMenu(message);
            this.selectedMsg = message;
        },
        closeMenu: function(message) {
            if (this.selectedMsg != null && this.selectedMsg != message) {
                this.selectedMsg.menu = false;
                this.selectedMsg = null;
            }
        },
        deleteMsg: function(i, j) {
            this.contacts[this.selectedChat].newDayChat[i].messages[j].message = "This message was deleted";
            this.contacts[this.selectedChat].newDayChat[i].messages[j].deleted = true;
        },
        deleteChat: function(i) {
            this.contacts.splice(i, 1);
        },
        focusSearch: function() {
            document.getElementById("search-input").focus();
        },
        scrollLastMsg: function() {
            setTimeout(function() {
                const lastMsg = document.getElementsByClassName("message-row");
                const index = lastMsg.length - 1;
                lastMsg[index].scrollIntoView({block: "start"});
            }, 10);
        },
    },
    created() {
        this.getMsgLength();
        this.changeDates();
        this.lastMsgReorder();
        this.addLastSeen();
        this.getDayChat();
        this.getNewMsgLength();
    }
});