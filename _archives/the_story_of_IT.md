---
title: "The story of compression"
date: 2025-12-17
layout: post
---

Let's start with what I want to cover in this blog not in order

- Life of Claude Shannon, Hamming
- Maths behind how beautiful the theory that established IT is
- This is to be prolonged onto the compression algorithm and their beauty
- How compression algorithm is so wildly used
- Use cases or prediction of how the world would be without any of those compression algorithm
- how this theory developed CD, development of Internet, commercialization of telephony, understanding of black hole
- Would space research be possible, the various newer studies that ultimately has becomes so useful
- talk about how analog was natural and was the mode of communication
- how was the mode of communication worked before digital age
- relation between cyphers and IT

Resources : 

### Life of Claude Shannon : 

As an example related to the “luck” aspect, when I first came to Bell Telephone Laboratories I shared an office with Claude Shannon. At about the same time, he created information theory and I created coding theory. They were “in the air,” you can say, and you are right. Yet why did we do it and the others who were also there not do it? Luck? Some, perhaps, but also because we were what we were and the others were what they were. The differences were we were more prepared to find, work on, and create the corresponding theories.

If it were mainly luck, then great things should not tend to be done repeatedly by the same people. Shannon did a lot of important things besides information theory—his master’s thesis was applying Boolean algebra to switching circuits! 

Confidence in yourself, then, is an essential property. Or, if you want to, you can call it “courage.” Shannon had courage. Who else but a man with almost infinite courage would ever think of averaging over all random codes and expect the average code would be good? He knew what he was doing was important and pursued it intensely. Courage, or confidence, is a property to develop in yourself. Look at your successes, and pay less attention to failures than you are usually advised to do in the expression, “Learn from your mistakes.” While playing chess Shannon would often advance his queen boldly into the fray and say, “I ain’t scared of nothing.”


As a 21-year-old master's degree student in electrical engineering at MIT, his 1937 thesis, "A Symbolic Analysis of Relay and Switching Circuits", demonstrated that electrical applications of Boolean algebra could construct any logical numerical relationship,[9] thereby establishing the theory behind digital computing and digital circuits.[10]


Most of the first 16 years of Shannon's life were spent in Gaylord, where he attended public school, graduating from Gaylord High School in 1932. Shannon showed an inclination towards mechanical and electrical things. His best subjects were science and mathematics. At home, he constructed such devices as models of planes, a radio-controlled model boat and a barbed-wire telegraph system to a friend's house a half-mile away.

In Shannon's world, everything was bits. Smoke signals, semaphores, telegraph, television, all channels of information carrying bits.


Shannon said that his wartime insights into communication theory and cryptography developed simultaneously, and that "they were so close together you couldn't separate them".

In 1948, the promised memorandum appeared as "A Mathematical Theory of Communication", an article in two parts in the July and October issues of the Bell System Technical Journal. This work focuses on the problem of how best to encode the message a sender wants to transmit. Shannon developed information entropy as a measure of the information content in a message, which is a measure of uncertainty reduced by the message. In so doing, he essentially invented the field of information theory.

Information theory's fundamental contribution to natural language processing and computational linguistics was further established in 1951, in his article "Prediction and Entropy of Printed English", showing upper and lower bounds of entropy on the statistics of English – giving a statistical foundation to language analysis.

It could be said that without information technology, the LLMs and the strength at which we use Natural Language Processing, couldn't be used. 

Another notable paper published in 1949 is "Communication Theory of Secrecy Systems", a declassified version of his wartime work on the mathematical theory of cryptography, in which he proved that all theoretically unbreakable cyphers must have the same requirements as the one-time pad. He is credited with the introduction of sampling theorem, which he had derived as early as 1940,[58] and which is concerned with representing a continuous-time signal from a (uniform) discrete set of samples. This theory was essential in enabling telecommunications to move from analog to digital transmissions systems in the 1960s and later.

He built a device that could solve the Rubik's Cube puzzle. He built a device that could solve the Rubik's Cube puzzle.


In 1950, Shannon designed and built, with the help of his wife, Betty, a learning machine named Theseus. It consisted of a maze on a surface, through which a mechanical mouse could move. Below the surface were sensors (an electromechanical relay circuit)[65] that followed the path of a mechanical mouse through the maze.[29] The mouse was designed to search through the corridors until it found the target.[65] Having travelled through the maze, the mouse could then be placed anywhere it had been before, and because of its prior experience it could go directly to the target. If placed in unfamiliar territory, it was programmed to search until it reached a known location and then it would proceed to the target, adding the new knowledge to its memory and learning new behavior.[65] After much trial and error, this device would learn the shortest path through the maze, and direct the mechanical mouse through the maze.[29] The pattern of the maze could be changed at will,[29] by rearranging movable partitions.[65] Shannon's mouse appears to have been the first artificial learning device of its kind.[65]


Theseus Maze in MIT Museum
Mazin Gilbert stated that Theseus "inspired the whole field of AI. This random trial and error is the foundation of artificial intelligence."[29]

Other artificial intelligence work
Shannon wrote multiple influential papers on artificial intelligence, such as his 1950 paper titled "Programming a Computer for Playing Chess", and his 1953 paper titled "Computers and Automata".[66] Alongside John McCarthy, he co-edited a book titled Automata Studies, which was published in 1956.[59] The categories in the articles within the volume were influenced by Shannon's own subject headings in his 1953 paper.[59] Shannon shared McCarthy's goal of creating a science of intelligent machines, but also held a broader view of viable approaches in automata studies, such as neural nets, Turing machines, cybernetic mechanisms, and symbolic processing by computer.[59]

Shannon co-organized and participated in the Dartmouth workshop of 1956, alongside John McCarthy, Marvin Minsky and Nathaniel Rochester, and which is considered the founding event of the field of artificial intelligence.[67][26]


In 1950, Shannon designed and built, with the help of his wife, Betty, a learning machine named Theseus. It consisted of a maze on a surface, through which a mechanical mouse could move. Below the surface were sensors (an electromechanical relay circuit)[65] that followed the path of a mechanical mouse through the maze.[29] The mouse was designed to search through the corridors until it found the target.[65] Having travelled through the maze, the mouse could then be placed anywhere it had been before, and because of its prior experience it could go directly to the target. If placed in unfamiliar territory, it was programmed to search until it reached a known location and then it would proceed to the target, adding the new knowledge to its memory and learning new behavior.[65] After much trial and error, this device would learn the shortest path through the maze, and direct the mechanical mouse through the maze.[29] The pattern of the maze could be changed at will,[29] by rearranging movable partitions.[65] Shannon's mouse appears to have been the first artificial learning device of its kind.[65]


Theseus Maze in MIT Museum
Mazin Gilbert stated that Theseus "inspired the whole field of AI. This random trial and error is the foundation of artificial intelligence."[29]

Other artificial intelligence work
Shannon wrote multiple influential papers on artificial intelligence, such as his 1950 paper titled "Programming a Computer for Playing Chess", and his 1953 paper titled "Computers and Automata".[66] Alongside John McCarthy, he co-edited a book titled Automata Studies, which was published in 1956.[59] The categories in the articles within the volume were influenced by Shannon's own subject headings in his 1953 paper.[59] Shannon shared McCarthy's goal of creating a science of intelligent machines, but also held a broader view of viable approaches in automata studies, such as neural nets, Turing machines, cybernetic mechanisms, and symbolic processing by computer.[59]

Shannon co-organized and participated in the Dartmouth workshop of 1956, alongside John McCarthy, Marvin Minsky and Nathaniel Rochester, and which is considered the founding event of the field of artificial intelligence.[67][26]

Historian James Gleick rated the paper as the most important development of 1948, placing the transistor second in the same time period, with Gleick emphasizing that the paper by Shannon was "even more profound and more fundamental" than the transistor.


### Analog : 

- Analog transmission was used before digital simply because it was the natural, direct way to transmit information with the technology available at the time. When you speak, sound creates continuous pressure waves in the air. Early transmission technologies could directly convert these continuous physical phenomena into continuous electrical signals.

- The key insight was that physical phenomena (sound, light, radio waves) could be directly converted to electrical signals that varied continuously:

Telephone (1876): A microphone's diaphragm vibrated with sound waves, directly creating varying electrical currents in a wire. The pattern of the sound wave was preserved in the pattern of the electrical signal.
Radio (early 1900s): Sound could modulate (vary) the amplitude or frequency of radio waves. A radio receiver could detect these variations and convert them back to sound.
Television (1920s-1930s): Light intensity could be converted to varying electrical signals, transmitted, and reconverted to light at the receiving end.

This was achievable with relatively simple components: microphones, amplifiers made from vacuum tubes, antennas, and speakers. No computation was needed—just direct physical transformation of one form of energy to another

https://www.youtube.com/watch?v=0faCad2kKeg - explains how today's cellphone works


### The paper : 



how about I lead with today's generation having the need to communicate everyone at the same time. 



### Introduction

I was born in 2002. I have experienced the comfort of having 1Gb wifi limit a month and the discomfort of having speed less than 300mb per second. What a transition I have been through. Speed limits aside, from 480p video being a great viewing experience to 1080p being the bare minimum. Hardwares, compression algorithms, transmission algorithms - every piece of technology that we have eased into as a basic right, was result of a theorem released in 1948. This theorem, which started an entirely new field of study, was ranked by some as the most important development of the year, stating that it is _even more profound and more fundamental_ than the transistor. This is the story of the man and his beautiful work which makes the possibility of 8.2 billion humans stay connected with each other a reality. Let's dive in.  

### Claude Elwood Shannon

Shannon was born of American parents. He spent his childhood in his hometown, where he finished his highschool at age 16. He showed natural inclination towards mathematics and science. At home, he constructed such devices as models of planes, a radio-controlled model boat and a barbed-wire telegraph system to a friend's house a half-mile away. As a 21 year old, his master thesis, "A Symbolic Analysis of Relay and Switching Circuits", laid foundation to a new approach to digital circuits and digital computing. Prior to this, digital circuits was an art not science. Trial and error was used to design them. Shannon showed boolean algebra could be used to design and optimize these circuits. This paved path for logic gates in electrical circuits. 

In 1948, in a two part series in the Bell System Technical Journal was released "A Mathematical Theory of Communication" was released. This work described the best way to encode a message that a sender wants to transmit. Shannon developed the concept of information entropy - the actual information content in a message or the uncertainty in a message. Essentially, he discovered the field of information theory. The paper was renamed to "The Mathematical Theory of Communication". A subtle but important distinction.

Shannon was involved in puzzles and making machines learn. He built a device that could solve Rubik's cube. He wrote multiple influential papers on artificial intelligence such as "Programming a Computer for Playing Chess" and "Computers and Automata". Shannon designed and built, with the help of his wife, Betty, a learning machine named Theseus. It consisted of a maze on a surface, through which a mechanical mouse could move. A trial and error method at best to make the mouse learn the path - establishing a foundation for others to break through as he did with digital computing. He shared a view of creating intelligent machines and co-organized a workshop back in 1956, which is considered the founding event of the field of Artificial Intelligence of such a kind. Funnily enough, Shannon has received the Shannon Award, named after himself.

It was no luck that Shannon was involved in so many fundamental works that shaped the world. "If it were mainly luck, then great things should not tend to be done repeatedly by the same people." - R. Hamming. He had confidence in himself. Who else but a man with almost infinite courage would ever think of averaging over all random codes and expect the average code would be good? 

### The Communication Prior



