const app = new Vue({
    el: "#root",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
                msgLength: 0,
                muted: false
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
                msgLength: 0,
                muted: false
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
                msgLength: 0,
                muted: false
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '20/11/2021 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
                msgLength: 0,
                muted: true
            },
        ],
        viewChat: false,
        selectedChat: null,
        searchInput: "",
        searching: false,
        hideNotifyAlert: false,
        allHidden: false,
        messageInput: "",
    },
    methods: {
        getMsgLength: function() {
            this.contacts.forEach(contact => {
                contact.msgLength = contact.messages.length - 1;
            });
        },
        openChat: function(i) {
            this.viewChat = true;
            this.selectedChat = i;
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
                newDate: this.getDate(fullDate)
            }
            if (this.messageInput != "") {
                this.contacts[this.selectedChat].messages.push(newMessage);
                this.messageInput = "";
                this.getMsgLength();
                this.lastMsgReorder();
                this.selectedChat = 0;
                this.botMsg();
            }
        },
        getDate: function(fullDate) {
            const date = dayjs(fullDate, "DD/MM/YYYY HH:mm:ss").format("M/D/YYYY");
            const time = dayjs(fullDate, "DD/MM/YYYY HH:mm:ss").format("h:mm A");
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
                contact.lastSeen = "last seen at " + time;
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
        botMsg: function() {
            const ref = this;
            const thisChat = ref.selectedChat;
            this.contacts[this.selectedChat].lastSeen = "typing...";
            setTimeout(function(){
                const fullDate = dayjs().format("DD/MM/YYYY HH:mm:ss");
                const newMessage = 
                {
                    date: fullDate,
                    message: randomAnswer(),
                    status: 'received',
                    newDate: ref.getDate(fullDate),
                };
                ref.contacts[thisChat].messages.push(newMessage);
                ref.getMsgLength();
                ref.lastMsgReorder();
                ref.contacts[thisChat].lastSeen = "Online";
                function randomAnswer() {
                    const answers = ["Okay", "A presto!", "Ciao", "Tutto bene", "No", "Sì"];
                    const choose = Math.floor(Math.random() * answers.length);
                    return answers[choose];
                };
            },3000);
            setTimeout(function(){
                const time = dayjs().format("h:mm A");
                ref.contacts[thisChat].lastSeen = "last seen at " + time;
            }, 4000);
        },
    },
    created() {
        this.getMsgLength();
        this.changeDates();
        this.lastMsgReorder();
        this.addLastSeen();
    }
});