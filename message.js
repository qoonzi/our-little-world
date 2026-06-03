const text = `

Hai Uta ❤️

makasih ya, buat semua hal kecil yang mungkin ga selalu keliatan tapi selalu aku rasain. 🥹🫂 makasih udah sabar ngadepin aku, makasih udah bertahan, makasih udah tetep ada walaupun kadang sikap aku bikin kamu cape. 
aku tau, ga jarang aku bikin kamu kecewa, entah lewat kata-kata, sikap, atau cara aku bereaksi. and i’m really sorry for that. 
maaf kalau aku belum selalu jadi versi yang kamu harapin, maaf kalau aku sering kebawa ego dan lupa ngeliat dari sudut pandang kamu. 
please know this, none of it ever came from a place of not caring. justru karena aku peduli, kadang aku jadi berantakan sendiri. 
thank you for not giving up easily, for choosing to stay, and for trying to understand me even when i’m hard to deal with. i’m learning, slowly, to be better not perfect, but better for you. 
dan kalau kamu masih mau jalan bareng aku, i’ll keep trying to make you feel appreciated, heard, and loved the way you deserve. i don’t expect you to forget the times i messed up, and i’m not asking you to be okay instantly. 
i just want you to know that every pelajaran yang datang dari rasa bersalah itu aku simpan baik-baik. aku lagi belajar buat lebih peka, lebih dengerin, dan ga langsung defensif waktu kamu kecewa. 
aku sadar, rasa kecewa itu ga muncul tiba-tiba, pasti ada proses panjang yang aku kadang terlalu santai ngejalaninnya. makasih karena kamu masih mau jujur sama aku, masih mau ngomong walaupun mungkin capek. itu berarti banget buat aku. 
dan kalau suatu hari nanti aku masih kepleset lagi, aku harap kamu tau aku ga pernah niat nyakitin kamu. aku cuma manusia yang masih belajar cara mencintai. untuk apapun itu, terima kasih sudah sabar sayang. ♥️

❤️ Nana

`;

let index = 0;

function typeWriter(){

    if(index < text.length){

        document.getElementById("typed-text").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

function openLetter(){

    document.querySelector(".envelope-flap").style.display="none";

    document.querySelector(".letter-content").style.display="block";

    typeWriter();

}