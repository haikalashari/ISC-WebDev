/* var person = {
    nama : "haikal",
    umur : 20,
    prosefi : "Mahasiswa",
    speak : function(){
        console.log("hai")
    },
    tidur : function(){
        console.log("tidur")
    }
} */

//console.log(person.speak())

function human(nama, umur, profesi){
    this.nama = nama,
    this.umur = umur,
    this.profesi = profesi

    this.getNama = function(){
        return this.nama;
    }

    this.getUmur = function(){
        return this.umur;
    }
}

let orang = new human("Haikal", 20, "Mahasiswa")
console.log(orang.getUmur())