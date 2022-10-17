'use strict';

class ChatComponent {
    // Инициализируем все обработчики событий
    constructor(selector) {
        let self = this;

        self.chatWidget = document.querySelector(selector);
        self.chatWidgetSide = document.querySelector(selector + ' .chat-widget__side');
        self.chatWidgetInput = document.querySelector(selector + ' .chat-widget__input');
        self.chatWidgetMessages = document.querySelector(selector + ' .chat-widget__messages');

        self.chatWidgetSide.addEventListener('click', function(event) {
            self.chatWidget.classList.add('chat-widget_active');
        });

        self.chatWidgetInput.addEventListener('keydown', function(event) {
            let clientMessage = self.chatWidgetInput.value;

            if (event.key === 'Enter' && !!clientMessage) {
                self.sendClientMessage();
                self.sendBotMessage(clientMessage);
            }
        });
    }

    sendClientMessage() {
        if (!!this.chatWidgetInput.value) {
            this.chatWidgetMessages.appendChild(this.createMessage(true, this.chatWidgetInput.value));
            this.chatWidgetInput.value = '';
        }
    }

    sendBotMessage(clientMessage) {
        const answers = [
            'К сожалению все операторы сейчас заняты',
            'Добрый день! До свиданья!',
            'Вы не наш клиент',
            'Сейчас нет времени отвечать',
            'Хотел бы помочь, но не могу',
            'У меня совещание',
            'Пойдите покурите!',
            'Фиг вам!'
        ];
        const questions = [
            'Кто тут?',
            'Как я могу к вам обращаться?',
            'Как пройти в библиотеку?',
            'Что мне делать?',
            'Кто вы?',
            'Вы в своем уме?',
            'Вы откуда?'
        ];

        let botMessage = answers[Math.floor(Math.random() * answers.length)];
        if (!clientMessage.includes('?')) {
            botMessage = questions[Math.floor(Math.random() * questions.length)];
        }
        this.chatWidgetMessages.appendChild(this.createMessage(false, botMessage));
    }

    createMessage(isClientMessage, text) {
        const time = this.getTime();
        const messageElement = document.createElement('div');
        const messageTimeElement = document.createElement('div');
        const messageTextElement = document.createElement('div');

        messageElement.classList.add('message');
        if (isClientMessage) {
            messageElement.classList.add('message_client');
        }
        messageTimeElement.classList.add('message__time');
        messageTextElement.classList.add('message__text');

        messageTimeElement.textContent = time;
        messageTextElement.textContent = text;
        messageElement.appendChild(messageTimeElement);
        messageElement.appendChild(messageTextElement);
        return messageElement;
    }

    getTime() {
        const hours = new Date().getHours();
        return `${hours < 10 ? '0' + hours : hours}:${new Date().getMinutes()}`;
    }
}

// только когда вся страница загрузилась добавляем обработчики событий
window.onload = function ready(handler) {
    new ChatComponent('.chat-widget');
};