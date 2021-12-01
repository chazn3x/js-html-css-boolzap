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
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
                msgLength: 0,
                muted: true
            },
        ],
        viewChat: false,
        selectedChat: 0,
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
        newDates: function() {
            this.contacts.forEach(contact => {
                contact.messages.forEach(message => {
                    for (let i = 0; i < message.date.length; i++) {
                        message.newData = message.date.split(" ");
                    }
                });
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
            const data = new Date();
            let newData = '', newTime = '';
            const day = data.getDate();
            let month = (data.getMonth() + 1).toString();
            const year = data.getFullYear();
            let hour = data.getHours();
            let minutes = data.getMinutes();
            switch (hour) {
                case 0: hour = 12; break;
                case 13: hour = 1; break;
                case 14: hour = 2; break;
                case 15: hour = 3; break;
                case 16: hour = 4; break;
                case 17: hour = 5; break;
                case 18: hour = 6; break;
                case 19: hour = 7; break;
                case 20: hour = 8; break;
                case 21: hour = 9; break;
                case 22: hour = 10; break;
                case 23: hour = 11; break;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            newData = day + "/" + month + "/" + year;
            newTime = hour + ":" + minutes;
            if (data.getHours() < 12) {
                newTime += " AM";
            } else newTime += " PM";
            const newMessage = 
            {
                date: newData + " " + newTime,
                message: this.messageInput,
                status: 'sent',
                newData: [newData, newTime]
            }
            if (this.messageInput != "") {
                this.contacts[this.selectedChat].messages.push(newMessage);
                this.messageInput = "";
            }
        }
    },
    created() {
        this.getMsgLength();
        this.newDates();
    },
    updated() {
        this.getSearchedContacts();
        this.getMsgLength();
    }
});