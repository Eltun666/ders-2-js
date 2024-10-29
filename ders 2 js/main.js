// 1)İstifadəçidən dairənin sahəsini hesablamaq üçün lazım olan dəyərləri alın.
// və bir function içində onun hesablanmasın yazın. (dairənin sahəsi S = πr^2)

// const sahe = (R,p) =>{
//     return p * (R**2)
// }

// let R = prompt("Cevrenin radiusun daxil edin")
// let pi = prompt("Pi ni daxil edin")

// console.log(sahe(R,pi),"m^2");



// 2)İstifadəçi iki ədəd daxil etsin. Həmin ədədlərin toplanmasını 
//   və vurulmasını həyata keçirən bir function yazın.


// const number = () =>{
//     let a = +prompt("Birinci reqemi daxil edin")
//     let b = +prompt("Ikinci reqemi daxil edin")
//     console.log("Cemi",a+b);
//     console.log("Hasili",a*b);
// }

// number()


// 3)Dörd rəqəmnli bir ədəd daxil edin. Həmin ədəddə 1-ci və 4-cü yerdə duran rəqəmlər 
//   və eyni zamanda 2-ci və 3-cü yerdə duran rəqəmlər bir birinə bərabərdirsə bizə console 
//   log da "YES" əks halda "NO" yazdırsın 
//   Məsələn 6776 -- YES
//   8989 -- NO
//   6807 -- NO
//   9009 -- YES

// const number = (usernumber) =>{
//     let a = Math.floor(usernumber / 1000)
//     let b = Math.floor((usernumber - a*1000) / 100)
//     let c = Math.floor((usernumber - a*1000 - b*100) / 10) 
//     let d = Math.floor((usernumber - a*1000 - b*100 -c*10))
    
//     if(a==d && b==c){
//         console.log("yes");
//     }else{
//         console.log("no");  
//     }
// }

// let a = +prompt("4 Reqemli bir eded daxil edin 1/4 ve 2/3 cu ededleri beraber olsun")
// number(a)



// 4)İstifadəçidən bir username alın. username daxil edildikdən sonra həmin istifadəçini 
//   salamlayan bir bildiriş pəncərəsi açılsın. Bunun üçün bir function-dan istifadə edin.



// const username = () =>{
//     let username = prompt("Adinizi daxil edin")
//     alert("Salam "+username+" xos geldiniz")
// }

// username()




// 5)Istifadəçidən bir ədəd daxil edin və həmin ədədin 100-dən böyük və ya kiçik olmasını
//  eyni zamanda müsbət və mənfi olmasını və cüt və tək olmasını 
//  yoxlayan bir funksiya yazın. Sonda bizə bilidiriş şəklində 
//  ədəd haqqında məlumat göstərilisin Məsələn aşağıdakı kimi. (Console log istifadə etməyin)
//  1) 120 100-den boyukdur 2) 120 müsbətdir 3) 120 cütdür
//  Əgər daxil etdiyimiz eded 100 və ya 0 olarsa onda yazdığımız funksiya işə düşmədən 
//  biza bildiriş olaraq "100 və 0 ədələrini daxil edə bilməzsiz" yazısını göstərsin. 
//  Şərtləri daxil edərkən tipə görədə yoxlayın.




// const number = () =>{
//     let number =  +prompt("Reqem daxil edin")
//     if( number===0 || number===100){
//         alert("100 və 0 ədələrini daxil edə bilməzsiz")
//     }else{
//         if(number<100){
//             var a = " 100-den kicikdir"
//         }else{
//             var a = " 100-den boyukdur"
//         }

//         if(number>0){
//             var b = " Musbet"
//         }else{
//             var b = " Menfi"
//         }

//         if(number%2==0){
//             var c = " Cut"
//         }else{
//             var c = " Tek"
//         }
//         alert("1) "+number+a+" 2) "+number+b+" 3) "+number+c)
//     }    
    
// }

// number()


