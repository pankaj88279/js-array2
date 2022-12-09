let indianews=[
                // p:v
            {
                //1. P:V  
                heading:"How Patidars drove BJP TsuNaMo in Gujarat",
                publised:"The Patidar agitation was long forgotten. They left the Congress and joined hands to give the BJP a record-breaking victory in the Gujarat Assembly elections",
                update:"Ahmedabad,UPDATED: Dec 9, 2022 09:07 IST",


                //2. methods
            },
            {
                heading2:"Iranian women shot in eyes, breasts and thighs during anti-hijab protests: Report",
                publised2:"Iranian women part of protests against the regime over the hijab law are being shot in their faces, breasts and genitals, a report said",
                update2:"New Delhi,UPDATED: Dec 9, 2022 08:57 IST",

            },
            { 
                heading:`FIFA World Cup 2022: Luis Enrique posts emotional farewell letter to players and fans after Spain exit`,
                publised:`Luis Enrique penned a heartfelt and emotional farewell letter after parting ways with Spain on Thursday after the former World Champions were eliminated in the Round Of 16 by Morocco. Enrique thanked the players and fans in his message on Twitter`,
                update:'New Delhi,UPDATED: Dec 9, 2022 09:29 IST',



            }
            ]
     let x= document.getElementById('indianews1')
     console.log(indianews[0].heading)
     x.innerHTML=indianews[0].heading;
     

     let y= document.getElementById('indianews2')
     console.log(indianews[0].publised)
     y.innerHTML=indianews[0].publised;
      
    

     let z=document.getElementById('indianews3')
     z.innerHTML=indianews[0].update;


     let a=document.querySelector('.a1')
     console.log(indianews[1].heading2)
     a.innerHTML=indianews[1].heading2;
     

     let b=document.querySelector('.b1')
     b.innerHTML=indianews[1].publised2;
    

     let c=document.querySelector('p.c1');
     console.log(indianews[1].update2)
     c.innerHTML=indianews[1].update2;


    let e= document.querySelector('[data-e]')
    e.innerHTML=indianews[2].heading;
    e.style.color="red"

    let f= document.querySelector('[data-f]')
    f.innerHTML=indianews[2].publised;
    f.style.color="blue"

    let g= document.querySelector('[data-g]')
    g.innerHTML=indianews[2].update;
    g.style.color="black"
     
     



     

     