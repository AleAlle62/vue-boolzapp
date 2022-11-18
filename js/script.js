new Vue ({
    el: '#app',
    data:{
		contacts: [ 
			{
				name: 'Michele',
				avatar: '//i.pinimg.com/originals/01/86/95/018695b9a644e444531423c2f2899d0c.jpg',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						message: 'Hai portato a spasso il cane?',
						status: 'sent'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'Ricordati di stendere i panni',
						status: 'sent'
					},
					{
						date: '10/01/2020 16:15:22',
						message: 'Tutto fatto!',
						status: 'received'
					} 
				],
			},
			{
				name: 'Samuele',
				avatar: 'https://i.pinimg.com/originals/22/b7/3d/22b73ddfc4cbe22a4a6a4799bb37488b.jpg',
				visible: true,
				messages: 
				[
					{
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
			}, 
			{
				name: 'Alessandro B',
				avatar: 'https://i1.sndcdn.com/artworks-JeZQh6Hbil2Er51B-U9rx3A-t500x500.jpg',
				visible: true,
				messages: 
				[
					{
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
			}, 
			{
				name: 'Alessandro L',
				avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWYNKiidpbCBoI6ixj20DUOGeE0dVaMtHvBKhHMej8gHYkArOVu5tAy9_cYk2cTl2pek&usqp=CAU',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ricordati di chiamare la nonna',
						status: 'sent'		
					},
					{
						date: '10/01/2020 15:50:00',
						message: 'Va bene, stasera la sento',
						status: 'received'
			
					}
				],
			}, 
			{
				name: 'Claudia',
				avatar: 'https://i.pinimg.com/736x/93/45/89/934589f3aa2f266b260de8bfeb3ae1ab.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao Claudia, hai novità?',
						status: 'sent'		
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'Non ancora',
						status: 'received'			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'Nessuna nuova, buona nuova',
						status: 'sent'			
					}, 
				],
			}, 
			{
				name: 'Federica',
				avatar: 'https://theawesomedaily.com/wp-content/uploads/2022/07/pfp15.png',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Fai gli auguri a Martina che è il suo compleanno!',
						status: 'sent'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'Grazie per avermelo ricordato, le scrivo subito!',
						status: 'received'			
					}
				],
			}, 
			{
				name: 'Davide',
				avatar: 'https://i.pinimg.com/236x/87/63/1c/87631c856eecc16568b7903810312fba.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent'
			
					}, 
					{
						date: '10/01/2020 15:51:00',
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
				if (this.nomeCercato !== this.contacts[i].name.toLowerCase().slice(0, this.nomeCercato.length )){
					// console.log(this.ricercaChat)
					this.contacts[i].visible = false
				} else {
					// console.log(this.ricercaChat)
					this.contacts[i].visible = true
				}
			})
		}
		// finiti i metodi 



	}
})




