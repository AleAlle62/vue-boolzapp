new Vue ({
    el: '#app',
    data:{
		contacts: [ 
			{
				name: 'Michele',
				avatar: 'img/avatar_1.jpg',
				visible: true,
				messages: [
					{
						date: '15:30',
						message: 'Hai portato a spasso il cane?',
						status: 'sent'
					}, 
					{
						date: '15:50',
						message: 'Ricordati di stendere i panni',
						status: 'sent'
					},
					{
						date: '16:15',
						message: 'Tutto fatto!',
						status: 'received'
					} 
				],
			},
			{
				name: 'Samuele',
				avatar: 'img/avatar_2.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10:10',
						message: 'La Marianna va in campagna',
						status: 'received'
					}, 
					{
						date: '10:20',
						message: 'Sicuro di non aver sbagliato chat?',
						status: 'sent'
			
					}, 
					{
						date: '16:15',
						message: 'Ah scusa!',
						status: 'received'
			
					} 
				],
			}, 
			{
				name: 'Alessandro B',
				avatar: 'img/avatar_3.jpg',
				visible: true,
				messages: 
				[
					{
						date: ' 15:30',
						message: 'Lo sai che ha aperto una nuova pizzeria?',
						status: 'sent'
					}, 
					{
						date: '15:50',
						message: 'Si, ma preferirei andare al cinema',
						status: 'received'			
					} 
				],
			}, 
			{
				name: 'Alessandro L',
				avatar: 'img/avatar_4.jpg',
				visible: true,
				messages: 
				[
					{
						date: '15:30',
						message: 'Ricordati di chiamare la nonna',
						status: 'sent'		
					},
					{
						date: '15:50',
						message: 'Va bene, stasera la sento',
						status: 'received'
			
					}
				],
			}, 
			{
				name: 'Claudia',
				avatar: 'img/avatar_5.jpg',
				visible: true,
				messages: 
				[
					{
						date: '15:30',
						message: 'Ciao Claudia, hai novità?',
						status: 'sent'		
					}, 
					{
						date: '15:50',
						message: 'Non ancora',
						status: 'received'			
					}, 
					{
						date: '15:51',
						message: 'Nessuna nuova, buona nuova',
						status: 'sent'			
					}, 
				],
			}, 
			{
				name: 'Federica',
				avatar: 'img/avatar_6.jpg',
				visible: true,
				messages: 
				[
					{
						date: '15:30',
						message: 'Fai gli auguri a Martina che è il suo compleanno!',
						status: 'sent'
					}, 
					{
						date: '15:50',
						message: 'Grazie per avermelo ricordato, le scrivo subito!',
						status: 'received'			
					}
				],
			}, 
			{
				name: 'Davide',
				avatar: 'img/avatar_7.jpg',
				visible: true,
				messages: 
				[
					{
						date: '15:30',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received'
					}, 
					{
						date: '15:50',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent'
			
					}, 
					{
						date: '15:51',
						message: 'OK!!',
						status: 'received'
					}
				],
			}, 
		],
		currentIndex : 0,
		newText : '',
		nomeCercato : '',
	},
	//funzioni di metodi
	methods : {
		chatSelezionata (index){
			this.currentIndex = index
		},
		//agggiungi messaggio invio 
		aggiungiMessaggioInvio(){

			if (this.newText){
				this.contacts[this.currentIndex].messages.push ({
					message : this.newText,
					date : '',
					status : 'sent'
				})
				this.newText = '';
				// risposta automatica da parte del bot 
				answerBot = {
					date : '',
					message : 'okay',
					status : 'received',
				}
				// secondi di risposta 
				setTimeout(() => this.contacts[this.currentIndex].messages.push(answerBot), 1000);
			}
		},
		//funzione per cercare i nomi nella barra
		ricercaChat(){
			this.contacts.forEach(( a, i) => {
				// condizione per il quale deve uscire se e' incluso o no 
				if (this.nomeCercato !== this.contacts[i].name.toLowerCase().slice(0, this.nomeCercato.length)){
					// console.log(this.ricercaChat)
					this.contacts[i].visible = false
				} else {
					// console.log(this.ricercaChat)
					this.contacts[i].visible = true
				}
			})
		},

		//chiudere tutto 
		fine(){
			return 0
		},
		// finiti i metodi 



	}
})




